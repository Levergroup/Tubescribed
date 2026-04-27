import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI Transcript Cleaner — Claude AI Cleans Every Transcript Automatically | TubeScribed",
  description: "TubeScribed uses Claude AI to clean every transcript: fix errors, add punctuation, remove filler words, and structure output into a publication-ready document.",
  path: "/features/ai-transcript-cleaner",
});

const cleaningSteps = [
  "Adds full punctuation — periods, commas, question marks, and capitalization",
  "Fixes transcription errors from Whisper or YouTube's auto-captions",
  "Removes filler words: um, uh, like, you know, sort of, kind of",
  "Removes repeated phrases and false starts",
  "Structures output into a clean document with a title",
  "Generates a 2–3 sentence executive summary",
  "Extracts 5–7 key takeaways as bullet points",
  "Adds timestamped section headers for long videos",
];

export default function AITranscriptCleanerFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Feature</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            AI Transcript Cleaner — <GradientText>From Raw Audio to Polished Document</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            After OpenAI Whisper transcribes the audio, Claude AI cleans it — adding punctuation, fixing errors, removing filler words, and structuring the output into a publication-ready document.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10">What Claude AI does to every transcript</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cleaningSteps.map((step) => (
              <div key={step} className="flex items-start gap-3 bg-navy-900 border border-navy-700 rounded-xl p-5">
                <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                <span className="font-dm-sans text-navy-100 text-sm leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne font-bold text-2xl text-navy-100 mb-6">Why Claude AI instead of generic cleanup?</h2>
          <p className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-8">
            Claude (by Anthropic) is the same AI used by Fortune 500 companies for complex language tasks. It understands context — so it knows the difference between &ldquo;like&rdquo; used as a filler word vs. &ldquo;like&rdquo; used as a verb. The cleanup is intelligent, not mechanical.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">See a Cleaned Transcript</Button>
        </div>
      </section>
    </div>
  );
}
