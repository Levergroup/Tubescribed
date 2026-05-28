"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ContentOutputShowcase } from "@/components/ContentOutputShowcase";
import { Pricing } from "@/components/sections/Pricing";
import { faqSchema } from "@/lib/schema";

interface FAQ {
  q: string;
  a: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface AvatarPageData {
  category: string;
  heroHeadline: string;
  heroHeadlineGradient: string;
  heroSub: string;
  socialProof: string;
  ctaHref: string;
  problems: string[];
  showcaseVideoTitle: string;
  benefits: string[];
  testimonial: Testimonial;
  faqs: FAQ[];
  finalCtaLine: string;
}

export function AvatarLandingPage({
  category,
  heroHeadline,
  heroHeadlineGradient,
  heroSub,
  socialProof,
  ctaHref,
  problems,
  showcaseVideoTitle,
  benefits,
  testimonial,
  faqs,
  finalCtaLine,
}: AvatarPageData) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const schema = faqSchema(faqs);

  return (
    <div className="min-h-screen bg-navy-900">

      {/* 1. Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-navy-900">
        <div className="section-glow-tr" />
        <div className="section-glow-bl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4"
          >
            {category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            {heroHeadline}{" "}
            <GradientText>{heroHeadlineGradient}</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {heroSub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <Button href={ctaHref} variant="primary" className="px-8 py-4 text-lg">
              Try Free
            </Button>
            <p className="font-dm-sans text-navy-500 text-sm">{socialProof}</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Problems */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-mid-left" />
        <div className="section-glow-tr" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne font-bold text-3xl text-navy-100 text-center mb-12"
          >
            Sound familiar?
          </motion.h2>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-navy-900 border border-navy-700 rounded-2xl p-6"
              >
                <AlertCircle size={20} className="text-brand-red shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <HowItWorks />

      {/* 4. Live Output Showcase */}
      <ContentOutputShowcase videoTitle={showcaseVideoTitle} />

      {/* 5. Benefits Grid */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              What You Get
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Built for how you actually work
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-3 bg-navy-900 border border-navy-700 rounded-2xl p-5 hover:border-brand-red transition-colors duration-300"
              >
                <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tr" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-800 border border-navy-700 rounded-3xl p-10 text-center"
          >
            <div className="flex items-center justify-center gap-0.5 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="font-dm-sans text-navy-300 text-lg leading-relaxed mb-8 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="font-syne font-semibold text-navy-100 text-sm">{testimonial.name}</p>
            <p className="font-dm-sans text-navy-500 text-xs mt-1">{testimonial.role}</p>
          </motion.div>
        </div>
      </section>

      {/* 7. Pricing */}
      <Pricing />

      {/* 8. FAQ */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              FAQ
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Your questions, answered
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                >
                  <span className="font-syne font-semibold text-navy-100 text-sm">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-navy-400 shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="font-dm-sans text-navy-400 text-sm leading-relaxed px-6 pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 lg:py-32 cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-3xl p-12 lg:p-16 text-center"
            style={{
              background:
                "linear-gradient(#2C3E52, #2C3E52) padding-box, linear-gradient(135deg, rgba(255,59,48,0.4), rgba(255,140,66,0.4)) border-box",
              border: "1px solid transparent",
            }}
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-6">
              Ready to Start?
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-8 max-w-2xl mx-auto">
              {finalCtaLine}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button href={ctaHref} variant="primary" className="px-8 py-4 text-lg">
                Try Free
              </Button>
              <Button href="/pricing" variant="secondary" className="px-8 py-4 text-lg">
                See Pricing
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["1 free transcript, no credit card", "Cancel anytime", "Pro & Agency plans"].map(
                (signal) => (
                  <span key={signal} className="flex items-center gap-2 text-navy-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-700" />
                    {signal}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
