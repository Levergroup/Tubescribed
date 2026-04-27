import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { VSPageClient } from "@/components/VSPageClient";
import { COMPARISON_FEATURES_OTTER, APP_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed vs Otter.ai — YouTube Repurposing vs Meeting Transcription",
  description: "Otter.ai is built for live meeting notes. TubeScribed is built for turning YouTube content into branded business assets. See the full comparison.",
  path: "/vs/otter-ai",
});

export default function VsOtterPage() {
  return (
    <VSPageClient
      competitorName="Otter.ai"
      subtitle="Otter.ai is built for live meeting transcription. TubeScribed is built for turning YouTube content into branded business assets. Different tools. Different jobs."
      priceCards={[
        {
          label: "TubeScribed",
          price: "$19/mo",
          description: "Focused on YouTube content repurposing. Brand workspace, 15 output types, SOP generator. Free run — no credit card.",
          highlight: true,
        },
        {
          label: "Otter.ai",
          price: "$17/mo",
          description: "Live meeting transcription and notes. No YouTube integration, no content repurposing, no brand workspace.",
          highlight: false,
        },
      ]}
      features={COMPARISON_FEATURES_OTTER}
      verdictBody="If you record meetings, Otter.ai is great. If you create YouTube content and want to repurpose it into business assets, TubeScribed is built exactly for that. Otter.ai doesn&apos;t connect to YouTube directly, has no brand workspace, no SOP generator, and no content output studio. It&apos;s a meeting tool.<br /><br />TubeScribed is a content repurposing machine — starting at $19/month, with a free run to try it first. No credit card."
      ctaHref={`${APP_URL}/signup`}
    />
  );
}
