import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "YouTube to Email Sequence — Turn Any Video Into 5 Emails",
  description:
    "Turn any YouTube video into a 5-email nurture sequence with subject lines built for open rates and direct response copy throughout.",
  path: "/tools/youtube-to-email-sequence",
});

export default function YouTubeToEmailSequencePage() {
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
                name: "How many emails does the sequence include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Five emails by default: a welcome + quick win, a deeper dive into the topic, a proof or case study email, an objection handler, and a direct ask. The structure follows a standard nurture sequence format. You can expand or trim the sequence after generation.",
                },
              },
              {
                "@type": "Question",
                name: "Will the emails match my brand voice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, with brand voice settings configured. Set your tone, preferred salutation, and terminology once — TubeScribed applies them to every email sequence generated in that workspace. Without brand settings, the output uses clean, professional direct-response copy.",
                },
              },
              {
                "@type": "Question",
                name: "What types of videos produce the best email sequences?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tutorial videos, case studies, how-to content, and product demonstrations convert well. The video needs to contain enough instructional or persuasive content to fuel 5 distinct emails. Short videos under 10 minutes may produce thinner sequences.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use these emails in any ESP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. TubeScribed delivers the sequences as plain text that imports into any email service provider — Loops, Mailchimp, ConvertKit, ActiveCampaign, Klaviyo, and others. Copy, paste, and schedule.",
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
            name: "YouTube to Email Sequence Generator",
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
          YouTube to Email Sequence Generator
        </h1>

        <p className="mt-5 text-navy-300 text-xl max-w-2xl mx-auto font-dm-sans leading-relaxed">
          Paste a YouTube URL. Get a 5-email sequence with open-rate subject
          lines and one CTA per email. Direct response principles. Your brand
          voice.
        </p>

        <div className="mt-8">
          <a
            href="https://app.tubescribed.com/signup"
            className="btn-gradient text-white font-syne font-bold text-lg px-10 py-4 rounded-xl inline-block"
          >
            Generate My Email Sequence Free
          </a>
        </div>

        <p className="mt-4 text-navy-400 text-sm font-dm-sans">
          Free — first sequence, no credit card
        </p>
      </section>

      {/* ── 2. What it does ── */}
      <section className="bg-navy-900 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-5 font-dm-sans text-navy-300 text-base leading-relaxed">
            <p>
              Most creators have a YouTube library full of content that never
              reaches their email list. Every tutorial, case study, or how-to
              video contains enough material for a complete email nurture
              sequence.
            </p>
            <p>
              TubeScribed converts the video into 5 emails: a welcome + quick
              win, a deeper dive, a proof email, an objection handler, and a
              direct ask. Each email has a subject line written for open rates,
              preview text, and one CTA.
            </p>
            <p>
              The sequence follows direct response principles — each email earns
              the next one. You get a complete draft ready for your ESP in under
              3 minutes.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {[
              "5 complete emails with subject lines and preview text",
              "Direct response structure — each email earns the next",
              "One CTA per email — no diluted attention",
              "Brand voice applied — reads like your emails, not generic AI",
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
            {/* Email label */}
            <p className="text-brand-red font-semibold text-xs uppercase tracking-wide mb-4">
              Email 1 of 5 — Welcome + Quick Win
            </p>

            {/* Subject line */}
            <div className="mb-1">
              <span className="text-navy-500 text-xs">Subject: </span>
              <span className="text-navy-200">
                Your first result in 5 minutes (here&rsquo;s how)
              </span>
            </div>

            {/* Preview text */}
            <div className="mb-4">
              <span className="text-navy-500 text-xs">Preview: </span>
              <span className="text-navy-400 italic">
                Skip the setup overwhelm. One thing, right now.
              </span>
            </div>

            <hr className="border-navy-700 mb-4" />

            {/* Email body */}
            <div className="text-navy-300 text-sm leading-relaxed space-y-2">
              <p>Hey [First Name],</p>
              <p>
                Welcome. You can spend the next hour reading documentation, or
                you can get your first result in the next five minutes.
              </p>
              <p>Here&rsquo;s the fastest path:</p>
              <ol className="list-decimal list-inside space-y-1 text-navy-300 pl-1">
                <li>Paste any YouTube tutorial URL into the input field.</li>
                <li>Select your output format (SOP, email sequence, or summary).</li>
                <li>Click Generate — your draft is ready in under 3 minutes.</li>
              </ol>
              <p>
                Most people are surprised by how clean the first draft is.
              </p>
              <p>
                <a
                  href="https://app.tubescribed.com/signup"
                  className="text-brand-red"
                >
                  &rarr; Try it now: [Link]
                </a>
              </p>
            </div>

            <hr className="border-navy-700 my-4" />

            <p className="text-navy-500 text-xs">— [Sender Name]</p>
          </div>

          <p className="mt-4 text-navy-400 text-xs font-dm-sans text-center">
            5-email sequence including subject lines, preview text, and direct
            response body copy — from a 19-minute tutorial video.
          </p>
        </div>
      </section>

      {/* ── 4. Second CTA ── */}
      <section className="bg-[#1E2A3A] py-12 text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-navy-100 mb-3">
            Turn your best tutorial into an email sequence
          </h2>
          <p className="text-navy-300 font-dm-sans text-base mb-7">
            Your subscribers should know about every useful video you make.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="btn-gradient text-white font-syne font-bold text-lg px-10 py-4 rounded-xl inline-block"
          >
            Generate My Email Sequence Free
          </a>
          <p className="mt-4 text-navy-400 text-sm font-dm-sans">
            No credit card. Your first sequence is free.
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
                q: "How many emails does the sequence include?",
                a: "Five emails by default: a welcome + quick win, a deeper dive into the topic, a proof or case study email, an objection handler, and a direct ask. The structure follows a standard nurture sequence format. You can expand or trim the sequence after generation.",
              },
              {
                q: "Will the emails match my brand voice?",
                a: "Yes, with brand voice settings configured. Set your tone, preferred salutation, and terminology once — TubeScribed applies them to every email sequence generated in that workspace. Without brand settings, the output uses clean, professional direct-response copy.",
              },
              {
                q: "What types of videos produce the best email sequences?",
                a: "Tutorial videos, case studies, how-to content, and product demonstrations convert well. The video needs to contain enough instructional or persuasive content to fuel 5 distinct emails. Short videos under 10 minutes may produce thinner sequences.",
              },
              {
                q: "Can I use these emails in any ESP?",
                a: "Yes. TubeScribed delivers the sequences as plain text that imports into any email service provider — Loops, Mailchimp, ConvertKit, ActiveCampaign, Klaviyo, and others. Copy, paste, and schedule.",
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
