"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Youtube, ArrowRight, ArrowDown, Wrench, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { MCP_URL, TOOLS, FAQList, LimitsTable, SectionHeader, UrlField, CopyButton } from "@/components/integrations/shared";
import { CLAUDE_FAQS, CLAUDE_STEPS } from "@/lib/integrations";

const PROMPTS = [
  "Transcribe https://youtube.com/watch?v=… and turn it into an SOP for my team.",
  "Summarize these 3 videos and compare their advice in a table.",
  "Write a LinkedIn post from this video in a direct, practical tone.",
  "Pull the key steps from this tutorial into a checklist.",
  "Turn this podcast episode into show notes with key takeaways.",
  "What does this video say about pricing? Quote the transcript.",
];

const FLOW = [
  { icon: MessageSquare, title: "You ask Claude", body: "Paste a YouTube link and say what you need, in plain English." },
  { icon: Sparkles, title: "Claude calls TubeScribed", body: "Claude picks the right TubeScribed tool and sends it the video." },
  { icon: Youtube, title: "TubeScribed does the work", body: "It pulls the video's captions and, if asked, generates the asset." },
  { icon: FileText, title: "Result in your chat", body: "The transcript or finished SOP, blog post or email appears in Claude." },
];

function ChatDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-navy-900 border border-navy-700 rounded-2xl p-5 sm:p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      aria-label="Example conversation in Claude using TubeScribed"
    >
      <div className="flex justify-end mb-4">
        <p className="max-w-[85%] bg-navy-700/60 text-navy-100 font-dm-sans text-sm leading-relaxed rounded-2xl rounded-br-md px-4 py-3">
          Transcribe this 18-minute onboarding video and turn it into an SOP for new hires.
        </p>
      </div>
      <div className="space-y-2 mb-4">
        {["transcribe_video", "generate_asset · sop"].map((t) => (
          <div key={t} className="inline-flex mr-2 items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950 border border-navy-700">
            <Wrench size={12} className="text-brand-orange" />
            <span className="font-mono text-[11px] text-navy-100">TubeScribed · {t}</span>
          </div>
        ))}
      </div>
      <div className="bg-navy-950 border border-navy-700 rounded-xl p-4">
        <p className="font-syne font-semibold text-navy-100 text-sm mb-2">SOP: New Hire Onboarding</p>
        <ol className="space-y-1.5 font-dm-sans text-navy-400 text-xs leading-relaxed list-decimal list-inside">
          <li>Create accounts in the CRM and project tool before day one.</li>
          <li>Walk through the client handbook and record questions.</li>
          <li>Shadow two client calls, then lead one with a reviewer.</li>
        </ol>
      </div>
    </motion.div>
  );
}

