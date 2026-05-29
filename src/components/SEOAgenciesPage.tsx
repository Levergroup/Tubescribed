"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ChevronDown,
  Star,
  CheckCircle2,
  ArrowRight,
  Mic2,
  Lightbulb,
  Archive,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pricing } from "@/components/sections/Pricing";
import { faqSchema } from "@/lib/schema";

const PROBLEMS = [
  {
    title: "Writers cost $50–150 per article and quality is inconsistent",
    body: "Scaling content production means scaling writer costs linearly. A 50-article month costs $2,500–7,500 in writer fees alone — before editing, publishing, or client management. And every writer sounds different. Every article needs a round of edits to match the client's voice.",
  },
  {
    title: "Generic AI content is getting crushed by Google",
    body: "ChatGPT-generated articles with no unique source material are getting deindexed. Google's Helpful Content updates reward Experience, Expertise, Authority, and Trustworthiness. Content written from a real expert's actual words — extracted from their YouTube videos — passes every E-E-A-T signal.",
  },
  {
    title: "Your clients have YouTube channels full of content nobody is extracting",
    body: "Most of your clients are already publishing YouTube content. Every one of those videos is a unique, expert, authoritative piece of content sitting there being ignored by Google. You're not extracting it because the manual process takes too long. TubeScribed changes that calculation completely.",
  },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Paste the client's YouTube video URL",
    description:
      "Any video from your client's YouTube channel. A tutorial, an interview, an explainer, a product walkthrough. Paste the URL — TubeScribed handles everything after that.",
  },
  {
    number: "02",
    title: "TubeScribed generates a unique SEO article",
    description:
      "Claude AI extracts the expert content from the video, structures it with SEO-optimized H2s, intro paragraph, body sections, and conclusion. The article is built on the client's actual words and expertise — passing every E-E-A-T signal Google looks for.",
  },
  {
    number: "03",
    title: "Edit, optimize, and publish",
    description:
      "The output is 80–90% publication-ready. Your editor does a 15-minute pass for accuracy and adds internal links. What used to take 4 hours of writer time takes 15 minutes of editor time. Your margin just tripled.",
  },
];

const ROI_ROWS = [
  { label: "Cost per article", traditional: "$75–150", tubescribed: "$0.65 (Agency plan ÷ 75 articles)" },
  { label: "Time per article", traditional: "3–4 hours", tubescribed: "15 minutes (editing only)" },
  { label: "Brand voice consistency", traditional: "Requires briefing and editing", tubescribed: "Automatic — set once" },
  { label: "Content uniqueness", traditional: "Depends on writer research", tubescribed: "100% unique — from client's own words" },
  { label: "Google E-E-A-T signals", traditional: "Generic — no real expertise", tubescribed: "Strong — built from real expert content" },
  { label: "Scale ceiling", traditional: "Limited by writer availability", tubescribed: "Unlimited — process any video instantly" },
];

const USE_CASES = [
  {
    icon: Mic2,
    title: "Podcast to blog post pipeline",
    body: "Client publishes a podcast episode to YouTube every week. TubeScribed generates a 1,500-word SEO article from every episode automatically. 4 episodes = 4 blog posts per month. Zero writer cost.",
  },
  {
    icon: Lightbulb,
    title: "Thought leader content amplification",
    body: "Client is a subject matter expert who does talks, interviews, and YouTube videos. You extract their expertise into SEO articles that rank for their core topics — content only they could create.",
  },
  {
    icon: Archive,
    title: "Video backlog monetization",
    body: "Client has 200 YouTube videos and 0 blog posts. Process the backlog — 200 SEO articles in one week. Immediate ranking opportunities across hundreds of long-tail keywords.",
  },
  {
    icon: Globe,
    title: "Multi-language content expansion",
    body: "Process English YouTube content then translate TubeScribed outputs for international SEO campaigns. Unique expert content in every target language.",
  },
];

const BENEFITS = [
  "Unlimited client brand profiles — every article in each client's exact voice automatically",
  "SEO-structured output — H1, H2s, intro, body, conclusion ready to publish",
  "E-E-A-T compliant — built from real expert content, not generic AI generation",
  "5 team members — your whole content team processing client videos simultaneously",
  "100 transcripts + 100 articles per month on Agency plan",
  "Full content library — all client articles saved, organized by brand workspace",
];

const FAQS = [
  {
    q: "Will Google penalize AI-generated content from TubeScribed?",
    a: "TubeScribed generates content from a real expert's actual spoken words — not from a generic AI prompt. The content reflects real expertise, real experience, and real knowledge. This is exactly what Google's E-E-A-T guidelines reward. The source is a human expert. TubeScribed is just the extraction tool.",
  },
  {
    q: "How is this different from just using ChatGPT to write articles?",
    a: "ChatGPT writes from its training data — producing generic content identical to thousands of other articles. TubeScribed extracts content from a specific human expert's specific video — producing unique content only that person could have created. Completely different content quality and Google treatment.",
  },
  {
    q: "Can I process competitor YouTube channels for content research?",
    a: "TubeScribed can process any public YouTube video for research purposes. Always ensure your content production complies with applicable copyright and fair use guidelines. TubeScribed is designed to process your clients' own content.",
  },
  {
    q: "How many articles can I produce per month on the Agency plan?",
    a: "The Agency plan includes 100 transcripts and 100 outputs per month. For higher volume, credit packs are available: 10 credits ($8), 25 credits ($18), 50 credits ($32). Credits never expire.",
  },
];

