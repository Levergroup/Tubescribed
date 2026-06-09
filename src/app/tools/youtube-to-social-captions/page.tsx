import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import ToolEmbed from '@/components/ToolEmbed'

export const metadata: Metadata = buildMetadata({
  title: "YouTube to Social Media Captions — Platform-Specific Content Generator",
  description:
    "Turn any YouTube video into platform-specific captions for LinkedIn, X, and Instagram. Three platforms. Three different prompts. Not resized — rewritten.",
  path: "/tools/youtube-to-social-captions",
});

export default function YouTubeToSocialCaptionsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes each platform's output different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LinkedIn gets a professional insight post (150-300 words, no hashtags, business narrative). X gets an 8-10 tweet thread with a hook in tweet 1 and one idea per tweet. Instagram gets a visual-first caption with a hook, storytelling arc, call-to-action, and 15-20 relevant hashtags. These aren't the same text reformatted — they're written from scratch for each platform's audience behavior.",
        },
      },
      {
        "@type": "Question",
        name: "Does it generate all three platforms at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. One video URL generates all three simultaneously — LinkedIn, X, and Instagram. You review each independently before posting. The generation takes under 2 minutes for most videos.",
        },
      },
      {
        "@type": "Question",
        name: "Can I set my preferred voice for each platform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TubeScribed's brand workspace lets you configure your preferred tone, vocabulary, and style for each platform separately. Your LinkedIn voice can be formal and analytical while your X posts are punchy and direct.",
        },
      },
      {
        "@type": "Question",
        name: "What video types work best for social caption generation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tutorial videos, case studies, how-to content, and opinion-driven commentary all convert well. Videos where you share a process, opinion, or lesson generate the most engaging social content. Abstract or highly technical content may need more editing after generation.",
        },
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "YouTube to Social Captions Generator",
    applicationCategory: "ProductivityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Turn any YouTube video into platform-specific captions for LinkedIn, X, and Instagram. Three platforms. Three different prompts. Not resized — rewritten.",
    url: "https://app.tubescribed.com/signup",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tubescribed.com" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.tubescribed.com/tools" },
      { "@type": "ListItem", position: 3, name: "YouTube to Social Captions Generator", item: "https://www.tubescribed.com/tools/youtube-to-social-captions" },
    ],
  }

  const relatedTools = [
    {
      title: "YouTube to Email Sequence",
      desc: "5-email nurture sequence from any video",
      href: "/tools/youtube-to-email-sequence",
    },
    {
      title: "YouTube to Blog Post Generator",
      desc: "SEO article from any video",
      href: "/tools/youtube-to-blog-post",
    },
    {
      title: "YouTube to FAQ Generator",
      desc: "Featured snippet-ready FAQ documents",
      href: "/tools/youtube-to-faq",
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
            YouTube to Social Captions Generator
          </h1>
          <p className="font-dm-sans text-gray-600 text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Paste a YouTube URL. Get captions written specifically for LinkedIn, X, and Instagram —
            not the same caption resized three times.
          </p>
          <ToolEmbed
            outputType="social_captions"
            placeholder="Paste YouTube URL for social content..."
            buttonText="Generate Captions →"
            successBadges={[
              "✓ LinkedIn Caption",
              "✓ X/Twitter Caption",
              "✓ Instagram Caption",
            ]}
          />
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white py-14 px-4">
        <div className="mx-auto max-w-3xl">
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            Resizing one caption for three platforms is why social posts get ignored. LinkedIn
            readers want professional insight. X followers want threads. Instagram users want hooks
            and storytelling. The same paragraph fails on all three.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            TubeScribed generates three entirely separate pieces of content from your video: a
            150-300 word LinkedIn narrative, an 8-10 tweet X thread with a strong opening hook, and
            an Instagram caption with story structure and a relevant hashtag block.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-8">
            One video URL, three platform-ready drafts, under 2 minutes.
          </p>
          <ul className="space-y-4">
            {[
              "LinkedIn: professional insight post (150-300 words, narrative structure, no hashtags)",
              "X: 8-10 tweet thread, hook in tweet 1, one idea per tweet",
              "Instagram: hook, story arc, call-to-action, 15-20 hashtags",
              "Brand voice applied across all three platforms simultaneously",
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
          <h2 className="font-syne font-bold text-xl text-gray-900 mb-5">What Does a YouTube to Social Captions Output Look Like?</h2>
          <div className="bg-[#0F1923] border border-[#2D3F55] rounded-xl p-6 text-sm">
            {/* LinkedIn */}
            <p className="text-[#FF3B30] text-xs font-semibold uppercase tracking-wide mb-2">
              LinkedIn
            </p>
            <p className="text-[#94A3B8] text-xs leading-relaxed mb-5">
              I used to publish a YouTube video and call it a week&apos;s worth of content. Then I
              realized I was leaving 80% of the distribution on the table. Here&apos;s the system
              that changed it:&hellip;
            </p>
            <div className="border-t border-[#2D3F55] pt-5 mb-5">
              <p className="text-[#FF3B30] text-xs font-semibold uppercase tracking-wide mb-2">
                X / Twitter
              </p>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-2">
                1/ Most creators spend more time making content than distributing it.
              </p>
              <p className="text-[#94A3B8] text-xs leading-relaxed">
                2/ The fix: every YouTube video becomes 5 separate pieces of content, each written
                natively for its platform.
              </p>
            </div>
            <div className="border-t border-[#2D3F55] pt-5">
              <p className="text-[#FF3B30] text-xs font-semibold uppercase tracking-wide mb-2">
                Instagram
              </p>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-2">
                The content is already made. You just need to stop resizing it. 🎬 Here&apos;s how
                one YouTube video fuels a full week of social content&hellip;
              </p>
              <p className="text-[#94A3B8] text-xs leading-relaxed">
                #contentcreator #youtubetips #contentmarketing &hellip;
              </p>
            </div>
          </div>
          <p className="mt-3 font-dm-sans text-gray-500 text-xs text-center">
            LinkedIn post, X thread (8 tweets), and Instagram caption — all from the same 18-minute
            video.
          </p>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-white py-12 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne font-semibold text-lg text-gray-900 mb-5">More Free YouTube Conversion Tools</h2>
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
            One video. Three platforms. Done in 2 minutes.
          </h2>
          <p className="font-dm-sans text-gray-300 text-base mb-7">
            Stop adapting the same caption and start writing platform-native content.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="bg-[#FF3B30] hover:bg-[#E53528] text-white font-syne font-bold text-base px-8 py-3.5 rounded-xl inline-block transition-colors"
          >
            Generate My Captions Free
          </a>
          <p className="mt-3 font-dm-sans text-gray-400 text-sm">
            No credit card. Your first set of captions is free.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-8">YouTube to Social Captions Generator — Frequently Asked Questions</h2>
          <dl>
            {[
              {
                q: "What makes each platform's output different?",
                a: "LinkedIn gets a professional insight post (150-300 words, no hashtags, business narrative). X gets an 8-10 tweet thread with a hook in tweet 1 and one idea per tweet. Instagram gets a visual-first caption with a hook, storytelling arc, call-to-action, and 15-20 relevant hashtags. These aren't the same text reformatted — they're written from scratch for each platform's audience behavior.",
              },
              {
                q: "Does it generate all three platforms at once?",
                a: "Yes. One video URL generates all three simultaneously — LinkedIn, X, and Instagram. You review each independently before posting. The generation takes under 2 minutes for most videos.",
              },
              {
                q: "Can I set my preferred voice for each platform?",
                a: "Yes. TubeScribed's brand workspace lets you configure your preferred tone, vocabulary, and style for each platform separately. Your LinkedIn voice can be formal and analytical while your X posts are punchy and direct.",
              },
              {
                q: "What video types work best for social caption generation?",
                a: "Tutorial videos, case studies, how-to content, and opinion-driven commentary all convert well. Videos where you share a process, opinion, or lesson generate the most engaging social content. Abstract or highly technical content may need more editing after generation.",
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
