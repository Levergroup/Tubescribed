import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { VSPageClient } from "@/components/VSPageClient";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed vs ChatGPT for YouTube Transcription — Why ChatGPT Can't Do This",
  description: "ChatGPT cannot access YouTube URLs. TubeScribed was built to solve that problem — and everything after it. Here's how they compare.",
  path: "/vs/chatgpt",
});

const features = [
  { feature: "Access YouTube URLs directly", tubescribed: "✓ Yes — paste any URL", competitor: "✗ Cannot access YouTube" },
  { feature: "Accurate transcription", tubescribed: "✓ OpenAI Whisper", competitor: "✗ No transcript access" },
  { feature: "Brand voice profiles", tubescribed: "✓ Built-in workspace", competitor: "✗ Requires manual prompting every time" },
  { feature: "SOP generator", tubescribed: "✓ One click", competitor: "Possible with manual prep work" },
  { feature: "15 content output types", tubescribed: "✓ Built-in, no prompting", competitor: "Possible but requires setup each time" },
  { feature: "Time to first output", tubescribed: "8 seconds", competitor: "15–30 minutes of manual prep" },
  { feature: "Consistent brand output", tubescribed: "✓ Automatic via workspace", competitor: "✗ Requires re-prompting every session" },
  { feature: "Starting price", tubescribed: "$19/mo (free run)", competitor: "$20/mo (ChatGPT Plus)" },
];

export default function VsChatGPTPage() {
  return (
    <VSPageClient
      competitorName="ChatGPT"
      subtitle="ChatGPT is a powerful AI assistant. But it cannot access YouTube URLs — which is the entire first step. TubeScribed was built to solve that problem, and everything after it."
      features={features}
      verdictBody="ChatGPT is excellent at many things. YouTube transcription isn&apos;t one of them — because it literally cannot access YouTube URLs. If you paste a YouTube link into ChatGPT, it will either refuse or hallucinate content it never saw. You&apos;d still have to manually find captions, clean them, copy them in, write a prompt, and repeat for every output format.<br /><br />TubeScribed handles the entire pipeline in a single paste: YouTube access, transcription via OpenAI Whisper, Claude AI cleanup, brand voice application, and 15 content outputs. Starting at $19/month with a free run to try it first."
      ctaHref={`${APP_URL}/signup`}
    />
  );
}
