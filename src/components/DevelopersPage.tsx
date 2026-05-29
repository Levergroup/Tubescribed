"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Bot,
  CircuitBoard,
  ArrowLeftRight,
  Building2,
  FileCode,
  Check,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { faqSchema } from "@/lib/schema";

// ─── Data ────────────────────────────────────────────────────────────────────

const USE_CASES = [
  {
    icon: Brain,
    title: "RAG pipelines and vector databases",
    body: "Clean, properly formatted transcripts ready for chunking and embedding. No preprocessing required before inserting into Pinecone, Weaviate, or any vector store.",
  },
  {
    icon: Bot,
    title: "Custom GPTs and Claude projects",
    body: "Build domain-specific AI assistants trained on YouTube expertise. Process entire channels into knowledge bases. Clean structured input produces dramatically better AI outputs.",
  },
  {
    icon: CircuitBoard,
    title: "AI agents with video comprehension",
    body: "Give your AI agents the ability to read, understand, and extract information from any YouTube video. Pass a URL, receive structured knowledge.",
  },
  {
    icon: ArrowLeftRight,
    title: "Automation workflows",
    body: "Integrate via Zapier, Make, n8n, or direct API call. Trigger from any event — new video published, URL added to database, webhook fired.",
  },
  {
    icon: Building2,
    title: "SaaS feature augmentation",
    body: "Add YouTube transcription as a feature in your own SaaS product. Your users paste a URL, your product receives clean content. White label coming soon.",
  },
  {
    icon: FileCode,
    title: "Content management systems",
    body: "Automatically populate CMS drafts from YouTube videos. New video published → TubeScribed generates blog post → WordPress/Webflow draft created.",
  },
];

const API_REQUEST = `// POST https://api.tubescribed.com/v1/transcribe

{
  "url": "https://youtube.com/watch?v=VIDEO_ID",
  "output_type": "blog_post",
  "brand_id": "optional_brand_profile_id",
  "options": {
    "include_timestamps": true,
    "include_summary": true,
    "include_key_takeaways": true
  }
}`;

const API_RESPONSE = `// 200 OK

{
  "transcript": {
    "text": "Clean punctuated transcript...",
    "word_count": 4821,
    "segments": [
      { "start": 0, "end": 14.2, "text": "First segment..." },
      ...
    ]
  },
  "summary": "Two-sentence video summary...",
  "key_takeaways": ["Takeaway 1", "Takeaway 2", "Takeaway 3"],
  "output": {
    "type": "blog_post",
    "content": "Full formatted blog post...",
    "word_count": 1247
  },
  "metadata": {
    "video_id": "VIDEO_ID",
    "video_length_seconds": 2847,
    "processing_time_ms": 14200,
    "credits_used": 3
  }
}`;

const OUTPUT_TYPES = `// output_type options:
"transcript"       // Clean punctuated transcript only
"blog_post"        // SEO-formatted article
"sop"              // Standard Operating Procedure
"email_sequence"   // 5-email nurture sequence
"social_captions"  // Platform-optimized captions
"x_thread"         // Twitter/X thread
"faq"              // FAQ document
"sales_script"     // Sales script
"ad_copy"          // Ad copy variants
"case_study"       // Case study format
"training_guide"   // Training/learning guide
"newsletter"       // Newsletter issue
"linkedin_article" // LinkedIn long-form
"key_takeaways"    // Bullet point insights
"summary"          // Executive summary`;

const TECH_SPECS = [
  { label: "Authentication", value: "API key via Authorization header" },
  { label: "Response format", value: "Clean JSON with consistent schema across all output types" },
  { label: "Processing time", value: "15s (under 10 min video) to 120s (60–90 min videos)" },
  { label: "Error handling", value: "Standard HTTP status codes with descriptive error messages" },
  { label: "Rate limits", value: "Per-plan limits with X-RateLimit headers on all responses" },
  { label: "Max video length", value: "90 minutes. Credit multiplier scales with video length." },
  { label: "Supported languages", value: "50+ languages for transcription. English optimized for outputs." },
  { label: "Idempotency", value: "Duplicate URL requests return cached results within 24 hours" },
];

const API_PRICING = [
  {
    name: "Starter API",
    price: "$49",
    period: "/month",
    calls: "500 API calls / month",
    popular: false,
    features: [
      "All 15 output types",
      "Brand profile support",
      "Standard rate limits",
      "Email support",
    ],
  },
  {
    name: "Growth API",
    price: "$149",
    period: "/month",
    calls: "2,000 API calls / month",
    popular: true,
    features: [
      "All 15 output types",
      "Brand profile support",
      "Higher rate limits",
      "Priority support",
      "Webhook support",
    ],
  },
  {
    name: "Scale API",
    price: "$399",
    period: "/month",
    calls: "10,000 API calls / month",
    popular: false,
    features: [
      "All 15 output types",
      "Unlimited brand profiles",
      "Highest rate limits",
      "Dedicated support",
      "Custom SLA",
    ],
  },
];

