import type { Metadata } from "next";
import { ResearchersPage } from "@/components/ResearchersPage";

export const metadata: Metadata = {
  title: "TubeScribed for Researchers & Journalists — Turn Video Research Into Searchable Notes",
  description:
    "Process any YouTube interview, conference talk, or expert video into accurate, quotable, timestamped transcripts instantly. Better context. Better results.",
  alternates: {
    canonical: "https://www.tubescribed.com/for/researchers",
  },
};

export default function ForResearchersPage() {
  return <ResearchersPage />;
}
