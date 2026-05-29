"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ChevronDown,
  Star,
  CheckCircle2,
  FileText,
  ClipboardList,
  Mail,
  MessageSquare,
  Hash,
  PlayCircle,
  HelpCircle,
  ListChecks,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pricing } from "@/components/sections/Pricing";
import { faqSchema } from "@/lib/schema";

const PROBLEMS = [
  {
    title: "Repurposing content for 5 channels manually takes a full week",
    body: "You're managing thumbnails, SEO, community posts, shorts, and scheduling. Adding content repurposing — blog posts, show notes, email newsletters — for 5 channels means 20+ hours of additional work every week. It either doesn't get done or you burn out doing it.",
  },
  {
    title: "Every creator sounds different — you can't use one template for all of them",
    body: "Creator A is casual and funny. Creator B is authoritative and technical. Creator C is warm and educational. Generic AI outputs that don't match each creator's voice get rejected — and you spend more time editing than you would have writing from scratch.",
  },
  {
    title: "Your creators are leaving content value on the table and blaming you for it",
    body: "Creators know their videos should become blog posts and email newsletters. They're not doing it themselves. They hired you to handle their channel. When it doesn't happen, you're the person who didn't deliver — even though there aren't enough hours in the day to do it manually.",
  },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Save each creator as a brand profile",
    description:
      "Set up one brand workspace per creator. Their tone, their audience, their vocabulary, their style. Takes 5 minutes per creator. Do it once — never think about it again.",
  },
  {
    number: "02",
    title: "Paste each video URL as it publishes",
    description:
      "New video goes live on Creator A's channel. Paste the URL, select Creator A's brand profile, click generate. 15 seconds later you have a blog post, email newsletter, and social captions that sound exactly like Creator A.",
  },
  {
    number: "03",
    title: "Deliver outputs to each creator",
    description:
      "Download or copy each output. Send to the creator, post to their blog, schedule in their email platform. What used to take 3 hours per creator per week now takes 15 minutes.",
  },
];

const DELIVERABLES = [
  { icon: FileText, name: "Blog post", description: "SEO-structured long-form article" },
  { icon: ClipboardList, name: "Show notes", description: "Episode summary with timestamps" },
  { icon: Mail, name: "Email newsletter", description: "Ready-to-send with subject line" },
  { icon: MessageSquare, name: "Social captions", description: "LinkedIn, X, and Instagram" },
  { icon: Hash, name: "X thread", description: "Numbered thread with hook and CTA" },
  { icon: PlayCircle, name: "YouTube description", description: "SEO-optimized with timestamps" },
  { icon: HelpCircle, name: "FAQ document", description: "Questions extracted from the video" },
  { icon: ListChecks, name: "Key takeaways", description: "Bullet summary of main points" },
];

const BENEFITS = [
  "Unlimited brand workspaces — one per creator — on the Agency plan",
  "Each creator's voice saved permanently — outputs always match their style",
  "Process 100 videos per month across all channels",
  "5 team members — bring in a VA to help process without sharing passwords",
  "Content library organized by brand workspace — every creator's outputs in their own folder",
  "Charge creators more for content services — justify it with faster, better delivery",
];

const FAQS = [
  {
    q: "How many channels can I manage in one TubeScribed account?",
    a: "The Agency plan includes unlimited brand workspaces — one per creator or channel. There's no limit on the number of channels you manage.",
  },
  {
    q: "Can I give my clients access to see their own outputs?",
    a: "The Agency plan includes 5 team member seats. You can add client access so they can log in and see their own workspace. Full white label client access is on our product roadmap.",
  },
  {
    q: "What output types are most useful for channel managers?",
    a: "The most commonly used outputs for channel management are: blog post (for SEO), email newsletter (for list growth), social captions (for cross-platform distribution), YouTube description (for video SEO), and show notes (for podcast episodes uploaded to YouTube).",
  },
  {
    q: "Can I upsell content repurposing to my current channel management clients?",
    a: "Absolutely. Many channel managers add TubeScribed to their service offering and charge $200–500/month extra per creator for full content repurposing. At $49/month for the Agency plan, the margin is significant.",
  },
];

export function ChannelManagersPage() {
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
            For YouTube Channel Managers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            You Manage 5 YouTube Channels. You Repurpose Zero of Them.{" "}
            <GradientText>That Ends Today.</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            TubeScribed lets you manage content repurposing across every channel you run — each with
            their own brand voice, each processed in seconds. One tool for every creator you work
            with.
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
              Used by channel managers running 3–15 active YouTube channels
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
            Managing channels is a full-time job. Repurposing content shouldn&apos;t be.
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
              Process every channel in the time it used to take to process one.
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

      {/* 4. Deliverables Grid */}
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
              What You Deliver
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              What you deliver for each creator every week
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {DELIVERABLES.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-navy-900 border border-navy-700 rounded-2xl p-5 flex flex-col items-center text-center hover:border-brand-red/50 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-brand-red" />
                  </div>
                  <p className="font-syne font-semibold text-navy-100 text-sm mb-1">{item.name}</p>
                  <p className="font-dm-sans text-navy-500 text-xs leading-snug">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-dm-sans text-navy-400 text-sm text-center mt-8"
          >
            15 output types total. Pick what each creator needs. Deliver everything from one URL.
          </motion.p>
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
              Built for managing multiple channels
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

      {/* 6. Testimonial */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-tr" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-900 border border-navy-700 rounded-3xl p-10 text-center"
          >
            <div className="flex items-center justify-center gap-0.5 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="font-dm-sans text-navy-300 text-lg leading-relaxed mb-8 italic">
              &ldquo;I manage 7 YouTube channels. Before TubeScribed, repurposing content for all of
              them was simply impossible — I couldn&apos;t add it to my service offering because I
              had no way to deliver it. Now it&apos;s my most profitable service. I process each
              video in 3 minutes and charge $200–500/month extra per creator for content
              repurposing.&rdquo;
            </p>
            <p className="font-syne font-semibold text-navy-100 text-sm">Maria S.</p>
            <p className="font-dm-sans text-navy-500 text-xs mt-1">
              YouTube Channel Manager (7 active channels)
            </p>
            <p className="font-dm-sans text-navy-600 text-xs mt-3 italic">
              Results shown are illustrative examples. Individual results vary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. Pricing */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-10 pt-16 pb-4 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Pricing
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">
              Priced for channel managers
            </h2>
            <p className="font-dm-sans text-navy-400 text-base max-w-2xl mx-auto">
              You&apos;re managing channels worth $500–3,000/month in retainer fees. Adding content
              repurposing as a service at $200–500/month per creator pays for TubeScribed in the
              first hour.
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
              className="bg-navy-900 border border-brand-red/30 rounded-2xl p-8 text-center"
              style={{
                background:
                  "linear-gradient(#1E2A3A, #1E2A3A) padding-box, linear-gradient(135deg, rgba(255,59,48,0.3), rgba(255,140,66,0.15)) border-box",
                border: "1px solid transparent",
              }}
            >
              <p className="font-syne font-semibold text-navy-100 text-base mb-2">
                Add TubeScribed to your service offering.
              </p>
              <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">
                Charge for it. Turn your biggest bottleneck into your most profitable service.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

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
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-6 max-w-2xl mx-auto">
              Every creator you manage has a video library full of unextracted value. Start
              delivering it today.
            </h2>
            <p className="font-dm-sans text-navy-400 text-base mb-10 max-w-xl mx-auto">
              Try TubeScribed free on one of your creator&apos;s videos. No credit card. First
              output in 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Try Free on a Creator Video
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
