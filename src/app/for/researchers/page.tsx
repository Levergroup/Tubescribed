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
  return (
    <>
      <ResearchersPage />
      <section className="bg-gray-50 border-t border-gray-200 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-syne font-semibold text-gray-900 mb-4">Free tools for researchers:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="/tools/youtube-transcript-generator" className="text-[#FF3B30] text-sm font-semibold hover:underline">YouTube Transcript Generator →</a>
            <a href="/tools/youtube-to-faq" className="text-[#FF3B30] text-sm font-semibold hover:underline">YouTube to FAQ Generator →</a>
          </div>
        </div>
      </section>
    </>
  );
}
