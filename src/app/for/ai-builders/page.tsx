import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { UseCasePageClient } from "@/components/UseCasePageClient";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for AI Builders — Clean YouTube Transcripts for Agents and RAG",
  description: "Get structured, punctuated transcripts from any YouTube URL. Perfect for AI agents, custom GPTs, RAG pipelines, and knowledge bases. No manual prep.",
  path: "/for/ai-builders",
});

const data = {
  category: "For AI Builders",
  headline: "Clean Transcripts.",
  headlineGradient: "Ready for Any Pipeline.",
  subheadline: "AI agents, custom GPTs, and RAG systems need structured text — not raw caption walls. TubeScribed gives you publication-ready transcripts with punctuation, segments, and summaries included.",
  painHeading: "The transcript prep problem",
  painPoints: [
    "YouTube auto-captions are unusable for AI pipelines — no punctuation, no structure",
    "Manually cleaning captions before feeding them to your agent wastes hours",
    "ChatGPT and Claude can't fetch YouTube URLs — you're always the bottleneck",
    "Raw caption data produces poor AI output quality",
  ],
  featureCallout: {
    icon: "Wand2" as const,
    heading: "Structured output. Ready to paste.",
    body: "TubeScribed runs YouTube audio through OpenAI Whisper for accurate transcription, then Claude AI structures the output — adding punctuation, fixing errors, removing filler words, and producing a title, summary, key takeaways, and timestamped segments.",
    subBody: "The result is a clean document you can paste directly into any AI tool, RAG pipeline, vector database, or knowledge base — no prep work, no cleaning, no prompting required.",
    note: "AI builders use TubeScribed as the first step in their YouTube-to-knowledge-base pipelines.",
  },
  outcomeHeading: "What AI builders do with TubeScribed",
  outcomes: [
    "Feed clean, structured transcripts directly into RAG pipelines",
    "Populate knowledge bases from YouTube channels automatically",
    "Use transcripts as context for custom GPTs and AI agents",
    "Skip manual caption cleaning — TubeScribed handles it in 8 seconds",
  ],
  ctaHref: "https://app.tubescribed.com/signup",
};

export default function ForAIBuildersPage() {
  return <UseCasePageClient {...data} />;
}
