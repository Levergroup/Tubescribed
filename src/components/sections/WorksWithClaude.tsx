"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Code2, ArrowRight } from "lucide-react";

const REVEAL_PHRASE = "With TubeScribed, it can.".split(" ");

const CARDS = [
  {
    icon: Sparkles,
    eyebrow: "Claude connector",
    title: "Use TubeScribed inside Claude",
    body: "Connect once, then ask Claude to transcribe any YouTube video, with or without captions, or turn it into an SOP, blog post or email sequence, right in the chat.",
    cta: "Set it up in 1 minute",
    href: "/integrations/claude",
  },
  {
    icon: Code2,
    eyebrow: "Developer API",
    title: "Add TubeScribed to any workflow",
    body: "One endpoint, four tools, clean JSON. Plug YouTube transcripts and assets into n8n, Make, Zapier, AI agents or your own app.",
    cta: "See the API",
    href: "/developers",
  },
];

export function WorksWithClaude() {
  const prefersReduced = useReducedMotion();

  const wordContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };
  const wordItem = prefersReduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: "0.4em" },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
      };

  return (
    <section className="relative overflow-hidden py-24 bg-navy-950" aria-labelledby="works-with-claude">
      <div className="section-glow-mid-left" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">New · Works with Claude</p>
          <h2 id="works-with-claude" className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
            Claude can&apos;t open YouTube.{" "}
            <motion.span
              variants={wordContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              aria-label="With TubeScribed, it can."
            >
              {REVEAL_PHRASE.map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  variants={wordItem}
                  aria-hidden="true"
                  className="gradient-text inline-block"
                  style={{ marginRight: i < REVEAL_PHRASE.length - 1 ? "0.25em" : 0 }}
                >
                  {w}
                </motion.span>
              ))}
            </motion.span>
          </h2>
          <p className="font-dm-sans text-navy-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            The same TubeScribed engine now works where you already work: inside Claude, or inside your own tools through the API.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link href={card.href} className="group block h-full bg-navy-800 border border-navy-700 rounded-2xl p-7 transition-[border-color,box-shadow,transform] duration-300 hover:border-brand-red/50 hover:shadow-[0_0_44px_-12px_rgba(255,59,48,0.45)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-11 h-11 rounded-xl bg-navy-950 border border-navy-700 flex items-center justify-center">
                      <Icon size={20} className="text-brand-red" />
                    </span>
                    <span className="font-mono text-xs text-navy-400 uppercase tracking-wider">{card.eyebrow}</span>
                  </div>
                  <h3 className="font-syne font-bold text-navy-100 text-xl mb-2">{card.title}</h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed mb-5">{card.body}</p>
                  <span className="inline-flex items-center gap-2 font-dm-sans text-brand-red text-sm font-semibold group-hover:gap-3 transition-all">
                    {card.cta} <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
