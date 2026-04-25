"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { PLANS } from "@/lib/constants";

export function Pricing() {
  return (
    <section className="py-24 lg:py-32 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Pricing</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 text-center mb-4">Start free. Scale when you&apos;re ready.</motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }} className="text-center text-navy-400 text-base font-dm-sans mb-16 max-w-lg mx-auto">One transcript pays for the entire month at any professional hourly rate.</motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {PLANS.map((plan, index) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} whileHover={{ y: -4 }} className="relative rounded-2xl p-8 flex flex-col" style={plan.popular ? { background: "linear-gradient(#2C3E52, #2C3E52) padding-box, linear-gradient(135deg, #FF3B30, #FF8C42) border-box", border: "2px solid transparent" } : { background: "#1E2A3A", border: "1px solid #3D5166" }}>
              {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2"><span className="btn-gradient text-white text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</span></div>}
              <div className="mb-6">
                <h3 className="font-syne font-bold text-xl text-navy-100 mb-1">{plan.name}</h3>
                <p className="text-navy-400 text-sm font-dm-sans mb-4">{plan.subtitle}</p>
                <div className="flex items-baseline gap-1"><span className="font-syne font-bold text-4xl text-navy-100">{plan.price}</span><span className="text-navy-400 text-sm">{plan.period}</span></div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">{plan.features.map((feature) => (<li key={feature} className="flex items-center gap-3"><Check size={16} className="text-brand-red shrink-0" /><span className="font-dm-sans text-navy-100 text-sm">{feature}</span></li>))}</ul>
              <div className="mt-auto">
                <motion.a href={plan.ctaHref} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`block w-full text-center font-semibold py-3 rounded-xl transition-all duration-200 ${plan.popular ? "btn-gradient text-white" : "border border-navy-700 text-navy-100 hover:bg-navy-800"}`}>{plan.cta}</motion.a>
                <p className="text-center text-navy-400 text-xs mt-3">{plan.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center text-navy-400 text-sm font-dm-sans">Need more? Credit packs available. <Link href="/pricing" className="text-navy-100 hover:text-brand-red underline underline-offset-2 transition-colors duration-200">See all pricing →</Link></motion.p>
      </div>
    </section>
  );
}
