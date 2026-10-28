import type { Metadata } from "next";
import { FreeTranscriptToolClient } from "@/components/FreeTranscriptToolClient";

export const metadata: Metadata = {
  title: "Free YouTube Transcript Generator — Clean Accurate Transcripts | TubeScribed",
  description:
    "Get a clean transcript from any captioned YouTube video for free. Cleaned by Claude AI: punctuated, filler-word-free and easy to read. No credit card required.",
  alternates: {
    canonical: "https://www.tubescribed.com/free-tools/youtube-transcript-generator",
  },
};

export default function FreeTranscriptGeneratorPage() {
  return <FreeTranscriptToolClient />;
}
