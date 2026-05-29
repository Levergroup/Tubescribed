import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CheckSquare, AlertTriangle, X, Check } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { FeaturePageFAQ } from "@/components/FeaturePageFAQ";

export const metadata: Metadata = {
  title: "AI SOP Generator — Turn Any YouTube Video Into a Standard Operating Procedure",
  description:
    "TubeScribed generates formatted SOPs from any YouTube video in seconds. Purpose statement, prerequisites, numbered steps, warnings, and completion checklist — in your brand voice.",
  alternates: {
    canonical: "https://www.tubescribed.com/features/sop-generator",
  },
};

const USE_CASES = [
  {
    title: "Business coaches",
    body: "Turn coaching call recordings into reusable SOPs clients can follow without you. Your methodology documented once — delivered consistently forever.",
  },
  {
    title: "Marketing agencies",
    body: "Convert your YouTube tutorials and process walkthroughs into client-facing SOPs. Stop re-explaining the same processes to every new client.",
  },
  {
    title: "Course creators",
    body: "Turn every video lesson into a structured SOP students can reference as a quick guide. Improve completion rates and reduce support questions.",
  },
  {
    title: "Operations teams",
    body: "Process every training video in your library into a searchable, updatable SOP. Institutional knowledge preserved. New hire onboarding systematized.",
  },
];

const FAQS = [
  {
    q: "What types of videos produce the best SOPs?",
    a: "Tutorial videos, process walkthroughs, how-to guides, training recordings, and coaching calls produce the best SOPs. The video should walk through a process with identifiable steps. Narrative or interview-style videos with no clear process flow produce weaker SOPs.",
  },
  {
    q: "Can I edit the SOP after it's generated?",
    a: "Yes — all TubeScribed outputs are editable text. Copy the SOP to any document editor, paste into Notion, Confluence, or your LMS, and edit as needed. Most users find the output is 85-95% complete with minor edits required.",
  },
  {
    q: "Will the SOP sound like my company's terminology?",
    a: "Set up a Brand Workspace with your company's terminology, tone, and style. Every SOP generated using that brand profile automatically uses your vocabulary and matches your documentation format.",
  },
  {
    q: "Can I generate SOPs from Zoom recordings or Loom videos uploaded to YouTube?",
    a: "Yes — any video uploaded to YouTube as public or unlisted works. Many users upload their Zoom recordings, Loom walkthroughs, or internal training videos to an unlisted YouTube link and process them through TubeScribed.",
  },
];

