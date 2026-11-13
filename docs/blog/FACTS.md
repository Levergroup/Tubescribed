# TubeScribed: facts an article may state

Articles may only make product claims that are on this list. If a claim isn't here, leave it out or describe it more generally. Update this file whenever the product changes.

## What it does
- Paste a public YouTube URL → TubeScribed transcribes the **audio** (works with or without captions), then turns the transcript into business content.
- If audio recognition fails, it falls back to the video's captions and labels the result as caption-based.
- Videos up to **90 minutes**.
- 15 output types: Blog Post, Email Newsletter, Social Posts, Brand SOP, Content Ideas, X Thread, Show Notes, FAQ Document, Key Takeaways, Slide Outline, Sales Script, Training Guide, Case Study, Press Release, Ad Copy.
- Brand workspaces: save tone, terminology and style so outputs match a brand voice (Pro: 3 workspaces, Agency: unlimited).
- Download as .txt.
- Works inside Claude as a connector (MCP) and through a developer API: /integrations/claude and /developers.

## Pricing (check src/lib/constants.ts before quoting; it is the source of truth)
- Free run: new users get free credits, no credit card.
- Pro $19/month: 30 credits. Agency $49/month: 100 credits, 5 team members.
- 1 credit = up to 10 minutes of video (rounded up) **or** 1 AI output. 4-min video = 1, 23-min = 3, 60-min = 6, 90-min = 9.
- Credit packs never expire: 10 for $8, 25 for $18, 50 for $32.
- Credits are only charged after success; failed work is not charged.

## Free tools (use the id in `<FreeToolCard tool="..." />`)
| id | page |
|---|---|
| youtube-transcript-generator | /tools/youtube-transcript-generator |
| youtube-to-blog-post | /tools/youtube-to-blog-post |
| youtube-to-sop | /tools/youtube-to-sop |
| youtube-to-email-sequence | /tools/youtube-to-email-sequence |
| youtube-to-social-captions | /tools/youtube-to-social-captions |
| youtube-to-faq | /tools/youtube-to-faq |
| video-to-training-guide | /tools/video-to-training-guide |

## Never say
- "Whisper", "OpenAI transcription", or name any transcription vendor.
- "Unlimited" anything except Agency brand workspaces.
- "In seconds" for transcription of long videos (a 60-minute video takes a few minutes).
- Accuracy percentages, user counts, revenue, testimonials, case-study results or customer names. None are verified.
- That TubeScribed works with private videos, Zoom/Loom files, uploaded MP4s, TikTok, Vimeo or any non-YouTube source.
- Competitor facts (features, prices, limits) that you did not read on the competitor's own site **today**. Link the source page.
