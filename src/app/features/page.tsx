import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { FileText, ClipboardList, Layers, Grid3x3, Wand2, TrendingUp, ArrowRight } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed Features — YouTube Transcription, SOPs, Brand Workspace & More",
  description: "Explore all TubeScribed features: YouTube transcription, SOP generator, brand workspace, 15-format content repurposing, and AI transcript cleaning.",
  path: "/features",
});

const features = [
  {
    icon: FileText,
    title: "YouTube Transcription",
    description: "Paste any YouTube URL and get a publication-ready transcript in 8 seconds. Powered by OpenAI Whisper for accuracy.",
    href: "/features/youtube-transcription",
    tag: "Core",
  },
  {
    icon: Wand2,
    title: "AI Transcript Cleaner",
    description: "Claude AI removes errors, adds punctuation, strips filler words, and structures output into title, summary, takeaways, and timestamps.",
    href: "/features/ai-transcript-cleaner",
    tag: "Core",
  },
  {
    icon: Layers,
    title: "Brand Workspace",
    description: "Set up your brand voice once. Every output TubeScribed generates matches automatically — no prompting required.",
    href: "/features/brand-workspace",
    tag: "Brand",
  },
  {
    icon: ClipboardList,
    title: "SOP Generator",
    description: "Turn any video into a structured Standard Operating Procedure in your brand voice. Document your methodology without starting from scratch.",
    href: "/features/sop-generator",
    tag: "Output",
  },
  {
    icon: Grid3x3,
    title: "Content Repurposing Studio",
    description: "15 content output types from every transcript: blog posts, emails, social captions, LinkedIn posts, newsletters, and more.",
    href: "/features/content-repurposing",
    tag: "Output",
  },
  {
    icon: TrendingUp,
    title: "Monthly Progress Reports",
    description: "Every month: hours saved, content pieces created, and your growing library score — all calculated from your real usage and delivered to your inbox.",
    href: "/features/progress-reports",
    tag: "Reports",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Features</p>
          <h1 className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight">
            Everything you need to turn{" "}
            <GradientText>YouTube into business assets</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed">
            TubeScribed handles the entire pipeline — from YouTube URL to publication-ready content — in seconds.
          </p>
        </div>
      </section>

      <section className="py-16 pb-32 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.href} href={feature.href} className="group bg-navy-800 border border-navy-700 hover:border-brand-red/50 rounded-2xl p-7 transition-all duration-300">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center">
                      <Icon size={22} className="text-brand-red" />
                    </div>
                    <span className="text-xs font-medium text-navy-500 bg-navy-900 border border-navy-700 px-2.5 py-1 rounded-full">{feature.tag}</span>
                  </div>
                  <h2 className="font-syne font-bold text-navy-100 text-xl mb-3 group-hover:text-brand-red transition-colors">{feature.title}</h2>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed mb-4">{feature.description}</p>
                  <div className="flex items-center gap-1.5 text-brand-red text-sm font-medium">
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
