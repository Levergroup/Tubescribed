"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ChevronDown,
  Star,
  UserCheck,
  ShieldCheck,
  Wrench,
  Users,
  BookOpen,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pricing } from "@/components/sections/Pricing";
import { faqSchema } from "@/lib/schema";

const STATS = [
  { value: "90 min → 2 min", label: "Average SOP creation time" },
  { value: "100% searchable", label: "All video knowledge documented" },
  { value: "Consistent onboarding", label: "Every hire gets the same experience" },
  { value: "Zero writing required", label: "AI does the documentation" },
];

const PROBLEMS = [
  {
    title: "Your best knowledge is locked in videos nobody rewatches",
    body: "You have 200, 500, maybe 1,000 training videos recorded over years. Product walkthroughs, process tutorials, onboarding recordings, compliance training. None of it is searchable. None of it is findable. A new hire has to watch a 45-minute video to answer a 30-second question.",
  },
  {
    title: "Senior employees leave — and take institutional knowledge with them",
    body: "When your best people leave, their knowledge goes with them. Unless it's documented. Most companies know this is a problem. Almost none have solved it because documentation takes too long. TubeScribed turns every recorded process into a permanent, searchable SOP in seconds.",
  },
  {
    title: "Manual SOP writing costs more than you think",
    body: "A skilled employee writing SOPs from video content takes 4–6 hours per document. At $35–75/hour that's $140–450 per SOP. A company with 100 processes that need documentation is looking at $14,000–45,000 in labor costs — for a one-time project that immediately goes stale.",
  },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Paste your training video URL",
    description:
      "Any YouTube video, unlisted training recording, or internal video uploaded to YouTube. Paste the URL — no downloads, no uploads, no IT tickets required.",
  },
  {
    number: "02",
    title: "TubeScribed generates the documentation",
    description:
      "Claude AI reads the video content and produces a formatted SOP with purpose statement, prerequisites, numbered steps, notes, warnings, and completion checklist — all in your company's voice and terminology.",
  },
  {
    number: "03",
    title: "Distribute to your team immediately",
    description:
      "Download as .txt, copy to Notion, paste to Confluence, drop into your LMS — wherever your team finds documentation. One video becomes one searchable, findable, updatable document.",
  },
];

const USE_CASES = [
  {
    icon: UserCheck,
    title: "Employee onboarding",
    body: "Convert every onboarding video into a written guide new hires can reference at their own pace. Consistent experience for every new employee.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance documentation",
    body: "Turn compliance training recordings into searchable, auditable written documents. Pass audits confidently.",
  },
  {
    icon: Wrench,
    title: "Process documentation",
    body: "Every how-to video in your library becomes a step-by-step SOP. Never recreate process documentation from scratch again.",
  },
  {
    icon: Users,
    title: "Knowledge transfer",
    body: "Before a senior employee leaves, run every recording they've made through TubeScribed. Their knowledge stays permanently.",
  },
  {
    icon: BookOpen,
    title: "Training materials",
    body: "Convert video training modules into written study guides, quizzes, and reference materials. Improve completion and retention rates.",
  },
  {
    icon: Building2,
    title: "Franchise & multi-location",
    body: "Create consistent process documentation across all locations from a single video library. Every location operates the same way.",
  },
];

const BENEFITS = [
  "Brand voice that matches your company terminology — train it once, every SOP sounds like your organization",
  "Unlimited brand workspaces — one per department, one per brand, one per location",
  "5 team members on Agency plan — L&D, HR, and operations all in one account",
  "Videos up to 90 minutes — handles your longest training recordings",
  "Content library — all SOPs saved, searchable, downloadable in your workspace",
  "No IT required — cloud-based, works in any browser, no installation",
];

