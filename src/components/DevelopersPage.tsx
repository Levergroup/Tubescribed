"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Bot, CircuitBoard, ArrowLeftRight, FileCode, Workflow, KeyRound, Send, Braces, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import {
  API_ENDPOINT,
  APP_KEYS_URL,
  TOOLS,
  CodeBlock,
  FAQList,
  LimitsTable,
  SectionHeader,
} from "@/components/integrations/shared";
import { DEVELOPER_FAQS } from "@/lib/integrations";

// ─── Data ────────────────────────────────────────────────────────────────────

const USE_CASES = [
  { icon: Workflow, title: "Automations", body: "Call TubeScribed from n8n, Make or Zapier with a simple HTTP request. New video published → transcript and blog draft created automatically." },
  { icon: CircuitBoard, title: "AI agents", body: "Give your agents the ability to read any captioned YouTube video. Pass a URL, get clean text back as JSON." },
  { icon: Brain, title: "Knowledge bases and RAG", body: "Turn channels and playlists into clean, chunk-ready text for vector databases, custom GPTs and Claude Projects." },
  { icon: FileCode, title: "Content pipelines", body: "Generate blog posts, SOPs and email sequences from videos and push them straight into your CMS as drafts." },
  { icon: ArrowLeftRight, title: "Internal tools", body: "Add YouTube transcription to your own dashboards and workflows without building or maintaining a caption pipeline." },
  { icon: Bot, title: "Claude, no code", body: "Prefer chatting to coding? Connect TubeScribed to Claude and use the same four tools in plain English." },
];

const STEPS = [
  { icon: KeyRound, title: "Get a key", body: "Create an API key in your TubeScribed account under Settings → API Keys." },
  { icon: Send, title: "Send a YouTube URL", body: "POST the tool name and input to one endpoint with your key in the Authorization header." },
  { icon: Braces, title: "Get JSON back", body: "Receive the transcript or finished asset as clean JSON, ready for your app or workflow." },
];

const CURL_TRANSCRIBE = `curl -X POST ${API_ENDPOINT} \\
  -H "Authorization: Bearer ts_live_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tool": "transcribe_video",
    "input": { "youtube_url": "https://www.youtube.com/watch?v=VIDEO_ID" }
  }'`;

const CURL_GENERATE = `curl -X POST ${API_ENDPOINT} \\
  -H "Authorization: Bearer ts_live_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tool": "generate_asset",
    "input": {
      "asset_type": "sop",
      "youtube_url": "https://www.youtube.com/watch?v=VIDEO_ID",
      "brand_voice": "Clear, direct, no jargon"
    }
  }'`;

const JS_FETCH = `const res = await fetch("${API_ENDPOINT}", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${process.env.TUBESCRIBED_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    tool: "transcribe_video",
    input: { youtube_url: "https://www.youtube.com/watch?v=VIDEO_ID" },
  }),
});

const data = await res.json();
// { title, transcript, word_count, duration_seconds }`;

