"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { APP_URL } from "@/lib/constants";
import { AlertCircle, CheckCircle2, Layers } from "lucide-react";

const painPoints = [
  "Paying team members $30–80/hr to transcribe client videos manually",
  "Inconsistent output quality when different team members handle repurposing",
  "Hours lost every week on content that could be automated",
  "Clients expect fast turnaround — manual transcription can't keep up",
];

const outcomes = [
  "Deliver client content 10x faster with the same team size",
  "Every output sounds like the client — not like a generic AI tool",
  "One tool handles unlimited clients with separate brand profiles",
  "White-label outputs your clients think you wrote yourself",
];

export default function ForAgenciesPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4"
          >
            For Marketing Agencies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            Run Every Client&apos;s Content Through One Tool.{" "}
            <GradientText>In Their Voice.</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Save each client as a brand profile. Every transcript TubeScribed
            generates comes out in their voice automatically. One tool, every
            client.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              href={`${APP_URL}/signup?plan=agency`}
              variant="primary"
              className="px-8 py-4 text-lg"
            >
              Start Agency Plan — $29/month
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne font-bold text-3xl text-navy-100 text-center mb-12"
          >
            The agency content problem
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((pain, index) => (
              <motion.div
                key={pain}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-navy-900 border border-navy-700 rounded-2xl p-6"
              >
                <AlertCircle
                  size={20}
                  className="text-brand-red shrink-0 mt-0.5"
                />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">
                  {pain}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Workspace Feature Callout */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-800 border border-navy-700 rounded-3xl p-10 lg:p-14 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-navy-900 border border-navy-700 flex items-center justify-center mx-auto mb-6">
              <Layers size={32} className="text-brand-red" />
            </div>
            <h2 className="font-syne font-bold text-3xl text-navy-100 mb-4">
              &ldquo;One tool, unlimited clients&rdquo;
            </h2>
            <p className="font-dm-sans text-navy-400 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Brand Workspace is TubeScribed&apos;s client management layer. Create a
              separate profile for each client: their brand name, tone of voice,
              industry terminology, and output preferences. Once set up, every
              transcript and content output for that client sounds exactly like
              them — not like AI, not like your team&apos;s writing style.
            </p>
            <p className="font-dm-sans text-navy-400 text-base leading-relaxed max-w-xl mx-auto">
              The Agency plan gives you{" "}
              <span className="text-navy-100 font-medium">
                unlimited brand profiles
              </span>
              , so you can scale to as many clients as you need without hitting a
              wall. Plus white-label outputs — your clients will think you wrote
              every word yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">
              What agencies get with TubeScribed
            </h2>
            <p className="font-dm-sans text-navy-400 text-base">
              Sarah runs a marketing agency serving 8 clients. Here&apos;s what TubeScribed changed.
            </p>
          </motion.div>
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
              >
                <CheckCircle2
                  size={20}
                  className="text-green-400 shrink-0 mt-0.5"
                />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">
                  {outcome}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Button
              href={`${APP_URL}/signup?plan=agency`}
              variant="primary"
              className="px-8 py-4 text-lg"
            >
              Start Agency Plan — $29/month
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
