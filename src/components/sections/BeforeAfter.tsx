"use client";
import { motion } from "framer-motion";

const beforeItems = ["Hours transcribing videos manually", "Content locked inside YouTube forever", "Hiring VAs for repurposing work", "Inconsistent brand voice across outputs", "SOPs created from scratch every time", "Paying $17–48/month for basic tools"];
const afterItems = ["8 seconds per video — start to finish", "Content working across every channel", "One tool replaces the whole workflow", "Every output sounds like your brand", "SOPs generated from your own content", "Full content system for $9/month"];

export function BeforeAfter() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 text-center mb-16">What changes when you use TubeScribed</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className="bg-navy-800 rounded-2xl p-8 border" style={{ borderColor: "rgba(255,59,48,0.3)" }}>
            <h3 className="font-syne font-semibold text-lg mb-6" style={{ color: "#FF6B6B" }}>✗ Without TubeScribed</h3>
            <ul className="space-y-4">{beforeItems.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-brand-red font-bold text-lg leading-5 shrink-0">✗</span><span className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item}</span></li>))}</ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="bg-navy-800 rounded-2xl p-8 border" style={{ borderColor: "rgba(34,197,94,0.3)" }}>
            <h3 className="font-syne font-semibold text-lg mb-6 text-green-400">✓ With TubeScribed</h3>
            <ul className="space-y-4">{afterItems.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-green-400 font-bold text-lg leading-5 shrink-0">✓</span><span className="font-dm-sans text-navy-100 text-sm leading-relaxed">{item}</span></li>))}</ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
