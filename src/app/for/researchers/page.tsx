import type { Metadata } from "next";
import { ResearchersPage } from "@/components/ResearchersPage";

export const metadata: Metadata = {
  title: "TubeScribed for Researchers — Turn Hours of Video Into Searchable Research Notes Instantly",
  description:
    "Extract quotes, insights, and key information from any YouTube video, interview, or conference talk instantly. TubeScribed for journalists, analysts, and researchers.",
  alternates: {
    canonical: "https://www.tubescribed.com/for/researchers",
  },
};

export default function ForResearchersPage() {
  return <ResearchersPage />;
}
