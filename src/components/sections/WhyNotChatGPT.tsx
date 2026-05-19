"use client";
import { motion } from "framer-motion";
import { Check, X, Link2, Bot, Mic, Timer, FolderOpen } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";

const tableRows = [
  { feature: "Access YouTube URLs directly", chatgpt: "Cannot access YouTube", tubescribed: "Paste any URL, works instantly" },
  { feature: "Clean punctuated transcript", chatgpt: "You copy captions manually", tubescribed: "Extracted and cleaned automatically" },
  { feature: "Timestamped segments", chatgpt: "Not available", tubescribed: "Included on every transcript" },
  { feature: "Brand voice applied to outputs", chatgpt: "You re-prompt every time", tubescribed: "Saved brand profile, auto-applied" },
  { feature: "15 content output types", chatgpt: "One output at a time", tubescribed: "Blog, SOP, Email, Social and 11 more in one click" },
  { feature: "Outputs saved and organized", chatgpt: "Lost in chat history", tubescribed: "Full workspace with history" },
  { feature: "Feed AI agents and custom GPTs", chatgpt: "You do the prep work manually", tubescribed: "Clean structured transcript ready to paste" },
  { feature: "Built for video content workflows", chatgpt: "General purpose chat tool", tubescribed: "Purpose-built pipeline" },
];

const cards = [
  {
    icon: Link2,
    headline: "One Paste. Seven Steps Automated.",
    body: "URL → Audio extraction → Whisper transcription → AI cleanup → Brand voice applied → 15 asset types generated → saved to your workspace. That's seven steps TubeScribed handles automatically. Your AI chat tool makes you do every one of them by hand.",
  },
  {
    icon: Bot,
    headline: "Your AI Agents Need Clean Transcripts",
    body: "Want to feed a YouTube video into a custom GPT, Claude project, or AI knowledge base? You need a properly formatted transcript first — not the garbled auto-caption dump YouTube gives you. TubeScribed gets you there in one click.",
  },
  {
    icon: Mic,
    headline: "ChatGPT Writes Like ChatGPT. TubeScribed Writes Like You.",
    body: "Set up your brand voice once — your tone, audience, and values. Every SOP, blog post, and email sequence TubeScribed generates comes out sounding like it came from you. Not a robot running a generic prompt.",
  },
  {
    icon: Timer,
    headline: "Stop Watching. Start Knowing.",
    body: "Extract the key insights from any video in seconds — no scrubbing, no rewinding, no sitting through 90 minutes to find the 10 minutes that matter. TubeScribed gives you the knowledge without the watch time.",
  },
  {
    icon: FolderOpen,
    headline: "Your Content Has a Home",
    body: "ChatGPT outputs disappear into chat history. TubeScribed saves every transcript, summary, SOP, and generated asset to your workspace — organized by brand, searchable, downloadable, and ready to reuse.",
  },
];

export function WhyNotChatGPT() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-navy-800">
      <div className="section-glow-mid-left" />
      <div className="section-glow-tr" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Part A — Pattern Interrupt Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            vs. AI Chat Tools
          </p>
          <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-6">
            The AI tools you already use{" "}
            <GradientText>can&apos;t touch YouTube.</GradientText>
            <br className="hidden lg:block" /> TubeScribed can — and it does everything after that too.
          </h2>
          <p className="font-dm-sans text-navy-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Paste a YouTube link into ChatGPT. Watch it fail. ChatGPT, Claude, Gemini — none of them can access YouTube. You&apos;d still have to find the captions, clean the formatting, write the prompt, re-prompt when it&apos;s wrong, copy the output, reformat it, and save it somewhere. TubeScribed does the entire pipeline in one paste.
          </p>
        </motion.div>

        {/* Part B — Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto rounded-2xl border border-navy-700 mb-16"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-navy-900 border-b border-navy-700">
                <th className="text-left px-6 py-5 font-syne font-semibold text-navy-100 text-sm w-2/5">
                  Feature
                </th>
                <th className="text-center px-6 py-5 font-syne font-semibold text-navy-400 text-sm w-[30%]">
                  ChatGPT / AI Chat Tools
                </th>
                <th className="text-center px-6 py-5 font-syne font-semibold text-brand-red text-sm w-[30%]">
                  TubeScribed
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-navy-700 ${i % 2 === 0 ? "bg-navy-900" : "bg-navy-800"}`}
                >
                  <td className="px-6 py-4 font-dm-sans text-navy-100 text-sm font-medium">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center font-dm-sans text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <X size={15} className="text-navy-600 shrink-0" />
                      <span className="text-navy-400">{row.chatgpt}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-dm-sans text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Check size={15} className="text-brand-red shrink-0" />
                      <span className="text-navy-100">{row.tubescribed}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Part C — Five Angle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map(({ icon: Icon, headline, body }, i) => (
            <motion.div
              key={headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300${i === 4 ? " md:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-brand-red" />
                </div>
                <h3 className="font-syne font-bold text-navy-100 text-base">{headline}</h3>
              </div>
              <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
