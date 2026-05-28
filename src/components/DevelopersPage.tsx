"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Bot, Zap, Network, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

const USE_CASES = [
  {
    icon: Database,
    title: "RAG & Knowledge Bases",
    description:
      "Feed clean YouTube transcripts directly into your vector database. TubeScribed's structured output is optimized for embedding — clean text, clear sections, no noise.",
  },
  {
    icon: Bot,
    title: "Custom GPTs",
    description:
      "Build domain-specific GPTs trained on YouTube expertise. Pull any channel's content via API and feed it to your GPT as structured, reliable knowledge.",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description:
      "Zapier, Make, n8n — trigger transcription from any event. New video published? New client video uploaded? Transcribe and generate content automatically.",
  },
  {
    icon: Network,
    title: "AI Agents",
    description:
      "Give your agents the ability to read and process any YouTube video. TubeScribed becomes the tool call that unlocks YouTube's audio layer for any LLM.",
  },
];

const API_PRICING = [
  {
    name: "Starter API",
    price: "$49",
    period: "/month",
    calls: "500 API calls / month",
    popular: false,
    features: [
      "Transcription endpoint",
      "All 15 output types",
      "Brand profile support",
      "JSON response format",
      "99.9% uptime SLA",
    ],
  },
  {
    name: "Growth API",
    price: "$149",
    period: "/month",
    calls: "2,000 API calls / month",
    popular: true,
    features: [
      "Everything in Starter",
      "Webhook callbacks",
      "Priority processing queue",
      "Rate limit: 10 req/sec",
      "Dedicated support channel",
    ],
  },
  {
    name: "Scale API",
    price: "$399",
    period: "/month",
    calls: "10,000 API calls / month",
    popular: false,
    features: [
      "Everything in Growth",
      "Batch processing endpoint",
      "Custom output templates",
      "Rate limit: 50 req/sec",
      "Response time SLA guarantee",
    ],
  },
];

const INTEGRATIONS = [
  { name: "Zapier", bg: "#FF4A00", label: "Z" },
  { name: "Make", bg: "#6D00F5", label: "M" },
  { name: "n8n", bg: "#EA4B00", label: "n8n" },
];

const JS_CODE = `const response = await fetch(
  'https://api.tubescribed.com/v1/transcribe',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: 'https://youtube.com/watch?v=...',
      output_types: [
        'transcript',
        'blog_post',
        'key_takeaways'
      ],
      brand_id: 'optional_brand_profile_id'
    })
  }
)

const { transcript, outputs } = await response.json()`;

const JSON_RESPONSE = `{
  "id": "txn_01J8K2M4N5P6Q7R8",
  "status": "completed",
  "transcript": {
    "text": "Welcome to this tutorial on...",
    "duration": 847,
    "word_count": 3241,
    "segments": [...]
  },
  "outputs": {
    "blog_post": "## How to Build a RAG System...",
    "key_takeaways": [
      "Clean transcripts outperform raw captions",
      "Structured JSON is ready for embedding"
    ],
    "summary": "A practical guide covering vector storage..."
  }
}`;

