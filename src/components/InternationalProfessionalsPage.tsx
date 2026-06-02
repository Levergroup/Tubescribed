"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ChevronDown,
  Star,
  Link2,
  Cpu,
  Search,
  Briefcase,
  GraduationCap,
  Rocket,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pricing } from "@/components/sections/Pricing";
import { faqSchema } from "@/lib/schema";

const PROBLEMS = [
  {
    title: "Fast speech, strong accents, industry jargon — all at once",
    body: "Native English speakers speak at 130–160 words per minute. Add an unfamiliar accent, technical vocabulary, and casual expressions — and even excellent English speakers miss critical points. Better context means having the text in front of you.",
  },
  {
    title: "You cannot pause and rewind in a live business context",
    body: "Earnings calls, conference presentations, client video messages — these move at the speaker's pace, not yours. Missing a number, a commitment, or a key decision in a business context has real consequences.",
  },
  {
    title: "YouTube auto-captions are worse in fast or accented speech",
    body: "The situations where you need captions most — fast speakers, technical topics, non-standard accents — are exactly where YouTube's auto-captions fail most. TubeScribed uses OpenAI Whisper — the most accurate speech recognition model available.",
  },
];

const HOW_IT_WORKS = [
  {
    icon: Link2,
    title: "Paste the YouTube URL of any English video",
    description:
      "Earnings calls, conference talks, podcast interviews, product demos, educational lectures — any public YouTube video in English. No downloads, no extensions.",
  },
  {
    icon: Cpu,
    title: "Get a clean, accurate transcript in 30 seconds",
    description:
      "OpenAI Whisper delivers 95–98% accuracy with proper punctuation and paragraph breaks. Read it like an article — every word exactly as spoken.",
  },
  {
    icon: Search,
    title: "Read at your own pace, search, and export",
    description:
      "Take your time. Look up unfamiliar terms. Export to your notes. Build a searchable library of the most important English content in your field.",
  },
];

const WHO_THIS_HELPS = [
  {
    icon: Briefcase,
    title: "Business Professionals",
    body: "Follow earnings calls, industry conferences, and expert interviews in your field — without missing critical details due to speech speed or accent.",
  },
  {
    icon: GraduationCap,
    title: "Students and Academics",
    body: "Access the full depth of English-language academic lectures, research presentations, and educational content — at your own pace.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurs and Founders",
    body: "The best startup and business content is in English. Podcasts, interviews, masterclasses — all of it is now fully accessible, searchable, and readable.",
  },
  {
    icon: Video,
    title: "Content Creators",
    body: "Understand English-language content in your niche with complete accuracy before creating your own content, videos, or articles on the same topics.",
  },
];

const FAQS = [
  {
    q: "What languages are supported?",
    a: "Whisper supports transcription in 50+ languages. For international professionals, English videos are transcribed with 95–98% accuracy. You can read the English transcript at your own pace.",
  },
  {
    q: "Does it work on fast speakers?",
    a: "Yes. Whisper is specifically trained to handle fast speech, regional accents, and technical vocabulary — all the situations where YouTube auto-captions struggle most.",
  },
  {
    q: "Can I export transcripts to my notes app?",
    a: "Yes — copy the transcript text directly to Notion, Obsidian, Google Docs, or any notes application. Build a searchable English content library over time.",
  },
  {
    q: "What types of English video work best?",
    a: "Business content — earnings calls, conferences, interviews, podcasts, lectures — works best. Whisper is particularly strong on professional speech. Casual vlog content or heavy slang may have lower accuracy.",
  },
];

