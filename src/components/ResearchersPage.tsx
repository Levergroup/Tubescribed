"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ChevronDown,
  Star,
  CheckCircle2,
  Monitor,
  Mic2,
  TrendingUp,
  Landmark,
  Newspaper,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pricing } from "@/components/sections/Pricing";
import { faqSchema } from "@/lib/schema";

const PROBLEMS = [
  {
    title: "You're spending 80% of your research time watching instead of writing",
    body: "A journalist covering an industry conference watches 6 hours of talks to extract 12 relevant quotes. A newsletter writer covering a trending topic scrubs through 4 podcast interviews looking for the 3 minutes that matter. The information is there — finding it is the problem.",
  },
  {
    title: "Auto-captions are impossible to search or quote accurately",
    body: "YouTube auto-captions are riddled with errors and have no punctuation — useless for accurate quotes. Misquoting a source because of a transcription error isn't just embarrassing. For journalists and researchers, it's a credibility problem.",
  },
  {
    title: "Video content is invisible to your research tools",
    body: "Your notes app, research database, or knowledge management system can search text. It can't search video. Every hour of expert testimony, every conference panel, every podcast interview — none of it is findable after you watch it. TubeScribed makes it all searchable.",
  },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Paste the video URL",
    description:
      "Any YouTube video — conference talks, expert interviews, congressional hearings, earnings calls, documentary clips, academic lectures. Paste the URL.",
  },
  {
    number: "02",
    title: "Get accurate searchable transcript",
    description:
      "OpenAI Whisper produces a highly accurate transcript with proper punctuation and paragraph breaks — suitable for quotation. Every segment is timestamped so you can verify the exact moment of any quote.",
  },
  {
    number: "03",
    title: "Work from structured notes",
    description:
      "TubeScribed generates a summary, key takeaways, and the full transcript. Search for terms, find quotes instantly, export to your notes app. What took 3 hours of watching takes 3 minutes.",
  },
];

const USE_CASES = [
  {
    icon: Monitor,
    title: "Conference and summit coverage",
    body: "Process every talk from a 3-day conference in hours. Searchable notes from 20 speakers before the other journalists finish watching their first session.",
  },
  {
    icon: Mic2,
    title: "Expert interview research",
    body: "Before interviewing a subject, process their last 10 YouTube appearances. Know their exact positions, quotes, and talking points before you walk in the room.",
  },
  {
    icon: TrendingUp,
    title: "Earnings call analysis",
    body: "Every public company earnings call is on YouTube. Process them all in minutes. Searchable quotes from executives, exact language on guidance, comparable across quarters.",
  },
  {
    icon: Landmark,
    title: "Congressional hearing research",
    body: "Hours of testimony made searchable in seconds. Find the exact moment a specific topic was addressed. Quote accurately with timestamps.",
  },
  {
    icon: Newspaper,
    title: "Newsletter research",
    body: "Cover 5 podcasts in your beat every week without listening to all 5. Extract key insights from each, identify what's worth covering, write your newsletter from structured notes.",
  },
  {
    icon: BookOpen,
    title: "Academic research",
    body: "Process lectures, conference presentations, and expert talks in your field. Build a searchable knowledge base from the best thinkers in your area.",
  },
];

const BENEFITS = [
  "Highly accurate transcription — powered by OpenAI Whisper, suitable for direct quotation",
  "Timestamps on every segment — verify and link to exact moments",
  "Summary and key takeaways — know if a video is worth your full attention",
  "Searchable workspace — all transcripts saved and searchable in your account",
  "Downloadable as text — export to Notion, Obsidian, Roam, or any notes app",
  "Process 30+ videos per month on Pro plan — covers most research workflows",
];

const FAQS = [
  {
    q: "How accurate is the transcription for quotation purposes?",
    a: "TubeScribed uses OpenAI Whisper — one of the most accurate transcription models available. Accuracy on clear audio is typically 95–98%. Always verify direct quotes against the original video using the timestamps provided. Transcription accuracy may vary with heavy accents, technical jargon, or poor audio quality.",
  },
  {
    q: "Can I process videos in languages other than English?",
    a: "Whisper supports transcription in 50+ languages. The transcript will be generated in the video's original language. Content generation outputs (summaries, key takeaways) currently perform best on English content.",
  },
  {
    q: "Can I process a live stream or video that was streamed and archived?",
    a: "TubeScribed works on any public YouTube video — including archived live streams. As long as the video is publicly accessible on YouTube, it can be processed.",
  },
  {
    q: "How long are transcripts stored in my workspace?",
    a: "All transcripts are stored in your TubeScribed workspace indefinitely. They're searchable, downloadable, and organized by brand workspace. You build a permanent searchable archive of every video you've processed.",
  },
];

