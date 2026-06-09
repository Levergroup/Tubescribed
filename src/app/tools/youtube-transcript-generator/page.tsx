import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

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
            YouTube Transcript Generator
          </h1>
          <p className="text-navy-300 text-xl mb-8 leading-relaxed">
            Paste any YouTube URL. Get a clean, punctuated, timestamped transcript in under 30
            seconds.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="btn-gradient text-white font-syne font-bold text-lg px-10 py-4 rounded-xl inline-block"
          >
            Generate Free Transcript
          </a>
          <p className="mt-4 text-navy-400 text-sm">Free — 1 transcript, no credit card</p>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-navy-900 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-navy-300 text-base leading-relaxed mb-5">
            YouTube&apos;s auto-captions are riddled with errors — no punctuation, wrong words, no
            paragraph breaks. TubeScribed replaces them with a Whisper-powered transcript that&apos;s
            actually readable.
          </p>
          <p className="text-navy-300 text-base leading-relaxed mb-5">
            Paste a URL and get a clean, formatted transcript in under 30 seconds. No extension to
            install. No account setup required for the first transcript.
          </p>
          <p className="text-navy-300 text-base leading-relaxed mb-8">
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
          <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 font-mono text-sm">
            <p className="text-navy-400 mb-4 text-xs tracking-wide">
              Transcript · &ldquo;How to Repurpose YouTube Content&rdquo; · 18:34
            </p>
            <p className="text-navy-200 leading-relaxed mb-3">
              <span className="text-navy-500">[00:00:04]</span>{" "}
              Welcome back. Today we&apos;re walking through the exact content repurposing system
              I&apos;ve used to turn every YouTube video into five other pieces of content.
            </p>
            <p className="text-navy-200 leading-relaxed mb-3">
              <span className="text-navy-500">[00:00:14]</span>{" "}
              The core idea is simple: recording the video is the hardest part. Everything else is
              just reformatting. A blog post, an email, a LinkedIn post, a Twitter thread — all
              derived from the same raw material.
            </p>
            <p className="text-navy-200 leading-relaxed mb-3">
              <span className="text-navy-500">[00:00:32]</span>{" "}
              Let me show you the system, starting with the transcript. This is the foundation.
            </p>
            <p className="text-navy-500 text-xs mt-4">[...847 more lines]</p>
          </div>
          <p className="mt-4 text-navy-400 text-sm text-center">
            Real output from TubeScribed. Punctuated, timestamped, and ready to use.
          </p>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-[#1E2A3A] py-12 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-syne font-bold text-2xl text-navy-100 mb-3">
            Ready to transcribe your first video?
          </h2>
          <p className="text-navy-300 text-base mb-7">
            Paste a URL and get your clean transcript in under 30 seconds.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="btn-gradient text-white font-syne font-bold text-lg px-10 py-4 rounded-xl inline-block"
          >
            Generate Free Transcript
          </a>
          <p className="mt-4 text-navy-400 text-sm">No credit card. Takes 30 seconds.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-syne font-bold text-2xl text-navy-100 mb-10">Common questions</h2>
          <dl className="space-y-0">
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
