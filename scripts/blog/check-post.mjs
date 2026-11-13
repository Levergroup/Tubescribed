#!/usr/bin/env node
// Quality gate for a new blog post. Usage: node scripts/blog/check-post.mjs <slug> "<focus keyword>"
// Exit code 1 = a hard failure. The post must not be published until every FAIL is fixed.
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const [slug, keywordArg] = process.argv.slice(2);
if (!slug || !keywordArg) {
  console.error('Usage: node scripts/blog/check-post.mjs <slug> "<focus keyword>"');
  process.exit(2);
}
const root = process.cwd();
const file = path.join(root, "content/blog", `${slug}.mdx`);
const fails = [];
const warns = [];
const ok = [];
const fail = (m) => fails.push(m);
const warn = (m) => warns.push(m);
const pass = (m) => ok.push(m);

if (!fs.existsSync(file)) {
  console.error(`FAIL: ${file} not found`);
  process.exit(1);
}
const raw = fs.readFileSync(file, "utf8");
const { data: fm, content } = matter(raw);
const kw = keywordArg.toLowerCase().trim();
const lc = (s) => String(s || "").toLowerCase();
// Allow small word-order-preserving variations: "youtube" vs "YouTube" handled by lowercasing.
const has = (s) => lc(s).includes(kw);

// ---------- front matter ----------
for (const k of ["title", "meta_description", "date", "author", "category", "tags", "excerpt", "featured_image", "featured_image_alt", "related_posts", "faq"]) {
  if (fm[k] === undefined || fm[k] === "" || (Array.isArray(fm[k]) && fm[k].length === 0)) fail(`front matter: missing ${k}`);
}
const dateStr = fm.date instanceof Date ? fm.date.toISOString().slice(0, 10) : String(fm.date || "");
if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) fail(`date must be YYYY-MM-DD (got ${dateStr})`);

const title = String(fm.title || "");
if (title.length > 60) fail(`title is ${title.length} chars (max 60)`);
else pass(`title length ${title.length}`);
if (!has(title)) fail("focus keyword missing from title");
else if (lc(title).indexOf(kw) > title.length / 2) warn("focus keyword is in the second half of the title; move it earlier");

const md = String(fm.meta_description || "");
if (md.length < 120 || md.length > 158) fail(`meta_description is ${md.length} chars (needs 120-158)`);
if (!has(md)) fail("focus keyword missing from meta_description");

const slugWords = slug.split("-");
const kwWords = kw.replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
const missingInSlug = kwWords.filter((w) => !slugWords.includes(w));
if (missingInSlug.length > 1) warn(`slug is missing keyword words: ${missingInSlug.join(", ")}`);
if (slug.length > 60) fail("slug longer than 60 chars");

