import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { VSPageClient } from "@/components/VSPageClient";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed vs NoteGPT — Branded Business Assets vs Quick Summaries",
  description: "NoteGPT gives you quick AI summaries. TubeScribed gives you branded transcripts, SOPs, blog posts, and 15 content formats. Compare them here.",
  path: "/vs/notegpt",
});

const features = [
  { feature: "YouTube URL → transcript", tubescribed: "✓ Full accurate transcript", competitor: "Partial summary only" },
  { feature: "Brand voice profiles", tubescribed: "✓ Built-in workspace", competitor: "✗ Not available" },
  { feature: "SOP generator", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Blog post generation", tubescribed: "✓ Full blog post", competitor: "Basic summary" },
  { feature: "15 content output types", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Output sounds like your brand", tubescribed: "✓ Brand Workspace", competitor: "✗ Generic AI output" },
  { feature: "Starting price", tubescribed: "$19/mo (free run)", competitor: "Free / $10/mo" },
  { feature: "Primary use case", tubescribed: "YouTube content repurposing", competitor: "Quick video summarization" },
];

export default function VsNoteGPTPage() {
  return (
    <VSPageClient
      competitorName="NoteGPT"
      subtitle="NoteGPT is a quick AI summarization tool. TubeScribed is a branded content repurposing engine. One gives you bullet points. The other gives you a full content library."
      priceCards={[
        {
          label: "TubeScribed",
          price: "$19/mo",
          description: "Full content repurposing engine. Brand workspace, 15 output types, SOP generator. Free run — no credit card.",
          highlight: true,
        },
        {
          label: "NoteGPT",
          price: "Free / $10/mo",
          description: "AI summarization tool. Quick bullet-point summaries from video content. No brand voice, no content studio.",
          highlight: false,
        },
      ]}
      features={features}
      verdictBody="NoteGPT is handy for quick summaries — if you need bullet points from a video in 30 seconds, it works. But it doesn&apos;t produce publication-ready transcripts, it has no brand voice system, and it can&apos;t generate blog posts, SOPs, emails, or any of the 15 output types TubeScribed includes.<br /><br />If you&apos;re repurposing YouTube content for business use — writing blog posts, building SOPs, creating email sequences — TubeScribed is the right tool. Starting at $19/month with a free run to test it first."
      ctaHref={`${APP_URL}/signup`}
    />
  );
}
