"use client";
import { motion } from "framer-motion";
import { Zap, Brain, Database } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { APP_URL } from "@/lib/constants";

const bullets = [
  {
    icon: Zap,
    text: "Extract key insights from any video in seconds — no scrubbing, no rewinding",
  },
  {
    icon: Brain,
    text: "Feed transcripts directly into ChatGPT, Claude, or any AI agent as instant context",
  },
  {
    icon: Database,
    text: "Build custom GPTs, knowledge bases, and AI workflows from your entire YouTube library",
  },
];

export function LearnFaster() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Learn Faster · Feed Your AI
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-6">
              Stop Watching.<br />
              <GradientText>Start Knowing.</GradientText>
            </h2>
            <p className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-10">
              TubeScribed turns hours of YouTube content into clean, structured
              text — so you can learn faster, move faster, and feed your AI
              tools without sitting through a single video.
            </p>
            <Button
              href={`${APP_URL}/signup`}
              variant="primary"
              className="px-8 py-4 text-lg"
            >
              Try It Free
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-4"
          >
            {bullets.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex items-start gap-5 bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-brand-red" />
                </div>
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed pt-1">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
