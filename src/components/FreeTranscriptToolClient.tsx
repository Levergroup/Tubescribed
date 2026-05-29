"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { ExternalLink, Link as LinkIcon, CheckCircle2, XCircle, ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const DEMO_TRANSCRIPT = `**Video Title:** How to Build a YouTube Content Strategy That Actually Works

**Summary:** This video explains a repeatable 3-step framework for building a YouTube content strategy: identify your niche, batch-create content around core topics, and repurpose every video into written assets.

**Key Takeaways:**
• Your niche should sit at the intersection of what you know, what you enjoy, and what people will pay for
• Batch creation — filming multiple videos in one session — saves 60% of production time
• Every video you create should produce at least 3 other pieces of content
• Consistency beats frequency: one great video per week outperforms three mediocre ones

**Transcript:**

[00:00] Today I want to walk you through the exact content strategy I used to grow my YouTube channel from zero to 50,000 subscribers in 18 months.

[02:15] The first thing you need to get right is your niche. Not just "business" or "marketing" — something specific enough that the right people find you, but broad enough to give you content ideas for years.

[05:40] Once you have your niche locked in, the second step is batch creation. I film all my videos for the month in two or three sessions. This means my camera, lights, and setup costs are amortized across multiple videos instead of being repeated every week.

[09:22] The third step — and this is what most creators skip — is content repurposing. Every video I publish becomes a blog post, an email, a LinkedIn post, and a set of social captions. The same ideas, reformatted for each channel.

[13:45] Here's the thing most people don't realize: the video is actually the hardest version of this content to create. Once you've said it on camera, turning it into written content should take minutes, not hours.`;

const COMPARISON_ROWS = [
  { feature: "Accurate transcription (OpenAI Whisper)", free: true, yt: false, manual: null },
  { feature: "Punctuation and formatting", free: true, yt: false, manual: "Hours" },
  { feature: "Filler word removal", free: true, yt: false, manual: "Hours" },
  { feature: "Summary and key takeaways", free: true, yt: false, manual: "Hours" },
  { feature: "Timestamped paragraphs", free: true, yt: "Partial", manual: "Hours" },
  { feature: "Brand voice application", free: false, yt: false, manual: "Hours" },
  { feature: "15 content formats (blog, email, SOP...)", free: false, yt: false, manual: "Days" },
  { feature: "Saved to workspace permanently", free: false, yt: false, manual: "Manual" },
];

const FAQS = [
  {
    q: "Is the free transcript tool really free?",
    a: "Yes. The free YouTube transcript generator shows a demo of TubeScribed's output using a sample video. To transcribe your own video, sign up for a free TubeScribed account — your first transcript is free with no credit card required.",
  },
  {
    q: "How is this different from YouTube's built-in captions?",
    a: "YouTube's auto-captions have no punctuation, are full of errors, and can't be exported as a clean document. TubeScribed uses OpenAI Whisper for transcription and Claude AI for cleanup — producing a properly formatted, filler-free, publication-ready transcript.",
  },
  {
    q: "What can I do with the transcript once I have it?",
    a: "The transcript is the starting point for everything else in TubeScribed. From one transcript, you can generate a blog post, email sequence, social captions, X thread, SOP, FAQ document, sales script, and 8 more content formats — in your brand voice.",
  },
  {
    q: "What video length is supported?",
    a: "TubeScribed supports public YouTube videos up to 90 minutes. Short videos (under 15 minutes) use 1 credit and process in about 15 seconds. The free account includes your first transcript at no cost.",
  },
];

