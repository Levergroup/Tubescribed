"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

interface ComparisonRow {
  feature: string;
  tubescribed: string;
  competitor: string;
}

interface PriceCard {
  label: string;
  price: string;
  description: string;
  highlight?: boolean;
}

interface VSPageProps {
  competitorName: string;
  subtitle: string;
  priceCards?: PriceCard[];
  features: ComparisonRow[];
  verdictHeading?: string;
  verdictBody: string;
  ctaHref: string;
}

function CellValue({ value, positive }: { value: string; positive: boolean }) {
  const isCheck = value.startsWith("✓");
  const isCross = value.startsWith("✗");
  const text = value.replace("✓ ", "").replace("✗ ", "");

  if (isCheck) {
    return (
      <div className="flex items-center justify-center gap-2">
        <Check size={16} className="text-green-400 shrink-0" />
        <span className={positive ? "text-navy-100" : "text-navy-400"}>{text}</span>
      </div>
    );
  }
  if (isCross) {
    return (
      <div className="flex items-center justify-center gap-2">
        <X size={16} className="text-navy-600 shrink-0" />
        <span className="text-navy-500">{text}</span>
      </div>
    );
  }
  return <span className={positive ? "text-navy-100" : "text-navy-400"}>{value}</span>;
}

export function VSPageClient({
  competitorName,
  subtitle,
  priceCards,
  features,
  verdictHeading = "The Verdict",
  verdictBody,
  ctaHref,
}: VSPageProps) {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            Comparison
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight">
            <GradientText>TubeScribed</GradientText> vs {competitorName}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </motion.p>
        </div>
      </section>

      {priceCards && priceCards.length > 0 && (
        <section className="py-12 bg-navy-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {priceCards.map((card, i) => (
                <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`bg-navy-800 border rounded-2xl p-6 ${card.highlight ? "border-brand-red/50" : "border-navy-700"}`}>
                  <h3 className={`font-syne font-bold text-lg mb-2 ${card.highlight ? "text-brand-red" : "text-navy-400"}`}>{card.label}</h3>
                  <div className="font-syne font-bold text-4xl text-navy-100 mb-2">{card.price}</div>
                  <p className="font-dm-sans text-navy-400 text-sm">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-x-auto rounded-2xl border border-navy-700">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-800 border-b border-navy-700">
                  <th className="text-left px-6 py-5 font-syne font-semibold text-navy-100 text-sm">Feature</th>
                  <th className="text-center px-6 py-5 font-syne font-semibold text-brand-red text-sm">TubeScribed</th>
                  <th className="text-center px-6 py-5 font-syne font-semibold text-navy-400 text-sm">{competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-navy-700 ${i % 2 === 0 ? "bg-navy-900" : "bg-navy-800"}`}>
                    <td className="px-6 py-4 font-dm-sans text-navy-100 text-sm font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center font-dm-sans text-sm">
                      <CellValue value={row.tubescribed} positive={true} />
                    </td>
                    <td className="px-6 py-4 text-center font-dm-sans text-sm">
                      <CellValue value={row.competitor} positive={false} />
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
            <h2 className="font-syne font-bold text-2xl lg:text-3xl text-navy-100 mb-6">{verdictHeading}</h2>
            <p className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: verdictBody }} />
            <Button href={ctaHref} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
