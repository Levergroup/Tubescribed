import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ContentOutputShowcase } from "@/components/ContentOutputShowcase";
import { WhyNotChatGPT } from "@/components/sections/WhyNotChatGPT";
import { Features } from "@/components/sections/Features";
import { UseCaseTabs } from "@/components/sections/UseCaseTabs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { HomepageFAQ } from "@/components/sections/HomepageFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { websiteSchema, organizationSchema, productSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "TubeScribed — Turn YouTube Videos Into Branded Business Assets",
  description:
    "Paste a YouTube URL. Get a clean transcript, branded SOP, blog post, email sequence, and more — in seconds. Try free, no credit card.",
  alternates: { canonical: "https://tubescribed.com" },
  openGraph: {
    type: "website",
    url: "https://tubescribed.com",
    title: "TubeScribed — Turn YouTube Videos Into Branded Business Assets",
    description: "Paste a YouTube URL. Get a transcript, SOP, blog post, and more — in seconds. Try free.",
    images: [{ url: "https://tubescribed.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TubeScribed — Turn YouTube Videos Into Branded Business Assets",
    description: "Paste a YouTube URL. Get a transcript, SOP, blog post, and more — in seconds.",
    images: ["https://tubescribed.com/og-default.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema()) }} />
      <Hero />
      <SocialProof />
      <ProblemAgitation />
      <HowItWorks />
      <ContentOutputShowcase videoTitle="How I Built a $50K/Year Content Business from YouTube" />
      <WhyNotChatGPT />
      <Features />
      <UseCaseTabs />
      <Testimonials />
      <div className="text-center py-4 pb-2 bg-navy-800">
        <p style={{ fontSize: "12px", color: "#94A3B8" }}>
          Results shown are illustrative examples. Individual results vary based on usage and content type.{" "}
          <a href="/disclaimer" style={{ color: "#94A3B8", textDecoration: "underline" }}>See our full Disclaimer for details.</a>
        </p>
      </div>
      <Pricing />
      <HomepageFAQ />
      <FinalCTA />
    </>
  );
}
