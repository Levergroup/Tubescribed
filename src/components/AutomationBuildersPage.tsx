"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Star,
  Link2,
  Cpu,
  ArrowRight,
  Check,
  Code2,
  Zap,
  Clock,
  FileText,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pricing } from "@/components/sections/Pricing";
import { faqSchema } from "@/lib/schema";

const PROBLEMS = [
  {
    title: "YouTube URLs break your pipeline",
    body: "Every automation that touches YouTube hits a wall. ChatGPT can't access YouTube. Whisper needs an audio file. You end up with a manual step in the middle of every workflow — defeating the entire point.",
  },
  {
    title: "Raw captions are unusable data",
    body: "YouTube auto-captions are unpunctuated, full of errors, and structureless. You can't feed raw caption data into a knowledge base, RAG pipeline, or AI agent without cleaning it first. That cleaning step is hours of work.",
  },
  {
    title: "No transcript tool has a real API",
    body: "Every transcript tool is built for humans clicking buttons. None of them are built for automated pipelines. There's no webhook, no API endpoint, no way to trigger transcription programmatically — until now.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    icon: Link2,
    title: "Trigger with a YouTube URL",
    description:
      "Your workflow sends a YouTube URL to TubeScribed — from Zapier, Make, n8n, Airtable, or any system. A new video published, a URL added to a spreadsheet, a form submission — any trigger works.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "TubeScribed processes it automatically",
    description:
      "OpenAI Whisper transcribes the audio. Claude AI cleans, structures, and generates your chosen output type. Clean transcript, blog post, SOP, FAQ — whatever your workflow needs. No human in the loop.",
  },
  {
    number: "03",
    icon: ArrowRight,
    title: "Output delivered to your destination",
    description:
      "Clean structured data returned to your workflow. Send it to Notion, Google Docs, Airtable, WordPress, Slack, email — anywhere your automation stack sends data. The pipeline runs itself.",
  },
];

const WORKFLOW_EXAMPLES = [
  {
    title: "YouTube to Blog Post Pipeline",
    steps: ["New YouTube video published", "TubeScribed generates blog post", "WordPress draft created automatically"],
    tag: "Content Automation",
  },
  {
    title: "AI Knowledge Base Builder",
    steps: ["YouTube URL added to Airtable", "TubeScribed generates clean transcript", "Pinecone/Notion knowledge base updated"],
    tag: "AI / RAG",
  },
  {
    title: "Podcast Content Machine",
    steps: ["New podcast episode RSS", "TubeScribed generates show notes + social captions", "Buffer schedules posts"],
    tag: "Podcast Automation",
  },
  {
    title: "Agency Content Pipeline",
    steps: ["Client video URL submitted", "TubeScribed generates 15 outputs in client brand voice", "Google Drive folder populated"],
    tag: "Agency Workflow",
  },
];

const BENEFITS = [
  {
    icon: Code2,
    title: "API-ready architecture",
    body: "Built from the ground up for programmatic access. Send a URL, specify output type, receive clean structured data. No UI required.",
  },
  {
    icon: Zap,
    title: "Native integrations coming",
    body: "Zapier, Make, and n8n integrations in development. Join the waitlist to be first. Current: use our API directly or via webhook.",
  },
  {
    icon: Clock,
    title: "Processing in seconds",
    body: "Under 10-minute videos return in 15 seconds. 30-minute videos in 60 seconds. Your workflow doesn't wait.",
  },
  {
    icon: FileText,
    title: "Clean structured output",
    body: "JSON response with transcript, summary, key takeaways, timestamps, and generated content. Plug directly into any downstream system.",
  },
  {
    icon: Users,
    title: "Brand profiles via API",
    body: "Pass a brand_id parameter and every output is generated in that brand's voice automatically. Perfect for multi-client pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable and documented",
    body: "Rate limits, error codes, retry logic — everything a production pipeline needs. Full API documentation available.",
  },
];

const API_CODE = `// Trigger TubeScribed from any workflow
const response = await fetch(
  'https://api.tubescribed.com/v1/transcribe',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: 'https://youtube.com/watch?v=VIDEO_ID',
      output_type: 'blog_post', // or transcript, sop, email, social...
      brand_id: 'your_brand_profile_id' // optional
    })
  }
)

const { transcript, output, metadata } = await response.json()
// transcript: clean punctuated text with timestamps
// output: publication-ready blog post in brand voice
// metadata: word_count, video_length, processing_time`;

const FAQS = [
  {
    q: "Is there a real API I can call programmatically?",
    a: "Yes — TubeScribed has an API in early access. You send a POST request with a YouTube URL and output type, and receive clean structured JSON back. Join the waitlist at tubescribed.com/developers for early access and founding member pricing.",
  },
  {
    q: "Does TubeScribed have a Zapier integration?",
    a: "Zapier and Make integrations are in development. In the meantime you can use our API directly via Zapier's webhook action or Make's HTTP module. Full native integrations launching soon — join the waitlist to be notified first.",
  },
  {
    q: "What does the API response look like?",
    a: "The API returns a JSON object containing: transcript (clean punctuated text with timestamps), summary, key_takeaways (array), word_count, video_length, and your requested output type (blog_post, sop, email, social_captions, etc). Fully structured and ready to pipe into any downstream system.",
  },
  {
    q: "Can I pass different brand voices per API call?",
    a: "Yes — pass a brand_id parameter with any API call and TubeScribed automatically applies that brand profile to all generated outputs. Create unlimited brand profiles on the Agency plan and reference them by ID in your automations.",
  },
  {
    q: "What are the rate limits?",
    a: "Current plans process up to 100 requests per month. API plans with higher limits are launching soon. For high-volume production pipelines contact us at hello@tubescribed.com.",
  },
];

