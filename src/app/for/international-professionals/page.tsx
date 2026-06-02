import type { Metadata } from "next";
import { InternationalProfessionalsPage } from "@/components/InternationalProfessionalsPage";

export const metadata: Metadata = {
  title:
    "TubeScribed for International Professionals — Follow English YouTube Content at Your Own Pace",
  description:
    "Turn any English YouTube video into a clean, accurate transcript you can read, search, and reference at your own pace. Better context. Better understanding.",
  alternates: {
    canonical: "https://www.tubescribed.com/for/international-professionals",
  },
};

export default function ForInternationalProfessionalsPage() {
  return <InternationalProfessionalsPage />;
}
