import type { Metadata } from "next";
import { EducatorsPage } from "@/components/EducatorsPage";

export const metadata: Metadata = {
  title:
    "TubeScribed for Educators — Turn Any YouTube Lecture Into a Structured Study Guide",
  description:
    "Convert YouTube lectures, tutorials, and training videos into structured study guides, course materials, and training documents automatically. Better context. Better learning.",
  alternates: {
    canonical: "https://www.tubescribed.com/for/educators",
  },
};

export default function ForEducatorsPage() {
  return <EducatorsPage />;
}
