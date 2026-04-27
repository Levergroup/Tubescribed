import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { UseCasePageClient } from "@/components/UseCasePageClient";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for Business Coaches — Document Your Methodology as SOPs",
  description: "Turn your coaching calls and training videos into structured SOPs in your brand voice. TubeScribed's SOP generator documents your methodology automatically.",
  path: "/for/coaches",
});

const data = {
  category: "For Business Coaches",
  headline: "Your Methodology Deserves",
  headlineGradient: "to Be Documented.",
  subheadline: "Train TubeScribed on your brand voice once. Every SOP it generates sounds exactly like you — your words, your framework, your methodology.",
  painHeading: "The undocumented methodology problem",
  painPoints: [
    "Your best methodology lives in your head — and nowhere else",
    "Every client gets a slightly different version of your framework",
    "You re-explain the same process in every coaching call, every week",
    "You know you need SOPs but building them from scratch takes too long",
  ],
  featureCallout: {
    icon: "ClipboardList" as const,
    heading: "The SOP Generator for Coaches",
    body: "Record a coaching call, training session, or YouTube video explaining your framework. Paste the URL into TubeScribed. In seconds, you get a clean transcript — and with one click, a structured SOP in your voice.",
    subBody: "The SOP includes your step-by-step process, key terminology, client action items, and your brand language — all automatically formatted and ready to send.",
    note: "David is a 45-year-old business coach. Here's what changed when he started using TubeScribed.",
  },
  outcomeHeading: "What coaches build with TubeScribed",
  outcomes: [
    "Your methodology is documented in SOPs — generated from your own words",
    "Clients get the same consistent, branded experience every time",
    "Stop re-explaining — send the SOP instead of another call",
    "Build your training library from every coaching session you record",
  ],
  ctaHref: "https://app.tubescribed.com/signup",
};

export default function ForCoachesPage() {
  return <UseCasePageClient {...data} />;
}
