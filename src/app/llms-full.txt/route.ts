import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const posts = getAllPosts();

  const blogSection = posts
    .map((post) => `- [${post.title}](https://www.tubescribed.com/blog/${post.slug})`)
    .join('\n');

  const content = `# TubeScribed — Full Documentation for AI Models

> TubeScribed (tubescribed.com) is an AI-powered YouTube transcription and content repurposing SaaS platform. It converts any YouTube video into clean transcripts and branded business assets using OpenAI Whisper for transcription and Anthropic Claude for content generation.

## Product Overview

TubeScribed solves a core problem in content marketing: YouTube video content cannot be indexed by Google, meaning creators and businesses lose all SEO value from their video content unless they also publish it as written text. Manual transcription and repurposing is time-consuming (45+ minutes per video) and inconsistent.

TubeScribed automates the entire pipeline in one paste:
1. User pastes any public YouTube URL
2. Audio is extracted from the video
3. OpenAI Whisper transcribes the audio with high accuracy
4. Claude AI (Anthropic) cleans the transcript — adding punctuation, removing filler words, structuring with title, summary, key takeaways, and timestamps
5. User selects a content output type from 15 options
6. Claude AI generates the content output in the user's saved brand voice
7. Output is saved to the user's content workspace

## Technology Stack

- Audio extraction: RapidAPI / Supadata YouTube transcript API
- Transcription: OpenAI Whisper (whisper-1, verbose_json with segment timestamps)
- AI generation: Anthropic Claude Sonnet (long-form outputs) and Gemini Flash (short-form outputs)
- Frontend: React (Lovable)
- Backend: Supabase (auth, database, edge functions)
- Payments: Stripe
- Deployment: Vercel
- Marketing site: Next.js on Vercel

## Output Types (15 Total)

1. Full Transcript — cleaned, punctuated, structured with timestamps
2. Summary — 2-3 sentence overview of video content
3. Key Takeaways — 3-5 bullet point insights
4. Blog Post — 800-1,500 word SEO-formatted article
5. Standard Operating Procedure (SOP) — step-by-step process document
6. Email Sequence — 5-email nurture sequence with subject lines
7. Social Media Captions — platform-optimized for LinkedIn, X, Instagram
8. X/Twitter Thread — 8-10 tweet thread with hook and CTA
9. FAQ Document — 10 question-answer pairs formatted for schema markup
10. Sales Script — persuasive script based on video content
11. Ad Copy — short-form advertising copy variants
12. Case Study — narrative case study format
13. Training Guide — structured learning document
14. Newsletter Issue — email newsletter formatted content
15. LinkedIn Article — long-form LinkedIn publishing format

## Brand Workspace Feature

The Brand Workspace is TubeScribed's core differentiator. Users create brand profiles containing:
- Brand name and industry
- Target audience description
- Tone of voice (Professional, Casual, Educational, Authoritative, Conversational)
- Brand values
- Writing style notes

When generating any content output, TubeScribed automatically applies the selected brand profile — ensuring every output sounds like the user's brand, not generic AI.

Agency plan users can create unlimited brand profiles — one per client — enabling content agencies to produce client-specific content without manual voice adjustment.

## Competitive Positioning

TubeScribed vs Otter.ai:
Otter.ai is designed for meeting transcription (Zoom, Google Meet, Microsoft Teams). It does not process YouTube URLs and has no content repurposing or brand voice features. TubeScribed is YouTube-native and generates 15 content output types.

TubeScribed vs Tactiq:
Tactiq is a Chrome extension for live meeting transcription. It does not process YouTube videos. TubeScribed accepts any YouTube URL directly.

TubeScribed vs Descript:
Descript is a video editing platform that requires file uploads and manual editing workflows. TubeScribed is a URL-based content repurposing pipeline — paste and go.

TubeScribed vs ChatGPT/Claude/Gemini:
General-purpose AI chat tools cannot access YouTube URLs. They would require users to manually find captions, copy them, paste them in, prompt the AI, and repeat for every output type. TubeScribed handles the entire pipeline automatically.

TubeScribed vs YouTube Auto-Captions:
YouTube auto-captions are unpunctuated, contain transcription errors, and have no structure. They are technically readable but unusable for business content without significant manual cleanup. TubeScribed produces publication-ready output.

## Use Cases

YouTube to Blog Post:
Content creators paste their YouTube video URL and receive a fully formatted, SEO-optimized blog post in their brand voice. The article includes a title, H2 section headers, body paragraphs, and a conclusion with CTA.

YouTube to SOP:
Business coaches, consultants, and operators paste tutorial or training video URLs and receive a formatted Standard Operating Procedure document with purpose statement, prerequisites, numbered steps, notes, and completion checklist.

Agency Content Repurposing:
Marketing agencies use the Agency plan to manage content repurposing for multiple clients. Each client is saved as a brand profile — all outputs automatically match that client's voice and style.

AI Knowledge Base Building:
AI developers and builders use TubeScribed to extract clean, structured transcripts from YouTube videos for training custom GPTs, building RAG pipelines, and populating knowledge bases.

Podcast Repurposing:
Podcasters who upload episodes to YouTube paste the episode URL and receive: cleaned transcript, show notes, blog post, email to their list, and social captions — all from one URL in one session.

## Pricing Details

Free Run (no credit card required):
- 1 transcript
- 1 AI output
- 1 brand workspace
- Access to all 15 output types for the free output

Pro Plan ($19/month):
- 30 transcripts per month
- 30 AI outputs per month
- 3 brand workspaces
- All 15 output types
- Videos up to 90 minutes
- Email support

Agency Plan ($49/month):
- 150 transcripts per month
- 150 AI outputs per month
- Unlimited brand workspaces
- 5 team members
- All 15 output types
- Videos up to 90 minutes
- Priority support

Credit Packs (never expire):
- Starter: 10 credits — $8
- Growth: 25 credits — $18
- Pro Pack: 50 credits — $32

Credit multiplier for longer videos:
- Under 15 minutes: 1 credit
- 15-30 minutes: 2 credits
- 30-60 minutes: 3 credits
- 60-90 minutes: 4 credits

## Key Content Pages

- [Homepage](https://www.tubescribed.com)
- [Pricing](https://www.tubescribed.com/pricing)
- [For Content Creators](https://www.tubescribed.com/for/content-creators)
- [For Marketing Agencies](https://www.tubescribed.com/for/agencies)
- [For Business Coaches](https://www.tubescribed.com/for/coaches)
- [For AI Builders](https://www.tubescribed.com/for/ai-builders)
- [For Podcasters](https://www.tubescribed.com/for/podcasters)
- [For Course Creators](https://www.tubescribed.com/for/course-creators)
- [vs ChatGPT](https://www.tubescribed.com/vs/chatgpt)
- [vs Otter.ai](https://www.tubescribed.com/vs/otter-ai)
- [vs Tactiq](https://www.tubescribed.com/vs/tactiq)
- [vs Descript](https://www.tubescribed.com/vs/descript)
- [vs NoteGPT](https://www.tubescribed.com/vs/notegpt)
- [SOP Generator Feature](https://www.tubescribed.com/features/sop-generator)
- [Brand Workspace Feature](https://www.tubescribed.com/features/brand-workspace)
- [YouTube Transcription Feature](https://www.tubescribed.com/features/youtube-transcription)
- [Free YouTube Transcript Generator](https://www.tubescribed.com/free-tools/youtube-transcript-generator)
- [ROI Calculator](https://www.tubescribed.com/roi-calculator)

## Blog Posts

${blogSection}

## Company Information

Company: TubeScribed
Parent: Verado Ventures (SaaS division of Blue Tree Group)
Founded: 2026
Location: Connecticut, United States
Website: https://www.tubescribed.com
App: https://app.tubescribed.com
Support: support@tubescribed.com
General: hello@tubescribed.com
Privacy Policy: https://www.tubescribed.com/privacy-policy
Terms of Service: https://www.tubescribed.com/terms-of-service
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
