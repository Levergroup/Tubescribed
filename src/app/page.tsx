import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "TubeScribed — Turn YouTube Videos Into Branded Business Assets",
  description:
    "Paste a YouTube link. Get a clean transcript, branded SOP, blog post, email sequence, and more — in seconds. Free to start.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <BeforeAfter />
      <Pricing />
      <FinalCTA />
    </>
  );
}
