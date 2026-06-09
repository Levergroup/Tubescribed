import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AvatarLandingPage } from "@/components/AvatarLandingPage";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for YouTube Creators — Turn Every Video Into a Blog Post Automatically",
  description:
    "Every YouTube video you make is also a blog post, email, and week of social content. TubeScribed extracts it all automatically — in your brand voice — in under 2 minutes.",
  path: "/for/content-creators",
});

export default function ForContentCreatorsPage() {
  return (
    <>
      <AvatarLandingPage
        category="For YouTube Creators"
        heroHeadline="Every YouTube Video You Make Is Also a Blog Post."
        heroHeadlineGradient="You Just Haven't Extracted It Yet."
        heroSub="TubeScribed turns any YouTube URL into a publication-ready blog post, email sequence, and social content — in your brand voice — in under 2 minutes."
        socialProof="Used by 500+ YouTube creators to repurpose video content automatically"
        ctaHref="https://app.tubescribed.com/signup"
        problems={[
          "Your videos are invisible on Google — creators who also publish blog posts get 3x more total reach from the same video.",
          "Manual repurposing takes 3–4 hours per video — you're either skipping it entirely or burning out trying to keep up.",
          "ChatGPT can't access your YouTube videos — you'd still have to copy captions, clean them, prompt the AI, and reformat everything manually.",
        ]}
        showcaseVideoTitle="How I Built a $50K/Year Content Business from YouTube"
        benefits={[
          "Publish 3x more content without creating anything new",
          "Every video becomes 15 content assets automatically",
          "Brand voice stays consistent across every output",
          "Your YouTube library becomes an SEO content machine",
          "No VA, no manual editing, no extra hours",
          "First transcript free — see the magic before spending a cent",
        ]}
        testimonial={{
          quote:
            "I used to spend 3–4 hours every week turning YouTube content into blog posts and emails. TubeScribed does it in seconds. I honestly can't believe I waited this long.",
          name: "Marcus T.",
          role: "YouTube Creator & Course Builder",
        }}
        faqs={[
          {
            q: "Will the blog post sound like me or generic AI?",
            a: "Set up your Brand Workspace with your writing style, tone, audience, and a few examples of your voice — and every output will sound like you wrote it. Without a Brand Workspace, you'll get a clean professional draft that needs light editing (most creators spend 5–10 minutes personalizing it). Your first run is free so you can test this before spending anything.",
          },
          {
            q: "What types of YouTube videos work best?",
            a: "Tutorial videos, educational walkthroughs, 'how I did X' content, and topic explainers produce the strongest outputs. Videos with clear structure and distinct points convert best. Long-form conversational content still transcribes accurately but may need a bit more editing on the output side. Current processing limit is approximately 25–30 minutes per video.",
          },
          {
            q: "How long does it take to process a 30-minute video?",
            a: "About 60–90 seconds. TubeScribed extracts the audio, runs it through OpenAI Whisper for transcription, then Claude AI cleans and structures the output — removing filler words, adding punctuation, and formatting it into sections with timestamps. From paste to ready transcript, it's typically under 2 minutes.",
          },
          {
            q: "Can I edit the output before publishing?",
            a: "Yes — every output is fully editable text. Most creators make light edits in under 10 minutes: adding a personal anecdote, inserting internal links, or tweaking a sentence to sound more natural. The heavy lifting — structure, voice matching, formatting — is already done for you.",
          },
        ]}
        finalCtaLine="Your next video is already a blog post, email, and week of social content. You just haven't clicked yet."
      />
      <section className="bg-gray-50 border-t border-gray-200 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-syne font-semibold text-gray-900 mb-4">Free tools for content creators:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="/tools/youtube-transcript-generator" className="text-[#FF3B30] text-sm font-semibold hover:underline">YouTube Transcript Generator →</a>
            <a href="/tools/youtube-to-blog-post" className="text-[#FF3B30] text-sm font-semibold hover:underline">YouTube to Blog Post →</a>
            <a href="/tools/youtube-to-social-captions" className="text-[#FF3B30] text-sm font-semibold hover:underline">YouTube to Social Captions →</a>
          </div>
        </div>
      </section>
    </>
  );
}