const INTEGRATIONS = [
  { name: "Direct API", badge: "Available now", badgeColor: "green" },
  { name: "Zapier", badge: "Coming soon", badgeColor: "amber" },
  { name: "Make", badge: "Coming soon", badgeColor: "amber" },
  { name: "n8n", badge: "Coming soon", badgeColor: "amber" },
  { name: "Webhook support", badge: "Coming soon", badgeColor: "amber" },
  { name: "White label SDK", badge: "On roadmap", badgeColor: "gray" },
];

const BADGE_STYLES: Record<string, string> = {
  green: "bg-green-500/10 text-green-400 border border-green-500/20",
  amber: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  gray: "bg-navy-700/50 text-navy-400 border border-navy-700",
};

const FAQS = [
  {
    q: "When will the API be available?",
    a: "The TubeScribed API is in early access. We're onboarding developers from the waitlist in batches. Join above and we'll email you when your access is ready — typically within 2–4 weeks of joining.",
  },
  {
    q: "Can I use the API to build a product on top of TubeScribed?",
    a: "Yes — with the Growth and Scale API plans you can build applications powered by TubeScribed. Please review our acceptable use policy and terms of service. White label options for removing TubeScribed branding are available on enterprise plans.",
  },
  {
    q: "How does brand profile support work in the API?",
    a: "Create brand profiles in your TubeScribed dashboard and reference them by ID in your API calls via the brand_id parameter. Every output is automatically generated in that brand's voice. Manage unlimited profiles on Growth and Scale plans.",
  },
  {
    q: "Is there a free tier for the API?",
    a: "The API does not have a free tier but your TubeScribed account's Pro or Agency plan credits can be used to test API calls during development. Dedicated API plans with higher volume launch soon.",
  },
  {
    q: "What happens when I hit my rate limit?",
    a: "Requests over your plan limit return a 429 status with a Retry-After header. Upgrade your plan or contact us for burst capacity on Scale plans.",
  },
];

// ─── Helper components ────────────────────────────────────────────────────────

