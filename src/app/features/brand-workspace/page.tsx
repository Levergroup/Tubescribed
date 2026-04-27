import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Brand Workspace — Every AI Output in Your Voice, Automatically | TubeScribed",
  description: "TubeScribed's Brand Workspace trains on your tone, audience, and style. Every output — transcripts, SOPs, blog posts — sounds like you. Set up once, applied forever.",
  path: "/features/brand-workspace",
});

const workspaceFields = [
  "Brand name and industry",
  "Tone of voice (formal, conversational, authoritative...)",
  "Target audience description",
  "Writing style guidelines",
  "Industry-specific terminology",
  "Words and phrases to always use",
  "Words and phrases to never use",
  "Output formatting preferences",
];

export default function BrandWorkspaceFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Feature</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Brand Workspace — <GradientText>Every Output Sounds Like You</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            Set up your brand voice once — your tone, audience, terminology, and style. Every transcript, SOP, blog post, and content output TubeScribed generates automatically matches your brand. No prompting. No editing.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4">What you configure in Brand Workspace</h2>
          <p className="font-dm-sans text-navy-400 text-base mb-10">These settings are applied automatically to every output TubeScribed generates for this workspace.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workspaceFields.map((field) => (
              <div key={field} className="flex items-start gap-3 bg-navy-900 border border-navy-700 rounded-xl p-5">
                <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                <span className="font-dm-sans text-navy-100 text-sm leading-relaxed">{field}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-6">Unlimited brand profiles on Agency</h2>
          <p className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-8">
            Agency plan users can save unlimited brand profiles — one for every client. Switch between them with one click. Every output is automatically in the right client&apos;s voice. Your clients will think you wrote every word yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Set Up Your Workspace</Button>
            <Button href="/pricing" variant="secondary" className="px-8 py-4 text-lg">See Agency Plan</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
