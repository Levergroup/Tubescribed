"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, AlertTriangle, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Hours lost to manual transcription",
    body: "Your team is copying captions, fixing errors, removing filler words — by hand. Every week. That's $50–100/hour of labor on a task that takes 8 seconds with TubeScribed.",
  },
  {
    icon: DollarSign,
    title: "Content rotting in your video library",
    body: "You have 50, 100, 200 videos packed with methodology, frameworks, and expertise. None of it is searchable, shareable, or in a format your clients can use.",
  },
  {
    icon: AlertTriangle,
    title: "Every AI tool fails at step one",
    body: "ChatGPT and Claude can't access YouTube URLs. You still have to find captions, clean them, copy them in, write a prompt — every single time. TubeScribed handles all of it.",
  },
  {
    icon: RefreshCw,
    title: "Inconsistent output across your team",
    body: "Different team members produce different-sounding content. Without a brand workspace, every output is a coin flip. Your clients notice.",
  },
];

export function ProblemAgitation() {
  return (
    <section className="py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 max-w-2xl mx-auto leading-tight">
            YouTube is your best content. It&apos;s also completely inaccessible.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-900 border border-navy-700 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">{problem.title}</h3>
                    <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{problem.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