const ERRORS = [
  { code: "400", meaning: "Bad input: missing or invalid fields" },
  { code: "401", meaning: "Missing or invalid API key" },
  { code: "422", meaning: "No captions available for this video" },
  { code: "429", meaning: "Monthly limit or rate limit (10/min) reached" },
  { code: "500", meaning: "Generation failed. Retry once." },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export function DevelopersPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-navy-950">
        <div className="section-glow-tr" />
        <div className="section-glow-bl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            TubeScribed API · Live
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight">
            YouTube transcripts and business assets <GradientText>in one call.</GradientText>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="font-dm-sans text-navy-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            TubeScribed is a REST API and Claude connector that turns any captioned YouTube video into a clean transcript and business assets such as blog posts, SOPs and email sequences. Get a key in your TubeScribed account. Included in every plan: 10, 200 or 1,000 calls per month.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={APP_KEYS_URL} variant="primary" className="px-8 py-4 text-lg">
              Get your API key
            </Button>
            <Button href="/integrations/claude" variant="secondary" className="px-8 py-4 text-lg">
              Use it in Claude
            </Button>
          </motion.div>
          <p className="font-mono text-navy-400 text-xs tracking-wide mt-6">
            YouTube captions + Claude AI cleanup · JSON responses · 4 tools · 10 requests/min
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="How it works" title="Three steps to your first transcript" />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-syne font-bold text-sm flex items-center justify-center">{i + 1}</span>
                    <Icon size={18} className="text-navy-400" />
                  </div>
                  <h3 className="font-syne font-semibold text-navy-100 text-lg mb-2">{step.title}</h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{step.body}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Tools */}
      <section className="relative overflow-hidden py-24 bg-navy-950">
        <div className="section-glow-tl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="Tools" title="Four tools, one endpoint" body={`POST to ${API_ENDPOINT.replace("https://", "")} with {"tool": "...", "input": {...}}.`} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TOOLS.map((tool, i) => (
              <motion.div key={tool.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
                <p className="font-mono text-brand-red text-sm mb-3">{tool.name}</p>
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed mb-4">{tool.body}</p>
                <dl className="space-y-1.5 text-xs font-dm-sans">
                  <div className="flex gap-2"><dt className="text-navy-400 w-14 shrink-0">Input</dt><dd className="text-navy-100 font-mono">{tool.input}</dd></div>
                  <div className="flex gap-2"><dt className="text-navy-400 w-14 shrink-0">Returns</dt><dd className="text-navy-100">{tool.output}</dd></div>
                </dl>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code examples */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="Examples" title="Copy, paste, run" />
          <div className="space-y-6">
            <CodeBlock filename="transcribe_video.sh" code={CURL_TRANSCRIBE} />
            <CodeBlock filename="generate_asset.sh" code={CURL_GENERATE} />
            <CodeBlock filename="transcribe.js" code={JS_FETCH} />
          </div>
          <p className="font-dm-sans text-navy-400 text-sm mt-6 text-center">
            Need the list of asset types? Call <code className="font-mono text-navy-100">list_asset_types</code>. Check your remaining calls with <code className="font-mono text-navy-100">get_usage</code>.
          </p>
        </div>
      </section>

      {/* Limits + errors */}
      <section className="relative overflow-hidden py-24 bg-navy-950">
        <div className="section-glow-mid-right" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="Limits" title="Included in every plan" body="Only transcribe_video and generate_asset count. Failed calls are free. Rate limit: 10 requests per minute per key." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LimitsTable />
            <div className="overflow-x-auto rounded-2xl border border-navy-700">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy-800 border-b border-navy-700">
                    <th className="text-left px-6 py-4 font-syne font-semibold text-navy-100 text-sm">Status</th>
                    <th className="text-left px-6 py-4 font-syne font-semibold text-navy-100 text-sm">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {ERRORS.map((e, i) => (
                    <tr key={e.code} className={`border-b border-navy-700 last:border-0 ${i % 2 === 0 ? "bg-navy-900" : "bg-navy-800"}`}>
                      <td className="px-6 py-3 font-mono text-brand-red text-sm">{e.code}</td>
                      <td className="px-6 py-3 font-dm-sans text-navy-100 text-sm">{e.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="Use cases" title="What people build with it" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-navy-950 border border-navy-700 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">{uc.title}</h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{uc.body}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/integrations/claude" className="inline-flex items-center gap-2 font-dm-sans text-brand-red hover:text-brand-orange text-sm font-semibold transition-colors">
              Set up TubeScribed in Claude <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden py-24 bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="FAQ" title="Developer questions" />
          <FAQList items={DEVELOPER_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">Start with 10 free calls</h2>
          <p className="font-dm-sans text-navy-400 text-lg mb-8">Create a free account, generate a key, and make your first request in under five minutes.</p>
          <Button href={APP_KEYS_URL} variant="primary" className="px-8 py-4 text-lg">
            Get your API key
          </Button>
        </div>
      </section>
    </div>
  );
}
