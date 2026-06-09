import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import ToolEmbed from '@/components/ToolEmbed'

export const metadata: Metadata = buildMetadata({
  title: "YouTube to Email Sequence — Turn Any Video Into 5 Emails",
  description:
    "Turn any YouTube video into a 5-email nurture sequence with subject lines built for open rates and direct response copy throughout.",
  path: "/tools/youtube-to-email-sequence",
});

export default function YouTubeToEmailSequencePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tubescribed.com" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.tubescribed.com/tools" },
      { "@type": "ListItem", position: 3, name: "YouTube to Email Sequence Generator", item: "https://www.tubescribed.com/tools/youtube-to-email-sequence" },
    ],
  }

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* TLDR */}
      <div className="bg-gray-100 border-b border-gray-200 py-2 px-4 text-center text-sm text-gray-600">
        <strong>TL;DR:</strong> Paste a YouTube URL → get a 5-email nurture sequence with subject lines and CTAs in under 3 minutes. Free, no credit card.
      </div>

      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 pt-20 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-block bg-[#FF3B30] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase mb-5 font-dm-sans">
            TubeScribed Tools
          </span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            YouTube to Email Sequence Generator
          </h1>
          <p className="font-dm-sans text-gray-600 text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Paste a YouTube URL. Get a 5-email sequence with open-rate subject
            lines and one CTA per email. Direct response principles. Your brand
            voice.
          </p>
          <ToolEmbed
            outputType="email_sequence"
            placeholder="Paste YouTube URL for email content..."
            buttonText="Generate Email Sequence →"
            successBadges={[
              "✓ 5 Emails Generated",
              "✓ Subject Lines Written",
              "✓ CTAs Included",
            ]}
          />
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            Most creators have a YouTube library full of content that never
            reaches their email list. Every tutorial, case study, or how-to
            video contains enough material for a complete email nurture
            sequence.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            TubeScribed converts the video into 5 emails: a welcome + quick
            win, a deeper dive, a proof email, an objection handler, and a
            direct ask. Each email has a subject line written for open rates,
            preview text, and one CTA.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-8">
            The sequence follows direct response principles — each email earns
            the next one. You get a complete draft ready for your ESP in under
            3 minutes.
          </p>
          <ul className="space-y-4">
            {[
              "5 complete emails with subject lines and preview text",
              "Direct response structure — each email earns the next",
              "One CTA per email — no diluted attention",
              "Brand voice applied — reads like your emails, not generic AI",
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
          <h2 className="font-syne font-bold text-xl text-gray-900 mb-5">What Does a YouTube to Email Sequence Output Look Like?</h2>
          <div className="bg-[#0F1923] border border-[#2D3F55] rounded-xl p-6 text-sm font-dm-sans">
            {/* Email label */}
            <p className="text-[#FF3B30] font-semibold text-xs uppercase tracking-wide mb-4">
              Email 1 of 5 — Welcome + Quick Win
            </p>

            {/* Subject line */}
            <div className="mb-1">
              <span className="text-gray-500 text-xs">Subject: </span>
              <span className="text-gray-200">
                Your first result in 5 minutes (here&rsquo;s how)
              </span>
            </div>

            {/* Preview text */}
            <div className="mb-4">
              <span className="text-gray-500 text-xs">Preview: </span>
              <span className="text-gray-400 italic">
                Skip the setup overwhelm. One thing, right now.
              </span>
            </div>

            <hr className="border-[#2D3F55] mb-4" />

            {/* Email body */}
            <div className="text-gray-300 text-sm leading-relaxed space-y-2">
              <p>Hey [First Name],</p>
              <p>
                Welcome. You can spend the next hour reading documentation, or
                you can get your first result in the next five minutes.
              </p>
              <p>Here&rsquo;s the fastest path:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-300 pl-1">
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
                  className="text-[#FF3B30]"
                >
                  &rarr; Try it now: [Link]
                </a>
              </p>
            </div>

            <hr className="border-[#2D3F55] my-4" />

            <p className="text-gray-500 text-xs">— [Sender Name]</p>
          </div>
          <p className="mt-3 font-dm-sans text-gray-500 text-xs text-center">
            5-email sequence including subject lines, preview text, and direct
            response body copy — from a 19-minute tutorial video.
          </p>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-[#1E2A3A] py-14 px-4 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-syne font-bold text-2xl text-white mb-3">
            Turn your best tutorial into an email sequence
          </h2>
          <p className="font-dm-sans text-gray-300 mb-6">
            Your subscribers should know about every useful video you make.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="inline-flex items-center justify-center bg-[#FF3B30] hover:bg-[#E53528] text-white font-syne font-bold text-base px-8 py-3.5 rounded-xl transition-colors"
          >
            Generate My Email Sequence Free
          </a>
          <p className="mt-3 text-gray-400 text-sm font-dm-sans">No credit card. Your first sequence is free.</p>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-semibold text-lg text-gray-900 mb-5">More Free YouTube Content Tools</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              {
                title: "YouTube to Social Captions",
                desc: "LinkedIn, X, and Instagram — each rewritten",
                href: "/tools/youtube-to-social-captions",
              },
              {
                title: "YouTube to Blog Post Generator",
                desc: "SEO article from any video",
                href: "/tools/youtube-to-blog-post",
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
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-8">YouTube to Email Sequence Generator — Frequently Asked Questions</h2>
          <dl>
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
