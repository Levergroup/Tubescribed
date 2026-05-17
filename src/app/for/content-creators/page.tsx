import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { UseCasePageClient } from "@/components/UseCasePageClient";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for YouTube Creators — Repurpose Every Video Automatically",
  description: "Turn every YouTube video into a blog post, email, SOP, and social content automatically. TubeScribed repurposes your content in 8 seconds, in your brand voice.",
  path: "/for/content-creators",
});

const data = {
  category: "For YouTube Creators",
  headline: "You're Already Creating the Content.",
  headlineGradient: "Start Using It.",
  subheadline: "Every video you post is a blog post, email, and SOP waiting to happen. TubeScribed unlocks all of it in 8 seconds — in your brand voice.",
  painHeading: "Sound familiar?",
  painPoints: [
    "I post 3 videos a week but my blog has one post from 6 months ago",
    "My best content is buried in a YouTube video nobody will watch twice",
    "I spent 4 hours this week manually turning a video into a blog post",
    "I know I should repurpose content but I never have time",
  ],
  featureCallout: {
    icon: "Grid3x3" as const,
    heading: "15 content formats from every video",
    body: "Blog posts, email sequences, social captions, LinkedIn posts, YouTube descriptions, newsletters, SOPs, training guides — all generated from one URL paste. In your brand voice. In seconds.",
    subBody: "Set up your Brand Workspace once with your tone, audience, and style. Every output TubeScribed generates matches automatically — no prompting, no editing.",
    note: "Marcus is a 32-year-old YouTube creator and course builder. Here's what changed.",
  },
  outcomeHeading: "With TubeScribed, publish 3x more without making more videos",
  outcomes: [
    "Every video becomes a blog post, email, and SOP — automatically",
    "Your YouTube content works across every platform and channel",
    "8 seconds per transcript instead of 4 hours of manual editing",
    "Your brand voice stays consistent across every output, every time",
  ],
  ctaHref: "https://app.tubescribed.com/signup",
  showcaseVideoTitle: "How I Built a $50K/Year Content Business from YouTube",
};

export default function ForContentCreatorsPage() {
  return <UseCasePageClient {...data} />;
}