// ---------- body ----------
const body = content;
const text = body
  .replace(/<[A-Z][\s\S]*?\/>/g, " ")
  .replace(/```[\s\S]*?```/g, " ")
  .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
  .replace(/[#>*_|`-]/g, " ");
const words = text.split(/\s+/).filter(Boolean);
const wc = words.length;
if (wc < 1400) fail(`word count ${wc} (min 1400)`);
else if (wc > 2800) warn(`word count ${wc} is long (target 1500-2400)`);
else pass(`word count ${wc}`);

const first120 = words.slice(0, 120).join(" ");
if (!has(first120)) fail("focus keyword missing from the first 120 words");

const h2s = [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1]);
const h3s = [...body.matchAll(/^###\s+(.+)$/gm)].map((m) => m[1]);
if (h2s.length < 4) fail(`only ${h2s.length} H2 headings (min 4)`);
if (!h2s.concat(h3s).some(has)) fail("focus keyword missing from every H2/H3");
if (/^#\s+/m.test(body)) fail("body contains an H1 (#). The title is the only H1");

const occurrences = lc(text).split(kw).length - 1;
const density = (occurrences * kwWords.length * 100) / Math.max(wc, 1);
if (occurrences < 3) fail(`focus keyword used ${occurrences} times (min 3)`);
else if (density > 2.5) fail(`keyword density ${density.toFixed(2)}% is stuffed (max 2.5%)`);
else pass(`keyword used ${occurrences}x (${density.toFixed(2)}%)`);

// ---------- links ----------
const links = [...body.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]);
const hrefs = [...body.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
const all = links.concat(hrefs);
const blogSlugs = fs.readdirSync(path.join(root, "content/blog")).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(".mdx", ""));
const appDirs = new Set();
const walk = (dir, prefix) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() || e.name.startsWith("[") || e.name.startsWith("(") || e.name === "api") continue;
    const route = `${prefix}/${e.name}`;
    if (fs.existsSync(path.join(dir, e.name, "page.tsx"))) appDirs.add(route);
    walk(path.join(dir, e.name), route);
  }
};
walk(path.join(root, "src/app"), "");
const internal = all.filter((h) => h.startsWith("/") || h.includes("tubescribed.com"));
const external = all.filter((h) => /^https?:\/\//.test(h) && !h.includes("tubescribed.com"));
for (const h of internal) {
  const p = h.replace(/^https?:\/\/(www\.|app\.)?tubescribed\.com/, "").split("#")[0].split("?")[0].replace(/\/$/, "");
  if (h.includes("app.tubescribed.com") || p === "") continue;
  if (p.startsWith("/blog/")) {
    if (!blogSlugs.includes(p.slice(6)) && !appDirs.has(p)) fail(`broken internal link ${h}`);
  } else if (!appDirs.has(p)) fail(`broken internal link ${h}`);
}
const internalBlogOrTools = internal.filter((h) => /\/(blog|tools)\//.test(h));
if (internalBlogOrTools.length < 3) fail(`only ${internalBlogOrTools.length} internal links to /blog or /tools (min 3)`);
if (external.length < 2) fail(`only ${external.length} external links (min 2 authority sources)`);
pass(`${internal.length} internal, ${external.length} external links`);

for (const r of fm.related_posts || []) if (!blogSlugs.includes(r)) fail(`related_posts slug not found: ${r}`);

// ---------- required blocks ----------
const toolIds = ["youtube-transcript-generator", "youtube-to-blog-post", "youtube-to-sop", "youtube-to-email-sequence", "youtube-to-social-captions", "youtube-to-faq", "video-to-training-guide"];
const cards = [...body.matchAll(/<FreeToolCard\s+tool="([^"]+)"/g)].map((m) => m[1]);
if (cards.length === 0) fail("no <FreeToolCard tool=\"...\" /> block");
for (const c of cards) if (!toolIds.includes(c)) fail(`unknown FreeToolCard tool id: ${c}`);
if (!/<BlogCTA\s+variant="final"\s*\/>/.test(body)) fail('missing <BlogCTA variant="final" /> at the end');
if (!/^##\s+.*(real example|we tested|we ran|tested it|example)/im.test(body)) fail('missing the original "Real example" H2 section');
if (!/youtube\.com\/watch\?v=|youtu\.be\//.test(body)) fail("real example section must link the public YouTube video used");

const faq = fm.faq || [];
if (faq.length < 3 || faq.length > 6) fail(`faq has ${faq.length} items (need 3-6)`);
for (const f of faq) if (!f.question || !f.answer) fail("faq item missing question or answer");

// ---------- MDX safety ----------
const comps = [...body.matchAll(/<([A-Z][A-Za-z]*)/g)].map((m) => m[1]);
const allowed = ["BlogCTA", "NextStepsBlock", "FreeToolCard"];
for (const c of comps) if (!allowed.includes(c)) fail(`unsupported MDX component <${c}>`);
const bodyNoCode = body.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, "");
if (/<(?![A-Z/!]|https?:)/.test(bodyNoCode.replace(/<[A-Z][\s\S]*?\/>/g, ""))) fail('a bare "<" will break MDX (write "under" or "less than")');
if (/\{(?![^}]*:)/.test(bodyNoCode.replace(/<[A-Z][\s\S]*?\/>/g, ""))) warn('a "{" in the body may break MDX');

// ---------- claims & placeholders ----------
const banned = [
  [/whisper/i, "Whisper"],
  [/openai/i, "OpenAI (vendor naming)"],
  [/\b\d{2,3}(\.\d+)?\s?% accura/i, "accuracy percentage"],
  [/\btrusted by\b|\bthousands of (users|creators|customers)\b/i, "unverified social proof"],
  [/\bin seconds\b/i, '"in seconds"'],
  [/\bunlimited (credits|videos|transcripts|usage)\b/i, "unlimited usage"],
  [/\b(tiktok|vimeo|zoom recording|loom|upload (an |your )?mp4)\b/i, "non-YouTube source"],
  [/lorem ipsum|\bTODO\b|\[insert|\bTBD\b|XX%|\$XX/i, "placeholder text"],
  [/as an ai( language model)?/i, "AI boilerplate"],
  [/\b(delve|game-chang|in today's fast-paced|unlock the power|revolutioniz)/i, "AI-cliché wording"],
];
for (const [re, name] of banned) if (re.test(raw)) fail(`banned/unsafe phrase: ${name}`);

// ---------- image ----------
const img = String(fm.featured_image || "");
if (img.startsWith("/") && !fs.existsSync(path.join(root, "public", img))) fail(`featured_image file missing: public${img}`);

// ---------- duplicate topic ----------
for (const s of blogSlugs) {
  if (s === slug) continue;
  const other = matter(fs.readFileSync(path.join(root, "content/blog", `${s}.mdx`), "utf8")).data;
  if (lc(other.title) === lc(title)) fail(`same title as existing post ${s}`);
}

console.log(`\nCheck: ${slug}  (keyword: "${keywordArg}")`);
ok.forEach((m) => console.log("  ok    " + m));
warns.forEach((m) => console.log("  WARN  " + m));
fails.forEach((m) => console.log("  FAIL  " + m));
console.log(fails.length ? `\n${fails.length} failure(s). Do not publish.` : "\nAll checks passed.");
process.exit(fails.length ? 1 : 0);
