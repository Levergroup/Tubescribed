import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { FeaturePageFAQ } from "@/components/FeaturePageFAQ";

export const metadata: Metadata = {
  title: "YouTube Transcription — Clean Accurate Transcripts From Any YouTube Video",
  description:
    "Paste any YouTube URL and get a clean, punctuated, structured transcript powered by OpenAI Whisper. Better than auto-captions. Publication-ready in seconds.",
  alternates: {
    canonical: "https://www.tubescribed.com/features/youtube-transcription",
  },
};

const TECH_CARDS = [
  {
    title: "OpenAI Whisper — not YouTube's speech recognition",
    body: "TubeScribed uses OpenAI Whisper — a dedicated high-accuracy speech recognition model trained specifically for transcription. Significantly more accurate than YouTube's auto-caption system, especially for accents, technical terminology, and fast speech.",
  },
  {
    title: "Claude AI cleanup layer",
    body: "After Whisper transcribes the audio, Claude AI passes through the entire transcript — adding punctuation, fixing obvious errors, removing filler words (um, uh, you know, like), and structuring the text into readable paragraphs.",
  },
  {
    title: "Timestamps on every segment",
    body: "Every paragraph includes a timestamp linking back to that exact moment in the video. Verify quotes, jump to context, link directly to the source moment — all from the transcript.",
  },
  {
    title: "Supports videos up to 90 minutes",
    body: "Process any public YouTube video up to 90 minutes. Credit usage scales with video length — always shown before processing. Short videos (under 15 min) use 1 credit. Longer videos use 2–4 credits.",
  },
];

const WHAT_YOU_GET = [
  "Full cleaned and punctuated transcript",
  "AI-generated title for the transcript",
  "2–3 sentence summary",
  "3–5 key takeaways as bullet points",
  "Word count and estimated reading time",
  "Timestamped segments throughout",
  "Filler words removed (um, uh, you know, like, right)",
  "Errors corrected by Claude AI",
  "Download as .txt instantly",
  "Saved to your workspace permanently",
];

const USE_CASES = [
  {
    title: "Quote-ready journalism and research",
    body: "Accurate enough to quote directly, with timestamps to verify. No more rewatching entire videos to find the moment you need.",
  },
  {
    title: "AI training data",
    body: "Clean structured text ready for custom GPTs, RAG pipelines, and knowledge bases. No preprocessing required.",
  },
  {
    title: "SEO content foundation",
    body: "Every blog post, SOP, and email sequence starts with a clean transcript. This is the source document for all 15 output types.",
  },
  {
    title: "Accessibility",
    body: "Provide written transcripts alongside your video content for hearing-impaired audiences and search engine indexing.",
  },
];

const PROCESSING_TIMES = [
  { length: "Under 15 minutes", time: "~15 seconds", credits: "1 credit" },
  { length: "15–30 minutes", time: "~30 seconds", credits: "2 credits" },
  { length: "30–60 minutes", time: "~90 seconds", credits: "3 credits" },
  { length: "60–90 minutes", time: "~2 minutes", credits: "4 credits" },
  { length: "Over 90 minutes", time: "Not supported", credits: "—" },
];

const FAQS = [
  {
    q: "How accurate is TubeScribed transcription?",
    a: "TubeScribed uses OpenAI Whisper — typically achieving 95–98% accuracy on clear audio. Accuracy may be lower with heavy accents, background noise, multiple overlapping speakers, or highly technical jargon. The Claude AI cleanup layer corrects common errors and significantly improves readability.",
  },
  {
    q: "Does the video need existing captions to be transcribed?",
    a: "No. TubeScribed extracts audio directly from the video and transcribes it using Whisper — completely independent of whether the video has existing captions. Even videos with no captions at all are fully supported.",
  },
  {
    q: "Can I transcribe unlisted or private videos?",
    a: "Unlisted YouTube videos work with TubeScribed. Private videos require a direct link. For videos not on YouTube, we recommend uploading to YouTube as unlisted and processing from there.",
  },
  {
    q: "What languages are supported?",
    a: "Whisper supports transcription in 50+ languages. The transcript is generated in the video's original language. For content generation outputs (blog posts, SOPs, emails), English currently produces the best results.",
  },
];

