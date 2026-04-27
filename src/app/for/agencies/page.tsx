import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { UseCasePageClient } from "@/components/UseCasePageClient";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for Marketing Agencies — One Tool, Every Client, Their Voice",
  description: "Manage every client's YouTube content repurposing from one tool. Unlimited brand profiles, white-label outputs, and 5 team members on the Agency plan.",
  path: "/for/agencies",
});

const data = {
  category: "For Marketing Agencies",
  headline: "Run Every Client's Content Through One Tool.",
  headlineGradient: "In Their Voice.",
  subheadline: "Save each client as a brand profile. Every transcript TubeScribed generates comes out in their voice automatically. One tool, every client.",
  painHeading: "The agency content problem",
  painPoints: [
    "Paying team members $30–80/hr to transcribe client videos manually",
    "Inconsistent output quality when different team members handle repurposing",
    "Hours lost every week on content that could be automated",
    "Clients expect fast turnaround — manual transcription can't keep up",
  ],
  featureCallout: {
    icon: "Layers" as const,
    heading: '"One tool, unlimited clients"',
    body: "Brand Workspace is TubeScribed's client management layer. Create a separate profile for each client: their brand name, tone of voice, industry terminology, and output preferences. Once set up, every transcript and content output for that client sounds exactly like them — not like AI.",
    subBody: "The Agency plan gives you unlimited brand profiles, so you can scale to as many clients as you need without hitting a wall. Plus white-label outputs — your clients will think you wrote every word yourself.",
    note: "Sarah runs a marketing agency serving 8 clients. Here's what TubeScribed changed.",
  },
  outcomeHeading: "What agencies get with TubeScribed",
  outcomes: [
    "Deliver client content 10x faster with the same team size",
    "Every output sounds like the client — not like a generic AI tool",
    "One tool handles unlimited clients with separate brand profiles",
    "White-label outputs your clients think you wrote yourself",
  ],
  ctaHref: "https://app.tubescribed.com/signup?plan=agency",
};

export default function ForAgenciesPage() {
  return <UseCasePageClient {...data} />;
}
