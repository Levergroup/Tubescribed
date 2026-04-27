import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { VSPageClient } from "@/components/VSPageClient";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed vs Tactiq — YouTube Repurposing vs Meeting Captions",
  description: "Tactiq captures Google Meet captions. TubeScribed turns YouTube videos into branded business assets. Compare features, pricing, and use cases.",
  path: "/vs/tactiq",
});

const features = [
  { feature: "YouTube URL → transcript", tubescribed: "✓ Direct paste", competitor: "✗ Not supported" },
  { feature: "Brand voice profiles", tubescribed: "✓ Built-in", competitor: "✗ Not available" },
  { feature: "SOP generator", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Blog post generation", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "15 content output types", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Works without a meeting", tubescribed: "✓ Yes — paste any URL", competitor: "✗ Requires live meeting" },
  { feature: "Starting price", tubescribed: "$19/mo (free run)", competitor: "$12/mo" },
  { feature: "Primary use case", tubescribed: "YouTube content repurposing", competitor: "Google Meet captions" },
];

export default function VsTactiqPage() {
  return (
    <VSPageClient
      competitorName="Tactiq"
      subtitle="Tactiq captures captions from Google Meet, Zoom, and Teams. TubeScribed turns YouTube videos into branded business assets. They solve completely different problems."
      priceCards={[
        {
          label: "TubeScribed",
          price: "$19/mo",
          description: "YouTube content repurposing engine. Brand workspace, 15 output types, SOP generator. Free run — no credit card.",
          highlight: true,
        },
        {
          label: "Tactiq",
          price: "$12/mo",
          description: "Live meeting caption capture for Google Meet, Zoom, and Teams. No YouTube integration, no content studio.",
          highlight: false,
        },
      ]}
      features={features}
      verdictBody="Tactiq is a solid tool for capturing live meeting captions — if you live in Google Meet or Zoom, it does that well. But it has zero YouTube functionality, no brand workspace, no content repurposing, and no SOP generator. It captures meetings. That&apos;s it.<br /><br />TubeScribed is built for a different job: turning YouTube content into business assets. Paste a URL, get a transcript, SOP, blog post, and 15 other formats — in your brand voice, in seconds. Starting at $19/month with a free run to try it first."
      ctaHref={`${APP_URL}/signup`}
    />
  );
}
