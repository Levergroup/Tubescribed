"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { PLANS, PRICING_FAQ } from "@/lib/constants";
import { GradientText } from "@/components/ui/GradientText";

const allFeatures = [
  "Transcripts per month",
  "Content output types",
  "Brand profiles",
  "SOP generator",
  "Blog post generation",
  "Email sequence generator",
  "Social media captions",
  "LinkedIn posts",
  "YouTube descriptions",
  "Training guides",
  "File downloads",
  "Priority processing",
  "White-label outputs",
  "Email support",
  "Priority support",
];

const planFeatureMap: Record<string, Record<string, string | boolean>> = {
  Free: {
    "Transcripts per month": "3",
    "Content output types": "3",
    "Brand profiles": "1",
    "SOP generator": true,
    "Blog post generation": true,
    "Email sequence generator": false,
    "Social media captions": false,
    "LinkedIn posts": false,
    "YouTube descriptions": false,
    "Training guides": false,
    "File downloads": ".txt only",
    "Priority processing": false,
    "White-label outputs": false,
    "Email support": false,
    "Priority support": false,
  },
  Pro: {
    "Transcripts per month": "25",
    "Content output types": "All 15",
    "Brand profiles": "3",
    "SOP generator": true,
    "Blog post generation": true,
    "Email sequence generator": true,
    "Social media captions": true,
    "LinkedIn posts": true,
    "YouTube descriptions": true,
    "Training guides": true,
    "File downloads": ".txt, .docx, .pdf",
    "Priority processing": true,
    "White-label outputs": false,
    "Email support": true,
    "Priority support": false,
  },
  Agency: {
    "Transcripts per month": "100",
    "Content output types": "All 15",
    "Brand profiles": "Unlimited",
    "SOP generator": true,
    "Blog post generation": true,
    "Email sequence generator": true,
    "Social media captions": true,
    "LinkedIn posts": true,
    "YouTube descriptions": true,
    "Training guides": true,
    "File downloads": ".txt, .docx, .pdf",
    "Priority processing": true,
    "White-label outputs": true,
    "Email support": true,
    "Priority support": true,
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6"
          >
            Simple, <GradientText>honest pricing.</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            One transcript saves 45+ minutes of manual work. TubeScribed pays
            for itself on day one.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl p-8 flex flex-col"
                style={
                  plan.popular
                    ? {
                        background:
                          "linear-gradient(#1E2A3A, #1E2A3A) padding-box, linear-gradient(135deg, #FF3B30, #FF8C42) border-box",
                        border: "2px solid transparent",
                      }
                    : { background: "#2C3E52", border: "1px solid #3D5166" }
                }
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="btn-gradient text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="font-syne font-bold text-2xl text-navy-100 mb-1">
                    {plan.name}
                  </h2>
                  <p className="text-navy-400 text-sm mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-syne font-bold text-5xl text-navy-100">
                      {plan.price}
                    </span>
                    <span className="text-navy-400 text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check size={16} className="text-brand-red shrink-0" />
                      <span className="font-dm-sans text-navy-100 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <motion.a
                    href={plan.ctaHref}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full text-center font-semibold py-3 rounded-xl transition-all duration-200 ${
                      plan.popular
                        ? "btn-gradient text-white"
                        : "border border-navy-700 text-navy-100 hover:bg-navy-700"
                    }`}
                  >
                    {plan.cta}
                  </motion.a>
                  <p className="text-center text-navy-400 text-xs mt-3">
                    {plan.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne font-bold text-2xl lg:text-3xl text-navy-100 text-center mb-10">
              Full Feature Comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-navy-700">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy-800 border-b border-navy-700">
                    <th className="text-left px-6 py-4 font-syne font-semibold text-navy-100 text-sm w-1/2">
                      Feature
                    </th>
                    {PLANS.map((plan) => (
                      <th
                        key={plan.name}
                        className="text-center px-6 py-4 font-syne font-semibold text-sm"
                        style={{
                          color: plan.popular ? "#FF3B30" : "#E8EDF2",
                        }}
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, i) => (
                    <tr
                      key={feature}
                      className={`border-b border-navy-700 ${
                        i % 2 === 0 ? "bg-navy-900" : "bg-navy-800"
                      }`}
                    >
                      <td className="px-6 py-4 font-dm-sans text-navy-100 text-sm">
                        {feature}
                      </td>
                      {PLANS.map((plan) => {
                        const val = planFeatureMap[plan.name][feature];
                        return (
                          <td
                            key={plan.name}
                            className="px-6 py-4 text-center font-dm-sans text-sm"
                          >
                            {typeof val === "boolean" ? (
                              val ? (
                                <Check
                                  size={18}
                                  className="text-green-400 mx-auto"
                                />
                              ) : (
                                <X
                                  size={18}
                                  className="text-navy-700 mx-auto"
                                />
                              )
                            ) : (
                              <span className="text-navy-100">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne font-bold text-3xl text-navy-100 text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {PRICING_FAQ.map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-navy-900 border border-navy-700 rounded-2xl p-6"
              >
                <h3 className="font-syne font-semibold text-navy-100 mb-2">
                  {item.q}
                </h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
