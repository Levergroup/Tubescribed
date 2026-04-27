import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "SOP Generator — Turn Any Video Into a Standard Operating Procedure | TubeScribed",
  description: "TubeScribed's SOP generator turns coaching calls, training videos, and YouTube tutorials into structured SOPs in your brand voice — in seconds.",
  path: "/features/sop-generator",
});

const useCases = [
  "Document your coaching methodology from recorded sessions",
  "Turn training videos into client-facing process guides",
  "Convert YouTube tutorials into branded SOPs for your team",
  "Build an operations library from existing video content",
  "Create onboarding documents from your best explainer videos",
  "Systematize any repeatable process that lives in a video",
];

export default function SOPGeneratorFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Feature</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            SOP Generator — <GradientText>Your Process, Documented</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            Record a video explaining your process. Paste the URL. TubeScribed produces a structured, branded SOP — your step-by-step methodology, in your voice, ready to share.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4">What&apos;s inside a TubeScribed SOP</h2>
          <p className="font-dm-sans text-navy-400 text-base mb-10">Every SOP includes these sections — automatically generated from your video:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Process title and objective",
              "Step-by-step instructions (numbered)",
              "Key terminology and definitions",
              "Common mistakes and how to avoid them",
              "Tools and resources mentioned",
              "Action items and next steps",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-navy-900 border border-navy-700 rounded-xl p-5">
                <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                <span className="font-dm-sans text-navy-100 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10">Who uses the SOP generator</h2>
          <div className="space-y-3">
            {useCases.map((uc) => (
              <div key={uc} className="flex items-start gap-3 bg-navy-800 border border-navy-700 rounded-xl p-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                <span className="font-dm-sans text-navy-100 text-sm leading-relaxed">{uc}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Generate Your First SOP Free</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
