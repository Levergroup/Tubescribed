import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  FileText, ClipboardList, Layers, Grid3x3, Wand2, TrendingUp, ArrowRight,
  Target, LayoutGrid, BarChart2, RefreshCw, CheckCircle, XCircle,
} from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { OutputShowcase } from "@/components/OutputShowcase";

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

const trustSignals = [
  { icon: Target, label: "Co-built with working marketers" },
  { icon: TrendingUp, label: "Every output optimized for conversions" },
  { icon: LayoutGrid, label: "15 content formats from one URL" },
  { icon: BarChart2, label: "Prompts updated quarterly" },
];

const promptCards = [
  {
    label: "What Others Do",
    sublabel: "Generic ChatGPT Wrapper",
    bg: "#2A1A1A",
    border: "#7F1D1D",
    icon: XCircle,
    iconColor: "#EF4444",
    points: [
      "Paste transcript, get generic output",
      "Same results as anyone else using the same tool",
      "No brand context, no marketing logic",
      "You spend hours editing to make it usable",
    ],
  },
  {
    label: "What Most 'AI Tools' Do",
    sublabel: "Template-Level Prompting",
    bg: "#1A2A1A",
    border: "#166534",
    icon: XCircle,
    iconColor: "#86EFAC",
    points: [
      "Pre-built prompts that format content",
      "Not written by actual marketers",
      "Can't adapt to your brand voice",
      "Output looks the same for every user",
    ],
  },
  {
    label: "What TubeScribed Does",
    sublabel: "Proprietary Prompt Engineering",
    bg: "#243447",
    border: "#FF3B30",
    icon: CheckCircle,
    iconColor: "#FF3B30",
    points: [
      "Every prompt co-built with marketing professionals",
      "Optimized for the specific output type",
      "Automatically matched to your brand voice",
      "Updated quarterly with new techniques",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Features</p>
          <h1 className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight">
            Every Output Is Built by{" "}
            <GradientText>Seasoned Marketers.</GradientText>{" "}
            Delivered by AI. At Scale.
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed">
            TubeScribed handles the entire pipeline — from YouTube URL to publication-ready content — with prompts engineered by real marketing professionals.
          </p>
        </div>
      </section>

      {/* Trust signals bar */}
      <section className="pb-8 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {trustSignals.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-navy-800 border border-navy-700 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-brand-red" />
                </div>
                <p className="font-dm-sans text-navy-300 text-xs leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 bg-navy-900">
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

      {/* Output Showcase */}
      <section className="py-20" style={{ backgroundColor: "#1a2535" }}>
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">15 Output Types</p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4 leading-tight">
              One URL. Every asset your business needs.
            </h2>
            <p className="font-dm-sans text-navy-400 text-lg max-w-xl mx-auto leading-relaxed">
              Click any output to preview it. Each one built by a dedicated expert prompt.
            </p>
          </div>
          <OutputShowcase />
        </div>
      </section>

      {/* Better Context — Core Principle */}
      <section className="py-20 bg-[#1E2A3A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#FF3B30] text-sm font-semibold tracking-widest uppercase mb-6 text-center">THE CORE PRINCIPLE</p>
          <div className="border-l-4 border-[#FF3B30] bg-[#243447] rounded-r-2xl p-10">
            <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white mb-8 leading-tight text-center">
              Better Context. Better Results.
            </h2>
            <div className="space-y-4 text-[#94A3B8] text-lg leading-relaxed max-w-2xl mx-auto">
              <p>Every AI tool, every agent, every custom GPT, every piece of content you create — the output quality is limited by the input quality.</p>
              <p>Garbled captions produce garbled AI outputs. Raw unstructured text produces weak blog posts. Missing context produces incomplete strategies.</p>
              <p>TubeScribed&apos;s core job is to give you better context from the video content that already exists.</p>
              <p>Clean, accurate, structured, timestamped, brand-voice-ready context — from any YouTube URL in under 30 seconds.</p>
              <p className="text-white font-semibold">Better raw material. Better everything after it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Prompt Advantage */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">The Prompt Advantage</p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4 leading-tight">
              The output quality gap isn&apos;t the AI.<br />It&apos;s the prompts.
            </h2>
            <p className="font-dm-sans text-navy-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Most tools hand you a blank box and a generic model. TubeScribed ships every output type with prompts co-engineered by seasoned marketing professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {promptCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: card.bg, border: `1.5px solid ${card.border}` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={15} style={{ color: card.iconColor }} />
                    <p className="font-dm-sans text-xs font-semibold tracking-wide uppercase" style={{ color: card.iconColor }}>
                      {card.label}
                    </p>
                  </div>
                  <p className="font-syne font-bold text-navy-100 text-base mb-4">{card.sublabel}</p>
                  <ul className="space-y-2">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-navy-500 shrink-0" />
                        <p className="font-dm-sans text-navy-400 text-xs leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Continuously Updated callout */}
      <section className="py-16 pb-32 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            style={{ backgroundColor: "#243447", borderLeft: "4px solid #FF3B30" }}
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(255,59,48,0.12)", border: "1px solid rgba(255,59,48,0.3)" }}>
              <RefreshCw size={20} className="text-brand-red" />
            </div>
            <div className="flex-1">
              <p className="font-syne font-bold text-navy-100 text-lg mb-1">Prompts Updated Quarterly</p>
              <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">
                Marketing best practices change. Algorithm shifts happen. Our prompt engineering team reviews and updates every output type each quarter — so your content stays ahead of what&apos;s working, not stuck with what worked two years ago.
              </p>
            </div>
            <Link
              href="/features/content-repurposing"
              className="shrink-0 inline-flex items-center gap-1.5 text-brand-red text-sm font-medium hover:opacity-80 transition-opacity"
            >
              See all formats <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
