import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import ToolEmbed from '@/components/ToolEmbed'

export const metadata: Metadata = buildMetadata({
  title: "YouTube to FAQ Generator — Google Featured Snippet Ready",
  description:
    "Turn any YouTube video into a FAQ document structured for Google featured snippets and People Also Ask boxes. Schema markup ready.",
  path: "/tools/youtube-to-faq",
});

export default function YouTubeToFAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes a good FAQ for Google featured snippets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Questions should match natural search queries — the way people actually type into Google, not corporate-speak. Answers should be 40-60 words, start with a direct response to the question, and be factually specific. TubeScribed formats questions and answers to this spec automatically.",
        },
      },
      {
        "@type": "Question",
        name: "How many FAQ questions does it generate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 8-12 questions per video, grouped by topic. The count depends on the video's content density. You review and select which questions to keep before exporting — some may be too specific or too similar to others.",
        },
      },
      {
        "@type": "Question",
        name: "Is the FAQPage schema markup included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TubeScribed exports the FAQ in JSON-LD FAQPage schema format, ready to paste into your page's head section or a schema markup plugin. No separate schema generator needed.",
        },
      },
      {
        "@type": "Question",
        name: "What video types produce the best FAQs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tutorial videos, product demonstrations, how-to content, and explainer videos generate the strongest FAQ output. The video needs to address questions — either explicitly in a Q&A format or implicitly through its instructional content.",
        },
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "YouTube to FAQ Generator",
    applicationCategory: "ProductivityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Turn any YouTube video into a FAQ document structured for Google featured snippets and People Also Ask boxes. Schema markup ready.",
    url: "https://app.tubescribed.com/signup",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tubescribed.com" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.tubescribed.com/tools" },
      { "@type": "ListItem", position: 3, name: "YouTube to FAQ Generator", item: "https://www.tubescribed.com/tools/youtube-to-faq" },
    ],
  }

  const relatedTools = [
    {
      title: "YouTube to Blog Post Generator",
      desc: "SEO article with H2 structure and FAQ section",
      href: "/tools/youtube-to-blog-post",
    },
    {
      title: "YouTube Transcript Generator",
      desc: "Clean, accurate transcript from any video",
      href: "/tools/youtube-transcript-generator",
    },
    {
      title: "YouTube to SOP Generator",
      desc: "Tutorial videos into formatted process docs",
      href: "/tools/youtube-to-sop",
    },
  ];

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 pt-20 pb-14 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block bg-[#FF3B30] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase mb-5 font-dm-sans">
            TubeScribed Tools
          </span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            YouTube to FAQ Generator
          </h1>
          <p className="font-dm-sans text-gray-600 text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Paste a YouTube URL. Get a FAQ document with questions written as search queries and
            answers calibrated for Google featured snippets.
          </p>
          <ToolEmbed
            outputType="faq"
            placeholder="Paste YouTube URL to generate FAQ..."
            buttonText="Generate FAQ →"
            successBadges={[
              "✓ FAQ Generated",
              "✓ Schema Markup Ready",
              "✓ Google-Optimized",
            ]}
          />
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white py-14 px-4">
        <div className="mx-auto max-w-3xl">
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            Most FAQ sections are written as questions the company wants to answer, not questions
            people actually search. TubeScribed extracts questions from your video content and
            rewrites them as natural search queries — the way people type into Google.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            The answers are calibrated for featured snippets: 40-60 words, direct, starting with a
            clear response to the question. This format is what Google pulls for People Also Ask
            boxes and featured snippet positions.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-8">
            The output includes JSON-LD FAQPage schema markup ready to paste directly into your
            page&apos;s code — no schema generator needed.
          </p>
          <ul className="space-y-4">
            {[
              "Questions written as real search queries — not corporate FAQ language",
              "Answers calibrated for featured snippets (40-60 words, direct)",
              "FAQPage JSON-LD schema included — paste-ready",
              "Questions grouped by topic for better page structure",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#FF3B30]" />
                <span className="font-dm-sans text-gray-700 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample output */}
      <section className="bg-gray-50 border-y border-gray-200 py-14 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne font-bold text-xl text-gray-900 mb-5">What Does a YouTube FAQ Generator Output Look Like?</h2>
          <div className="bg-[#0F1923] border border-[#2D3F55] rounded-xl p-6 text-sm font-dm-sans">
            <p className="text-[#94A3B8] text-xs mb-4 uppercase tracking-wide">
              FAQ &middot; &ldquo;How to Repurpose YouTube Content&rdquo; &middot; 11 questions
              extracted
            </p>
            {[
              {
                q: "How do you repurpose YouTube content for a blog?",
                a: "Export your YouTube transcript, then rewrite it as a structured article with keyword-optimized headings, a standalone introduction, and a conclusion. A repurposing tool like TubeScribed automates this in under 2 minutes.",
              },
              {
                q: "What is the best way to repurpose video content?",
                a: "Convert your video into written formats first — blog post, FAQ, and SOP — since these rank on Google. Then adapt the written content into social captions, email newsletters, and short-form clips for each platform.",
              },
              {
                q: "How long does it take to repurpose a YouTube video?",
                a: "With an AI repurposing tool, a 20-minute video generates 15 content formats in under 5 minutes. Manual repurposing — editing the transcript into a blog post by hand — takes 2-4 hours per format.",
              },
            ].map((item) => (
              <div key={item.q} className="mb-3 last:mb-0">
                <p className="text-white text-xs font-semibold mb-1">{item.q}</p>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-dm-sans text-gray-500 text-xs text-center">
            11-question FAQ with grouped topics and answers calibrated for featured snippets — from
            a 24-minute tutorial.
          </p>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-white py-12 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne font-semibold text-lg text-gray-900 mb-5">More Free YouTube Content Tools</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {relatedTools.map((tool) => (
              <div
                key={tool.href}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#FF3B30] transition-colors flex-1"
              >
                <p className="font-syne font-semibold text-gray-900 text-sm mb-1">{tool.title}</p>
                <p className="text-gray-500 text-xs mb-3">{tool.desc}</p>
                <a href={tool.href} className="text-[#FF3B30] text-xs font-semibold hover:underline">
                  Try it free →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-[#1E2A3A] py-14 px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-syne font-bold text-2xl text-white mb-3">
            Turn your video&apos;s content into search-optimized FAQs
          </h2>
          <p className="font-dm-sans text-gray-300 text-base mb-7">
            Questions written as real search queries. Answers calibrated for featured snippets.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="bg-[#FF3B30] hover:bg-[#E53528] text-white font-syne font-bold text-base px-8 py-3.5 rounded-xl inline-block transition-colors"
          >
            Generate My FAQ Free
          </a>
          <p className="mt-3 font-dm-sans text-gray-400 text-sm">
            No credit card. Your first FAQ document is free.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-8">YouTube to FAQ Generator — Frequently Asked Questions</h2>
          <dl>
            {[
              {
                q: "What makes a good FAQ for Google featured snippets?",
                a: "Questions should match natural search queries — the way people actually type into Google, not corporate-speak. Answers should be 40-60 words, start with a direct response to the question, and be factually specific. TubeScribed formats questions and answers to this spec automatically.",
              },
              {
                q: "How many FAQ questions does it generate?",
                a: "Typically 8-12 questions per video, grouped by topic. The count depends on the video's content density. You review and select which questions to keep before exporting — some may be too specific or too similar to others.",
              },
              {
                q: "Is the FAQPage schema markup included?",
                a: "Yes. TubeScribed exports the FAQ in JSON-LD FAQPage schema format, ready to paste into your page's head section or a schema markup plugin. No separate schema generator needed.",
              },
              {
                q: "What video types produce the best FAQs?",
                a: "Tutorial videos, product demonstrations, how-to content, and explainer videos generate the strongest FAQ output. The video needs to address questions — either explicitly in a Q&A format or implicitly through its instructional content.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6 last:border-0">
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
