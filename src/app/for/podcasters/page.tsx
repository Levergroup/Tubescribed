import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { UseCasePageClient } from "@/components/UseCasePageClient";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for Podcasters — Turn Podcast Episodes Into Written Content",
  description: "If your podcast is on YouTube, TubeScribed turns every episode into show notes, blog posts, email newsletters, and social content — automatically.",
  path: "/for/podcasters",
});

const data = {
  category: "For Podcasters",
  headline: "Your Podcast Is Already a",
  headlineGradient: "Content Machine.",
  subheadline: "If your podcast episodes are on YouTube, TubeScribed turns every episode into show notes, a blog post, an email, and social content — in seconds.",
  painHeading: "The podcast repurposing problem",
  painPoints: [
    "You publish a great episode then it disappears — no written content to show for it",
    "Show notes take 2 hours to write from scratch every week",
    "Your podcast SEO is zero because there's no text for Google to index",
    "Repurposing feels like a second job on top of recording",
  ],
  featureCallout: {
    icon: "FileText" as const,
    heading: "From podcast to written content in 8 seconds",
    body: "Paste your YouTube podcast URL. TubeScribed produces a clean, accurate transcript with timestamps, then generates show notes, a full blog post, an email newsletter, and social captions — all in your brand voice.",
    subBody: "Set up your Brand Workspace once with your podcast's tone and style. Every episode gets consistent, on-brand written content without you touching a keyboard.",
    note: "Podcasters using TubeScribed publish 4x more written content from the same recording time.",
  },
  outcomeHeading: "What podcasters get with TubeScribed",
  outcomes: [
    "Professional show notes generated from every episode automatically",
    "Blog posts from every episode — indexed by Google, driving organic traffic",
    "Email newsletter drafts ready in seconds, not hours",
    "Social captions and LinkedIn posts from every episode",
  ],
  ctaHref: "https://app.tubescribed.com/signup",
};

export default function ForPodcastersPage() {
  return <UseCasePageClient {...data} />;
}
