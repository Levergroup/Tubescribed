import type { Metadata } from "next";
import { EducatorsPage } from "@/components/EducatorsPage";

export const metadata: Metadata = {
  title: "TubeScribed for Educators — Turn Any YouTube Lecture Into a Structured Study Guide",
  description:
    "Convert YouTube lectures, tutorials, and training videos into structured study guides, course materials, and training documents automatically. Better context. Better learning.",
  alternates: {
    canonical: "https://www.tubescribed.com/for/educators",
  },
};

export default function ForEducatorsPage() {
  return (
    <>
      <EducatorsPage />
      <section className="bg-gray-50 border-t border-gray-200 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-syne font-semibold text-gray-900 mb-4">Free tools for educators:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="/tools/video-to-training-guide" className="text-[#FF3B30] text-sm font-semibold hover:underline">Video to Training Guide →</a>
            <a href="/tools/youtube-transcript-generator" className="text-[#FF3B30] text-sm font-semibold hover:underline">YouTube Transcript Generator →</a>
          </div>
        </div>
      </section>
    </>
  );
}
