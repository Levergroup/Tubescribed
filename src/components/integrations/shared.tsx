"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, ChevronDown } from "lucide-react";

// ─── Shared facts (single source of truth for API + Claude pages) ────────────

export const API_ENDPOINT = "https://iblyytktdumianqxfyis.supabase.co/functions/v1/api-v1";
export const MCP_URL = "https://iblyytktdumianqxfyis.supabase.co/functions/v1/mcp";
export const APP_KEYS_URL = "https://app.tubescribed.com";

export const PLAN_LIMITS = [
  { plan: "Free Run", calls: "10" },
  { plan: "Pro", calls: "200" },
  { plan: "Agency", calls: "1,000" },
];

export const TOOLS = [
  {
    name: "transcribe_video",
    input: "youtube_url",
    output: "Title, transcript, word count, duration",
    body: "Pulls the video's captions and returns the transcript. On the API it's cleaned by Claude AI; in Claude it returns raw captions by default (fast), or a cleaned version when you ask.",
  },
  {
    name: "generate_asset",
    input: "asset_type + youtube_url or transcript, optional brand_voice",
    output: "The finished asset as text, plus word count",
    body: "Turns a video or transcript into a blog post, SOP, email sequence, social posts, show notes, FAQ, training guide and more.",
  },
  {
    name: "list_asset_types",
    input: "none",
    output: "Every output type you can generate",
    body: "Returns the full list of asset types with a short description of each.",
  },
  {
    name: "get_usage",
    input: "none",
    output: "Calls used this month, your limit, plan, reset date",
    body: "Check how many calls you have left before running a batch.",
  },
];

// ─── UI pieces ───────────────────────────────────────────────────────────────

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          /* clipboard unavailable — ignore */
        }
      }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-navy-700 bg-navy-900 text-navy-100 hover:text-navy-100 hover:border-navy-400 text-xs font-dm-sans transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
      aria-label={copied ? "Copied" : label}
    >
      {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
      {copied ? "Copied" : label}
    </button>
  );
}

export function CodeBlock({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-navy-700">
      <div className="flex items-center gap-2 px-4 py-3 bg-navy-800 border-b border-navy-700">
        <span className="w-3 h-3 rounded-full bg-brand-red opacity-75" />
        <span className="w-3 h-3 rounded-full bg-brand-orange opacity-75" />
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-75" />
        <span className="font-mono text-navy-400 text-xs ml-2 truncate">{filename}</span>
        <span className="ml-auto">
          <CopyButton text={code} />
        </span>
      </div>
      <pre className="bg-navy-950 p-5 sm:p-6 overflow-x-auto text-[13px] leading-6">
        <code className="font-mono text-navy-100 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

export function UrlField({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-3 bg-navy-950 border border-navy-700 rounded-xl px-4 py-3">
      <code className="font-mono text-navy-100 text-xs sm:text-sm break-all flex-1">{url}</code>
      <CopyButton text={url} />
    </div>
  );
}

export function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: ReactNode; body?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">{eyebrow}</p>
      <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">{title}</h2>
      {body && <p className="font-dm-sans text-navy-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">{body}</p>}
    </motion.div>
  );
}

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red"
            >
              <span className="font-syne font-semibold text-navy-100 text-base">{item.q}</span>
              <ChevronDown size={18} className={`text-navy-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="px-6 pb-5 font-dm-sans text-navy-400 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function LimitsTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-navy-700">
      <table className="w-full">
        <thead>
          <tr className="bg-navy-800 border-b border-navy-700">
            <th className="text-left px-6 py-4 font-syne font-semibold text-navy-100 text-sm">Plan</th>
            <th className="text-right px-6 py-4 font-syne font-semibold text-navy-100 text-sm">Calls per month</th>
          </tr>
        </thead>
        <tbody>
          {PLAN_LIMITS.map((row, i) => (
            <tr key={row.plan} className={`border-b border-navy-700 last:border-0 ${i % 2 === 0 ? "bg-navy-900" : "bg-navy-800"}`}>
              <td className="px-6 py-4 font-dm-sans text-navy-100 text-sm">{row.plan}</td>
              <td className="px-6 py-4 font-dm-sans text-navy-100 text-sm text-right font-semibold">{row.calls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
