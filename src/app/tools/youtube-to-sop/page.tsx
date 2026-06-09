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
      {/* JSON-LD */}
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

      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 pt-20 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-block bg-[#FF3B30] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase mb-5 font-dm-sans">
            TubeScribed Tools
          </span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            YouTube to SOP Generator
          </h1>
          <p className="font-dm-sans text-gray-600 text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Paste any tutorial or training video URL. Get a formatted SOP —
            purpose, steps, warnings, checklist — ready to delegate.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="inline-flex items-center justify-center bg-[#FF3B30] hover:bg-[#E53528] text-white font-syne font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-sm"
          >
            Generate My SOP Free
          </a>
          <p className="mt-3 font-dm-sans text-gray-500 text-sm">Free — first SOP, no credit card</p>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            Most teams re-explain the same processes over and over because no
            one documented them. Every tutorial or walkthrough video already
            contains a complete process — it just needs to be extracted and
            formatted.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            TubeScribed converts any tutorial video into a properly structured
            SOP: purpose statement, prerequisites, numbered steps, warnings,
            and a completion checklist. The output follows a standard format
            that&rsquo;s immediately usable in Notion, Confluence, or any
            knowledge base.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-8">
            One video. One SOP. Done in under 3 minutes — instead of a full
            afternoon writing and formatting documentation from scratch.
          </p>
          <ul className="space-y-4">
            {[
              "Purpose statement and prerequisites included automatically",
              "Numbered steps extracted from spoken instructions",
              "Warnings and notes flagged where the speaker highlights them",
              "Completion checklist generated from the steps",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#FF3B30] shrink-0 mt-0.5" />
                <span className="font-dm-sans text-gray-700 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample output preview */}
      <section className="bg-gray-50 border-y border-gray-200 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-xl text-gray-900 mb-5">Sample output</h2>
          <div className="bg-[#0F1923] border border-[#2D3F55] rounded-xl p-6 text-sm font-dm-sans">
            {/* Card header */}
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-4">
              SOP &middot; &ldquo;New Tool Onboarding — Dashboard Walkthrough&rdquo;
            </p>

            {/* Purpose */}
            <p className="text-gray-100 font-semibold mb-1">Purpose</p>
            <p className="text-gray-400 mb-4">
              Ensure new team members can navigate the dashboard, configure
              their workspace, and complete their first task within 30 minutes
              of account creation.
            </p>

            {/* Prerequisites */}
            <p className="text-gray-100 font-semibold mb-1">Prerequisites</p>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
              <li>Active account with Admin or Member role</li>
              <li>Access to the onboarding checklist email sent on sign-up</li>
            </ul>

            {/* Steps */}
            <p className="text-gray-100 font-semibold mb-2">Steps</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-1.5 mb-4">
              <li>Log in and navigate to Settings &rarr; Workspace.</li>
              <li>Upload your company logo and set the default timezone.</li>
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
            <div className="bg-[#1a2535] border-l-2 border-yellow-500/60 px-3 py-1.5 rounded text-gray-400 text-xs mb-4">
              <span className="font-semibold text-yellow-400/80">Warning:</span>{" "}
              Changing the workspace timezone after projects are created will
              shift all existing due dates. Confirm the timezone before inviting
              the full team.
            </div>

            {/* Completion Checklist */}
            <p className="text-gray-100 font-semibold mb-2">Completion Checklist</p>
            <ul className="space-y-1 text-gray-400">
              <li>&#9744; Workspace logo and timezone configured</li>
              <li>&#9744; At least one team member invited</li>
              <li>&#9744; First project created from a template</li>
            </ul>
          </div>
          <p className="mt-3 font-dm-sans text-gray-500 text-xs text-center">
            Full SOP including purpose, 12 numbered steps, 2 warnings, and
            completion checklist — from a 14-minute onboarding walkthrough.
          </p>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-[#1E2A3A] py-14 px-4 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-syne font-bold text-2xl text-white mb-3">
            Turn your training videos into SOPs
          </h2>
          <p className="font-dm-sans text-gray-300 mb-6">
            Your team shouldn&rsquo;t need to re-watch a video to follow a process.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="inline-flex items-center justify-center bg-[#FF3B30] hover:bg-[#E53528] text-white font-syne font-bold text-base px-8 py-3.5 rounded-xl transition-colors"
          >
            Generate My SOP Free
          </a>
          <p className="mt-3 text-gray-400 text-sm font-dm-sans">No credit card. Your first SOP is free.</p>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-semibold text-lg text-gray-900 mb-5">Related tools</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              {
                title: "Video to Training Guide Generator",
                desc: "Learning objectives, sections, knowledge check",
                href: "/tools/video-to-training-guide",
              },
              {
                title: "YouTube Transcript Generator",
                desc: "Clean, accurate transcripts in 30 seconds",
                href: "/tools/youtube-transcript-generator",
              },
            ].map((tool) => (
              <div
                key={tool.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#FF3B30] transition-colors flex-1"
              >
                <p className="font-syne font-semibold text-gray-900 text-sm mb-1">{tool.title}</p>
                <p className="text-gray-500 text-xs mb-3">{tool.desc}</p>
                <a href={tool.href} className="text-[#FF3B30] text-xs font-semibold hover:underline">
                  Try it free &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-8">Common questions</h2>
          <dl>
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
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6 last:border-0 mb-6 last:mb-0">
                <dt className="font-syne font-semibold text-gray-900 mb-2">{faq.q}</dt>
                <dd className="font-dm-sans text-gray-600 text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