export default function YouTubeTranscriptionFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">

      {/* 1. Hero */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            Feature — YouTube Transcription
          </p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Clean, Accurate YouTube Transcripts. Powered by OpenAI Whisper.{" "}
            <GradientText>Not YouTube&apos;s Broken Captions.</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            Paste any YouTube URL. Get back a properly punctuated, filler-word-free, structured
            transcript with timestamps — in seconds. Publication-ready. Quote-ready. AI-ready.
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

      {/* 2. Quality comparison */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            The difference quality makes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left - auto captions */}
            <div className="rounded-2xl p-7" style={{ backgroundColor: "#2A1A1A", border: "1.5px solid #7F1D1D" }}>
              <p className="font-dm-sans text-red-400 text-xs font-semibold uppercase tracking-wide mb-4">
                ❌ YouTube Auto-Captions
              </p>
              <p className="font-mono text-sm text-navy-500 leading-relaxed mb-4">
                so today were gonna talk about uh content repurposing and um you know the reason why
                this is so important is because uh like when you think about it most people are just
                you know creating content but theyre not really getting the most out of it right like
                and so what i want to show you today is how to uh take one video and turn it into
                like a whole bunch of different um content pieces
              </p>
              <p className="font-dm-sans text-red-400 text-xs">Unpunctuated · Full of errors · Unusable</p>
            </div>
            {/* Right - TubeScribed */}
            <div className="rounded-2xl p-7" style={{ backgroundColor: "#1A2A1A", border: "1.5px solid #166534" }}>
              <p className="font-dm-sans text-green-400 text-xs font-semibold uppercase tracking-wide mb-4">
                ✅ TubeScribed Transcript
              </p>
              <p className="font-mono text-sm text-navy-300 leading-relaxed mb-1">
                Today, we&apos;re going to talk about content repurposing — and the reason this is
                so important is that most people create content without extracting maximum value from
                it.
              </p>
              <p className="font-mono text-sm text-navy-300 leading-relaxed mb-1">
                What I want to show you today is how to take one video and turn it into a complete
                suite of content pieces across every channel.
              </p>
              <p className="font-mono text-sm text-navy-500 mb-4">[00:00:14] The first step is understanding what your content is actually worth...</p>
              <p className="font-dm-sans text-green-400 text-xs">Punctuated · Clean · Publication-ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technical quality */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            Why TubeScribed transcription is more accurate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TECH_CARDS.map((card) => (
              <div key={card.title} className="bg-navy-800 border border-navy-700 rounded-2xl p-7">
                <h3 className="font-syne font-semibold text-navy-100 text-base mb-3">{card.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What you get */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">
            Every transcript includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WHAT_YOU_GET.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-navy-900 border border-navy-700 rounded-xl p-4">
                <CheckCircle2 size={16} className="text-green-400 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Use cases */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            What people do with accurate transcripts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-brand-red/50 transition-colors duration-300">
                <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">{uc.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Processing time table */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">
            Processing times by video length
          </h2>
          <div className="overflow-hidden rounded-2xl border border-navy-700">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 border-b border-navy-700">
                  <th className="font-dm-sans text-navy-400 text-xs uppercase tracking-wide text-left px-6 py-3">Video Length</th>
                  <th className="font-dm-sans text-navy-400 text-xs uppercase tracking-wide text-center px-6 py-3">Processing Time</th>
                  <th className="font-syne font-semibold text-brand-red text-xs uppercase tracking-wide text-center px-6 py-3">Credits Used</th>
                </tr>
              </thead>
              <tbody>
                {PROCESSING_TIMES.map((row, i) => (
                  <tr key={row.length} className={`border-b border-navy-700 last:border-b-0 ${i % 2 === 0 ? "bg-navy-900" : "bg-navy-950"}`}>
                    <td className="font-dm-sans text-navy-300 text-sm px-6 py-4">{row.length}</td>
                    <td className="font-dm-sans text-navy-400 text-sm text-center px-6 py-4">{row.time}</td>
                    <td className="font-dm-sans text-navy-100 text-sm text-center px-6 py-4 font-medium">{row.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-dm-sans text-navy-500 text-xs text-center mt-4 italic">
            Credits are only deducted after successful completion. Failed processing never costs credits.
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">FAQ</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">Your questions, answered</h2>
          <FeaturePageFAQ items={FAQS} />
          <div className="mt-10 text-center">
            <p className="font-dm-sans text-navy-400 text-sm mb-6">
              Try the transcription free — paste any YouTube URL. Results in 15 seconds.
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
