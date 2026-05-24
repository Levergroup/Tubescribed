"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { EyebrowBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { TranscribeModal } from "@/components/TranscribeModal";

function isYouTubeUrl(raw: string): boolean {
  return /(?:youtube\.com\/(?:watch|shorts)|youtu\.be\/)/.test(raw.trim());
}

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export function Hero() {
  const [url, setUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const hasInput = url.trim().length > 0;
  const isValid = isYouTubeUrl(url);

  const handleTranscribe = () => {
    if (isValid) setShowModal(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      <div className="hero-glow-primary" />
      <div className="hero-glow-secondary" />
      <div className="hero-glow-tertiary" />
      <div className="hero-beam" />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 120, background: "linear-gradient(to bottom, transparent, #1E2A3A)" }}
      />

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 sm:px-8 py-28 sm:py-32 text-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <EyebrowBadge>✶ AI-Powered Content Repurposing</EyebrowBadge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="font-syne font-bold text-[2rem] sm:text-5xl lg:text-7xl text-navy-100 leading-[1.15] mb-6"
        >
          Turn Any YouTube Video Into{" "}
          <br className="hidden sm:block" />
          <GradientText>A Branded Business Asset</GradientText>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="font-dm-sans text-base sm:text-xl text-navy-400 w-full max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Paste a YouTube link. Get a clean transcript, branded SOP, blog post, email sequence,
          and more — in seconds. No VA. No manual editing. Just done.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">
            Try Free
          </Button>
          <Button href="#how-it-works" variant="secondary" className="px-8 py-4 text-lg">
            See How It Works
          </Button>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          className="text-navy-400 text-sm mb-16"
        >
          Try free — 1 transcript, no credit card.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
            <div
              className={`flex items-center gap-3 bg-navy-900 border rounded-xl p-4 mb-1 transition-colors duration-200 ${
                isValid ? "border-[#FF3B30]/50" : "border-navy-700"
              }`}
            >
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleTranscribe(); }}
                placeholder="https://youtube.com/watch?v=..."
                className="bg-transparent text-navy-100 placeholder:text-navy-500 text-sm flex-1 min-w-0 outline-none font-dm-sans"
              />
              <motion.button
                whileHover={isValid ? { scale: 1.03 } : {}}
                whileTap={isValid ? { scale: 0.97 } : {}}
                onClick={handleTranscribe}
                className={`text-sm font-semibold px-4 py-2 rounded-lg shrink-0 transition-all duration-200 ${
                  isValid
                    ? "btn-gradient text-white"
                    : "bg-navy-700 text-navy-500 cursor-not-allowed"
                }`}
              >
                Transcribe →
              </motion.button>
            </div>

            <div className="h-5 mb-3">
              {hasInput && !isValid && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#94A3B8] text-xs text-center"
                >
                  Paste a YouTube URL to get started
                </motion.p>
              )}
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "Transcript Ready", delay: 0.4 },
                { label: "SOP Generated", delay: 0.7 },
                { label: "Blog Post Created", delay: 1.0 },
              ].map(({ label, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay }}
                  className="flex items-center gap-2 bg-navy-900 border border-navy-700 rounded-full px-4 py-2 text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                  <span className="text-navy-100 font-medium">✓ {label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {showModal && (
        <TranscribeModal url={url} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
}
