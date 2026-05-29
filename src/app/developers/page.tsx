import type { Metadata } from "next";
import { DevelopersPage } from "@/components/DevelopersPage";

export const metadata: Metadata = {
  title: "TubeScribed API — Add YouTube Transcription to Any Application",
  description:
    "TubeScribed API gives developers programmatic access to YouTube transcription and AI content generation. Clean JSON responses. 15 output types. Brand voice support.",
  alternates: {
    canonical: "https://www.tubescribed.com/developers",
  },
};

export default function DevelopersPageRoute() {
  return <DevelopersPage />;
}
