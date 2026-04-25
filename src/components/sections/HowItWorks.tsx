"use client";
import { motion } from "framer-motion";
import { Link2, Sparkles, Download } from "lucide-react";

const steps = [
  { number: "01", icon: Link2, title: "Paste Any YouTube URL", description: "No downloads. No browser extensions. Just copy the URL and paste it into TubeScribed. Works with any public YouTube video — tutorials, podcasts, interviews, coaching calls." },
  { number: "02", icon: Sparkles, title: "AI Cleans & Structures It", description: "Claude AI removes filler words, adds punctuation, and formats the transcript into clean, readable sections with timestamps — publication-ready in seconds." },
  { number: "03", icon: Download, title: "Get Your Branded Assets", description: "Choose from 15 output types: SOPs, blog posts, email sequences, social content, and more — all written in your brand voice automatically." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">How It Works</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 text-center mb-16">Three steps. Seconds, not hours.</motion.h2>
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} whileHover={{ y: -4 }} className="relative bg-navy-800 border border-navy-700 rounded-2xl p-8 hover:border-brand-red transition-colors duration-300">
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
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
            <div className="w-1/3" /><div className="w-1/12 flex items-center justify-center text-navy-700 text-2xl font-bold">→</div>
            <div className="w-1/3" /><div className="w-1/12 flex items-center justify-center text-navy-700 text-2xl font-bold">→</div>
            <div className="w-1/3" />
          </div>
        </div>
      </div>
    </section>
  );
}
