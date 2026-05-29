import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { FeaturePageFAQ } from "@/components/FeaturePageFAQ";

export const metadata: Metadata = {
  title: "Brand Workspace — Every AI Output in Your Exact Brand Voice, Automatically",
  description:
    "Save your brand voice once. TubeScribed applies it to every transcript and content output automatically. Consistent brand voice across every piece of content, every time.",
  alternates: {
    canonical: "https://www.tubescribed.com/features/brand-workspace",
  },
};

const VOICE_EXAMPLES = [
  {
    label: "Generic AI output",
    bg: "#2A1A1A",
    border: "#7F1D1D",
    nameColor: "text-red-400",
    name: "Without Brand Workspace",
    quote:
      "In today's fast-paced digital landscape, content creators face unprecedented challenges in maximizing their content's reach and impact. Leveraging cutting-edge AI solutions...",
    tag: "❌ Sounds like every other AI article",
    tagColor: "text-red-400",
  },
  {
    label: "Marcus — YouTube Creator",
    bg: "#1A2A1A",
    border: "#166534",
    nameColor: "text-green-400",
    name: "With Brand Workspace (Creator voice)",
    quote:
      "Your best videos are probably doing nothing for your Google rankings. Here's the exact system I use to turn every video into 30 days of content that actually shows up in search...",
    tag: "✅ Sounds like Marcus. Not AI.",
    tagColor: "text-green-400",
  },
  {
    label: "Sarah's Agency — Client: Tech Company",
    bg: "#243447",
    border: "#3D5166",
    nameColor: "text-brand-red",
    name: "With Brand Workspace (Agency voice)",
    quote:
      "For technology companies navigating rapid market shifts, content efficiency isn't optional. The organizations outperforming their competitors are systematizing what used to require entire teams...",
    tag: "✅ Sounds like the client. Not AI.",
    tagColor: "text-green-400",
  },
];

const WORKSPACE_FIELDS = [
  { field: "Brand Name", value: "Marcus Creates", placeholder: false },
  { field: "Industry", value: "YouTube Content Creation and Online Courses", placeholder: false },
  {
    field: "Target Audience",
    value: "YouTube creators with 5K–100K subscribers who want to build a content business",
    placeholder: false,
  },
  {
    field: "Tone of Voice",
    value: "Direct, energetic, no-fluff — uses specific numbers and examples, speaks to creators as peers not students",
    placeholder: false,
  },
  {
    field: "Brand Values",
    value: "Authenticity, systems over hustle, practical over theoretical, specificity over generality",
    placeholder: false,
  },
];

const AGENCY_PROFILES = [
  { name: "TechFlow SaaS", desc: "Professional, data-driven" },
  { name: "Coach Maria", desc: "Warm, inspirational" },
  { name: "Forge Marketing", desc: "Bold, direct, results-focused" },
];

const FAQS = [
  {
    q: "How many brand workspaces can I create?",
    a: "Pro plan includes 3 brand workspaces. Agency plan includes unlimited brand workspaces — one per client or brand. There is no cap on the Agency plan.",
  },
  {
    q: "Can I update my brand workspace after creating it?",
    a: "Yes — edit your brand profile at any time. Changes apply to all future content generation in that workspace. Previously generated content is not affected.",
  },
  {
    q: "How different will the outputs be between two brand profiles?",
    a: "Significantly different. Two outputs generated from the exact same video using two different brand profiles will read like they were written by two completely different people. The brand voice layer is applied at the generation level — not as a post-edit pass.",
  },
  {
    q: "Can I import a brand guidelines document to set up my workspace?",
    a: "Currently brand workspaces are set up via the five-field form. Support for uploading brand guidelines documents (PDF, Google Doc) to auto-populate workspace settings is on our product roadmap.",
  },
];

