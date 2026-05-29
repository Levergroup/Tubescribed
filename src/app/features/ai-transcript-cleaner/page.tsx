import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { FeaturePageFAQ } from "@/components/FeaturePageFAQ";

export const metadata: Metadata = {
  title: "AI Transcript Cleaner — Claude AI Fixes Raw YouTube Captions Automatically | TubeScribed",
  description:
    "Raw YouTube captions are unpunctuated, full of errors, and unusable for content. TubeScribed uses Claude AI to fix every transcript automatically — before you see it.",
  alternates: {
    canonical: "https://www.tubescribed.com/features/ai-transcript-cleaner",
  },
};

const CLEANUP_STEPS = [
  {
    step: "01",
    title: "Punctuation and capitalization",
    body: "Adds periods, commas, question marks, and capitalization throughout. Spoken audio has none of this — Claude applies it intelligently based on sentence structure, not mechanical rules.",
  },
  {
    step: "02",
    title: "Filler word removal",
    body: "Removes um, uh, like, you know, sort of, kind of, right, and similar spoken fillers that litter every transcript. Claude distinguishes filler 'like' from meaningful 'like' — the removal is contextual, not a find-and-replace.",
  },
  {
    step: "03",
    title: "Error correction",
    body: "Whisper and YouTube's caption system both make mistakes — especially with proper nouns, technical terms, and fast speech. Claude corrects these using context. If the speaker says 'ROI' and it's transcribed as 'Roy,' Claude fixes it.",
  },
  {
    step: "04",
    title: "False starts and repeated phrases",
    body: "Removes repeated sentence starts, self-corrections, and verbal restarts that are normal in speech but make written transcripts unreadable. 'So — so what I was trying to say is, what I'm saying is...' becomes 'What I'm saying is...'",
  },
  {
    step: "05",
    title: "Paragraph structure and readability",
    body: "Groups related sentences into paragraphs with a consistent rhythm. Long-form transcripts are broken into scannable sections. The output reads like a document, not a wall of unbroken text.",
  },
  {
    step: "06",
    title: "Summary and key takeaways",
    body: "Generates a 2–3 sentence executive summary of the full transcript and extracts 5–7 key takeaways as bullet points. These are added to the top of the document — making the transcript useful at a glance.",
  },
];

const DOWNSTREAM_USES = [
  {
    title: "Quote directly without editing",
    body: "A cleaned transcript is accurate and punctuated enough to quote from directly — in articles, reports, social posts, and research. No cleaning required before publishing. With raw captions, every quote needs manual cleanup before it's presentable.",
  },
  {
    title: "AI training and knowledge bases",
    body: "Clean, structured text is required for high-quality AI training data, RAG pipelines, and custom GPT knowledge bases. Raw transcripts introduce noise that degrades AI output quality. TubeScribed transcripts are structured for immediate use in AI pipelines without preprocessing.",
  },
  {
    title: "Content generation that sounds human",
    body: "Every blog post, email, and social caption TubeScribed generates starts from the cleaned transcript — not the raw one. The quality of the source document directly determines the quality of every downstream output. Garbage in, garbage out. Clean transcript in, publication-ready content out.",
  },
];

const FAQS = [
  {
    q: "Does TubeScribed use Claude AI for all cleanup, or just some of it?",
    a: "Claude AI processes the entire transcript — not just specific sections. Every sentence passes through Claude's cleanup layer. Punctuation, filler removal, error correction, paragraph structure, and summary generation are all handled by Claude in a single pass. This is why the output is coherent rather than mechanically patched.",
  },
  {
    q: "Can I see the raw transcript before the cleanup?",
    a: "No — the cleaned transcript is what TubeScribed delivers. The raw Whisper output is an intermediate step in the processing pipeline, not a deliverable. If you specifically need raw transcription output (for custom processing pipelines), the API plan provides access to raw Whisper output before the Claude cleanup layer is applied.",
  },
];

export default function AITranscriptCleanerFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">

      {/* 1. Hero */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Feature — AI Transcript Cleaner</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Raw YouTube Captions Are Garbage.{" "}
            <GradientText>Claude AI Fixes Them — Automatically.</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            Every transcript TubeScribed delivers has been through Claude AI — the same model used by
            Fortune 500 companies for complex language tasks. Punctuation added. Filler words removed.
            Errors corrected. Paragraphs structured. Before you see it.
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

      {/* 2. Before / After */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            Before and after Claude AI cleanup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-7" style={{ backgroundColor: "#2A1A1A", border: "1.5px solid #7F1D1D" }}>
              <p className="font-dm-sans text-red-400 text-xs font-semibold uppercase tracking-wide mb-4">
                ❌ Raw Whisper Output (Before)
              </p>
              <p className="font-mono text-sm text-navy-500 leading-relaxed mb-4">
                so um today were gonna talk about uh transcript cleaning and you know the reason why
                this is so important is because like when you think about it most people are just you
                know getting their transcripts and theyre just full of like errors and like um filler
                words and so what i want to show you is how to like take a raw transcript and um turn
                it into something that you can actually use right like for content or or for quoting
                or you know for AI training or whatever you need it for
              </p>
              <p className="font-dm-sans text-red-400 text-xs">Unpunctuated · Filler-heavy · Full of errors · Unusable</p>
            </div>
            <div className="rounded-2xl p-7" style={{ backgroundColor: "#1A2A1A", border: "1.5px solid #166534" }}>
              <p className="font-dm-sans text-green-400 text-xs font-semibold uppercase tracking-wide mb-4">
                ✅ After Claude AI Cleanup
              </p>
              <p className="font-mono text-sm text-navy-300 leading-relaxed mb-2">
                Today, we&apos;re talking about transcript cleaning — and why it matters more than most people realize.
              </p>
              <p className="font-mono text-sm text-navy-300 leading-relaxed mb-2">
                Most transcripts that come out of automated systems are filled with errors, missing punctuation, and filler words that make the content unusable in its raw form.
              </p>
              <p className="font-mono text-sm text-navy-300 leading-relaxed mb-4">
                What I want to show you is how to take a raw transcript and turn it into something you can quote from directly, use for AI training, or repurpose into any content format.
              </p>
              <p className="font-dm-sans text-green-400 text-xs">Punctuated · Clean · Filler-free · Publication-ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cleanup steps */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">What Claude AI does</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            Six cleanup passes. One clean document.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CLEANUP_STEPS.map((item) => (
              <div key={item.step} className="bg-navy-800 border border-navy-700 rounded-2xl p-7">
                <p className="font-mono text-brand-red text-xs mb-3">{item.step}</p>
                <h3 className="font-syne font-semibold text-navy-100 text-base mb-3">{item.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why it matters — 3 downstream uses */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">Why It Matters</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            A clean transcript unlocks everything downstream
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {DOWNSTREAM_USES.map((item) => (
              <div key={item.title} className="bg-navy-900 border border-navy-700 rounded-2xl p-7 hover:border-brand-red/50 transition-colors duration-300">
                <CheckCircle2 size={18} className="text-brand-red mb-4" />
                <h3 className="font-syne font-semibold text-navy-100 text-base mb-3">{item.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
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
              See a cleaned transcript in 15 seconds — paste any YouTube URL.
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
