import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { VSPageClient } from "@/components/VSPageClient";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed vs YouTube Auto-Captions — Why Auto-Captions Aren't Enough",
  description: "YouTube auto-captions are unformatted, error-filled walls of text. TubeScribed turns the same audio into a clean, structured, publication-ready transcript.",
  path: "/vs/youtube-captions",
});

const features = [
  { feature: "Punctuation", tubescribed: "✓ Full punctuation", competitor: "✗ None" },
  { feature: "Error correction", tubescribed: "✓ OpenAI Whisper + Claude AI", competitor: "✗ Raw machine errors" },
  { feature: "Filler word removal", tubescribed: "✓ Automatic", competitor: "✗ All filler included" },
  { feature: "Structured formatting", tubescribed: "✓ Title, summary, takeaways, timestamps", competitor: "✗ Unformatted wall of text" },
  { feature: "Publication ready", tubescribed: "✓ Yes", competitor: "✗ Requires hours of editing" },
  { feature: "Brand voice application", tubescribed: "✓ Built-in workspace", competitor: "✗ Not possible" },
  { feature: "Content output types", tubescribed: "✓ 15 formats (blog, email, SOP...)", competitor: "✗ Text only" },
  { feature: "Cost", tubescribed: "$19/mo (free run)", competitor: "Free (but requires hours to clean)" },
];

export default function VsYoutubeCaptionsPage() {
  return (
    <VSPageClient
      competitorName="YouTube Auto-Captions"
      subtitle="YouTube's automatic captions are free — but they're unpunctuated, error-filled walls of text that require hours of editing before they're usable. TubeScribed turns the same audio into a publication-ready document."
      features={features}
      verdictBody="YouTube auto-captions are technically free. But they&apos;re unpunctuated, full of transcription errors, stripped of formatting, and completely unusable for any business purpose without significant manual editing.<br /><br />TubeScribed runs the same audio through OpenAI Whisper for accurate transcription, then Claude AI adds punctuation, fixes errors, removes filler words, and structures the output with a title, summary, key takeaways, and timestamped segments. The result is a professional document — not a raw caption dump. Starting at $19/month with a free run to see the difference yourself."
      ctaHref={`${APP_URL}/signup`}
    />
  );
}