const FAQS = [
  {
    q: "Can TubeScribed process unlisted or private YouTube videos?",
    a: "TubeScribed works with any public or unlisted YouTube video. For private videos, we recommend making them temporarily unlisted for processing, then resetting to private. Full support for private video processing is on our enterprise roadmap.",
  },
  {
    q: "How do we ensure the SOPs match our company's terminology and voice?",
    a: "The Brand Workspace feature lets you save your company's terminology, tone, and documentation style. Every SOP generated automatically uses your vocabulary and format — not generic AI language.",
  },
  {
    q: "Is our video content secure?",
    a: "TubeScribed processes video audio via secure API calls and does not store raw audio files. Generated SOPs are stored in your workspace and accessible only to your account. We never use your content to train AI models.",
  },
  {
    q: "Can multiple team members access the same account?",
    a: "The Agency plan includes 5 team members. For larger teams, contact us for enterprise pricing with unlimited seats.",
  },
  {
    q: "What format are the SOPs delivered in?",
    a: "SOPs are generated as clean formatted text and saved to your TubeScribed workspace. Download as .txt, copy to any platform, or paste directly into Notion, Confluence, SharePoint, or your LMS.",
  },
];

export function EnterprisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const schema = faqSchema(FAQS);

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
            For Enterprise &amp; L&amp;D Teams
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            Your Training Video Library Is Worth Nothing{" "}
            <GradientText>If Nobody Can Find What&apos;s Inside It.</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            TubeScribed converts your entire video training library into searchable SOPs, onboarding
            guides, and compliance documentation — automatically. New employees get answers in
            seconds, not hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="mailto:hello@tubescribed.com?subject=Enterprise Demo Request"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Request Enterprise Demo
              </Button>
              <Button
                href="https://app.tubescribed.com/signup"
                variant="secondary"
                className="px-8 py-4 text-lg"
              >
                Try Free First
              </Button>
            </div>
            <p className="font-dm-sans text-navy-500 text-sm">
              Used by operations teams, L&amp;D managers, and HR directors
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-navy-800 border border-navy-700 rounded-2xl p-5 text-center"
              >
                <p className="font-syne font-bold text-xl lg:text-2xl text-navy-100 mb-1">
                  {stat.value}
                </p>
                <p className="font-dm-sans text-navy-400 text-xs leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2. Problems */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-mid-left" />
        <div className="section-glow-tr" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              The Problem
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              The enterprise knowledge problem nobody talks about.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROBLEMS.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-900 border border-navy-700 rounded-2xl p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle size={18} className="text-brand-red shrink-0 mt-0.5" />
                  <h3 className="font-syne font-semibold text-navy-100 text-base">{p.title}</h3>
                </div>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-navy-900">
        <div className="section-glow-tr" />
        <div className="section-glow-bl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-brand-red text-sm font-semibold tracking-widest uppercase mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 text-center mb-16"
          >
            From video library to knowledge base. Three steps.
          </motion.h2>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative bg-navy-800 border border-navy-700 rounded-2xl p-8 hover:border-brand-red transition-colors duration-300"
              >
                <span
                  className="absolute top-6 left-6 font-syne font-bold text-5xl bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent"
                  style={{ opacity: 0.4 }}
                >
                  {step.number}
                </span>
                <div className="mt-12 mb-4">
                  <h3 className="font-syne font-semibold text-xl text-navy-100 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
              <div className="w-1/3" />
              <div className="w-1/12 flex items-center justify-center text-navy-700 text-2xl font-bold">→</div>
              <div className="w-1/3" />
              <div className="w-1/12 flex items-center justify-center text-navy-700 text-2xl font-bold">→</div>
              <div className="w-1/3" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Use Cases Grid */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Use Cases
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              What enterprise teams build with TubeScribed
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((uc, index) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">
                    {uc.title}
                  </h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{uc.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
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
              Everything enterprise teams need
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-3 bg-navy-800 border border-navy-700 rounded-2xl p-5 hover:border-brand-red transition-colors duration-300"
              >
                <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROI Calculator Callout */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-bl" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 lg:p-12"
            style={{
              background: "linear-gradient(#1E2A3A, #1E2A3A) padding-box, linear-gradient(135deg, rgba(255,59,48,0.5), rgba(255,140,66,0.3)) border-box",
              border: "1px solid transparent",
            }}
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              ROI Calculator
            </p>
            <h2 className="font-syne font-bold text-2xl lg:text-3xl text-navy-100 mb-8">
              What does manual SOP documentation cost you?
            </h2>
            <div className="bg-navy-950 rounded-2xl p-6 mb-8 font-mono text-sm leading-8 space-y-1">
              <p className="text-navy-100">100 training videos in your library</p>
              <p className="text-navy-400">× 4 hours to manually document each one</p>
              <p className="text-navy-400">× $45/hour average employee cost</p>
              <div className="border-t border-navy-700 pt-3 mt-3">
                <p className="text-brand-red font-bold">= $18,000 in documentation labor</p>
              </div>
              <div className="border-t border-navy-700 pt-3 mt-3 space-y-1">
                <p className="text-green-400">TubeScribed Agency plan: $49/month</p>
                <p className="text-green-400">Time to document all 100: ~2 hours total</p>
              </div>
            </div>
            <div className="text-center">
              <a
                href="https://app.tubescribed.com/signup"
                className="inline-block btn-gradient text-white font-semibold px-8 py-3 rounded-xl transition-opacity duration-200 hover:opacity-90"
              >
                Try it free on your first video
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Testimonial */}
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
              &ldquo;We had 340 training videos and zero written documentation. Our onboarding was
              inconsistent and new hires were constantly interrupting senior staff with questions
              they should have been able to answer themselves. TubeScribed turned our entire video
              library into an SOP database in one weekend.&rdquo;
            </p>
            <p className="font-syne font-semibold text-navy-100 text-sm">Rachel M.</p>
            <p className="font-dm-sans text-navy-500 text-xs mt-1">
              L&amp;D Director, Operations Team
            </p>
          </motion.div>
          <p className="font-dm-sans text-navy-500 text-xs text-center mt-4">
            Results shown are illustrative examples. Individual results vary.
          </p>
        </div>
      </section>

      {/* 8. Pricing */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-10 pt-16 pb-4 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Pricing
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">
              Enterprise-ready pricing
            </h2>
            <p className="font-dm-sans text-navy-400 text-base max-w-xl mx-auto">
              One weekend of documentation work used to cost $5,000–15,000 in employee time.
              TubeScribed Agency at $49/month pays for itself in the first hour.
            </p>
          </div>
        </div>
        <div className="pt-52">
          <Pricing />
        </div>
        {/* Enterprise callout */}
        <div className="bg-navy-800 pb-16 px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy-900 border border-navy-700 rounded-2xl p-8 text-center"
            >
              <p className="font-syne font-semibold text-navy-100 text-lg mb-2">
                Need more than 100 transcripts/month?
              </p>
              <p className="font-dm-sans text-navy-400 text-sm mb-6 leading-relaxed">
                Enterprise teams processing large video libraries may need custom volume. Contact us
                for enterprise pricing, custom API access, and dedicated onboarding support.
              </p>
              <a
                href="mailto:hello@tubescribed.com?subject=Enterprise Pricing"
                className="inline-flex items-center gap-2 btn-gradient text-white font-semibold px-6 py-3 rounded-xl transition-opacity duration-200 hover:opacity-90 text-sm"
              >
                Contact Enterprise Sales <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 9. FAQ */}
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
              Enterprise questions, answered
            </h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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

      {/* 10. Final CTA */}
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
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-4 max-w-2xl mx-auto">
              Your video library is a goldmine of documentation. It&apos;s time to extract it.
            </h2>
            <p className="font-dm-sans text-navy-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Try TubeScribed free on one of your training videos. No credit card. No setup. See
              the SOP in 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Try Free on Your First Video
              </Button>
              <Button
                href="mailto:hello@tubescribed.com?subject=Enterprise Demo"
                variant="secondary"
                className="px-8 py-4 text-lg"
              >
                Talk to Enterprise Sales
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["No credit card required", "First transcript free", "Enterprise pricing available"].map(
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