export default function SOPGeneratorFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">

      {/* 1. Hero */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Feature — SOP Generator</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Turn Any YouTube Video Into a Formatted Standard Operating Procedure —{" "}
            <GradientText>In Seconds.</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            Not a bullet point list. A real SOP. Purpose statement, prerequisites, numbered steps,
            decision points, warnings, and completion checklist — all generated from your video in
            your brand voice.
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

      {/* 2. SOP Preview */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4 text-center">
            What TubeScribed generates — not a summary, a real SOP
          </h2>
          <p className="font-dm-sans text-navy-400 text-base text-center mb-10">
            Every SOP includes this structure — generated automatically from your video content.
          </p>
          <div className="bg-navy-950 border border-navy-700 rounded-2xl overflow-hidden">
            {/* Document header */}
            <div className="border-b border-navy-700 px-6 py-4 flex items-center justify-between">
              <div>
                <p className="font-syne font-semibold text-navy-100 text-sm">
                  SOP: How to Onboard a New Agency Client
                </p>
                <p className="font-dm-sans text-navy-500 text-xs mt-0.5">
                  Generated from: 47-minute YouTube video · Brand: [Your Agency Name]
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                Generated
              </span>
            </div>
            {/* Document body */}
            <div className="px-6 py-6 space-y-6 font-mono text-sm">
              <div>
                <p className="text-brand-red font-bold text-xs tracking-widest mb-2">PURPOSE</p>
                <p className="text-navy-300 leading-relaxed">
                  This SOP defines the standard process for onboarding new agency clients to ensure
                  a consistent, professional experience from signed contract to first deliverable.
                </p>
              </div>
              <div>
                <p className="text-brand-red font-bold text-xs tracking-widest mb-2">PREREQUISITES</p>
                <ul className="space-y-1 text-navy-300">
                  <li>• Signed contract and deposit received</li>
                  <li>• Client questionnaire completed</li>
                  <li>• Access to client&apos;s existing assets requested</li>
                </ul>
              </div>
              <div>
                <p className="text-brand-red font-bold text-xs tracking-widest mb-3">STEPS</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-navy-100 font-semibold">1. Send welcome email within 2 hours of contract signing</p>
                    <p className="text-navy-500 text-xs mt-1 pl-3">→ Use welcome email template in Google Drive</p>
                    <p className="text-navy-500 text-xs pl-3">→ CC account manager and project lead</p>
                  </div>
                  <div>
                    <p className="text-navy-100 font-semibold">2. Schedule kickoff call within 48 hours</p>
                    <p className="text-navy-500 text-xs mt-1 pl-3">→ Use Calendly link in email signature</p>
                    <p className="text-navy-500 text-xs pl-3">→ Prepare kickoff agenda (template: Drive/Templates)</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2.5 flex items-start gap-2">
                    <AlertTriangle size={13} className="text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-amber-300 text-xs">
                      WARNING: Do not begin any work before kickoff call confirms scope alignment.
                    </p>
                  </div>
                  <div>
                    <p className="text-navy-100 font-semibold">3. Set up client workspace in project management tool...</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-brand-red font-bold text-xs tracking-widest mb-2">COMPLETION CHECKLIST</p>
                <ul className="space-y-1.5 text-navy-400">
                  {["Welcome email sent and confirmed received", "Kickoff call scheduled and agenda sent", "Client workspace created and permissions set"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckSquare size={13} className="text-navy-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Prompt Advantage */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">
            Why Our SOP Output Is Different
          </p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-12 text-center">
            Generic AI gives you bullet points. We give you a working SOP.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Left - generic */}
            <div className="rounded-2xl p-7" style={{ backgroundColor: "#2A1A1A", border: "1.5px solid #7F1D1D" }}>
              <div className="flex items-center gap-2 mb-4">
                <X size={15} className="text-red-400" />
                <p className="font-dm-sans text-red-400 text-xs font-semibold uppercase tracking-wide">Generic AI SOP output</p>
              </div>
              <div className="font-mono text-sm text-navy-400 space-y-1.5 mb-4">
                <p>Here are the steps for client onboarding:</p>
                <p>• Welcome the client</p>
                <p>• Schedule a meeting</p>
                <p>• Set up their project</p>
                <p>• Start working on deliverables</p>
                <p>• Check in regularly</p>
              </div>
              <p className="font-dm-sans text-red-400 text-xs">❌ Vague. Not actionable. Not followable.</p>
            </div>
            {/* Right - TubeScribed */}
            <div className="rounded-2xl p-7" style={{ backgroundColor: "#1A2A1A", border: "1.5px solid #166534" }}>
              <div className="flex items-center gap-2 mb-4">
                <Check size={15} className="text-green-400" />
                <p className="font-dm-sans text-green-400 text-xs font-semibold uppercase tracking-wide">TubeScribed SOP output</p>
              </div>
              <div className="font-mono text-xs text-navy-300 space-y-1.5 mb-4 leading-relaxed">
                <p className="text-brand-red font-bold text-xs tracking-widest">PURPOSE</p>
                <p className="text-navy-300">This SOP defines the standard process for...</p>
                <p className="text-brand-red font-bold text-xs tracking-widest mt-2">PREREQUISITES</p>
                <p>• Signed contract and deposit received</p>
                <p className="text-brand-red font-bold text-xs tracking-widest mt-2">STEP 1</p>
                <p>Send welcome email within 2 hours...</p>
                <p className="text-amber-400 text-xs">⚠ WARNING: Do not begin work before...</p>
                <p className="text-brand-red font-bold text-xs tracking-widest mt-2">COMPLETION CHECKLIST</p>
                <p>☐ Welcome email sent · ☐ Call scheduled</p>
              </div>
              <p className="font-dm-sans text-green-400 text-xs">✅ Structured. Specific. Actually followable.</p>
            </div>
          </div>

          {/* Prompt explanation callout */}
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8">
            <p className="font-syne font-bold text-navy-100 text-lg mb-4">Why our SOP prompt produces real SOPs</p>
            <p className="font-dm-sans text-navy-400 text-sm leading-relaxed mb-5">
              Most AI SOP prompts say &ldquo;create a step-by-step process from this content.&rdquo; Ours applies
              operational design principles built from years of real business documentation. Our SOP prompt
              specifies:
            </p>
            <div className="space-y-2.5 mb-5">
              {[
                "Purpose statement — why this process exists, not just what it does",
                "Prerequisites section — what someone needs before starting",
                "Consistent step granularity — no mixing overview steps with detail steps",
                "Decision points — explicit IF/THEN logic for branching paths",
                "Warning callouts — common mistakes flagged before they happen",
                "Completion checklist — defines \"done\" so nothing gets missed",
                "Brand voice applied — sounds like your organization, not generic AI",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-brand-red shrink-0 mt-0.5" />
                  <p className="font-dm-sans text-navy-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-dm-sans text-navy-500 text-sm italic">
              This is the SOP structure used by operators running real businesses — not a template from a
              business writing guide. Continuously updated as operational best practices evolve.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Who uses it */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            Who generates SOPs with TubeScribed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-navy-900 border border-navy-700 rounded-2xl p-7 hover:border-brand-red/50 transition-colors duration-300">
                <h3 className="font-syne font-semibold text-navy-100 text-base mb-3">{uc.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            From video to SOP in three steps
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {[
              { n: "01", text: "Paste the YouTube URL of your tutorial, training video, or process walkthrough" },
              { n: "02", text: "TubeScribed transcribes the audio and applies the SOP generation prompt" },
              { n: "03", text: "Receive a fully formatted SOP in your brand voice — ready to save, share, or publish" },
            ].map((step) => (
              <div key={step.n} className="bg-navy-800 border border-navy-700 rounded-2xl p-8 text-center">
                <span className="inline-block font-syne font-bold text-5xl text-navy-700 mb-6 leading-none">{step.n}</span>
                <p className="font-dm-sans text-navy-300 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="font-dm-sans text-navy-500 text-sm text-center">
            Processing time: Under 15 minutes ≈ 30 seconds · Under 45 minutes ≈ 90 seconds
          </p>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">FAQ</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">Your questions, answered</h2>
          <FeaturePageFAQ items={FAQS} />
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">
            Your best processes are already recorded. Document them today.
          </h2>
          <p className="font-dm-sans text-navy-400 text-base mb-8 leading-relaxed">
            Try the SOP generator free — paste any tutorial or process video URL. First output free,
            no credit card.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">
            Generate Your First SOP Free
          </Button>
        </div>
      </section>
    </div>
  );
}