function CodeWindow({ filename, code, badge }: { filename: string; code: string; badge?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-navy-700">
      <div className="flex items-center gap-2 px-4 py-3 bg-navy-800 border-b border-navy-700">
        <span className="w-3 h-3 rounded-full bg-brand-red opacity-75" />
        <span className="w-3 h-3 rounded-full bg-brand-orange opacity-75" />
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-75" />
        <span className="font-mono text-navy-400 text-xs ml-2">{filename}</span>
        {badge && (
          <span className="ml-auto px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold font-dm-sans border border-green-500/20">
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

// ─── Page component ───────────────────────────────────────────────────────────

export function DevelopersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formEmail, setFormEmail] = useState("");
  const [formName, setFormName] = useState("");
  const [formBuilding, setFormBuilding] = useState("");
  const [formVolume, setFormVolume] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const schema = faqSchema(FAQS);

  async function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formEmail || !formEmail.includes("@") || !formName.trim()) return;

    setFormStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formEmail,
          name: formName,
          building: formBuilding,
          expected_calls: formVolume,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setFormStatus("success");
    } catch (err) {
      setFormStatus("error");
      setFormError(err instanceof Error ? err.message : "Please try again");
    }
  }

  return (
    <div className="min-h-screen bg-navy-950">

      {/* 1. Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-navy-950">
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
            YouTube Transcription API.{" "}
            <GradientText>Clean Data. Instant Output.</GradientText> Built for Production.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            One API call. Any YouTube URL. Clean structured transcript + any of 15 content output
            types returned as JSON. Add YouTube transcription to any application, agent, or pipeline
            in minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#waitlist" variant="primary" className="px-8 py-4 text-lg">
                Join API Waitlist
              </Button>
              <Button
                href="https://app.tubescribed.com/signup"
                variant="secondary"
                className="px-8 py-4 text-lg"
              >
                Try the Product Free
              </Button>
            </div>
            <p className="font-mono text-navy-500 text-xs tracking-wide">
              Powered by OpenAI Whisper + Anthropic Claude · Clean JSON responses · 15 output types
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Use Cases Grid */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
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
              Use Cases
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              What developers build with TubeScribed
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, index) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-brand-red/50 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-950 border border-navy-700 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">{uc.title}</h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{uc.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. API Preview */}
      <section className="relative overflow-hidden py-24 bg-navy-950">
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
              Simple, predictable API design
            </h2>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CodeWindow filename="request.json" code={API_REQUEST} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CodeWindow filename="response.json" code={API_RESPONSE} badge="200 OK" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CodeWindow filename="output_types.js" code={OUTPUT_TYPES} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Technical Specs */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-bl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Specs
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Production-ready specs
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECH_SPECS.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-navy-800 border border-navy-700 rounded-xl p-5"
              >
                <p className="font-mono text-brand-red text-xs mb-2 tracking-wide">{spec.label}</p>
                <p className="font-dm-sans text-navy-300 text-sm leading-snug">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. API Pricing */}
      <section className="relative overflow-hidden py-24 bg-navy-950">
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
              Pricing
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">
              API pricing
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
                  <p className="font-dm-sans text-brand-red text-sm font-medium mb-4">{plan.calls}</p>
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
                  className="block w-full text-center font-semibold py-3 rounded-xl transition-opacity duration-200 btn-gradient text-white hover:opacity-90 text-sm"
                >
                  Join Waitlist
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-2"
          >
            <p className="font-dm-sans text-navy-400 text-sm">
              Processing more than 10,000 calls/month?{" "}
              <a
                href="mailto:hello@tubescribed.com?subject=Enterprise API Pricing"
                className="text-brand-red hover:opacity-80 transition-opacity"
              >
                Contact us for enterprise API pricing.
              </a>
            </p>
            <p className="font-dm-sans text-navy-500 text-xs italic">
              API in early access. Join waitlist below for founding member pricing (30% off first 6
              months).
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. Integrations */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-mid-left" />
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
            <h2 className="font-syne font-bold text-3xl text-navy-100">Integrations</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTEGRATIONS.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex items-center justify-between bg-navy-800 border border-navy-700 rounded-xl px-5 py-4"
              >
                <span className="font-syne font-semibold text-navy-100 text-sm">{item.name}</span>
                <span
                  className={`text-xs font-medium font-dm-sans px-2.5 py-1 rounded-full ${BADGE_STYLES[item.badgeColor]}`}
                >
                  {item.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Waitlist Form */}
      <section id="waitlist" className="relative overflow-hidden py-24 bg-navy-950">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Join the API waitlist
            </h2>
            <p className="font-dm-sans text-navy-400 text-base leading-relaxed">
              API launching soon. Founding members get 30% off the first 6 months and early access.
            </p>
          </motion.div>

          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-navy-800 border border-green-500/30 rounded-2xl p-10 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-green-400" />
              </div>
              <p className="font-syne font-semibold text-navy-100 text-lg mb-2">
                You&apos;re on the list.
              </p>
              <p className="font-dm-sans text-navy-400 text-sm">
                We&apos;ll email you when API access opens.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleWaitlistSubmit}
              className="bg-navy-800 border border-navy-700 rounded-2xl p-8 space-y-5"
            >
              <div>
                <label className="block font-dm-sans text-navy-300 text-xs font-medium mb-1.5">
                  Email address <span className="text-brand-red">*</span>
                </label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-3 font-dm-sans text-navy-100 text-sm placeholder:text-navy-500 focus:outline-none focus:border-brand-red transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block font-dm-sans text-navy-300 text-xs font-medium mb-1.5">
                  Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-3 font-dm-sans text-navy-100 text-sm placeholder:text-navy-500 focus:outline-none focus:border-brand-red transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block font-dm-sans text-navy-300 text-xs font-medium mb-1.5">
                  What are you building?{" "}
                  <span className="text-navy-500 font-normal">(optional)</span>
                </label>
                <textarea
                  value={formBuilding}
                  onChange={(e) => setFormBuilding(e.target.value)}
                  placeholder="RAG pipeline, SaaS product, automation workflow..."
                  rows={3}
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-3 font-dm-sans text-navy-100 text-sm placeholder:text-navy-500 focus:outline-none focus:border-brand-red transition-colors duration-200 resize-none"
                />
              </div>
              <div>
                <label className="block font-dm-sans text-navy-300 text-xs font-medium mb-1.5">
                  Expected monthly API calls
                </label>
                <select
                  value={formVolume}
                  onChange={(e) => setFormVolume(e.target.value)}
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-3 font-dm-sans text-navy-100 text-sm focus:outline-none focus:border-brand-red transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" className="text-navy-500">Select a range...</option>
                  <option value="under_100">Under 100</option>
                  <option value="100_500">100–500</option>
                  <option value="500_2000">500–2,000</option>
                  <option value="2000_10000">2,000–10,000</option>
                  <option value="10000_plus">10,000+</option>
                </select>
              </div>
              {formStatus === "error" && (
                <p className="font-dm-sans text-brand-red text-sm">{formError}</p>
              )}
              <button
                type="submit"
                disabled={formStatus === "loading" || !formEmail || !formName.trim()}
                className="w-full btn-gradient text-white font-semibold px-6 py-3.5 rounded-xl transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 text-sm"
              >
                {formStatus === "loading" ? "Joining..." : "Join Waitlist"}
              </button>
            </motion.form>
          )}
        </div>
      </section>

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
              Developer questions, answered
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
              Ready to Build?
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-6 max-w-2xl mx-auto">
              Ready to add YouTube transcription to your stack?
            </h2>
            <p className="font-dm-sans text-navy-400 text-base mb-10 max-w-xl mx-auto">
              Join the API waitlist for early access and founding member pricing. Or try the product
              now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button href="#waitlist" variant="primary" className="px-8 py-4 text-lg">
                Join API Waitlist
              </Button>
              <Button
                href="https://app.tubescribed.com/signup"
                variant="secondary"
                className="px-8 py-4 text-lg"
              >
                Try the Product Free
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                "Founding member pricing — 30% off 6 months",
                "Early API access",
                "All 15 output types",
              ].map((signal) => (
                <span key={signal} className="flex items-center gap-2 text-navy-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-700" />
                  {signal}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
