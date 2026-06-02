"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ChevronDown,
  Star,
  BookOpen,
  ListChecks,
  MessageSquare,
  FileText,
  AlignLeft,
  Key,
  Link2,
  Cpu,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pricing } from "@/components/sections/Pricing";
import { faqSchema } from "@/lib/schema";

const PROBLEMS = [
  {
    title: "Students can't reference what they can't rewatch",
    body: "A student who misses a concept in a 90-minute lecture has two options — rewatch the entire video or go without. Neither is good. Written study materials let students reference specific concepts in seconds. Better context for students produces better learning outcomes.",
  },
  {
    title: "Creating course materials from video takes days",
    body: "You've already taught the content. It exists in your videos. But converting it into written study guides, quizzes, and reference materials requires hours of manual transcription and restructuring — per video. Most educators never get there.",
  },
  {
    title: "Institutional knowledge disappears when people leave",
    body: "Your best training videos represent years of accumulated expertise. When staff turn over, that knowledge requires rewatching hours of video to transfer. Documented, structured training materials are permanent. Better context preserved forever.",
  },
];

const HOW_IT_WORKS = [
  {
    icon: Link2,
    title: "Paste the YouTube URL of your lecture or tutorial",
    description:
      "Any YouTube video — your own recordings, educational YouTube content, training walkthroughs, or course lessons. Public or unlisted links both work.",
  },
  {
    icon: Cpu,
    title: "TubeScribed generates structured learning materials",
    description:
      "Claude AI applies instructional design principles — learning objective stated upfront, content chunked into digestible sections, key concepts called out in summary boxes, and a knowledge check at the end. Better structure produces better learning.",
  },
  {
    icon: Search,
    title: "Distribute to students or team immediately",
    description:
      "Download as text, paste to Notion, Google Docs, your LMS, or anywhere students access materials. One video becomes one permanent, searchable, shareable study guide.",
  },
];

const OUTPUT_TYPES = [
  {
    icon: BookOpen,
    title: "Structured Study Guide",
    body: "Learning objective, key concepts, section summaries, and knowledge check — built on instructional design principles. Better context for students, better completion rates for you.",
  },
  {
    icon: ListChecks,
    title: "Standard Operating Procedure",
    body: "Every process tutorial becomes a step-by-step SOP with prerequisites, numbered steps, warnings, and completion checklist. Better context means fewer follow-up questions.",
  },
  {
    icon: MessageSquare,
    title: "FAQ Document",
    body: "Anticipate student questions before they ask. TubeScribed generates a FAQ from your lecture content — structured for Google's People Also Ask and for student reference.",
  },
  {
    icon: FileText,
    title: "Training Guide",
    body: "Corporate trainers turn video training content into written guides new employees can reference at their own pace. Better context. Faster onboarding. More consistent results.",
  },
  {
    icon: AlignLeft,
    title: "Clean Transcript",
    body: "Accessible learning for every student — including hearing-impaired learners, non-native English speakers, and fast processors who read faster than they listen. Better context for everyone.",
  },
  {
    icon: Key,
    title: "Key Takeaways",
    body: "The 5 most important concepts from any lecture distilled into a scannable bullet list. Better context for students who need the big picture before diving into the detail.",
  },
];

const WHO_USES = [
  {
    title: "K-12 and University Educators",
    body: "Turn your recorded lectures and tutorial videos into study guides students can reference during exams and assignments.",
  },
  {
    title: "Online Course Creators",
    body: "Every video lesson becomes a written module students can read, search, and reference — without rewatching. Better completion rates. Better reviews.",
  },
  {
    title: "Corporate L&D Teams",
    body: "Convert your entire video training library into a searchable SOP database. New employees get answers in seconds. Institutional knowledge preserved permanently.",
  },
  {
    title: "YouTube Educators",
    body: "Your educational YouTube channel is a content goldmine. Every video becomes a blog post, study guide, and newsletter issue — automatically reaching students who prefer reading to watching.",
  },
];

const FAQS = [
  {
    q: "Can I process my own unlisted training videos?",
    a: "Yes — unlisted YouTube videos work with TubeScribed. Upload your training recording to YouTube as unlisted, paste the link, and process it. The video stays private on YouTube while you get the full written materials.",
  },
  {
    q: "Will the study guide match my teaching style and terminology?",
    a: "Set up a Brand Workspace with your course terminology, teaching style, and vocabulary. Every output automatically uses your language — not generic AI phrasing. Better context means materials that actually sound like you.",
  },
  {
    q: "How long does a 90-minute lecture take to process?",
    a: "Videos 60–90 minutes process in approximately 2 minutes. Credits scale with video length — a 90-minute lecture uses 4 credits. Pro plan includes 30 transcripts per month.",
  },
  {
    q: "What formats can I export study materials in?",
    a: "All outputs are generated as clean formatted text. Copy directly to Google Docs, Notion, your LMS, or download as .txt. Works with any platform where you currently host written content.",
  },
];