function CodeWindow({
  filename,
  code,
  badge,
}: {
  filename: string;
  code: string;
  badge?: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-navy-700">
      <div className="flex items-center gap-2 px-4 py-3 bg-navy-800 border-b border-navy-700">
        <span className="w-3 h-3 rounded-full bg-brand-red opacity-75" />
        <span className="w-3 h-3 rounded-full bg-brand-orange opacity-75" />
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-75" />
        <span className="font-mono text-navy-400 text-xs ml-2">{filename}</span>
        {badge && (
          <span className="ml-auto px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold font-dm-sans">
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

export function DevelopersPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Please try again");
    }
  }

  return (
    <div className="min-h-screen bg-navy-900">

      {/* Hero */}
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
            For Developers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            TubeScribed for{" "}
            <GradientText>Developers</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Add YouTube transcription and AI content generation to any application, agent, or
            automation workflow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#waitlist" variant="primary" className="px-8 py-4 text-lg">
              Join API Waitlist
            </Button>
            <Button href="/docs" variant="secondary" className="px-8 py-4 text-lg">
              View Documentation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-mid-left" />
        <div className="section-glow-tr" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              What You Can Build
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              One API. Unlimited use cases.
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
                  className="bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-navy-100 text-lg mb-2">{uc.title}</h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">
                    {uc.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Code Preview */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              API Preview
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              One request. Everything you need.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CodeWindow filename="request.js" code={JS_CODE} />
          </motion.div>
        </div>
      </section>

      {/* JSON Response */}
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
              Response Shape
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Everything structured and ready.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CodeWindow filename="response.json" code={JSON_RESPONSE} badge="200 OK" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          >
            {[
              { label: "transcript", desc: "Full cleaned text with segments and timestamps" },
              { label: "outputs", desc: "Up to 15 formats: blog post, SOP, email, social, and more" },
              { label: "metadata", desc: "Duration, word count, language, confidence score" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-navy-900 border border-navy-700 rounded-xl p-4"
              >
                <p className="font-mono text-brand-red text-sm mb-1">{`"${item.label}"`}</p>
                <p className="font-dm-sans text-navy-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* API Pricing */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
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
              API Pricing
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Volume pricing for production use
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {API_PRICING.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl p-8 flex flex-col"
                style={
                  plan.popular
                    ? {
                        background:
                          "linear-gradient(#2C3E52, #2C3E52) padding-box, linear-gradient(135deg, #FF3B30, #FF8C42) border-box",
                        border: "2px solid transparent",
                      }
                    : { background: "#1E2A3A", border: "1px solid #3D5166" }
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
                  <h3 className="font-syne font-bold text-xl text-navy-100 mb-1">{plan.name}</h3>
                  <p className="font-dm-sans text-brand-red text-sm font-medium mb-4">
                    {plan.calls}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-syne font-bold text-4xl text-navy-100">{plan.price}</span>
                    <span className="text-navy-400 text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check size={16} className="text-brand-red shrink-0" />
                      <span className="font-dm-sans text-navy-100 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className="block w-full text-center font-semibold py-3 rounded-xl transition-opacity duration-200 btn-gradient text-white hover:opacity-90"
                >
                  Join Waitlist
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-sm mx-auto"
          >
            <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6 text-center">
              <p className="font-syne font-semibold text-navy-100 mb-1">Enterprise</p>
              <p className="font-dm-sans text-navy-400 text-sm mb-4">
                Custom volume, SLA, and support. HIPAA-eligible plans available.
              </p>
              <a
                href="mailto:hello@tubescribed.com"
                className="font-dm-sans text-brand-red text-sm font-medium hover:text-brand-orange transition-colors inline-flex items-center gap-1"
              >
                Contact us <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-mid-left" />
        <div className="section-glow-tr" />
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Early Access
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">
              API launching soon
            </h2>
            <p className="font-dm-sans text-navy-400 text-lg leading-relaxed">
              Join the waitlist for early access and founding member pricing.
            </p>
          </motion.div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-navy-900 border border-green-500/30 rounded-2xl p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-green-400" />
              </div>
              <p className="font-syne font-semibold text-navy-100 text-lg mb-2">
                You&apos;re on the list
              </p>
              <p className="font-dm-sans text-navy-400 text-sm">
                We&apos;ll email you when API access opens, along with founding member pricing.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-navy-900 border border-navy-700 rounded-xl px-4 py-3 font-dm-sans text-navy-100 text-sm placeholder:text-navy-400 focus:outline-none focus:border-brand-red transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 whitespace-nowrap text-sm"
                >
                  {status === "loading" ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
              {status === "error" && (
                <p className="font-dm-sans text-brand-red text-sm text-center mt-3">{errorMsg}</p>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Integration Logos */}
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
              Integrations
            </p>
            <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4">
              Native integrations coming soon
            </h2>
            <p className="font-dm-sans text-navy-400 text-base max-w-lg mx-auto">
              Until then, use the REST API with any platform that supports HTTP requests or
              webhooks.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {INTEGRATIONS.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-navy-800 border border-navy-700 rounded-2xl p-6 flex flex-col items-center gap-3 w-40 hover:border-navy-600 transition-colors duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-syne font-bold text-white text-xl"
                  style={{ backgroundColor: integration.bg }}
                >
                  {integration.label}
                </div>
                <p className="font-syne font-semibold text-navy-100 text-sm">{integration.name}</p>
                <span className="px-2 py-0.5 rounded-full bg-navy-700 text-navy-400 text-xs font-medium font-dm-sans">
                  Coming soon
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
