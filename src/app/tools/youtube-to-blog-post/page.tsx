import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import ToolEmbed from '@/components/ToolEmbed'

export const metadata: Metadata = buildMetadata({
  title: "YouTube to Blog Post Generator — Turn Any Video Into an SEO Article",
  description:
    "Turn any YouTube video into a publication-ready SEO blog post automatically. H2s, intro, FAQ, CTA — all generated in your brand voice.",
  path: "/tools/youtube-to-blog-post",
});

export default function YouTubeToBlogPostPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to generate a blog post?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under 2 minutes for most videos. A 30-minute video generates a 1,000–1,500 word blog post in roughly 90 seconds. The output includes H2 sections, an introduction, a conclusion, and an FAQ — ready to paste into your CMS.",
        },
      },
      {
        "@type": "Question",
        name: "Is the blog post SEO-ready?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TubeScribed generates a keyword-optimized H1, structures the article with logical H2 headings, includes an FAQ section (which can earn FAQ rich results), and suggests a meta description. You'll still want to add internal links and review for accuracy.",
        },
      },
      {
        "@type": "Question",
        name: "Will it sound like my writing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With TubeScribed's brand voice settings, yes. Set your tone, preferred terminology, and sentence style once — the tool applies them to every output. Without brand voice settings, it produces clean, readable professional writing.",
        },
      },
      {
        "@type": "Question",
        name: "Is the blog post considered duplicate content?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A blog post generated from a video transcript is not duplicate content. The video and blog post are different formats on different platforms. As long as the article is original and not copied from another website, there is no SEO penalty.",
        },
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "YouTube to Blog Post Generator",
    applicationCategory: "ProductivityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Turn any YouTube video into a publication-ready SEO blog post automatically. H2s, intro, FAQ, CTA — all generated in your brand voice.",
    url: "https://app.tubescribed.com/signup",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tubescribed.com" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.tubescribed.com/tools" },
      { "@type": "ListItem", position: 3, name: "YouTube to Blog Post Generator", item: "https://www.tubescribed.com/tools/youtube-to-blog-post" },
    ],
  }

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

      {/* TLDR */}
      <div className="bg-gray-100 border-b border-gray-200 py-2 px-4 text-center text-sm text-gray-600">
        <strong>TL;DR:</strong> Paste a YouTube URL → get a publication-ready SEO blog post with H2s, intro, and FAQ in under 2 minutes. Free, no credit card.
      </div>

      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 pt-20 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-block bg-[#FF3B30] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase mb-5 font-dm-sans">
            TubeScribed Tools
          </span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            YouTube to Blog Post Generator
          </h1>
          <p className="font-dm-sans text-gray-600 text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Paste a YouTube URL. Get a complete SEO blog post with H2s, intro, and FAQ — in your
            brand voice. In 2 minutes.
          </p>
          <ToolEmbed
            outputType="blog_post"
            placeholder="Paste YouTube URL to convert..."
            buttonText="Generate Blog Post →"
            successBadges={[
              "✓ SEO Blog Post Ready",
              "✓ H2s Generated",
              "✓ FAQ Section Added",
            ]}
          />
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            A YouTube video and a blog post serve different audiences. The video reaches people
            searching on YouTube. The blog post reaches people searching on Google — and can rank
            there for years.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            TubeScribed takes your video transcript and rewrites it as a structured SEO article —
            not a transcript dump. You get a keyword-optimized H1, logical H2 sections, a
            conclusion, and an FAQ block. The output reads like it was written, not transcribed.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-8">
            Brand voice settings carry across every conversion. Your tone, terminology, and
            formatting preferences are applied automatically, so every article sounds like you.
          </p>
          <ul className="space-y-4">
            {[
              "Keyword-optimized H1 and meta description — ready for your CMS",
              "Logical H2 structure — not just transcript paragraphs",
              "FAQ section included — captures FAQ rich results in Google",
              "Brand voice applied — sounds like your writing, not a generic AI",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#FF3B30] shrink-0 mt-0.5" />
                <span className="font-dm-sans text-gray-700 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to use */}
      <section className="bg-white py-14 px-4 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-6">How to Turn a YouTube Video Into a Blog Post for Free</h2>
          <ol className="space-y-4">
            {[
              "Copy any YouTube video URL from your browser.",
              "Paste it into the input field above.",
              "Click Generate — your SEO blog post is ready in under 2 minutes.",
              "Copy into your CMS and add any personal touches.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#FF3B30] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <span className="font-dm-sans text-gray-700 text-base">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 font-dm-sans text-gray-500 text-sm">First blog post is free, no credit card required.</p>
        </div>
      </section>

      {/* Who uses this */}
      <section className="bg-gray-50 border-y border-gray-200 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-6">Who Uses a YouTube to Blog Post Generator?</h2>
          <ul className="space-y-3">
            {[
              { who: "Content creators", why: "publishing blog content without writing from scratch" },
              { who: "SEO agencies", why: "scaling content production for clients from existing video libraries" },
              { who: "Course creators", why: "turning course videos into supporting blog content" },
              { who: "Coaches", why: "repurposing YouTube content into lead-generating articles" },
              { who: "Podcasters", why: "converting YouTube episode uploads into searchable blog posts" },
            ].map(({ who, why }) => (
              <li key={who} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#FF3B30] shrink-0 mt-0.5" />
                <span className="font-dm-sans text-gray-700 text-base"><strong>{who}</strong> — {why}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample output preview */}
      <section className="bg-gray-50 border-y border-gray-200 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-xl text-gray-900 mb-5">What Does a YouTube-to-Blog-Post Output Look Like?</h2>
          <div className="bg-[#0F1923] border border-[#2D3F55] rounded-xl p-6 font-dm-sans text-sm">
            <p className="text-gray-400 mb-5 text-xs tracking-wide font-mono">
              Blog Post · &ldquo;Content Repurposing for Creators&rdquo; · 1,240 words
            </p>
            <p className="text-gray-100 font-bold text-lg mb-3 leading-snug">
              How to Turn One YouTube Video Into a Week of Content
            </p>
            <p className="text-gray-400 italic text-sm mb-5 leading-relaxed">
              Most creators publish a video and move on. Here&apos;s the system for extracting five
              more pieces of content from the same recording — without spending an extra hour on
              production.
            </p>
            <p className="text-[#FF3B30] font-semibold text-sm mb-2">
              Why Repurposing Beats Publishing New Content
            </p>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
              Publishing new content every day is exhausting and unsustainable. Repurposing is the
              opposite strategy: record once, then distribute across platforms in formats each
              audience actually prefers. The video viewer and the blog reader are looking for the
              same information in different places.
            </p>
            <p className="text-[#FF3B30] font-semibold text-sm mb-2">
              The 3-Step System for Turning a Video Into a Blog Post
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Step one is the transcript. Step two is restructuring for the reader — not the
              viewer. Step three is adding what the video can&apos;t: scannable headings, internal
              links, and a meta description Google can index&hellip;
            </p>
          </div>
          <p className="mt-3 font-dm-sans text-gray-500 text-xs text-center">
            Full article including intro, 5 H2 sections, FAQ, and CTA — generated from a 22-minute
            tutorial video.
          </p>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-[#1E2A3A] py-14 px-4 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-syne font-bold text-2xl text-white mb-3">
            Turn your best video into a blog post right now
          </h2>
          <p className="font-dm-sans text-gray-300 mb-6">
            Takes 2 minutes. No cleanup. No reformatting.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="inline-flex items-center justify-center bg-[#FF3B30] hover:bg-[#E53528] text-white font-syne font-bold text-base px-8 py-3.5 rounded-xl transition-colors"
          >
            Generate My Blog Post Free
          </a>
          <p className="mt-3 text-gray-400 text-sm font-dm-sans">No credit card required.</p>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-semibold text-lg text-gray-900 mb-5">More Free YouTube Conversion Tools</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              {
                title: "YouTube Transcript Generator",
                desc: "Clean, accurate transcripts in 30 seconds",
                href: "/tools/youtube-transcript-generator",
              },
              {
                title: "YouTube to FAQ Generator",
                desc: "Featured snippet-ready FAQ documents",
                href: "/tools/youtube-to-faq",
              },
              {
                title: "YouTube to Email Sequence",
                desc: "5-email nurture sequence from any video",
                href: "/tools/youtube-to-email-sequence",
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
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-8">YouTube to Blog Post Generator — Frequently Asked Questions</h2>
          <dl>
            {[
              {
                q: "How long does it take to generate a blog post?",
                a: "Under 2 minutes for most videos. A 30-minute video generates a 1,000–1,500 word blog post in roughly 90 seconds. The output includes H2 sections, an introduction, a conclusion, and an FAQ — ready to paste into your CMS.",
              },
              {
                q: "Is the blog post SEO-ready?",
                a: "Yes. TubeScribed generates a keyword-optimized H1, structures the article with logical H2 headings, includes an FAQ section (which can earn FAQ rich results), and suggests a meta description. You'll still want to add internal links and review for accuracy.",
              },
              {
                q: "Will it sound like my writing?",
                a: "With TubeScribed's brand voice settings, yes. Set your tone, preferred terminology, and sentence style once — the tool applies them to every output. Without brand voice settings, it produces clean, readable professional writing.",
              },
              {
                q: "Is the blog post considered duplicate content?",
                a: "No. A blog post generated from a video transcript is not duplicate content. The video and blog post are different formats on different platforms. As long as the article is original and not copied from another website, there is no SEO penalty.",
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
