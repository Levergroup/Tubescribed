"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { Video, Building2, UserCheck, Cpu } from "lucide-react";

const tabs = [
  {
    id: "creators",
    label: "YouTube Creators",
    icon: Video,
    headline: "One video. 15 assets. Zero extra work.",
    body: "You already create great content. TubeScribed turns every upload into a blog post, email, SOP, social captions, YouTube description, and more — automatically, in your brand voice.",
    bullets: [
      "Paste any YouTube URL — get a clean transcript in 8 seconds",
      "15 content output types from every video",
      "Brand workspace keeps your voice consistent across all outputs",
      "No VA, no manual editing, no extra hours",
    ],
    href: "/for/content-creators",
    cta: "See Creator Features",
  },
  {
    id: "agencies",
    label: "Marketing Agencies",
    icon: Building2,
    headline: "Every client. One tool. Their voice.",
    body: "Save each client as a separate brand profile. Every transcript TubeScribed generates comes out in their voice, not yours. Unlimited clients on the Agency plan.",
    bullets: [
      "Unlimited brand workspaces — one per client",
      "Deliver content 10x faster with the same team",
      "White-label outputs clients think you wrote yourself",
      "5 team members on Agency plan",
    ],
    href: "/for/agencies",
    cta: "See Agency Features",
  },
  {
    id: "coaches",
    label: "Business Coaches",
    icon: UserCheck,
    headline: "Your methodology. Finally documented.",
    body: "Record a coaching call or training video. TubeScribed turns it into a structured SOP in your voice — your step-by-step process, your terminology, your framework. Ready to send.",
    bullets: [
      "SOP generator built for coaches and consultants",
      "Brand workspace trained on your exact voice",
      "Stop re-explaining — send the SOP instead",
      "Build your training library from existing recordings",
    ],
    href: "/for/coaches",
    cta: "See Coach Features",
  },
  {
    id: "ai-builders",
    label: "AI Builders",
    icon: Cpu,
    headline: "Clean transcripts. Ready for any pipeline.",
    body: "AI agents, custom GPTs, and RAG systems need structured text — not raw caption data. TubeScribed gives you publication-ready transcripts with punctuation, segments, and summaries baked in.",
    bullets: [
      "Structured output: title, summary, takeaways, timestamps",
      "Claude AI cleanup removes errors and filler words",
      "Paste directly into any AI tool, agent, or knowledge base",
      "API-ready for automation workflows",
    ],
    href: "/for/ai-builders",
    cta: "See AI Builder Features",
  },
];

export function UseCaseTabs() {
  const [active, setActive] = useState("creators");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Who It&apos;s For</p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">Built for your workflow</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === tab.id
                    ? "bg-brand-red text-white"
                    : "bg-navy-800 text-navy-400 hover:text-navy-100 border border-navy-700"
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-navy-800 border border-navy-700 rounded-2xl p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="font-syne font-bold text-2xl text-navy-100 mb-4 leading-tight">
                  {activeTab.headline}
                </h3>
                <p className="font-dm-sans text-navy-400 text-base leading-relaxed mb-6">
                  {activeTab.body}
                </p>
                <Button href={activeTab.href} variant="secondary" className="text-sm px-5 py-2.5">
                  {activeTab.cta}
                </Button>
              </div>
              <ul className="space-y-3">
                {activeTab.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                    <span className="font-dm-sans text-navy-100 text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-8">
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">
            Try Free
          </Button>
        </div>
      </div>
    </section>
  );
}
