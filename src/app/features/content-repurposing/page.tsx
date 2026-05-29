import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { FeaturePageFAQ } from "@/components/FeaturePageFAQ";
import { ContentOutputShowcase } from "@/components/ContentOutputShowcase";
import { PromptAccordion } from "@/components/PromptAccordion";

export const metadata: Metadata = {
  title: "Content Repurposing — One YouTube Video Into 15 Content Assets | TubeScribed",
  description:
    "Turn any YouTube video into blog posts, email sequences, SOPs, social captions, X threads, FAQ documents, sales scripts, and more — automatically, in your brand voice.",
  alternates: {
    canonical: "https://www.tubescribed.com/features/content-repurposing",
  },
};

const ACCORDION_ITEMS = [
  {
    label: "Blog Post — SEO-ready article with H2s, intro, body, and CTA",
    content: `TubeScribed doesn't dump your transcript into a blog template. It structures the post with a hook-driven introduction, H2 subheadings that match how your audience searches, a body that builds an argument rather than just listing points, and a closing CTA that moves readers to the next step.

The output reads like a skilled writer wrote it — because the underlying prompt was built by content strategists who know what editors and SEO managers want: a post that ranks, reads, and converts.

What you get:
• 800–1,200 word article (longer for detailed technical content)
• SEO-optimized title and H2 structure based on the video's topic
• Intro that hooks within the first 2 sentences
• Body that builds on the video's argument with added depth and context
• Conclusion with clear next-step CTA
• Written in your brand voice if Brand Workspace is configured`,
  },
  {
    label: "Email Sequence — 3-part nurture sequence from the video topic",
    content: `Each video becomes a 3-email sequence: a hook email that opens a loop, a value email that delivers the framework, and a CTA email that closes with an offer or next step.

These aren't summaries of the video. They're emails that build on the video's core idea with the understanding that email readers expect more depth and are closer to buying than a random YouTube viewer.

What you get:
• Email 1: Hook — opens a curiosity or pain loop that makes the reader want Email 2
• Email 2: Framework — delivers the video's core value in email-native format
• Email 3: CTA — closes the loop with a specific offer or next action
• Subject lines and preview text for all three emails
• Written in your brand voice with your specific audience in mind`,
  },
  {
    label: "Social Captions — Platform-specific posts for LinkedIn, Instagram, and Facebook",
    content: `One caption doesn't fit all platforms. TubeScribed generates platform-specific versions: LinkedIn posts that open with a pattern-interrupt and build a professional case, Instagram captions that are punchy and visual-friendly, and Facebook posts that match the conversational register of that feed.

Each caption is adapted — not just copied and trimmed.

What you get:
• LinkedIn post: 200–300 words, hook + value + CTA, formatted for desktop readers
• Instagram caption: 50–100 words, punchy, emoji-optional, 5 hashtag suggestions
• Facebook post: conversational, 100–150 words, engagement-oriented
• All three written in your brand voice`,
  },
  {
    label: "X (Twitter) Thread — 8–12 tweet thread with hook and numbered breakdown",
    content: `X threads live or die on the opening tweet. TubeScribed generates a thread that opens with a hook strong enough to stop a scroll — a number, a counterintuitive claim, or a bold statement — then delivers the video's core framework as numbered points, each tweet building on the last, ending with a clear CTA.

Each tweet functions as a standalone insight AND as part of a larger argument.

What you get:
• Tweet 1: Hook tweet (a number, a claim, or a statement that stops the scroll)
• Tweets 2–10: Numbered breakdown of the video's key points, one insight per tweet
• Final tweet: CTA that drives to the full video, blog post, or product
• Each tweet under 270 characters, formatted for easy copy-paste`,
  },
  {
    label: "FAQ Document — 8–10 Q&A pairs extracted from the video",
    content: `TubeScribed identifies the questions your audience is most likely to ask based on the video content — then writes complete answers in your voice. FAQ documents serve double duty: they're publication-ready for your website (great for SEO rich snippets), and ready to paste into any AI assistant as a knowledge base document.

What you get:
• 8–10 Q&A pairs based on the video's actual content
• Questions phrased the way your audience actually searches
• Answers written as complete standalone responses — no "as mentioned in the video" references
• Structured for website FAQ pages, internal wikis, or AI knowledge bases
• Ready for FAQ schema markup if needed`,
  },
  {
    label: "Sales Script — Persuasive script for DMs, calls, or video sales letters",
    content: `The Sales Script output transforms educational video content into a persuasive sales asset. Structured around the problem-agitate-solve framework, it uses the specific problems named in your video, the specific results described, and the objections your audience raises — and builds a persuasive argument from those actual details.

Not a generic template with placeholders. Built from your content.

What you get:
• Opening hook matched to the viewer's awareness level
• Problem section: names the pain in the audience's own language (drawn from the video)
• Agitation section: makes the cost of inaction specific and concrete
• Solution bridge: positions your offer as the logical next step
• Objection handling: addresses the 3 most common objections surfaced in the video's content
• CTA: clear, specific next step with urgency or scarcity framing where appropriate`,
  },
];

