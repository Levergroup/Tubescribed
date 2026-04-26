"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { APP_URL } from "@/lib/constants";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  "I post 3 videos a week but my blog has one post from 6 months ago",
  "My best content is buried in a YouTube video nobody will watch twice",
  "I spent 4 hours this week manually turning a video into a blog post",
  "I know I should repurpose content but I never have time",
];

const outcomes = [
  "Every video becomes a blog post, email, and SOP — automatically",
  "Your YouTube content works across every platform and channel",
  "8 seconds per transcript instead of 4 hours of manual editing",
  "Your brand voice stays consistent across every output, every time",
];

export default function ForCreatorsPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">For YouTube Creators</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight">
            You&apos;re Already Creating the Content.{" "}<GradientText>Start Using It.</GradientText>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Every video you post is a blog post, email, and SOP waiting to happen. TubeScribed unlocks all of it in 8 seconds.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-syne font-bold text-3xl text-navy-100 text-center mb-12">Sound familiar?</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((pain, index) => (
              <motion.div key={pain} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4 bg-navy-900 border border-navy-700 rounded-2xl p-6">
                <AlertCircle size={20} className="text-brand-red shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">&ldquo;{pain}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">With TubeScribed, Marcus publishes{" "}<GradientText>3x more</GradientText> without making more videos.</h2>
            <p className="font-dm-sans text-navy-400 text-base">Marcus is a 32-year-old YouTube creator and course builder. Here&apos;s what changed.</p>
          </motion.div>
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <motion.div key={outcome} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4 bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300">
                <CheckCircle2 size={20} className="text-green-400 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-syne font-bold text-3xl text-navy-100 mb-6">Built for the way creators actually work</motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-dm-sans text-navy-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            You already do the hard part — you create great content. TubeScribed handles the repurposing. Paste a URL from any of your videos and get a clean transcript plus 15 content formats in seconds. No VA. No editing. No extra hours.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
