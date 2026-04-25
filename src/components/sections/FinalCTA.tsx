"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { APP_URL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative bg-navy-800 rounded-3xl p-12 lg:p-16 text-center" style={{ background: "linear-gradient(#2C3E52, #2C3E52) padding-box, linear-gradient(135deg, rgba(255,59,48,0.4), rgba(255,140,66,0.4)) border-box", border: "1px solid transparent" }}>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-6">Ready to Start?</p>
          <h2 className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 leading-tight mb-6">Your next video is already<br /><GradientText>a blog post.</GradientText> You just<br />haven&apos;t clicked yet.</h2>
          <p className="font-dm-sans text-navy-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">Join thousands of creators, agencies, and coaches who stopped wasting content and started building systems.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Start Free Trial</Button>
            <Button href="/pricing" variant="secondary" className="px-8 py-4 text-lg">See Pricing</Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["7-day free trial", "Cancel anytime", "Pro & Agency plans"].map((signal) => (<span key={signal} className="flex items-center gap-2 text-navy-400 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-navy-700" />{signal}</span>))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
