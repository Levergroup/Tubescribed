import type { Metadata } from "next";
import { FreeTranscriptToolClient } from "@/components/FreeTranscriptToolClient";

export const metadata: Metadata = {
  title: "Free YouTube Transcript Generator — Clean Accurate Transcripts | TubeScribed",
  description:
    "Get a clean, accurate transcript from any YouTube video for free. Powered by OpenAI Whisper. Punctuated, filler-word-free, and structured with timestamps. No credit card required.",
  alternates: {
    canonical: "https://www.tubescribed.com/free-tools/youtube-transcript-generator",
  },
};

export default function FreeTranscriptGeneratorPage() {
  return <FreeTranscriptToolClient />;
}
