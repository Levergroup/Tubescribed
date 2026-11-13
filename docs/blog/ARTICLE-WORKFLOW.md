# TUBESCRIBED-CONTENT-002: Daily article workflow

This workflow takes one keyword from the queue and turns it into one article that goes live on tubescribed.com/blog. It replaces CONTENT-001, the Manus and WordPress pipeline.

A scheduled task runs it once a day. Nobody is watching while it runs, so never stop to ask a question. Make the most reasonable choice, write it down in the log, and keep going. **Publish at most one article per run.**

Files the run uses (paths are relative to the repo root):
- `content/keyword-queue.json`: the queue. Take the lowest `order` whose `status` is `queued`.
- `docs/blog/FACTS.md`: the only product claims an article may make. Read it before you write.
- `scripts/blog/cover.mjs`: makes the cover image.
- `scripts/blog/check-post.mjs`: the quality gate. It must pass before anything is published.
- `content/blog/*.mdx`: the live posts. Study two of them first so the new post matches their structure.
- Publishing log (Google Doc): `15rbLa2kK1FFGdYnCZRpvVUelhlytZdaV531tqRPPpQU`.

---

## Step 1: Pick the keyword
1. Get today's date in America/New_York.
2. In the queue, find the lowest `order` with `status: "queued"`.
3. Skip the keyword, set it to `"skipped"` with a reason in `notes`, and move to the next one if any of these is true:
   - A post in `content/blog/` already targets it, meaning the same main phrase is in that post's title or slug.
   - Step 2 shows that no honest, useful article can be written for it.
   - An open PR already exists on branch `blog/<suggested_slug>` (check with `gh pr list --repo Levergroup/Tubescribed --state open`). That keyword is waiting for review, so go to the next one.
4. Read the keyword's `type`, `secondary`, `free_tool` and `notes`. Follow `notes` exactly.

## Step 2: Research what already ranks (web search)
1. Search the keyword. Open the top 5 results that are real articles, not videos or forum posts.
2. Write down what they all cover. Your article has to cover the same ground.
3. Write down what they **miss**. That gap is where your article adds value.
4. Collect the questions from "People also ask" and related searches. They become your FAQ and your H2/H3 headings.
5. Find at least 2 authoritative external sources to cite: official docs (YouTube Help, Google Search Central), the competitor's own pricing or feature page for comparisons, or real studies. **Never invent statistics, studies, quotes, prices or features.**
6. For alternative or "vs" articles: read every competitor's facts on its own site today and link that page. If a fact can't be confirmed, leave it out.

## Step 3: Make the original part: a real example
Every article needs something nobody else has. Use the TubeScribed connector tools for this:
1. Find a **public** YouTube video that fits the topic: a real tutorial, webinar, coaching call or podcast, 5–30 minutes long, from a reputable channel. Use YouTube search or a web search.
2. Run `transcribe_video` on it. If the reply is "pending", call it again with the same URL until it finishes. The repeat call costs nothing extra.
3. Run `generate_asset` on the transcript, using the asset type that matches the topic. Examples: `brand_sop` for SOP topics, `training_guide` for courses, `email_newsletter` for email, `social_posts` or `x_thread` for social, `key_takeaways` for summaries, `blog_post` for blog topics.
4. In the article, write an H2 called **"Real example: we ran a [length]-minute video through TubeScribed"**, or something close. It must include:
   - The video title, channel and a link (`https://www.youtube.com/watch?v=...`).
   - The length, the credits it used (from FACTS.md: 1 per started 10 minutes plus 1 per output) and what came out.
   - A short excerpt of the real output, at most about 120 words, in a blockquote or list.
   - One honest note on what needed editing or checking afterwards.
5. **Do not make up the output.** If the tools fail twice, drop the example section. Make a different original element instead: a fill-in template, a checklist or a decision table you built yourself. Note the fallback in the log.
6. Respect copyright. Quote at most 2 short lines of the video's own words. Summarize everything else.

## Step 4: Plan the article
- **Focus keyword:** exactly the queue's `keyword`, lowercase is fine. Use the `secondary` phrases naturally in H2s and body text.
- **Search intent decides the format.** For example, "how to" means steps, "alternative" means an honest comparison list, "vs" means a fair side-by-side table, and "best" means a list with real criteria.
- **Title:** 60 characters or fewer, with the focus keyword near the start. Make it specific and concrete (a number, a year or an outcome) with no clickbait. The site adds " | TubeScribed" itself.
- **Slug:** the queue's `suggested_slug`, unless it's over 60 characters.
- **Meta description:** 120–158 characters. Include the focus keyword and a reason to click.
- **Outline:** 5–8 H2s. Put a short, direct answer in the first 2–3 sentences, because that is what wins featured snippets and AI answers. Use a table where it helps comparison.