export function EducatorsPage() {
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
            For Educators, Trainers &amp; Course Creators
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-bold text-4xl lg:text-6xl text-navy-100 mb-6 leading-tight"
          >
            Your Video Lessons Deserve to Be More Than a Video.{" "}
            <GradientText>Better Context. Better Learning.</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            TubeScribed turns any YouTube lecture, tutorial, or training video into a structured
            study guide, course material, or training document — automatically. Every concept
            captured. Every student supported.
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
              <Button href="/features" variant="secondary" className="px-8 py-4 text-lg">
                See All Output Types
              </Button>
            </div>
            <p className="font-dm-sans text-navy-500 text-sm">
              Used by teachers, professors, corporate trainers, and online course creators
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
            Why video alone isn&apos;t enough for learning.
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
      <section className="relative overflow-hidden py-24 bg-navy-900">
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
              From lecture to study guide in three steps.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy-800 border border-navy-700 rounded-2xl p-8 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center mx-auto mb-6">
                    <Icon size={22} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-xl text-navy-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Output Types Grid */}
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
              Output Types
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              One video. Six types of learning material.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OUTPUT_TYPES.map((output, index) => {
              const Icon = output.icon;
              return (
                <motion.div
                  key={output.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-red" />
                  </div>
                  <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">
                    {output.title}
                  </h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{output.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Better Context Callout */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-brand-red bg-navy-800 rounded-r-2xl p-10"
          >
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-white mb-6 leading-tight">
              Better Context. Better Learning.
            </h2>
            <div className="space-y-4 text-navy-400 text-lg leading-relaxed">
              <p>
                The research is clear: students who have written reference materials alongside video
                content retain information significantly better than those who rely on video alone.
              </p>
              <p>Not because the video is bad. Because better context produces better outcomes.</p>
              <p>
                When a student can read the key concept, search for the specific term, and reference
                the exact section they need — they learn more.
              </p>
              <p>
                TubeScribed gives every video you create a written counterpart that supports every
                type of learner — in minutes, not days.
              </p>
              <p>The lesson was always in the video. Now your students can actually use it.</p>
            </div>
            <div className="mt-8">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-base"
              >
                Start Converting Your First Lesson Free
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Who Uses TubeScribed */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
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
              Who It&apos;s For
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
              Who uses TubeScribed for education
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHO_USES.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
              >
                <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">
                  {item.title}
                </h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonial */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tr" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-800 border border-navy-700 rounded-3xl p-10 text-center"
          >
            <div className="flex items-center justify-center gap-0.5 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="font-dm-sans text-navy-300 text-lg leading-relaxed mb-8 italic">
              &ldquo;I have 340 training videos and zero written documentation. Our onboarding was
              inconsistent and new hires were constantly interrupting senior staff with questions the
              videos already answered. TubeScribed turned our entire video library into an SOP
              database in one weekend.&rdquo;
            </p>
            <p className="font-syne font-semibold text-navy-100 text-sm">Rachel M.</p>
            <p className="font-dm-sans text-navy-500 text-xs mt-1">L&amp;D Director, Operations Team</p>
            <p className="font-dm-sans text-navy-600 text-xs mt-3 italic">
              Results shown are illustrative examples. Individual results vary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8. Pricing */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-10 pt-16 pb-4 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
              Pricing
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4">
              Education-ready pricing
            </h2>
            <p className="font-dm-sans text-navy-400 text-base max-w-xl mx-auto">
              30 transcripts per month covers most course libraries. One study guide saves hours of
              manual documentation.
            </p>
          </div>
        </div>
        <div className="pt-52">
          <Pricing />
        </div>
      </div>

      {/* 9. FAQ */}
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

      {/* 10. Final CTA */}
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
              Your video lessons are already recorded. Your students need more than a video.
            </h2>
            <p className="font-dm-sans text-navy-400 text-base mb-10 max-w-xl mx-auto">
              Turn your first lecture into a study guide free. No credit card. Better context in 2
              minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                href="https://app.tubescribed.com/signup"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Generate Your First Study Guide Free
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
