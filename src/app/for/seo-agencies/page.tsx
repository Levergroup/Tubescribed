import type { Metadata } from "next";
import { SEOAgenciesPage } from "@/components/SEOAgenciesPage";

export const metadata: Metadata = {
  title: "TubeScribed for SEO Agencies — Scale to 50 Blog Posts Per Month Without More Writers",
  description:
    "Turn expert YouTube videos into SEO-optimized blog posts at scale. TubeScribed helps SEO agencies produce unique, expert content faster and cheaper than hiring writers.",
  alternates: {
    canonical: "https://www.tubescribed.com/for/seo-agencies",
  },
};

export default function ForSEOAgenciesPage() {
  return <SEOAgenciesPage />;
}
