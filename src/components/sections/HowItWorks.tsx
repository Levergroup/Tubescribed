"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Link2, Sparkles, Download } from "lucide-react";

const steps = [
  { number: "01", icon: Link2, title: "Paste Any YouTube URL", description: "No downloads. No browser extensions. Just copy the URL and paste it into TubeScribed. Works with any public YouTube video — tutorials, podcasts, interviews, coaching calls." },
  { number: "02", icon: Sparkles, title: "AI Cleans & Structures It", description: "Claude AI removes filler words, adds punctuation, and formats the transcript into clean, readable sections with timestamps — publication-ready in seconds." },
  { number: "03", icon: Download, title: "Get Your Branded Assets", description: "Choose from 15 output types: SOPs, blog posts, email sequences, social content, and more — all written in your brand voice automatically." },
];

export function HowItWorks() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24 lg:py-32 bg-navy-900">
      <div className="section-glow-tr" />
      <div className="section-glow-bl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">How It Works</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 text-center mb-16">Three steps. Seconds, not hours.</motion.h2>
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Connecting line that draws across the steps on scroll (desktop) */}
          <motion.svg
            className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-px z-0 overflow-visible"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="hiw-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF3B30" />
                <stop offset="100%" stopColor="#FF8C42" />
              </linearGradient>
            </defs>
            <motion.line
              x1="2" y1="0.5" x2="98" y2="0.5"
              stroke="url(#hiw-line)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: prefersReduced ? 1 : 0, opacity: prefersReduced ? 0.5 : 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.15 }}
            />
          </motion.svg>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }} whileHover={{ y: -4 }} className="relative z-10 bg-navy-800 border border-navy-700 rounded-2xl p-8 hover:border-brand-red transition-colors duration-300">
                <span className="absolute top-6 left-6 font-syne font-bold text-5xl bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent" style={{ opacity: 0.4 }}>{step.number}</span>
                <div className="flex justify-center mb-6 mt-8">
                  <div className="w-14 h-14 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center">
                    <Icon size={28} className="text-brand-red" />
                  </div>
                </div>
                <h3 className="font-syne font-semibold text-xl text-navy-100 mb-3 text-center">{step.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed text-center">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
