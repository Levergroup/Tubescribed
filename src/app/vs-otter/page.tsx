"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { COMPARISON_FEATURES_OTTER, APP_URL } from "@/lib/constants";

export default function VsOtterPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Comparison</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight">
            <GradientText>TubeScribed</GradientText> vs Otter.ai
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Otter.ai is built for live meeting transcription. TubeScribed is built for turning YouTube content into branded business assets. Different tools. Different jobs.
          </motion.p>
        </div>
      </section>
      <section className="py-12 pb-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-x-auto rounded-2xl border border-navy-700">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-800 border-b border-navy-700">
                  <th className="text-left px-6 py-5 font-syne font-semibold text-navy-100 text-sm">Feature</th>
                  <th className="text-center px-6 py-5 font-syne font-semibold text-brand-red text-sm">TubeScribed</th>
                  <th className="text-center px-6 py-5 font-syne font-semibold text-navy-400 text-sm">Otter.ai</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES_OTTER.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-navy-700 ${i % 2 === 0 ? "bg-navy-900" : "bg-navy-800"}`}>
                    <td className="px-6 py-4 font-dm-sans text-navy-100 text-sm font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center font-dm-sans text-sm">
                      {row.tubescribed.startsWith("✓") ? (<div className="flex items-center justify-center gap-2"><Check size={16} className="text-green-400 shrink-0" /><span className="text-navy-100">{row.tubescribed.replace("✓ ", "")}</span></div>) : (<span className="text-navy-100">{row.tubescribed}</span>)}
                    </td>
                    <td className="px-6 py-4 text-center font-dm-sans text-sm">
                      {row.competitor.startsWith("✗") ? (<div className="flex items-center justify-center gap-2"><X size={16} className="text-navy-700 shrink-0" /><span className="text-navy-400">{row.competitor.replace("✗ ", "")}</span></div>) : (<span className="text-navy-400">{row.competitor}</span>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-navy-900 border border-navy-700 rounded-3xl p-10 lg:p-14">
            <h2 className="font-syne font-bold text-2xl lg:text-3xl text-navy-100 mb-6">The Verdict</h2>
            <p className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-8">
              If you record meetings, Otter.ai is great. If you create YouTube content and want to repurpose it into business assets, TubeScribed is built exactly for that. Otter.ai doesn&apos;t connect to YouTube directly, has no brand workspace, no SOP generator, and no content output studio. It&apos;s a meeting tool.<br /><br />
              TubeScribed is a content repurposing machine — starting at $19/month, with a free run to try it first. No credit card.
            </p>
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