export function ClaudeIntegrationPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-navy-950">
        <div className="section-glow-tr" />
        <div className="section-glow-bl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Claude integration · MCP connector
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
              Use TubeScribed <GradientText>inside Claude</GradientText>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-8">
              Add TubeScribed to Claude as a connector and Claude can transcribe any captioned YouTube video and turn it into blog posts, SOPs, email sequences and more, right inside the chat. Setup takes one minute and uses secure sign-in with your TubeScribed account. No API key needed.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col sm:flex-row gap-4">
              <Button href="#setup" variant="primary" className="px-7 py-3.5">
                Set it up in 1 minute
              </Button>
              <Button href="https://app.tubescribed.com/signup" variant="secondary" className="px-7 py-3.5">
                Create a free account
              </Button>
            </motion.div>
          </div>
          <ChatDemo />
        </div>
      </section>

      {/* How it works diagram */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="How it works" title="Claude asks. TubeScribed does the YouTube part." body="Claude can't open YouTube videos on its own. With the connector, it hands that job to TubeScribed and gets the text back." />
          <ol className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0">
            {FLOW.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="flex flex-col lg:flex-row items-center flex-1">
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="w-full bg-navy-800 border border-navy-700 rounded-2xl p-5 text-center h-full">
                    <div className="w-11 h-11 mx-auto rounded-xl bg-navy-950 border border-navy-700 flex items-center justify-center mb-3">
                      <Icon size={20} className={i === 2 ? "text-brand-red" : "text-brand-orange"} />
                    </div>
                    <h3 className="font-syne font-semibold text-navy-100 text-sm mb-1.5">{step.title}</h3>
                    <p className="font-dm-sans text-navy-400 text-xs leading-relaxed">{step.body}</p>
                  </motion.div>
                  {i < FLOW.length - 1 && (
                    <span className="text-navy-700 py-1 lg:py-0 lg:px-2 shrink-0" aria-hidden="true">
                      <ArrowDown size={18} className="lg:hidden" />
                      <ArrowRight size={18} className="hidden lg:block" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Setup */}
      <section id="setup" className="relative overflow-hidden py-24 bg-navy-950 scroll-mt-20">
        <div className="section-glow-tl" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="Setup" title="Connect in four steps" />
          <div className="mb-8">
            <p className="font-dm-sans text-navy-100 text-sm mb-2">Connector URL</p>
            <UrlField url={MCP_URL} />
          </div>
          <ol className="space-y-4">
            {CLAUDE_STEPS.map((step, i) => (
              <motion.li key={step.name} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }} className="flex gap-4 bg-navy-800 border border-navy-700 rounded-xl p-5">
                <span className="w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-syne font-bold text-sm flex items-center justify-center shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-syne font-semibold text-navy-100 text-base mb-1">{step.name}</h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
          <p className="font-dm-sans text-navy-400 text-xs mt-5 text-center">
            Don&apos;t have an account yet? <a href="https://app.tubescribed.com/signup" className="text-navy-100 underline hover:text-navy-100">Create one free</a> before step 3.
          </p>
        </div>
      </section>

      {/* Prompts */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="Try these" title="What you can ask Claude" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROMPTS.map((p, i) => (
              <motion.div key={p} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.04 }} className="flex items-start justify-between gap-3 bg-navy-800 border border-navy-700 rounded-xl p-5">
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">&ldquo;{p}&rdquo;</p>
                <CopyButton text={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools + limits */}
      <section className="relative overflow-hidden py-24 bg-navy-950">
        <div className="section-glow-mid-right" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="Under the hood" title="Four tools Claude can use" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="bg-navy-800 border border-navy-700 rounded-xl p-5">
                <p className="font-mono text-brand-red text-sm mb-2">{tool.name}</p>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{tool.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <LimitsTable />
            <ul className="space-y-3 font-dm-sans text-navy-400 text-sm leading-relaxed">
              <li><span className="text-navy-100 font-semibold">Same allowance as the API.</span> Transcriptions and generations in Claude count toward your monthly calls. Failed calls are free.</li>
              <li><span className="text-navy-100 font-semibold">Raw captions by default.</span> They return in seconds. Ask Claude for a cleaned transcript when you want one.</li>
              <li><span className="text-navy-100 font-semibold">Captions required.</span> Videos need existing captions, including YouTube&apos;s automatic ones.</li>
              <li><span className="text-navy-100 font-semibold">Long videos.</span> Get the raw transcript first, then generate assets from that text.</li>
            </ul>
          </div>
          <p className="text-center mt-10">
            <Link href="/developers" className="inline-flex items-center gap-2 font-dm-sans text-brand-red hover:text-brand-orange text-sm font-semibold transition-colors">
              Building something? See the TubeScribed API <ArrowRight size={16} />
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="FAQ" title="Questions about the Claude connector" />
          <FAQList items={CLAUDE_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">Give Claude a YouTube superpower</h2>
          <p className="font-dm-sans text-navy-400 text-lg mb-8">Free plan included. 10 calls a month, no credit card.</p>
          <Button href="https://app.tubescribed.com/signup" variant="primary" className="px-8 py-4 text-lg">
            Create a free account
          </Button>
        </div>
      </section>
    </div>
  );
}
