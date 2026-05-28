import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AvatarLandingPage } from "@/components/AvatarLandingPage";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for Business Coaches — Turn Coaching Calls Into SOPs and Content Automatically",
  description:
    "6 years of coaching calls. Zero documentation. TubeScribed turns any coaching call, training video, or YouTube session into a branded SOP or content asset — automatically, in your voice.",
  path: "/for/coaches",
});

export default function ForCoachesPage() {
  return (
    <AvatarLandingPage
      category="For Business Coaches"
      heroHeadline="6 Years of Coaching Calls. Zero Documentation."
      heroHeadlineGradient="That's About to Change."
      heroSub="TubeScribed turns any coaching call, training video, or YouTube session into a branded SOP, training guide, or content asset — automatically, in your exact methodology and voice."
      socialProof="Used by 200+ coaches and consultants to document their frameworks"
      ctaHref="https://app.tubescribed.com/signup"
      problems={[
        "Your best IP is locked inside recordings nobody rewatches — your methodology exists in your head and nowhere else.",
        "Every new client gets a slightly different version of your advice — because nothing is documented or systematized.",
        "You want to write the book or build the course — but turning your spoken content into written content takes months you don't have.",
      ]}
      showcaseVideoTitle="My 6-Step Business Coaching Framework"
      benefits={[
        "Turn any coaching call into a formatted SOP in your exact voice",
        "Every new client gets the same high-quality documented experience",
        "Build your entire methodology library from existing recordings",
        "Create course materials from videos you've already made",
        "Train TubeScribed on your voice once — every output sounds like you forever",
        "Start with one free transcript — no commitment needed",
      ]}
      testimonial={{
        quote:
          "As a business coach, I used to re-explain the same frameworks over and over. Now I generate SOPs from my coaching calls and send those instead. My clients actually implement things now.",
        name: "David K.",
        role: "Business Coach & Consultant",
      }}
      faqs={[
        {
          q: "Will the SOP sound like my methodology or generic AI?",
          a: "If you've set up a Brand Workspace with your framework terminology, coaching language, and voice, the SOP will sound like you wrote it. Set it up once and TubeScribed applies it automatically to every output going forward. Many coaches are surprised how closely the output mirrors their natural way of explaining things — because it's literally built from their own words.",
        },
        {
          q: "Can I process Zoom recordings if I upload them to YouTube first?",
          a: "Yes. Download your Zoom recording, upload it to YouTube as an unlisted video (only accessible via link), then paste that URL into TubeScribed. Unlisted videos work exactly the same as public ones. This works for any recording — Zoom, Loom, Google Meet, or any other platform that lets you export video.",
        },
        {
          q: "How do I set up my brand voice?",
          a: "Go to Brand Workspace in your account and fill in your brand name, audience description, tone of voice, and any terminology specific to your methodology. You can also paste sample writing to help TubeScribed calibrate your style. Setup takes about 10 minutes and applies to every output automatically from that point forward.",
        },
        {
          q: "What's the best output type for client-facing materials?",
          a: "SOP format works best for step-by-step process documentation — it creates numbered steps, action items, and notes your clients can actually follow. For public-facing content that showcases your methodology, use Blog Post. For internal training materials, use Training Guide. Many coaches use all three formats from the same coaching call recording.",
        },
      ]}
      finalCtaLine="Your methodology is too valuable to stay locked inside a video. Document it today."
    />
  );
}