## Step 5: Write (1,500–2,400 words)
Voice: a smart operator explaining to a busy business owner. Plain English, short paragraphs (1–3 sentences), specific numbers, and second person ("you"). No hype or filler.

Required, in this order:
1. **Opening:** a direct answer to the search query within the first 120 words, with the focus keyword in it.
2. **Body:** H2/H3 headings. The focus keyword appears in at least one H2 and about 4–10 times overall. Never stuff it.
3. **Free tool:** a `<FreeToolCard tool="<free_tool from queue>" />` after the first major section. You may add `note="..."` with one sentence tied to the article.
4. **Real example section** from Step 3.
5. **Mid-article CTA:** `<BlogCTA />`, placed once around the middle.
6. **Comparison or decision help** where it fits: when TubeScribed is **not** the right tool, and what to use instead. This honesty builds trust and rankings.
7. **Next steps:** a `<NextStepsBlock steps={[...]} />` with 3 items. Point to 2 related existing posts or tools, plus signup at `https://app.tubescribed.com/signup`.
8. **Final CTA:** `<BlogCTA variant="final" />` as the very last line.

**Links:**
- At least 3 internal links to `/blog/<existing-slug>` or `/tools/<tool>`. Use descriptive anchor text, never "click here". The pillar page is `/blog/repurpose-youtube-content`; link it when it's relevant.
- At least 2 external links to the authoritative sources from Step 2.

**Front matter:** copy the shape of the existing posts exactly.
- `title`, `meta_description`, `date` (today, YYYY-MM-DD).
- `author: "TubeScribed Team"`, `author_title: "Content Strategy"`.
- `category`: one of Tutorials, Comparisons, Content Strategy, Guides.
- `tags`: 3–5. `excerpt`: 1–2 sentences.
- `featured_image: "/images/blog/<slug>.png"`, `featured_image_alt` containing the keyword.
- `related_posts`: 2 existing slugs.
- `faq`: 3–6 real questions from Step 2. Each answer is 2–4 sentences and stands on its own.

**MDX rules:**
- No `#` H1 in the body.
- No bare `<` characters: write "under 10 minutes", not "<10".
- No `{` outside components.
- Only these components: `BlogCTA`, `NextStepsBlock`, `FreeToolCard`.

## Step 6: Safety check (must pass)
1. Every product claim must be in `docs/blog/FACTS.md`. Delete anything else. This covers features, sources, limits, prices and speed.
2. Every competitor fact must link to the page where you read it today.
3. No medical, legal or financial advice. No guarantees about rankings, traffic, income or results.
4. Nothing on the "Never say" list in FACTS.md.
5. Read the whole article once as a skeptical reader. If any sentence is vague, padded, repeated or unverifiable, cut it or fix it.
6. Run `node scripts/blog/cover.mjs <slug> "<title>" "<eyebrow: How-to | Template | Comparison | Guide | Alternatives>"`.
7. Run `node scripts/blog/check-post.mjs <slug> "<focus keyword>"`. Fix every FAIL and run it again. WARNs are allowed but should be fixed if it's easy. If it still fails after 3 rounds of fixes, **do not publish**. Push the draft to branch `blog/<slug>`, open a PR titled `[needs review] Blog: <title>` that lists the failures, **do not merge**, log `needs_review` and stop.
8. Run `npx tsc --noEmit`. It must pass.

## Step 7: Publish (GitHub → Vercel)
1. Update `content/keyword-queue.json` for this item:
   - `status: "published"`
   - `published_date`: today
   - `url: "https://www.tubescribed.com/blog/<slug>"`
   - `suggested_slug`: the final slug
   - A one-line note in `notes`
2. Create the branch `blog/<slug>` and commit three files: the `.mdx`, the cover `.png` and the queue update. Use the message `Blog: <title>` with no Co-Authored-By or other AI attribution lines. The byline is always "TubeScribed Team".
3. Push and open a PR into `main` with a 3-line description: keyword, word count, real example video.
4. Wait for the Vercel check on the PR's head commit. Poll `gh api repos/Levergroup/Tubescribed/commits/<sha>/status` (and `/check-runs`) every 30 seconds for up to 15 minutes.
   - If it reports success: merge with `gh api -X PUT repos/Levergroup/Tubescribed/pulls/<n>/merge -f merge_method=squash`.
   - If it reports failure or never finishes: don't merge. Log `failed: build`, leave the PR open and stop.
