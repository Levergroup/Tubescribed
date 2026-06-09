import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "YouTube to SOP Generator — Turn Any Tutorial Into a Process Doc",
  description:
    "Convert any YouTube tutorial or training video into a formatted SOP with purpose statement, steps, warnings, and completion checklist.",
  path: "/tools/youtube-to-sop",
});

export default function YouTubeToSOPPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What types of videos work best for SOP generation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tutorial videos, software walkthroughs, onboarding recordings, how-to demonstrations, and training calls all convert well. Videos where the speaker describes a sequential process step-by-step produce the highest-quality output. Vlogs, interviews, and discussion-format content are not suitable.",
                },
              },
              {
                "@type": "Question",
                name: "What format does the SOP output use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TubeScribed generates SOPs in structured Markdown that imports cleanly into Notion, Confluence, Google Docs, or any knowledge base. The format includes a purpose statement, prerequisites section, numbered steps, any warnings the speaker highlighted, and a completion checklist.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to generate an SOP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Under 3 minutes for most tutorial videos. A 20-minute walkthrough generates a complete SOP draft in roughly 2 minutes. The output typically needs a light review pass to verify step accuracy and add any screenshots.",
                },
              },
              {
                "@type": "Question",
                name: "Can I customize the SOP format?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. TubeScribed's brand workspace lets you define your preferred SOP template — custom section names, formatting conventions, and terminology. Your template is applied automatically to every SOP generated from that workspace.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "YouTube to SOP Generator",
            applicationCategory: "ProductivityApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            operatingSystem: "Web",
            url: "https://app.tubescribed.com/signup",
          }),
        }}
      />

      {/* ── 1. Hero ── */}
      <section className="bg-navy-950 pt-20 pb-14 text-center px-4">
        <span className="inline-block mb-5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold tracking-wide uppercase font-dm-sans">
          TubeScribed Tools
        </span>

        <h1 className="font-syne font-bold text-4xl sm:text-5xl text-navy-100 max-w-3xl mx-auto leading-tight">
          YouTube to SOP Generator
        </h1>

        <p className="mt-5 text-navy-300 text-xl max-w-2xl mx-auto font-dm-sans leading-relaxed">
          Paste any tutorial or training video URL. Get a formatted SOP —
          purpose, steps, warnings, checklist — ready to delegate.
        </p>

        <div className="mt-8">
          <a
            href="https://app.tubescribed.com/signup"
            className="btn-gradient text-white font-syne font-bold text-lg px-10 py-4 rounded-xl inline-block"
          >
            Generate My SOP Free
          </a>
        </div>

        <p className="mt-4 text-navy-400 text-sm font-dm-sans">
          Free — first SOP, no credit card
        </p>
      </section>

      {/* ── 2. What it does ── */}
      <section className="bg-navy-900 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-5 font-dm-sans text-navy-300 text-base leading-relaxed">
            <p>
              Most teams re-explain the same processes over and over because no
              one documented them. Every tutorial or walkthrough video already
              contains a complete process — it just needs to be extracted and
              formatted.
            </p>
            <p>
              TubeScribed converts any tutorial video into a properly structured
              SOP: purpose statement, prerequisites, numbered steps, warnings,
              and a completion checklist. The output follows a standard format
              that&rsquo;s immediately usable in Notion, Confluence, or any
              knowledge base.
            </p>
            <p>
              One video. One SOP. Done in under 3 minutes — instead of a full
              afternoon writing and formatting documentation from scratch.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {[
              "Purpose statement and prerequisites included automatically",
              "Numbered steps extracted from spoken instructions",
              "Warnings and notes flagged where the speaker highlights them",
              "Completion checklist generated from the steps",
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 font-dm-sans text-navy-200">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. Sample output preview ── */}
      <section className="bg-navy-950 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-navy-100 mb-6">
            Sample output
          </h2>

          <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 text-sm font-dm-sans">
            {/* Card header */}
            <p className="text-navy-400 text-xs font-semibold uppercase tracking-wide mb-4">
              SOP &middot; &ldquo;New Tool Onboarding — Dashboard Walkthrough&rdquo;
            </p>

            {/* Purpose */}
            <p className="text-navy-100 font-semibold mb-1">Purpose</p>
            <p className="text-navy-400 mb-4">
              Ensure new team members can navigate the dashboard, configure
              their workspace, and complete their first task within 30 minutes
              of account creation.
            </p>

            {/* Prerequisites */}
            <p className="text-navy-100 font-semibold mb-1">Prerequisites</p>
            <ul className="list-disc list-inside text-navy-400 mb-4 space-y-1">
              <li>Active account with Admin or Member role</li>
              <li>Access to the onboarding checklist email sent on sign-up</li>
            </ul>

            {/* Steps */}
            <p className="text-navy-100 font-semibold mb-2">Steps</p>
            <ol className="list-decimal list-inside text-navy-300 space-y-1.5 mb-4">
              <li>Log in and navigate to Settings &rarr; Workspace.</li>
              <li>
                Upload your company logo and set the default timezone.
              </li>
              <li>
                Invite team members via the &ldquo;Members&rdquo; tab using
                their work email addresses.
              </li>
              <li>
                Create your first project by clicking &ldquo;New Project&rdquo;
                and selecting a template.
              </li>
            </ol>

            {/* Warning */}
            <div className="bg-navy-700/50 border-l-2 border-yellow-500/60 px-3 py-1.5 rounded text-navy-400 text-xs mb-4">
              <span className="font-semibold text-yellow-400/80">Warning:</span>{" "}
              Changing the workspace timezone after projects are created will
              shift all existing due dates. Confirm the timezone before inviting
              the full team.
            </div>

            {/* Completion Checklist */}
            <p className="text-navy-100 font-semibold mb-2">
              Completion Checklist
            </p>
            <ul className="space-y-1 text-navy-400">
              <li>&#9744; Workspace logo and timezone configured</li>
              <li>&#9744; At least one team member invited</li>
              <li>&#9744; First project created from a template</li>
            </ul>
          </div>

          <p className="mt-4 text-navy-400 text-xs font-dm-sans text-center">
            Full SOP including purpose, 12 numbered steps, 2 warnings, and
            completion checklist — from a 14-minute onboarding walkthrough.
          </p>
        </div>
      </section>

      {/* ── 4. Second CTA ── */}
      <section className="bg-[#1E2A3A] py-12 text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-navy-100 mb-3">
            Turn your training videos into SOPs
          </h2>
          <p className="text-navy-300 font-dm-sans text-base mb-7">
            Your team shouldn&rsquo;t need to re-watch a video to follow a
            process.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="btn-gradient text-white font-syne font-bold text-lg px-10 py-4 rounded-xl inline-block"
          >
            Generate My SOP Free
          </a>
          <p className="mt-4 text-navy-400 text-sm font-dm-sans">
            No credit card. Your first SOP is free.
          </p>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section className="bg-navy-950 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-navy-100 mb-10">
            Common questions
          </h2>

          <div className="space-y-0">
            {[
              {
                q: "What types of videos work best for SOP generation?",
                a: "Tutorial videos, software walkthroughs, onboarding recordings, how-to demonstrations, and training calls all convert well. Videos where the speaker describes a sequential process step-by-step produce the highest-quality output. Vlogs, interviews, and discussion-format content are not suitable.",
              },
              {
                q: "What format does the SOP output use?",
                a: "TubeScribed generates SOPs in structured Markdown that imports cleanly into Notion, Confluence, Google Docs, or any knowledge base. The format includes a purpose statement, prerequisites section, numbered steps, any warnings the speaker highlighted, and a completion checklist.",
              },
              {
                q: "How long does it take to generate an SOP?",
                a: "Under 3 minutes for most tutorial videos. A 20-minute walkthrough generates a complete SOP draft in roughly 2 minutes. The output typically needs a light review pass to verify step accuracy and add any screenshots.",
              },
              {
                q: "Can I customize the SOP format?",
                a: "Yes. TubeScribed's brand workspace lets you define your preferred SOP template — custom section names, formatting conventions, and terminology. Your template is applied automatically to every SOP generated from that workspace.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-navy-800 pb-6 pt-6 first:pt-0">
                <p className="font-syne font-semibold text-navy-100 text-base mb-2">
                  {q}
                </p>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