export function SEOAgenciesPage() {
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
            For SEO Content Agencies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            Scale to 50 SEO Blog Posts Per Month —{" "}
            <GradientText>Without Hiring a Single New Writer.</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Expert YouTube content is the highest-quality source of unique SEO content on the
            internet. TubeScribed extracts it automatically — structured, publication-ready, and
            impossible to duplicate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Try Free — No Credit Card
              </Button>
              <Button href="/pricing" variant="secondary" className="px-8 py-4 text-lg">
                See Agency Plan
              </Button>
            </div>
            <p className="font-dm-sans text-navy-500 text-sm">
              Used by SEO agencies producing 20–100 articles per month
            </p>
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
            The content agency margin problem.
          </motion.h2>
          <div className="space-y-5">
            {PROBLEMS.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-900 border border-navy-700 rounded-2xl p-7"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle size={18} className="text-brand-red shrink-0 mt-0.5" />
                  <h3 className="font-syne font-semibold text-navy-100 text-base">
                    {problem.title}
                  </h3>
                </div>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed pl-7">
                  {problem.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              How It Works
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              From client video to published article. Under 3 minutes.
            </h2>
          </motion.div>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-800 border border-navy-700 rounded-2xl p-8 text-center"
              >
                <span className="inline-block font-syne font-bold text-5xl text-navy-700 mb-8 leading-none">
                  {step.number}
                </span>
                <h3 className="font-syne font-semibold text-xl text-navy-100 mb-3">{step.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">
                  {step.description}
                </p>
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

      {/* 4. ROI Comparison */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
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
              The Math
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              The math that changes your agency model
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto rounded-2xl border border-navy-700"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-navy-900 border-b border-navy-700">
                  <th className="font-dm-sans text-navy-500 text-xs uppercase tracking-wide text-left px-6 py-4 w-1/3"></th>
                  <th className="font-dm-sans text-navy-400 text-xs uppercase tracking-wide text-center px-6 py-4 w-1/3">
                    Traditional Writer
                  </th>
                  <th className="font-syne font-semibold text-brand-red text-xs uppercase tracking-wide text-center px-6 py-4 w-1/3">
                    TubeScribed
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROI_ROWS.map((row, index) => (
                  <tr
                    key={row.label}
                    className={`border-b border-navy-700 last:border-b-0 ${index % 2 === 0 ? "bg-navy-900" : "bg-navy-950"}`}
                  >
                    <td className="font-syne font-semibold text-navy-300 text-sm px-6 py-4">
                      {row.label}
                    </td>
                    <td className="font-dm-sans text-navy-500 text-sm text-center px-6 py-4">
                      {row.traditional}
                    </td>
                    <td className="font-dm-sans text-navy-100 text-sm text-center px-6 py-4 font-medium">
                      {row.tubescribed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-sm text-center mt-6 italic"
          >
            At $49/month, TubeScribed pays for itself after the first article you don&apos;t need a
            writer for.
          </motion.p>
        </div>
      </section>

      {/* 5. Use Cases */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              What SEO agencies build with TubeScribed
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {USE_CASES.map((uc, index) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy-800 border border-navy-700 rounded-2xl p-7 hover:border-brand-red transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-navy-100 text-base mb-3">{uc.title}</h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{uc.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Benefits */}
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
              Everything SEO agencies need
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
                className="flex items-start gap-3 bg-navy-900 border border-navy-700 rounded-2xl p-5 hover:border-brand-red transition-colors duration-300"
              >
                <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
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
              &ldquo;We were spending $8,000/month on writers to produce 60 articles for our SEO
              clients. TubeScribed let us replace most of that with video extraction. Our editors now
              spend 15 minutes per article instead of 4 hours. Same output. One-tenth of the cost.
              Our margins completely changed.&rdquo;
            </p>
            <p className="font-syne font-semibold text-navy-100 text-sm">James K.</p>
            <p className="font-dm-sans text-navy-500 text-xs mt-1">
              Founder, SEO Content Agency (15 clients)
            </p>
            <p className="font-dm-sans text-navy-600 text-xs mt-3 italic">
              Results shown are illustrative examples. Individual results vary.
            </p>
          </motion.div>
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
              Agency pricing for agency volume
            </h2>
            <p className="font-dm-sans text-navy-400 text-base max-w-2xl mx-auto">
              You&apos;re billing clients $500–5,000/month for content. TubeScribed at $49 is a
              rounding error that replaces $3,000–8,000 in monthly writer costs.
            </p>
          </div>
        </div>
        <div className="pt-52">
          <Pricing />
        </div>
        <div className="bg-navy-800 pb-16 px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy-900 border border-navy-700 rounded-2xl p-8"
            >
              <p className="font-syne font-semibold text-navy-100 text-base mb-4">
                Agency plan includes everything you need:
              </p>
              <ul className="space-y-3">
                {[
                  "Unlimited brand workspaces — one per client",
                  "5 team members — your whole content team",
                  "100 articles per month base — credit packs for more",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <span className="font-dm-sans text-navy-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
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
              Your questions, answered
            </h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
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
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-8 max-w-2xl mx-auto">
              Your clients have YouTube channels full of rankable content. Start extracting it today.
            </h2>
            <p className="font-dm-sans text-navy-400 text-base mb-10 max-w-xl mx-auto">
              Try TubeScribed free on a client&apos;s video. First transcript and output free — no
              credit card.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Try Free on a Client Video
              </Button>
              <Button href="/pricing" variant="secondary" className="px-8 py-4 text-lg">
                See Agency Plan
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
