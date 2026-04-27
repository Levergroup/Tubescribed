import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "YouTube Transcription — Accurate Transcripts From Any YouTube URL | TubeScribed",
  description: "Paste any YouTube URL and get a clean, accurate transcript in 8 seconds. Powered by OpenAI Whisper. No uploading, no downloading, no waiting.",
  path: "/features/youtube-transcription",
});

const benefits = [
  "Works with any public YouTube video",
  "Powered by OpenAI Whisper — not YouTube's auto-captions",
  "8 seconds from URL to transcript",
  "No video upload required — paste the URL and go",
  "Accurate on accents, technical terminology, and fast speech",
  "Works with videos up to ~30 minutes",
];

export default function YouTubeTranscriptionFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Feature</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            YouTube Transcription — <GradientText>8 Seconds Flat</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            Paste any YouTube URL. Get a clean, accurate transcript powered by OpenAI Whisper — not YouTube&apos;s error-filled auto-captions. No uploading. No downloading. No waiting.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10">Why TubeScribed transcription is different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-navy-900 border border-navy-700 rounded-xl p-5">
                <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                <span className="font-dm-sans text-navy-100 text-sm leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-2xl text-navy-100 mb-6">YouTube auto-captions vs TubeScribed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
              <p className="font-syne font-semibold text-navy-400 text-sm mb-3">YouTube Auto-Captions</p>
              <p className="font-dm-sans text-navy-500 text-sm leading-relaxed italic">&ldquo;so today were gonna talk about you know the the process of building a product and um its really important that you uh think about the user experience first because if you dont do that then you know you end up with something that nobody wants to use&rdquo;</p>
            </div>
            <div className="bg-navy-800 border border-brand-red/30 rounded-2xl p-6">
              <p className="font-syne font-semibold text-brand-red text-sm mb-3">TubeScribed</p>
              <p className="font-dm-sans text-navy-300 text-sm leading-relaxed">&ldquo;Today, we&apos;re going to talk about the process of building a product. It&apos;s really important that you think about the user experience first — because if you don&apos;t, you end up with something nobody wants to use.&rdquo;</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">See It for Yourself</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
