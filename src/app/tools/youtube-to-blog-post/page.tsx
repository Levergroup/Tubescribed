import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

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

      {/* Hero */}
      <section className="bg-navy-950 pt-20 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-block mb-5 rounded-full bg-brand-red/10 px-4 py-1.5 text-sm font-semibold text-brand-red tracking-wide">
            TubeScribed Tools
          </span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-navy-100 mb-5 leading-tight">
            YouTube to Blog Post Generator
          </h1>
          <p className="text-navy-300 text-xl mb-8 leading-relaxed">
            Paste a YouTube URL. Get a complete SEO blog post with H2s, intro, and FAQ — in your
            brand voice. In 2 minutes.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="btn-gradient text-white font-syne font-bold text-lg px-10 py-4 rounded-xl inline-block"
          >
            Generate My Blog Post Free
          </a>
          <p className="mt-4 text-navy-400 text-sm">Free — first blog post, no credit card</p>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-navy-900 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-navy-300 text-base leading-relaxed mb-5">
            A YouTube video and a blog post serve different audiences. The video reaches people
            searching on YouTube. The blog post reaches people searching on Google — and can rank
            there for years.
          </p>
          <p className="text-navy-300 text-base leading-relaxed mb-5">
            TubeScribed takes your video transcript and rewrites it as a structured SEO article —
            not a transcript dump. You get a keyword-optimized H1, logical H2 sections, a
            conclusion, and an FAQ block. The output reads like it was written, not transcribed.
          </p>
          <p className="text-navy-300 text-base leading-relaxed mb-8">
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
              <li key={item} className="flex items-start gap-3 text-navy-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <span className="font-dm-sans text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample output preview */}
      <section className="bg-navy-950 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-syne font-bold text-2xl text-navy-100 mb-6">Sample output</h2>
          <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 font-dm-sans text-sm">
            <p className="text-navy-400 mb-5 text-xs tracking-wide font-mono">
              Blog Post · &ldquo;Content Repurposing for Creators&rdquo; · 1,240 words
            </p>
            <p className="text-navy-100 font-bold text-lg mb-3 leading-snug">
              How to Turn One YouTube Video Into a Week of Content
            </p>
            <p className="text-navy-400 italic text-sm mb-5 leading-relaxed">
              Most creators publish a video and move on. Here&apos;s the system for extracting five
              more pieces of content from the same recording — without spending an extra hour on
              production.
            </p>
            <p className="text-brand-red font-semibold text-sm mb-2">
              Why Repurposing Beats Publishing New Content
            </p>
            <p className="text-navy-300 text-sm mb-5 leading-relaxed">
              Publishing new content every day is exhausting and unsustainable. Repurposing is the
              opposite strategy: record once, then distribute across platforms in formats each
              audience actually prefers. The video viewer and the blog reader are looking for the
              same information in different places.
            </p>
            <p className="text-brand-red font-semibold text-sm mb-2">
              The 3-Step System for Turning a Video Into a Blog Post
            </p>
            <p className="text-navy-300 text-sm leading-relaxed">
              Step one is the transcript. Step two is restructuring for the reader — not the
              viewer. Step three is adding what the video can&apos;t: scannable headings, internal
              links, and a meta description Google can index&hellip;
            </p>
          </div>
          <p className="mt-4 text-navy-400 text-sm text-center">
            Full article including intro, 5 H2 sections, FAQ, and CTA — generated from a 22-minute
            tutorial video.
          </p>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-[#1E2A3A] py-12 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-syne font-bold text-2xl text-navy-100 mb-3">
            Turn your best video into a blog post right now
          </h2>
          <p className="text-navy-300 text-base mb-7">
            Takes 2 minutes. No cleanup. No reformatting.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="btn-gradient text-white font-syne font-bold text-lg px-10 py-4 rounded-xl inline-block"
          >
            Generate My Blog Post Free
          </a>
          <p className="mt-4 text-navy-400 text-sm">No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-syne font-bold text-2xl text-navy-100 mb-10">Common questions</h2>
          <dl className="space-y-0">
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
              <div key={faq.q} className="border-b border-navy-800 pb-6 mb-6 last:border-0 last:mb-0">
                <dt className="font-syne font-semibold text-navy-100 text-base mb-2">{faq.q}</dt>
                <dd className="font-dm-sans text-navy-400 text-base leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
