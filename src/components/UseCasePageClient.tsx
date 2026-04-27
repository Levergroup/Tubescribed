"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { AlertCircle, CheckCircle2, FileText, Layers, ClipboardList, Grid3x3, Wand2 } from "lucide-react";

const iconMap = {
  FileText,
  Layers,
  ClipboardList,
  Grid3x3,
  Wand2,
} as const;

type IconKey = keyof typeof iconMap;

interface UseCasePageProps {
  category: string;
  headline: string;
  headlineGradient: string;
  subheadline: string;
  painHeading: string;
  painPoints: string[];
  featureCallout: {
    icon: IconKey;
    heading: string;
    body: string;
    subBody: string;
    note: string;
  };
  outcomeHeading: string;
  outcomes: string[];
  ctaHref: string;
}

export function UseCasePageClient({
  category,
  headline,
  headlineGradient,
  subheadline,
  painHeading,
  painPoints,
  featureCallout,
  outcomeHeading,
  outcomes,
  ctaHref,
}: UseCasePageProps) {
  const Icon = iconMap[featureCallout.icon];

  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            {category}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight">
            {headline}{" "}<GradientText>{headlineGradient}</GradientText>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {subheadline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Button href={ctaHref} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-syne font-bold text-3xl text-navy-100 text-center mb-12">
            {painHeading}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((pain, index) => (
              <motion.div key={pain} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4 bg-navy-900 border border-navy-700 rounded-2xl p-6">
                <AlertCircle size={20} className="text-brand-red shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{pain}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-navy-800 border border-navy-700 rounded-3xl p-10 lg:p-14 text-center">
            <div className="w-16 h-16 rounded-2xl bg-navy-900 border border-navy-700 flex items-center justify-center mx-auto mb-6">
              <Icon size={32} className="text-brand-red" />
            </div>
            <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4">{featureCallout.heading}</h2>
            <p className="font-dm-sans text-navy-400 text-lg leading-relaxed max-w-2xl mx-auto mb-6">{featureCallout.body}</p>
            <p className="font-dm-sans text-navy-400 text-base leading-relaxed max-w-xl mx-auto mb-4">{featureCallout.subBody}</p>
            {featureCallout.note && <p className="font-dm-sans text-navy-500 text-sm italic">{featureCallout.note}</p>}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">{outcomeHeading}</h2>
          </motion.div>
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <motion.div key={outcome} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4 bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300">
                <CheckCircle2 size={20} className="text-green-400 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{outcome}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-10">
            <Button href={ctaHref} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