const VALUE_MATH = [
  { output: "Blog post", freelancer: "$150–300", tubescribed: "Included", time: "3–5 days → seconds" },
  { output: "Email sequence (3 emails)", freelancer: "$200–400", tubescribed: "Included", time: "3–4 days → seconds" },
  { output: "Social captions (3 platforms)", freelancer: "$75–150", tubescribed: "Included", time: "1–2 days → seconds" },
  { output: "X thread", freelancer: "$50–100", tubescribed: "Included", time: "1 day → seconds" },
  { output: "FAQ document", freelancer: "$75–150", tubescribed: "Included", time: "1–2 days → seconds" },
  { output: "SOP document", freelancer: "$100–200", tubescribed: "Included", time: "2–3 days → seconds" },
  { output: "LinkedIn newsletter draft", freelancer: "$100–200", tubescribed: "Included", time: "2–3 days → seconds" },
];

const FAQS = [
  {
    q: "How many content outputs does TubeScribed generate per video?",
    a: "Up to 15 content formats from a single video transcript: blog post, SOP, email sequence, social captions (LinkedIn, Instagram, Facebook), X thread, FAQ document, YouTube description, chapter markers, newsletter draft, key quotes, sales script, and more. Output types available depend on your plan.",
  },
  {
    q: "Are all 15 outputs generated automatically, or do I choose?",
    a: "You choose which outputs to generate. After transcription, you select the formats you want. You can generate all 15 at once or just the ones you need. Credits are only consumed for outputs you generate.",
  },
  {
    q: "How long does it take to generate all outputs from one video?",
    a: "Transcription takes 15 seconds to 2 minutes depending on video length. Content generation for all 15 formats takes an additional 30–90 seconds. A 20-minute video goes from URL to 15 content assets in under 3 minutes total.",
  },
  {
    q: "Do the outputs work without the Brand Workspace set up?",
    a: "Yes — all 15 content formats generate without a Brand Workspace. Without it, outputs use a high-quality general professional tone. With a Brand Workspace, every output is generated in your specific voice, for your specific audience.",
  },
];

export default function ContentRepurposingFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">

      {/* 1. Hero */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Feature — Content Repurposing</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            One YouTube Video.{" "}
            <GradientText>15 Content Assets.</GradientText>
            {" "}Zero Manual Work.
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            TubeScribed transforms any YouTube video into blog posts, email sequences, social captions,
            X threads, FAQ documents, sales scripts, SOPs, and more — automatically, in your exact brand voice.
            One video. Every channel covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">
              Try Free — No Credit Card
            </Button>
            <Button href="/features" variant="secondary" className="px-8 py-4 text-lg">
              See All Features
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Output Showcase */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">Live Preview</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4 text-center">
            See every output type — click to preview
          </h2>
          <p className="font-dm-sans text-navy-400 text-base text-center mb-12">
            Select any output format below to see what TubeScribed generates from a single video.
          </p>
          <ContentOutputShowcase videoTitle="How I Built a $50K/Year Content Business from YouTube" />
        </div>
      </section>

      {/* 3. Output quality accordion */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">Output Quality</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4 text-center">
            What makes each output actually usable
          </h2>
          <p className="font-dm-sans text-navy-400 text-base text-center mb-10">
            Every output type is built from a prompt engineered for that specific format — not a generic
            &ldquo;summarize this into a blog post&rdquo; instruction. Expand each format to see exactly what you get.
          </p>
          <PromptAccordion items={ACCORDION_ITEMS} />
        </div>
      </section>

      {/* 4. Value math */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">The Value Math</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4 text-center">
            What this content costs without TubeScribed
          </h2>
          <p className="font-dm-sans text-navy-400 text-base text-center mb-10">
            One video. All these outputs. Compare what freelancers charge vs. what TubeScribed delivers — in seconds.
          </p>
          <div className="overflow-hidden rounded-2xl border border-navy-700">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 border-b border-navy-700">
                  <th className="font-dm-sans text-navy-400 text-xs uppercase tracking-wide text-left px-6 py-3">Output</th>
                  <th className="font-dm-sans text-navy-400 text-xs uppercase tracking-wide text-center px-6 py-3">Freelancer Cost</th>
                  <th className="font-syne font-semibold text-brand-red text-xs uppercase tracking-wide text-center px-6 py-3">TubeScribed</th>
                  <th className="font-dm-sans text-navy-400 text-xs uppercase tracking-wide text-center px-6 py-3 hidden sm:table-cell">Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {VALUE_MATH.map((row, i) => (
                  <tr key={row.output} className={`border-b border-navy-700 last:border-b-0 ${i % 2 === 0 ? "bg-navy-900" : "bg-navy-950"}`}>
                    <td className="font-dm-sans text-navy-300 text-sm px-6 py-4">{row.output}</td>
                    <td className="font-dm-sans text-navy-500 text-sm text-center px-6 py-4 line-through">{row.freelancer}</td>
                    <td className="font-syne font-semibold text-green-400 text-sm text-center px-6 py-4">{row.tubescribed}</td>
                    <td className="font-dm-sans text-navy-400 text-xs text-center px-6 py-4 hidden sm:table-cell">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex items-start gap-3 bg-navy-900 border border-navy-700 rounded-xl p-5">
            <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-0.5" />
            <p className="font-dm-sans text-navy-300 text-sm leading-relaxed">
              All 15 output types are included in every TubeScribed plan. You&apos;re not paying per format —
              you&apos;re paying per video processed. One credit = one video = access to all outputs.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">FAQ</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">Your questions, answered</h2>
          <FeaturePageFAQ items={FAQS} />
          <div className="mt-10 text-center">
            <p className="font-dm-sans text-navy-400 text-sm mb-6">
              Start with one video. See all 15 outputs. No credit card required.
            </p>
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">
              Try Free — No Credit Card
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
