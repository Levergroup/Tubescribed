import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { VSPageClient } from "@/components/VSPageClient";
import { COMPARISON_FEATURES_DESCRIPT, APP_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed vs Descript — YouTube Content Repurposing vs Video Editing",
  description: "Descript is a video editor with transcription. TubeScribed is a content repurposing machine. See what each tool is actually built for.",
  path: "/vs/descript",
});

export default function VsDescriptPage() {
  return (
    <VSPageClient
      competitorName="Descript"
      subtitle="Descript is a video editor with transcription. TubeScribed is a content repurposing machine. Different tools. Different jobs."
      priceCards={[
        {
          label: "TubeScribed",
          price: "$19/mo",
          description: "Focused on YouTube content repurposing. Brand workspace, 15 output types, SOP generator. Free run — no credit card.",
          highlight: true,
        },
        {
          label: "Descript",
          price: "$24–48/mo",
          description: "Full video editing suite with transcription. Great for editing video content. Not built for YouTube repurposing or business assets.",
          highlight: false,
        },
      ]}
      features={COMPARISON_FEATURES_DESCRIPT}
      verdictBody="Descript is a powerful video editing tool — if you need to cut video, remove silences, and publish edited content, it does that well. But it&apos;s a $24–48/month video editor with transcription baked in. It has no brand workspace, no SOP generator, no 15-output content studio, and it requires you to upload video files.<br /><br />TubeScribed connects directly to YouTube. No uploads. No video editing. Just content repurposing — starting at $19/month, with a free run to try it first. No credit card."
      ctaHref={`${APP_URL}/signup`}
    />
  );
}
