"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { ExternalLink, Link as LinkIcon } from "lucide-react";

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
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            Free Tool
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Free YouTube <GradientText>Transcript Generator</GradientText>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10">
            Paste any YouTube URL below. Get a clean, accurate transcript powered by OpenAI Whisper. Free for your first transcript — no credit card.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3">
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
            <a href={`${APP_URL}/signup`} className="text-brand-red hover:text-orange-400 underline">sign up free</a>.
          </p>
        </div>
      </section>

      {showDemo && (
        <section className="pb-24 bg-navy-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-navy-800 border border-navy-700 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4">
                <p className="font-syne font-semibold text-navy-100 text-sm">Sample Transcript Output</p>
                <span className="text-xs text-navy-500 bg-navy-900 border border-navy-700 px-2.5 py-1 rounded-full">Demo</span>
              </div>
              <pre className="font-dm-sans text-navy-300 text-sm leading-relaxed whitespace-pre-wrap">{DEMO_TRANSCRIPT}</pre>
              <div className="mt-6 pt-6 border-t border-navy-700 text-center">
                <p className="font-dm-sans text-navy-400 text-sm mb-4">This is a demo. Transcribe your actual video — free, no credit card.</p>
                <Button href={`${APP_URL}/signup`} variant="primary" className="px-6 py-3">
                  <span className="flex items-center gap-2">Start Free <ExternalLink size={14} /></span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 text-center mb-12">
            What TubeScribed gives you beyond a basic transcript
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Brand Voice Application", body: "Every transcript is cleaned and rewritten to match your tone, style, and brand guidelines automatically." },
              { title: "15 Content Formats", body: "Blog posts, emails, SOPs, social captions, LinkedIn posts, and more — all from the same transcript." },
              { title: "SOP Generator", body: "Turn any training video or coaching call into a structured Standard Operating Procedure in seconds." },
            ].map((item) => (
              <div key={item.title} className="bg-navy-900 border border-navy-700 rounded-2xl p-6">
                <h3 className="font-syne font-semibold text-navy-100 text-base mb-3">{item.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Full Version Free</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
