#!/usr/bin/env node
// Adds a relevant Pexels stock photo to blog posts that have `photo_query` but no `thumbnail`.
// Runs in GitHub Actions (needs the PEXELS_API_KEY secret). Usage: node scripts/blog/fetch-photo.mjs [slug ...]
// Pexels licence: free to use and self-host; we credit the photographer and link Pexels on the post.
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const KEY = process.env.PEXELS_API_KEY;
if (!KEY) {
  console.log("PEXELS_API_KEY not set; skipping photos.");
  process.exit(0);
}
const root = process.cwd();
const blogDir = path.join(root, "content/blog");
const imgDir = path.join(root, "public/images/blog");
const only = process.argv.slice(2);

// Photo IDs already used, so two posts never share a photo.
const used = new Set(
  fs.readdirSync(imgDir).map((f) => (f.match(/pexels-(\d+)\./) || [])[1]).filter(Boolean)
);

const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
let changed = 0;
for (const f of files) {
  const slug = f.replace(/\.mdx$/, "");
  if (only.length && !only.includes(slug)) continue;
  const file = path.join(blogDir, f);
  const raw = fs.readFileSync(file, "utf8");
  const { data } = matter(raw);
  if (!data.photo_query || data.thumbnail) continue;

  const queries = [data.photo_query, ...(data.photo_query_fallback ? [data.photo_query_fallback] : []), "laptop work desk"];
  let photo = null;
  for (const q of queries) {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&orientation=landscape&size=large&per_page=15`;
    const res = await fetch(url, { headers: { Authorization: KEY } });
    if (!res.ok) {
      console.error(`${slug}: Pexels search failed (${res.status}) for "${q}"`);
      continue;
    }
    const json = await res.json();
    photo = (json.photos || []).find((p) => !used.has(String(p.id)) && p.width >= 1600);
    if (photo) {
      console.log(`${slug}: "${q}" -> pexels ${photo.id} by ${photo.photographer}`);
      break;
    }
  }
  if (!photo) {
    console.error(`${slug}: no photo found, leaving the default thumbnail`);
    continue;
  }

  const imgRes = await fetch(photo.src.landscape); // 1200x627 crop
  if (!imgRes.ok) {
    console.error(`${slug}: download failed (${imgRes.status})`);
    continue;
  }
  const name = `${slug}-pexels-${photo.id}.jpeg`;
  fs.writeFileSync(path.join(imgDir, name), Buffer.from(await imgRes.arrayBuffer()));
  used.add(String(photo.id));

  // Insert the fields into the front matter without reformatting the rest of the file.
  const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const lines = [
    `thumbnail: "/images/blog/${name}"`,
    `thumbnail_credit: "${esc(photo.photographer)}"`,
    `thumbnail_credit_url: "${esc(photo.photographer_url || photo.url)}"`,
  ].join("\n");
  const updated = raw.replace(/^(photo_query:.*)$/m, `$1\n${lines}`);
  if (updated === raw) {
    console.error(`${slug}: could not place front matter lines`);
    continue;
  }
  fs.writeFileSync(file, updated);
  changed++;
}
console.log(`Photos added: ${changed}`);