function FAQAccordion({ items }: { items: typeof FAQS }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
          >
            <span className="font-syne font-semibold text-navy-100 text-sm">{item.q}</span>
            <ChevronDown
              size={16}
              className={`text-navy-400 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed px-6 pb-5">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function ComparisonCell({ value }: { value: boolean | string | null }) {
  if (value === true) return <CheckCircle2 size={16} className="text-green-400 mx-auto" />;
  if (value === false) return <XCircle size={16} className="text-red-400 mx-auto" />;
  if (typeof value === "string") return <span className="font-dm-sans text-navy-400 text-xs">{value}</span>;
  return <span className="font-dm-sans text-navy-500 text-xs">—</span>;
}

export function FreeTranscriptToolClient() {
  const [url, setUrl] = useState("");
  const [showDemo, setShowDemo] = useState(false);

  function handleTry() {
    if (url.trim()) {
      setShowDemo(true);
    }
  }

  return (
    <div className="min-h-screen bg-navy-900">

      {/* Hero with URL input */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Free Tool
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight"
          >
            Free YouTube <GradientText>Transcript Generator</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10"
          >
            Paste any YouTube URL. Get a clean, accurate transcript powered by OpenAI Whisper —
            properly punctuated, filler-word-free, and structured with timestamps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 relative">
              <LinkIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-500" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTry()}
                placeholder="https://youtube.com/watch?v=..."
                className="w-full bg-navy-800 border border-navy-600 rounded-xl px-4 py-3.5 pl-10 text-navy-100 placeholder-navy-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
            </div>
            <button
              onClick={handleTry}
              className="btn-gradient text-white font-semibold px-6 py-3.5 rounded-xl whitespace-nowrap text-sm"
            >
              Get Transcript
            </button>
          </motion.div>

          <p className="font-dm-sans text-navy-500 text-xs mt-3">
            This demo shows a sample output. To transcribe your actual video,{" "}
            <a href={`${APP_URL}/signup`} className="text-brand-red hover:text-orange-400 underline">
              sign up free
            </a>
            .
          </p>
        </div>
      </section>

      {/* Demo transcript output */}
      {showDemo && (
        <section className="pb-16 bg-navy-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-navy-800 border border-navy-700 rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="font-syne font-semibold text-navy-100 text-sm">Sample Transcript Output</p>
                <span className="text-xs text-navy-500 bg-navy-900 border border-navy-700 px-2.5 py-1 rounded-full">
                  Demo
                </span>
              </div>
              <pre className="font-dm-sans text-navy-300 text-sm leading-relaxed whitespace-pre-wrap">
                {DEMO_TRANSCRIPT}
              </pre>
              <div className="mt-6 pt-6 border-t border-navy-700 text-center">
                <p className="font-dm-sans text-navy-400 text-sm mb-4">
                  This is a demo. Sign up free to transcribe your actual video.
                </p>
                <Button href={`${APP_URL}/signup`} variant="primary" className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    Start Free <ExternalLink size={14} />
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Upgrade pivot */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Go Further</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4">
            A transcript is just the beginning
          </h2>
          <p className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Every TubeScribed account turns your transcript into 15 content formats automatically —
            in your brand voice. Blog posts, email sequences, social captions, SOPs, X threads, and more.
            One video. Every channel covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {[
              {
                title: "15 Content Formats",
                body: "Blog posts, emails, SOPs, social captions, X threads, FAQ documents, sales scripts, and more — from one transcript.",
              },
              {
                title: "Brand Voice Application",
                body: "Set up your brand voice once. Every output automatically sounds like you — not generic AI.",
              },
              {
                title: "Saved to Workspace",
                body: "Every transcript and output is saved permanently to your workspace. Access, copy, and download anytime.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy-900 border border-navy-700 rounded-2xl p-6 text-left">
                <CheckCircle2 size={18} className="text-brand-red mb-3" />
                <h3 className="font-syne font-semibold text-navy-100 text-sm mb-2">{item.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">
            Try Full Version Free — No Credit Card
          </Button>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-12 text-center">
            TubeScribed vs. YouTube captions vs. manual transcription
          </h2>
          <div className="overflow-hidden rounded-2xl border border-navy-700">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-800 border-b border-navy-700">
                  <th className="font-dm-sans text-navy-400 text-xs uppercase tracking-wide text-left px-6 py-3 w-1/2">
                    Feature
                  </th>
                  <th className="font-syne font-semibold text-brand-red text-xs uppercase tracking-wide text-center px-4 py-3">
                    TubeScribed
                  </th>
                  <th className="font-dm-sans text-navy-400 text-xs uppercase tracking-wide text-center px-4 py-3">
                    YouTube Captions
                  </th>
                  <th className="font-dm-sans text-navy-400 text-xs uppercase tracking-wide text-center px-4 py-3 hidden sm:table-cell">
                    Manual
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-navy-700 last:border-b-0 ${i % 2 === 0 ? "bg-navy-900" : "bg-navy-950"}`}
                  >
                    <td className="font-dm-sans text-navy-300 text-sm px-6 py-4">{row.feature}</td>
                    <td className="text-center px-4 py-4">
                      <ComparisonCell value={row.free} />
                    </td>
                    <td className="text-center px-4 py-4">
                      <ComparisonCell value={row.yt} />
                    </td>
                    <td className="text-center px-4 py-4 hidden sm:table-cell">
                      <ComparisonCell value={row.manual} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">FAQ</p>
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">
            Your questions, answered
          </h2>
          <FAQAccordion items={FAQS} />
          <div className="mt-10 text-center">
            <p className="font-dm-sans text-navy-400 text-sm mb-6">
              First transcript free. No credit card. Results in 15 seconds.
            </p>
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">
              Get Your Free Transcript
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
