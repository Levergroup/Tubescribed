#!/usr/bin/env node
// Renders a 1200x630 branded cover to public/images/blog/<slug>.png
// Usage: node scripts/blog/cover.mjs <slug> "<title>" "<eyebrow e.g. How-to>"
import fs from "fs";
import path from "path";
import { createRequire } from "module";

const [slug, title, eyebrow = "Guide"] = process.argv.slice(2);
if (!slug || !title) {
  console.error('Usage: node scripts/blog/cover.mjs <slug> "<title>" "<eyebrow>"');
  process.exit(2);
}
let playwright;
for (const p of [process.cwd() + "/", "/opt/npm-tools/", "/usr/local/lib/node_modules/", "/usr/lib/node_modules/"]) {
  try {
    playwright = createRequire(p + "noop.js")("playwright");
    break;
  } catch {}
}
if (!playwright) {
  console.error("playwright not found");
  process.exit(1);
}
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const size = title.length > 70 ? 54 : title.length > 50 ? 62 : 70;
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;font-family:Inter,"DejaVu Sans",sans-serif;background:linear-gradient(135deg,#0D1520 0%,#131B28 55%,#1E2A3A 100%);color:#E8EDF2;position:relative;overflow:hidden}
.glow{position:absolute;right:-160px;top:-160px;width:620px;height:620px;border-radius:50%;background:radial-gradient(circle,rgba(255,59,48,.35),rgba(255,140,66,.12) 45%,transparent 70%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(139,163,184,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(139,163,184,.06) 1px,transparent 1px);background-size:48px 48px}
.wrap{position:absolute;left:80px;right:120px;top:84px}
.eyebrow{display:inline-block;font-size:24px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#fff;background:linear-gradient(135deg,#FF3B30,#FF8C42);padding:10px 18px;border-radius:10px}
h1{margin-top:34px;font-size:${size}px;line-height:1.08;font-weight:900;letter-spacing:-1px}
.foot{position:absolute;left:80px;right:80px;bottom:56px;display:flex;justify-content:space-between;align-items:center}
.brand{font-size:34px;font-weight:900}.brand span{color:#FF8C42}
.url{font-size:24px;font-weight:700;color:#8BA3B8}
.bar{position:absolute;left:0;right:0;bottom:0;height:10px;background:linear-gradient(90deg,#FF3B30,#FF8C42)}
</style></head><body><div class="grid"></div><div class="glow"></div>
<div class="wrap"><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1></div>
<div class="foot"><div class="brand">Tube<span>Scribed</span></div><div class="url">tubescribed.com/blog</div></div><div class="bar"></div></body></html>`;

const out = path.join(process.cwd(), "public/images/blog", `${slug}.png`);
fs.mkdirSync(path.dirname(out), { recursive: true });
const browser = await playwright.chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html);
await page.screenshot({ path: out });
await browser.close();
console.log("cover written:", path.relative(process.cwd(), out));