5. After merging, wait about 3 minutes and confirm the live page:
   - Fetch `https://www.tubescribed.com/blog/<slug>` with WebFetch or the Vercel fetch tool.
   - Check that it returns 200, the title appears, and the FreeToolCard text and the YouTube example link are there.
6. A GitHub Action pings IndexNow (Bing and others) automatically on merge. Google finds the post through the sitemap. Nothing else is needed here.

## Step 8: Post-publish (replaces SEO-001, SEO-002, SEO-003 and POST-PUBLISH)
Only run this step if the article is live. Skip it for needs_review and failed runs.

**8a. Indexing (SEO-001 and SEO-002).** Nothing to do by hand:
- Bing, Yandex, Seznam and Naver are notified through IndexNow by the GitHub Action when the merge happens.
- Google finds the post through `https://www.tubescribed.com/sitemap.xml`, which is already submitted in Search Console.
- Google retired its sitemap "ping" in 2023, and its Indexing API is only for job postings, so don't try either.
- Check the GitHub Action result with `gh run list --repo Levergroup/Tubescribed --workflow "IndexNow ping for new blog posts" --limit 1` and record pass or fail in the log.
- Optional, for the owner: open Search Console, inspect the URL and click "Request indexing". Put this reminder in the distribution pack.

**8b. Distribution pack (SEO-003).**
1. Write one Google Doc in Drive folder `15XSfOK17GRQTdeCU808g7b226W1WakKC` (Distribution Packs). Use Drive `create_file` with `contentMimeType: text/markdown`, titled `YYYY-MM-DD – <article title>`.
2. Use the article's real content and the real example. No new claims: FACTS.md applies here too.
3. Every link uses UTMs: `https://www.tubescribed.com/blog/<slug>?utm_source=<channel>&utm_medium=social&utm_campaign=blog-<slug>`. Email uses `utm_medium=email`.
4. Include these sections, in this order:
   1. **Facebook Page post:** 60–120 words, a hook in line 1, the link in the post body, no hashtags or at most 2. Goes on the TubeScribed page.
   2. **LinkedIn post:** 120–220 words for a B2B reader. Open with a short first line, use short lines, put the key takeaway or numbered steps in the post, and the link at the end. Add 3 relevant hashtags.
   3. **X thread:** 5–7 posts, each under 280 characters. Post 1 is the hook, the middle posts carry real value from the article, and the last post holds the link.
   4. **Medium repost note:** import the article on Medium with "Import a story" and the article URL, which sets the canonical link back to tubescribed.com. Give a 1-sentence Medium subtitle and 5 Medium tags.
   5. **Email blurb:** a subject line, preview text and an 80–120 word newsletter section for GetResponse.
   6. **Image:** the cover URL `https://www.tubescribed.com/images/blog/<slug>.png` to attach to the posts.
   7. **Owner checklist:** [ ] FB posted [ ] LinkedIn posted [ ] X posted [ ] Medium imported [ ] Email added [ ] Request indexing in Search Console.
5. Keep it short. Skip Reddit, Quora, TikTok, Pinterest and YouTube Community until the owner turns them on.

**8c. Internal link back.** Optional. If one existing post is closely related, add one natural sentence linking to the new post. Use a separate small PR titled `Blog: link to <slug>`, wait for the Vercel check, then merge. Never change anything else in that post.

## Step 9: Log (replaces SHEET-001)
Append one line to the Google Doc `15rbLa2kK1FFGdYnCZRpvVUelhlytZdaV531tqRPPpQU`, using `insertText` with `endOfSegmentLocation`:
`YYYY-MM-DD | order | keyword | url | published / needs_review / skipped / failed | words, example video, free tool, IndexNow pass/fail, distribution pack link, any WARNs`

The queue in `content/keyword-queue.json` is the source of truth for article status. The Google Sheet is not updated automatically.

Finish with a 3–5 line summary: what was published, the URL, the real example used, any problems and how many keywords are left in the queue. If fewer than 7 are left, say **"Queue low: add keywords"** in the summary.

## Rules
- One article per run.
- Never edit or delete existing posts, except to add one natural internal link to the new post from **one** closely related existing post. That's optional and limited to one sentence.
- Never touch site code, pricing or config.
- Never print, log or commit secrets.
- If anything is unclear, choose the safer option and log it.
