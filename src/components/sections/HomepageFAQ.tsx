"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqSchema } from "@/lib/schema";

const faqs = [
  { q: "What exactly does TubeScribed do?", a: "TubeScribed takes any YouTube URL and produces a clean, structured transcript plus up to 15 content formats — blog posts, email sequences, SOPs, social captions, LinkedIn posts, YouTube descriptions, newsletters, and more. It runs the audio through OpenAI Whisper for accurate transcription, then Claude AI cleans and formats it in your brand voice." },
  { q: "How is this different from YouTube's auto-captions?", a: "YouTube auto-captions are unpunctuated, unformatted walls of text full of transcription errors. TubeScribed runs audio through OpenAI Whisper, then Claude AI adds punctuation, fixes errors, removes filler words, and structures the output with a title, summary, key takeaways, and timestamped segments. The result is publication-ready, not raw data." },
  { q: "Can ChatGPT or Claude do this instead?", a: "No. ChatGPT, Claude, and Gemini cannot access YouTube URLs. You'd have to manually find captions, clean them, copy them into a chat window, write a prompt — and repeat that for every output format you need. TubeScribed handles the entire pipeline in a single URL paste." },
  { q: "How does the free run work?", a: "New users get 1 free transcript and 1 free AI output — no credit card needed. After that, Pro is $19/month and Agency is $49/month. Credit packs are also available for extra usage and never expire." },
  { q: "What is the Brand Workspace?", a: "Brand Workspace is TubeScribed's voice system. You set up your brand once — your tone, audience, terminology, and writing style — and every output automatically matches. Agency users can save unlimited brand profiles, one per client." },
  { q: "What kinds of videos work best?", a: "YouTube tutorials, podcast episodes, coaching calls, training videos, interviews, webinars, course content, and conference talks. Any video where the spoken content has business value. Current limit is approximately 25–30 minutes per video." },
  { q: "Can I use TubeScribed for client work?", a: "Yes. The Agency plan is built for this — unlimited brand workspaces, 5 team members, and white-label outputs. Each client gets their own profile so every output is already in the right voice before you touch it." },
  { q: "What are credit packs?", a: "Credit packs are one-time purchases that never expire. Use them for extra transcripts or AI outputs beyond your monthly plan. Starter: 10 credits for $8. Growth: 25 credits for $18. Pro Pack: 50 credits for $32." },
  { q: "Can I feed transcripts into AI agents or custom GPTs?", a: "Yes — this is one of the most powerful use cases. Clean, structured transcripts are exactly what AI agents, custom GPTs, and knowledge bases need. TubeScribed gives you a properly formatted transcript you can paste directly into any AI tool, RAG pipeline, or knowledge base." },
  { q: "Can I cancel anytime?", a: "Yes. Upgrade, downgrade, or cancel anytime — no lock-in, no cancellation fees. Credit pack purchases are non-refundable once credits are consumed. Unused monthly credits don't roll over." },
];

export function HomepageFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const schema = faqSchema(faqs);

  return (
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
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">Common questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="font-syne font-semibold text-navy-100 text-sm">{faq.q}</span>
                <ChevronDown
                  size={16}
                  className={`text-navy-400 shrink-0 transition-transform duration-200 ${open === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === index && (
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
  );
}