export function InternationalProfessionalsPage() {
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
            For International Professionals &amp; Non-Native English Speakers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            English Too Fast to Follow?{" "}
            <GradientText>Read It Instead. Better Context. Better Understanding.</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Turn any English YouTube video into a clean, accurate transcript you can read at your
            own pace — no rewinding, no guessing, no missing the point. The best business content is
            in English. Now all of it is accessible to you.
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
              <Button href="#accuracy" variant="secondary" className="px-8 py-4 text-lg">
                See How Accurate It Is
              </Button>
            </div>
            <p className="font-dm-sans text-navy-500 text-sm">
              Used by professionals in 40+ countries to access English video content
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
            Why English video is so hard to follow completely.
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
              From video to readable transcript in three steps.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy-800 border border-navy-700 rounded-2xl p-8 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center mx-auto mb-6">
                    <Icon size={22} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-xl text-navy-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Better Context Callout / Accuracy */}
      <section id="accuracy" className="py-20 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-brand-red bg-navy-900 rounded-r-2xl p-10"
          >
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-white mb-6 leading-tight">
              Better Context. Better Understanding.
            </h2>
            <div className="space-y-4 text-navy-400 text-lg leading-relaxed">
              <p>
                Language comprehension research shows that reading and listening together produces
                significantly better understanding than listening alone.
              </p>
              <p>
                When you can read the words as you hear them — or read first, then watch — your
                comprehension improves dramatically.
              </p>
              <p>
                TubeScribed gives you the text version of any YouTube video in under 30 seconds.
              </p>
              <p>
                The content you need to stay competitive is already available on YouTube. Now you
                can access all of it — on your terms.
              </p>
              <p className="text-white font-semibold">
                Better context. Better decisions. Better career.
              </p>
            </div>
            <div className="mt-8">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-base"
              >
                Try Free — No Credit Card
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Before/After Accuracy Comparison */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Accuracy
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              95–98% accuracy. Suitable for business use.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: YouTube auto-captions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy-800 border border-navy-700 rounded-2xl p-7"
            >
              <p className="font-syne font-semibold text-navy-300 text-sm mb-4 uppercase tracking-wider">
                YouTube Auto-Captions
              </p>
              <p className="font-dm-sans text-navy-400 text-base leading-relaxed mb-6 font-mono">
                &ldquo;so today were gonna talk about uh content repurposing and um you know the
                reason why this is so important is because uh like when you think about it...&rdquo;
              </p>
              <div className="flex flex-wrap gap-2">
                {["Unpunctuated", "Full of errors", "Unusable"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-red-400 bg-red-900/20 border border-red-800/40 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: TubeScribed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy-800 border border-brand-red/40 rounded-2xl p-7"
            >
              <p className="font-syne font-semibold text-brand-red text-sm mb-4 uppercase tracking-wider">
                TubeScribed Transcript
              </p>
              <p className="font-dm-sans text-navy-300 text-base leading-relaxed mb-6 font-mono">
                &ldquo;Today, we&apos;re going to talk about content repurposing — and the reason
                this is so important is that most people create content without extracting maximum
                value from it.&rdquo;
              </p>
              <div className="flex flex-wrap gap-2">
                {["Accurate", "Clean", "Readable"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-green-400 bg-green-900/20 border border-green-800/40 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Who This Helps */}
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
              Who It&apos;s For
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Who TubeScribed helps most
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHO_THIS_HELPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              );
            })}
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
              &ldquo;My English is professional but fast speakers and strong accents are very hard
              for me to follow completely. Before TubeScribed, I would rewatch important videos 3 or
              4 times. Now I paste the URL, read the transcript, and I understand everything on the
              first pass.&rdquo;
            </p>
            <p className="font-syne font-semibold text-navy-100 text-sm">Yuki T.</p>
            <p className="font-dm-sans text-navy-500 text-xs mt-1">Business Analyst, Tokyo</p>
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
              Simple, affordable access
            </h2>
            <p className="font-dm-sans text-navy-400 text-base max-w-xl mx-auto">
              30 transcripts per month covers most professional research workflows. Start free — no
              credit card required.
            </p>
          </div>
        </div>
        <div className="pt-52">
          <Pricing />
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
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-6 max-w-2xl mx-auto">
              The best business content is in English. All of it is now accessible to you.
            </h2>
            <p className="font-dm-sans text-navy-400 text-base mb-10 max-w-xl mx-auto">
              Try TubeScribed free. Paste any English YouTube URL. Read the full transcript in 30
              seconds. No credit card.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Try Free — Read Your First Video Now
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