function CodeWindow({ filename, code, badge }: { filename: string; code: string; badge?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-navy-700">
      <div className="flex items-center gap-2 px-4 py-3 bg-navy-800 border-b border-navy-700">
        <span className="w-3 h-3 rounded-full bg-brand-red opacity-75" />
        <span className="w-3 h-3 rounded-full bg-brand-orange opacity-75" />
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-75" />
        <span className="font-mono text-navy-400 text-xs ml-2">{filename}</span>
        {badge && (
          <span className="ml-auto px-2 py-0.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold font-dm-sans">
            {badge}
          </span>
        )}
      </div>
      <pre className="bg-navy-950 p-6 overflow-x-auto text-sm leading-7">
        <code className="font-mono text-navy-100 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

export function AutomationBuildersPage() {
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
            For Automation Builders
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            Add YouTube Transcription{" "}
            <GradientText>to Any Workflow.</GradientText>{" "}
            <span className="block mt-2">One URL In. Clean Data Out.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            TubeScribed plugs into Zapier, Make, n8n, and any automation stack. Trigger from a
            YouTube URL — get back a clean transcript, blog post, SOP, or any of 15 content types.
            No manual steps. No copy-pasting.
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
              <Button href="/developers" variant="secondary" className="px-8 py-4 text-lg">
                See API Docs
              </Button>
            </div>
            <p className="font-dm-sans text-navy-500 text-sm">
              Connects to Zapier · Make · n8n · Airtable · Notion · Google Docs
            </p>
          </motion.div>
        </div>
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
              Manual steps are killing your automations.
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
            Three steps. Fully automatable.
          </motion.h2>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
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
                  <div className="flex justify-center mb-6 mt-8">
                    <div className="w-14 h-14 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center">
                      <Icon size={28} className="text-brand-red" />
                    </div>
                  </div>
                  <h3 className="font-syne font-semibold text-xl text-navy-100 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
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

      {/* 4. Workflow Examples */}
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
              Workflow Examples
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              What automation builders are building with TubeScribed
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WORKFLOW_EXAMPLES.map((wf, index) => (
              <motion.div
                key={wf.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <h3 className="font-syne font-semibold text-navy-100 text-base">{wf.title}</h3>
                  <span className="shrink-0 px-2 py-0.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold font-dm-sans whitespace-nowrap">
                    {wf.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {wf.steps.map((step, si) => (
                    <div key={si} className="flex items-start gap-2">
                      {si > 0 && (
                        <div className="flex flex-col items-center gap-0 self-stretch ml-3 mr-1">
                          <div className="w-px flex-1 bg-navy-700" />
                          <ArrowRight size={10} className="text-navy-600 -rotate-90 my-0.5" />
                        </div>
                      )}
                      <div
                        className={`flex-1 bg-navy-800 border border-navy-700 rounded-lg px-3 py-2 ${si === 0 ? "" : ""}`}
                      >
                        <p className="font-dm-sans text-navy-100 text-xs leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits Grid */}
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
              What You Get
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Everything automation builders need
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((b, index) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-navy-100 text-sm mb-2">{b.title}</h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{b.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Code Preview */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-bl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Drop-In Ready
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Drop it into your stack in minutes
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CodeWindow filename="tubescribed-trigger.js" code={API_CODE} badge="Early Access" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-sm text-center mt-6"
          >
            API in early access —{" "}
            <a
              href="/developers"
              className="text-brand-red hover:text-brand-orange underline underline-offset-2 transition-colors"
            >
              join the waitlist
            </a>{" "}
            for access and founding member pricing.
          </motion.p>
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
              &ldquo;I built an entire content automation pipeline in a weekend. YouTube video
              published → TubeScribed processes it → blog post in WordPress, social captions in
              Buffer, transcript in Notion — all automatic. My client doesn&apos;t touch
              it.&rdquo;
            </p>
            <p className="font-syne font-semibold text-navy-100 text-sm">Alex R.</p>
            <p className="font-dm-sans text-navy-500 text-xs mt-1">
              Automation Consultant &amp; Make Partner
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
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-2">
              Pricing built for volume
            </h2>
            <p className="font-dm-sans text-navy-400 text-base">
              The more you automate, the more you save.
            </p>
          </div>
        </div>
        <div className="pt-48">
          <Pricing />
        </div>
        <div className="bg-navy-800 pb-16 text-center">
          <p className="font-dm-sans text-navy-400 text-sm mb-2">
            Processing high volume? API plans with 500–10,000 calls/month launching soon.
          </p>
          <a
            href="/developers"
            className="font-dm-sans text-brand-red text-sm font-medium hover:text-brand-orange transition-colors underline underline-offset-2"
          >
            Join API Waitlist →
          </a>
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
              Automation builder questions
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
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-4">
              Your pipeline is missing one step.
            </h2>
            <p className="font-dm-sans text-navy-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Add YouTube transcription to any workflow today. Try free — no credit card, no setup.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Try Free
              </Button>
              <Button href="/developers" variant="secondary" className="px-8 py-4 text-lg">
                Join API Waitlist
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["1 free transcript, no credit card", "API access via waitlist", "Pro & Agency plans"].map(
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
