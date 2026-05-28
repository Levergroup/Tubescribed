import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AvatarLandingPage } from "@/components/AvatarLandingPage";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for Marketing Agencies — AI-Powered Content for Every Client, in Their Voice",
  description:
    "Stop spending 40 hours a month transcribing client videos. TubeScribed processes any YouTube video in seconds and generates client-ready content in their exact brand voice — automatically.",
  path: "/for/agencies",
});

export default function ForAgenciesPage() {
  return (
    <AvatarLandingPage
      category="For Marketing Agencies"
      heroHeadline="Your Team Is Spending 40 Hours a Month Transcribing Client Videos."
      heroHeadlineGradient="That Ends Today."
      heroSub="TubeScribed processes any YouTube video in 8 seconds and generates client-ready content in their exact brand voice — automatically. One tool for every client."
      socialProof="Trusted by marketing agencies managing 5–20 clients"
      ctaHref="https://app.tubescribed.com/signup?plan=agency"
      problems={[
        "Manual transcription costs you $1,200+ per month in staff time — every client with video content is eating into your margin.",
        "Every client has a different brand voice — keeping outputs consistent across your team is nearly impossible without a system.",
        "You're losing pitches to agencies that promise AI-powered content workflows — because you don't have one yet.",
      ]}
      showcaseVideoTitle="Client Onboarding Process for Marketing Agencies"
      benefits={[
        "Save each client as a brand profile — every output in their voice automatically",
        "Process 40 client videos in the time it used to take to do 4",
        "Unlimited brand workspaces on the Agency plan — one per client",
        "5 team members — your whole content team in one tool",
        "Win more pitches by demonstrating AI-powered delivery",
        "$49/month is a rounding error against your client billing",
      ]}
      testimonial={{
        quote:
          "We manage content for 11 agency clients. The brand workspace feature is a game-changer — every output sounds exactly like each client. Our team size stayed the same but our output tripled.",
        name: "Sarah M.",
        role: "Founder, Social Content Agency",
      }}
      faqs={[
        {
          q: "Can I manage multiple client brand voices in one account?",
          a: "Yes. The Agency plan includes unlimited Brand Workspaces — create one profile per client with their brand name, tone of voice, industry terminology, target audience, and writing style. Every output for that client comes out in their voice automatically, without any extra prompting from your team.",
        },
        {
          q: "How do I keep each client's output sounding different?",
          a: "Each Brand Workspace is configured independently. You set the client's tone, audience type, industry language, and style preferences. TubeScribed applies that exact profile to every transcript and content output for that workspace — so Client A's outputs sound nothing like Client B's, even if the source videos are on similar topics.",
        },
        {
          q: "Can my whole team access the same account?",
          a: "Yes — the Agency plan supports 5 team members. Everyone shares the same brand workspaces and credit pool, so your whole content team can process client videos simultaneously without needing to coordinate or re-enter brand profiles manually.",
        },
        {
          q: "Is there a white label option?",
          a: "Agency plan outputs don't carry TubeScribed branding. You deliver transcripts, SOPs, blog posts, and social content directly to clients as your own work. Many agencies build TubeScribed into their content retainer without clients ever knowing which tool is behind it.",
        },
      ]}
      finalCtaLine="Your competitors are already using AI for this. Your clients will notice the difference."
    />
  );
}