export default function BrandWorkspaceFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">

      {/* 1. Hero */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Feature — Brand Workspace</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Stop Editing AI Content to Sound Like You.{" "}
            <GradientText>Train It Once. It Sounds Like You Forever.</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            The Brand Workspace is TubeScribed&apos;s core differentiator. Save your tone, audience,
            values, and writing style once — and every blog post, SOP, email, and social caption
            generated automatically matches your brand. No re-prompting. No editing for voice.
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

      {/* 2. Problem */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            Generic AI sounds like generic AI. Until now.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {VOICE_EXAMPLES.map((ex) => (
              <div key={ex.name} className="rounded-2xl p-7" style={{ backgroundColor: ex.bg, border: `1.5px solid ${ex.border}` }}>
                <p className={`font-dm-sans text-xs font-semibold uppercase tracking-wide mb-1 ${ex.nameColor}`}>{ex.label}</p>
                <p className="font-syne font-semibold text-navy-100 text-sm mb-4">{ex.name}</p>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed italic mb-4">
                  &ldquo;{ex.quote}&rdquo;
                </p>
                <p className={`font-dm-sans text-xs ${ex.tagColor}`}>{ex.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Five fields */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">Setup</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4 text-center">
            Five fields. Infinite voice consistency.
          </h2>
          <p className="font-dm-sans text-navy-400 text-base text-center mb-10">
            Set it once — every piece of content generated in this workspace automatically sounds like Marcus.
          </p>
          <div className="bg-navy-800 border border-navy-700 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-navy-700 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-brand-red opacity-75" />
              <span className="w-3 h-3 rounded-full bg-brand-orange opacity-75" />
              <span className="w-3 h-3 rounded-full bg-green-500 opacity-75" />
              <span className="font-mono text-navy-400 text-xs ml-2">Brand Workspace Setup</span>
            </div>
            <div className="p-6 space-y-4">
              {WORKSPACE_FIELDS.map((f) => (
                <div key={f.field}>
                  <label className="block font-dm-sans text-navy-500 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    {f.field}
                  </label>
                  <div className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-3 font-dm-sans text-navy-300 text-sm">
                    {f.value}
                  </div>
                </div>
              ))}
              <button className="w-full btn-gradient text-white font-semibold py-3 rounded-xl text-sm mt-2">
                Save Brand Workspace
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Agency use case */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">For Agencies</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">
            Unlimited client brand profiles
          </h2>
          <div className="bg-navy-900 border border-navy-700 rounded-2xl overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-navy-700">
              <p className="font-mono text-navy-400 text-xs">Brand Workspaces — Agency Account</p>
            </div>
            <div className="p-4 space-y-3">
              {AGENCY_PROFILES.map((p, i) => (
                <div key={p.name} className={`flex items-center justify-between px-5 py-3 rounded-xl border transition-colors ${i === 0 ? "bg-navy-800 border-brand-red/40" : "bg-navy-950 border-navy-700"}`}>
                  <div>
                    <p className="font-syne font-semibold text-navy-100 text-sm">{p.name}</p>
                    <p className="font-dm-sans text-navy-500 text-xs">{p.desc}</p>
                  </div>
                  {i === 0 && (
                    <span className="px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-medium border border-brand-red/20">
                      Active
                    </span>
                  )}
                </div>
              ))}
              <div className="border border-dashed border-navy-700 rounded-xl px-5 py-3 text-center">
                <p className="font-dm-sans text-navy-600 text-xs">+ Add another client workspace...</p>
              </div>
            </div>
          </div>
          <p className="font-dm-sans text-navy-400 text-sm leading-relaxed text-center">
            Agency plan users create unlimited brand profiles — one per client. When processing a
            client&apos;s video, select their profile. Every output automatically sounds like that
            client. No briefing. No editing for voice. One tool manages every client&apos;s content
            in their own voice.
          </p>
        </div>
      </section>

      {/* 5. Technical explanation */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">
            How TubeScribed applies your brand voice
          </h2>
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8">
            <div className="space-y-5 font-dm-sans text-navy-300 text-sm leading-relaxed">
              <p>
                When you generate content with TubeScribed, your brand profile is injected into the
                generation prompt as a structured context layer — not as a vague instruction, but as
                specific guidance that shapes every sentence.
              </p>
              <p>
                The AI doesn&apos;t just &ldquo;try to match your tone.&rdquo; It receives your
                exact audience definition, your specific vocabulary preferences, your tone parameters,
                and your values — and generates content that reflects all of them simultaneously.
              </p>
              <p>
                The result isn&apos;t &ldquo;AI content edited to sound like you.&rdquo; It&apos;s
                content generated <em className="text-navy-100">as you</em> from the first word.
              </p>
              <p className="text-navy-400">
                This is the difference between a generic prompt that says &ldquo;write in a casual
                tone&rdquo; and a brand system built by content strategists who understand that brand
                voice is more than tone — it&apos;s vocabulary, sentence structure, what you
                emphasize, what you leave out, and how you talk to your specific audience.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Brand context injected at generation — not applied as post-edit",
              "Audience definition shapes word choice and reading level",
              "Values determine what the content emphasizes and omits",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-navy-800 border border-navy-700 rounded-xl p-4">
                <CheckCircle2 size={15} className="text-brand-red shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-300 text-xs leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">FAQ</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">Your questions, answered</h2>
          <FeaturePageFAQ items={FAQS} />
          <div className="mt-10 text-center">
            <p className="font-dm-sans text-navy-400 text-sm mb-6">
              Set up your brand workspace free — first output free, no credit card.
            </p>
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">
              Set Up Your Brand Workspace
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
