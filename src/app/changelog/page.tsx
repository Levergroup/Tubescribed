import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed Changelog — Product Updates and New Features",
  description: "See what's new in TubeScribed. Product updates, new features, and improvements — shipped regularly.",
  path: "/changelog",
});

const entries = [
  {
    version: "1.4.0",
    date: "March 2025",
    tag: "Feature",
    title: "Brand Workspace 2.0",
    items: [
      "Unlimited brand profiles on Agency plan",
      "Improved tone-of-voice customization with example phrases",
      "Industry-specific terminology field added",
      "Brand outputs now applied to SOP generator",
    ],
  },
  {
    version: "1.3.0",
    date: "February 2025",
    tag: "Feature",
    title: "Credit Packs",
    items: [
      "Buy extra transcript and AI output credits without upgrading plans",
      "Credits never expire",
      "Starter (10), Growth (25), and Pro Pack (50) available",
    ],
  },
  {
    version: "1.2.0",
    date: "January 2025",
    tag: "Improvement",
    title: "Faster transcription pipeline",
    items: [
      "Average transcription time reduced to under 8 seconds",
      "Improved accuracy on technical terminology and accents",
      "Support for videos up to 30 minutes",
    ],
  },
  {
    version: "1.1.0",
    date: "December 2024",
    tag: "Feature",
    title: "SOP Generator",
    items: [
      "Generate structured SOPs from any transcript",
      "Includes step-by-step process, terminology, and action items",
      "Applies brand voice automatically when workspace is set up",
    ],
  },
  {
    version: "1.0.0",
    date: "November 2024",
    tag: "Launch",
    title: "TubeScribed launch",
    items: [
      "YouTube URL → transcript in seconds",
      "OpenAI Whisper transcription engine",
      "Claude AI transcript cleanup",
      "15 content output types",
      "Brand Workspace (basic)",
      "Pro and Agency plans",
    ],
  },
];

const tagColors: Record<string, string> = {
  Feature: "text-green-400 bg-green-400/10",
  Improvement: "text-blue-400 bg-blue-400/10",
  Fix: "text-yellow-400 bg-yellow-400/10",
  Launch: "text-brand-red bg-brand-red/10",
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Changelog</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            What&apos;s new in <GradientText>TubeScribed</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed">
            Product updates, new features, and improvements — shipped regularly.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {entries.map((entry) => (
              <div key={entry.version} className="bg-navy-800 border border-navy-700 rounded-2xl p-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-syne font-bold text-navy-100 text-sm">v{entry.version}</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[entry.tag] ?? "text-navy-400 bg-navy-700"}`}>{entry.tag}</span>
                  <span className="text-navy-500 text-xs">{entry.date}</span>
                </div>
                <h2 className="font-syne font-bold text-navy-100 text-xl mb-4">{entry.title}</h2>
                <ul className="space-y-2">
                  {entry.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                      <span className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
