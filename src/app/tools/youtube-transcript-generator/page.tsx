import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import ToolEmbed from '@/components/ToolEmbed'

export const metadata: Metadata = buildMetadata({
  title: "Free YouTube Transcript Generator — Clean Accurate Transcripts Instantly",
  description:
    "Generate a clean, accurate transcript from any YouTube video in seconds. Powered by OpenAI Whisper. Punctuated, filler-free, timestamped.",
  path: "/tools/youtube-transcript-generator",
});

export default function YouTubeTranscriptGeneratorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the YouTube transcript generator really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Your first transcript is free with no credit card required. TubeScribed's free tier lets you test the accuracy before upgrading to unlimited.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate is the transcript?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TubeScribed uses OpenAI Whisper, which is significantly more accurate than YouTube's auto-generated captions — especially for technical terms, proper nouns, and non-native English speakers. Typical accuracy is 95–98% for clear audio.",
        },
      },
      {
        "@type": "Question",
        name: "Does it work on any YouTube video?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — any publicly accessible YouTube video. Private or unlisted videos are not supported. For private video transcription, you can upload the audio or video file directly.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a version without timestamps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TubeScribed outputs both a timestamped version and a clean paragraph version. You can copy either format depending on your use case.",
        },
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "YouTube Transcript Generator",
    applicationCategory: "ProductivityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Generate a clean, accurate transcript from any YouTube video in seconds. Powered by OpenAI Whisper. Punctuated, filler-free, timestamped.",
    url: "https://app.tubescribed.com/signup",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tubescribed.com" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.tubescribed.com/tools" },
      { "@type": "ListItem", position: 3, name: "YouTube Transcript Generator", item: "https://www.tubescribed.com/tools/youtube-transcript-generator" },
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
        <strong>TL;DR:</strong> Paste a YouTube URL → get a clean, punctuated, timestamped transcript in under 30 seconds. Free, no credit card.
      </div>

      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 pt-20 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-block bg-[#FF3B30] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase mb-5 font-dm-sans">
            TubeScribed Tools
          </span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            YouTube Transcript Generator
          </h1>
          <p className="font-dm-sans text-gray-600 text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Paste any YouTube URL. Get a clean, punctuated, timestamped transcript in under 30
            seconds.
          </p>
          <ToolEmbed
            placeholder="Paste YouTube URL to transcribe..."
            buttonText="Generate Transcript →"
            successBadges={[
              "✓ Transcript Ready",
              "✓ Filler Words Removed",
              "✓ Timestamps Added",
            ]}
          />
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            YouTube&apos;s auto-captions are riddled with errors — no punctuation, wrong words, no
            paragraph breaks. TubeScribed replaces them with a Whisper-powered transcript that&apos;s
            actually readable.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            Paste a URL and get a clean, formatted transcript in under 30 seconds. No extension to
            install. No account setup required for the first transcript.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-8">
            The output is publication-ready — use it as the foundation for blog posts, SOPs, email
            sequences, or any other format.
          </p>
          <ul className="space-y-4">
            {[
              "Powered by OpenAI Whisper — more accurate than YouTube's auto-captions",
              "Timestamps included — navigate long videos by section",
              "Filler words removed — no \"um\", \"uh\", \"you know\"",
              "Paragraph breaks added — readable from the first line",
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
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-6">How to Generate a YouTube Transcript for Free</h2>
          <ol className="space-y-4">
            {[
              "Copy any YouTube video URL from your browser address bar.",
              "Paste it into the input field above.",
              "Click Generate — processing takes under 30 seconds for most videos.",
              "Download your clean, punctuated, timestamped transcript.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#FF3B30] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <span className="font-dm-sans text-gray-700 text-base">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 font-dm-sans text-gray-500 text-sm">No account required for your first transcript.</p>
        </div>
      </section>

      {/* Who uses this */}
      <section className="bg-gray-50 border-y border-gray-200 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-6">Who Uses a YouTube Transcript Generator?</h2>
          <ul className="space-y-3">
            {[
              { who: "Content creators", why: "turning videos into blog posts, emails, and social content" },
              { who: "Researchers & journalists", why: "extracting quotes accurately with timestamps for verification" },
              { who: "Educators", why: "creating study materials and course notes from lecture videos" },
              { who: "Agencies", why: "processing client video content at scale without manual work" },
              { who: "AI builders", why: "cleaning transcript data for custom GPTs and RAG pipelines" },
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
          <h2 className="font-syne font-bold text-xl text-gray-900 mb-5">What Does a TubeScribed YouTube Transcript Look Like?</h2>
          <div className="bg-[#0F1923] border border-[#2D3F55] rounded-xl p-6 font-mono text-sm">
            <p className="text-gray-400 mb-4 text-xs tracking-wide">
              Transcript · &ldquo;How to Repurpose YouTube Content&rdquo; · 18:34
            </p>
            <p className="text-gray-200 leading-relaxed mb-3">
              <span className="text-gray-500">[00:00:04]</span>{" "}
              Welcome back. Today we&apos;re walking through the exact content repurposing system
              I&apos;ve used to turn every YouTube video into five other pieces of content.
            </p>
            <p className="text-gray-200 leading-relaxed mb-3">
              <span className="text-gray-500">[00:00:14]</span>{" "}
              The core idea is simple: recording the video is the hardest part. Everything else is
              just reformatting. A blog post, an email, a LinkedIn post, a Twitter thread — all
              derived from the same raw material.
            </p>
            <p className="text-gray-200 leading-relaxed mb-3">
              <span className="text-gray-500">[00:00:32]</span>{" "}
              Let me show you the system, starting with the transcript. This is the foundation.
            </p>
            <p className="text-gray-500 text-xs mt-4">[...847 more lines]</p>
          </div>
          <p className="mt-3 font-dm-sans text-gray-500 text-xs text-center">
            Real output from TubeScribed. Punctuated, timestamped, and ready to use.
          </p>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-[#1E2A3A] py-14 px-4 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-syne font-bold text-2xl text-white mb-3">
            Ready to transcribe your first video?
          </h2>
          <p className="font-dm-sans text-gray-300 mb-6">
            Paste a URL and get your clean transcript in under 30 seconds.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="inline-flex items-center justify-center bg-[#FF3B30] hover:bg-[#E53528] text-white font-syne font-bold text-base px-8 py-3.5 rounded-xl transition-colors"
          >
            Generate Free Transcript
          </a>
          <p className="mt-3 text-gray-400 text-sm font-dm-sans">No credit card. Takes 30 seconds.</p>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-semibold text-lg text-gray-900 mb-5">More Free YouTube Content Tools</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              {
                title: "YouTube to Blog Post Generator",
                desc: "Turn transcripts into SEO articles",
                href: "/tools/youtube-to-blog-post",
              },
              {
                title: "YouTube to SOP Generator",
                desc: "Convert tutorials into process docs",
                href: "/tools/youtube-to-sop",
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
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-8">YouTube Transcript Generator — Frequently Asked Questions</h2>
          <dl>
            {[
              {
                q: "Is the YouTube transcript generator really free?",
                a: "Yes. Your first transcript is free with no credit card required. TubeScribed's free tier lets you test the accuracy before upgrading to unlimited.",
              },
              {
                q: "How accurate is the transcript?",
                a: "TubeScribed uses OpenAI Whisper, which is significantly more accurate than YouTube's auto-generated captions — especially for technical terms, proper nouns, and non-native English speakers. Typical accuracy is 95–98% for clear audio.",
              },
              {
                q: "Does it work on any YouTube video?",
                a: "Yes — any publicly accessible YouTube video. Private or unlisted videos are not supported. For private video transcription, you can upload the audio or video file directly.",
              },
              {
                q: "Can I get a version without timestamps?",
                a: "Yes. TubeScribed outputs both a timestamped version and a clean paragraph version. You can copy either format depending on your use case.",
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
