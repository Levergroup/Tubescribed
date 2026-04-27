import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { FreeTranscriptToolClient } from "@/components/FreeTranscriptToolClient";

export const metadata: Metadata = buildMetadata({
  title: "Free YouTube Transcript Generator — Get Any YouTube Video Transcript | TubeScribed",
  description: "Get a clean, accurate transcript from any YouTube video for free. Powered by OpenAI Whisper. No signup required for your first transcript.",
  path: "/free-tools/youtube-transcript-generator",
});

export default function FreeTranscriptGeneratorPage() {
  return <FreeTranscriptToolClient />;
}
