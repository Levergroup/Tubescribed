"use client";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { EyebrowBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900 grid-pattern">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,59,48,0.08) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 py-32 text-center">
        <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, ease: "easeOut" }} className="flex justify-center mb-6">
          <EyebrowBadge>✶ AI-Powered Content Repurposing</EyebrowBadge>
        </motion.div>
        <motion.h1 variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }} className="font-syne font-bold text-5xl lg:text-7xl text-navy-100 leading-[1.1] mb-6">
          Turn Any YouTube Video Into <br className="hidden sm:block" />
          <GradientText>A Branded Business Asset</GradientText>
        </motion.h1>
        <motion.p variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }} className="font-dm-sans text-xl text-navy-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Paste a YouTube link. Get a clean transcript, branded SOP, blog post, email sequence, and more — in seconds. No VA. No manual editing. Just done.
        </motion.p>
        <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
          <Button href="#how-it-works" variant="secondary" className="px-8 py-4 text-lg">See How It Works</Button>
        </motion.div>
        <motion.p variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }} className="text-navy-400 text-sm mb-16">Try free — 1 transcript, no credit card.</motion.p>
        <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} className="max-w-xl mx-auto">
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3 bg-navy-900 border border-navy-700 rounded-xl p-4 mb-4">
              <span className="text-navy-400 text-sm flex-1 truncate font-dm-sans">https://youtube.com/watch?v=dQw4w9WgXcQ</span>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-gradient text-white text-sm font-semibold px-4 py-2 rounded-lg shrink-0">Transcribe</motion.button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {[{ label: "Transcript Ready", delay: 0.4 }, { label: "SOP Generated", delay: 0.7 }, { label: "Blog Post Created", delay: 1.0 }].map(({ label, delay }) => (
                <motion.div key={label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay }} className="flex items-center gap-2 bg-navy-900 border border-navy-700 rounded-full px-4 py-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                  <span className="text-navy-100 font-medium">✓ {label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
