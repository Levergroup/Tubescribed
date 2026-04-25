"use client";
import { motion } from "framer-motion";
import { FileText, Layers, ClipboardList, Grid3x3, Users, Wand2 } from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { FileText, Layers, ClipboardList, Grid3x3, Users, Wand2 };

export function Features() {
  return (
    <section className="py-24 lg:py-32 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">What You Get</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 text-center mb-16">Every tool your content workflow needs</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} whileHover={{ y: -4 }} className="bg-navy-900 border border-navy-700 rounded-2xl p-6 lg:p-8 hover:border-brand-red transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-4">
                  {Icon && <Icon size={24} className="text-brand-red" />}
                </div>
                <h3 className="font-syne font-semibold text-lg text-navy-100 mb-2">{feature.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