export function ResearchersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const schema = faqSchema(FAQS);

  return (
    <div className="min-h-screen bg-navy-900">

      {/* 1. Hero */}
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
            For Researchers &amp; Journalists
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            Stop Watching. Start Knowing.{" "}
            <GradientText>Extract Any Video Into Searchable Research Notes.</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Paste any YouTube URL — conference talks, expert interviews, congressional hearings,
            earnings calls, podcasts. Get a searchable transcript, key quotes, and structured notes
            in under 30 seconds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Try Free — No Credit Card
              </Button>
              <Button href="/#how-it-works" variant="secondary" className="px-8 py-4 text-lg">
                See How It Works
              </Button>
            </div>
            <p className="font-dm-sans text-navy-500 text-sm">
              Used by journalists, newsletter writers, analysts, and academics
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Problems */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-mid-left" />
        <div className="section-glow-tr" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne font-bold text-3xl text-navy-100 text-center mb-12"
          >
            Research from video is broken.
          </motion.h2>
          <div className="space-y-5">
            {PROBLEMS.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-900 border border-navy-700 rounded-2xl p-7"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle size={18} className="text-brand-red shrink-0 mt-0.5" />
                  <h3 className="font-syne font-semibold text-navy-100 text-base">
                    {problem.title}
                  </h3>
                </div>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed pl-7">
                  {problem.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              How It Works
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Research workflow in three steps.
            </h2>
          </motion.div>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-800 border border-navy-700 rounded-2xl p-8 text-center"
              >
                <span className="inline-block font-syne font-bold text-5xl text-navy-700 mb-8 leading-none">
                  {step.number}
                </span>
                <h3 className="font-syne font-semibold text-xl text-navy-100 mb-3">{step.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
              <div className="w-1/3" />
              <div className="w-1/12 flex items-center justify-center text-navy-700 text-2xl font-bold">→</div>
              <div className="w-1/3" />
              <div className="w-1/12 flex items-center justify-center text-navy-700 text-2xl font-bold">→</div>
              <div className="w-1/3" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Use Cases */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              What researchers and journalists use TubeScribed for
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
                  className="bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-4">
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

      {/* 5. Benefits */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              What You Get
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Everything researchers need
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-3 bg-navy-800 border border-navy-700 rounded-2xl p-5 hover:border-brand-red transition-colors duration-300"
              >
                <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-tr" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-900 border border-navy-700 rounded-3xl p-10 text-center"
          >
            <div className="flex items-center justify-center gap-0.5 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="font-dm-sans text-navy-300 text-lg leading-relaxed mb-8 italic">
              &ldquo;I cover the AI industry for my newsletter. Every week there are 15–20 important
              talks, podcasts, and interviews I need to stay across. TubeScribed cuts my research
              time in half. I paste the URL, scan the summary and key points, decide if it&apos;s
              worth reading in full. I&apos;m more informed and working fewer hours.&rdquo;
            </p>
            <p className="font-syne font-semibold text-navy-100 text-sm">David L.</p>
            <p className="font-dm-sans text-navy-500 text-xs mt-1">
              Independent Technology Journalist &amp; Newsletter Writer
            </p>
            <p className="font-dm-sans text-navy-600 text-xs mt-3 italic">
              Results shown are illustrative examples. Individual results vary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. Pricing */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-10 pt-16 pb-4 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Pricing
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">
              Research-ready pricing
            </h2>
            <p className="font-dm-sans text-navy-400 text-base max-w-xl mx-auto">
              30 transcripts per month covers most research workflows. One accurate transcript
              replaces hours of manual note-taking.
            </p>
          </div>
        </div>
        <div className="pt-52">
          <Pricing />
        </div>
      </div>

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
              Your questions, answered
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
              Ready to Start?
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 leading-tight mb-6 max-w-2xl mx-auto">
              The conference is over. The podcast finished. The interview aired. Did you get
              everything that matters?
            </h2>
            <p className="font-dm-sans text-navy-400 text-base mb-10 max-w-xl mx-auto">
              Try TubeScribed free on your next research video. Transcript in 30 seconds. No credit
              card.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Try Free on Your Next Video
              </Button>
              <Button href="/pricing" variant="secondary" className="px-8 py-4 text-lg">
                See Pricing
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["1 free transcript, no credit card", "Cancel anytime", "Pro & Agency plans"].map(
                (signal) => (
                  <span key={signal} className="flex items-center gap-2 text-navy-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-700" />
                    {signal}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
