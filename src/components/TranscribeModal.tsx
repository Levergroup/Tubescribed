"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Check } from "lucide-react";

const STEPS = [
  { label: "Extracting audio from YouTube...", duration: 1500 },
  { label: "Transcribing with AI...", duration: 2000 },
  { label: "Cleaning and structuring...", duration: 1500 },
  { label: "Generating your transcript...", duration: 1000 },
];

const PREVIEW_PARAGRAPHS = [
  "The biggest mistake I made in my first two years of creating content was treating every piece as a one-time event. I'd spend six hours making a video, post it, get some views, and then move on to the next one. The insights, frameworks, and strategies I was sharing? Gone after one watch. Nobody was finding them on Google. Nobody was sharing them. They were just disappearing into the YouTube void.",
  "The turning point came when I realized that the content wasn't the problem. The distribution system was the problem. Or more accurately — the complete lack of one. I was creating in isolation. Each video was its own island. And that's the trap that most creators fall into — they optimize for the video instead of the system.",
  "What changed everything was a single question: what if one video could feed an entire week of content across every platform? Not manually. Not with a VA. Automatically. With a system built around the transcript.",
];

const BLURRED_PARAGRAPHS = [
  "In practice this means three things. First, you need a reliable transcription layer that captures everything you say — not just the highlights but the exact words, the asides, the spontaneous insights. Second, you need an AI layer that understands your brand voice and can restructure that raw content for different formats and audiences. Third, you need an output layer that actually delivers finished assets, not drafts.",
  "The system I built does all three automatically. A 20-minute video goes in. Within seconds I have a clean transcript, a branded SOP, a blog post draft, three email sequences, and fifteen social posts — all in my voice, all formatted correctly for each platform, all ready to schedule or hand off.",
];

interface Props {
  url: string;
  onClose: () => void;
}

export function TranscribeModal({ url, onClose }: Props) {
  const [phase, setPhase] = useState<"processing" | "result">("processing");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const signupUrl = `https://app.tubescribed.com/signup${url ? `?url=${encodeURIComponent(url)}` : ""}`;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (phase !== "processing") return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cumulative = 0;
    STEPS.forEach((step, i) => {
      timers.push(
        setTimeout(() => {
          setCompletedSteps(prev => [...prev, i]);
          if (i + 1 < STEPS.length) setCurrentStep(i + 1);
        }, cumulative + step.duration)
      );
      cumulative += step.duration;
    });
    timers.push(setTimeout(() => setPhase("result"), cumulative + 400));
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-w-2xl bg-[#1E2A3A] border border-[#2D3F55] rounded-2xl shadow-2xl"
        initial={{ scale: 0.94, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-[#243447] text-[#94A3B8] hover:text-white hover:bg-[#2D3F55] transition-colors"
          aria-label="Close"
        >
          <X size={15} />
        </button>

        <div className="max-h-[88vh] overflow-y-auto rounded-2xl">
          <AnimatePresence mode="wait">
            {phase === "processing" ? (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProcessingView currentStep={currentStep} completedSteps={completedSteps} />
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <ResultView signupUrl={signupUrl} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function ProcessingView({
  currentStep,
  completedSteps,
}: {
  currentStep: number;
  completedSteps: number[];
}) {
  return (
    <div className="p-8 pt-10">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF3B30] to-[#FF8C42] flex items-center justify-center">
          <svg
            className="animate-spin"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="3"
            />
            <path
              d="M12 3a9 9 0 0 1 9 9"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2 className="text-white text-xl font-bold font-syne">
          Processing Your Video
        </h2>
        <p className="text-[#94A3B8] text-sm mt-1">
          This usually takes about 6 seconds
        </p>
      </div>

      <div className="space-y-3">
        {STEPS.map((step, i) => {
          const isComplete = completedSteps.includes(i);
          const isActive = currentStep === i && !isComplete;
          return (
            <div
              key={i}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-[#243447] border border-[#FF3B30]/30"
                  : isComplete
                  ? "bg-[#243447]/50"
                  : "opacity-35"
              }`}
            >
              <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                {isComplete ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
                  >
                    <Check size={15} className="text-white" strokeWidth={2.5} />
                  </motion.div>
                ) : isActive ? (
                  <div className="w-8 h-8 rounded-full border-2 border-[#FF3B30] border-t-transparent animate-spin" />
                ) : (
                  <div className="w-8 h-8 rounded-full border-2 border-[#2D3F55]" />
                )}
              </div>
              <div>
                <span
                  className={`text-sm font-medium ${
                    isComplete || isActive ? "text-white" : "text-[#94A3B8]"
                  }`}
                >
                  {step.label}
                </span>
                {isComplete && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-green-400 text-xs mt-0.5"
                  >
                    Done
                  </motion.p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-[#94A3B8] text-xs mt-7">
        Using the same AI engine as the live app
      </p>
    </div>
  );
}

function ResultView({ signupUrl }: { signupUrl: string }) {
  return (
    <div>
      {/* Header */}
      <div className="px-8 pt-10 pb-6 bg-gradient-to-b from-[#243447] to-[#1E2A3A] border-b border-[#2D3F55]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
            <Check size={13} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-green-400 text-xs font-semibold tracking-wide">
            Transcript generated successfully
          </span>
        </div>
        <h2 className="text-white text-lg font-bold font-syne leading-snug pr-8">
          How to Build a Content System That Works While You Sleep
        </h2>
        <div className="flex flex-wrap gap-4 mt-3">
          <span className="text-[#94A3B8] text-xs">📺 YouTube · 18 min video</span>
          <span className="text-[#94A3B8] text-xs">📝 ~4,200 words transcribed</span>
        </div>
      </div>

      {/* Summary + takeaways */}
      <div className="px-8 py-5 border-b border-[#2D3F55] space-y-5">
        <div>
          <p className="text-[#FF8C42] text-[10px] font-semibold uppercase tracking-widest mb-2">
            AI Summary
          </p>
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            The creator walks through a complete framework for building automated content workflows
            that repurpose video content across multiple platforms without manual work.
          </p>
        </div>
        <div>
          <p className="text-[#FF8C42] text-[10px] font-semibold uppercase tracking-widest mb-2">
            Key Takeaways
          </p>
          <ul className="space-y-2">
            {[
              "Most creators waste 80% of a video's potential value by not repurposing it",
              "A proper content system turns one video into 30+ pieces of content",
              "Brand voice consistency is what makes repurposed content actually convert",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-[#94A3B8] text-sm">
                <span className="text-[#FF3B30] mt-0.5 shrink-0">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Transcript preview */}
      <div className="px-8 pt-5 pb-0">
        <p className="text-[#FF8C42] text-[10px] font-semibold uppercase tracking-widest mb-4">
          Transcript Preview
        </p>
        <div className="space-y-3 text-[#94A3B8] text-sm leading-relaxed">
          {PREVIEW_PARAGRAPHS.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Blurred locked section */}
        <div className="relative mt-4 overflow-hidden rounded-lg">
          <div
            className="text-[#94A3B8] text-sm leading-relaxed space-y-3 select-none pointer-events-none"
            aria-hidden="true"
            style={{ filter: "blur(4px)" }}
          >
            {BLURRED_PARAGRAPHS.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E2A3A]/60 to-[#1E2A3A]" />
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <div className="flex items-center gap-2 bg-[#243447] border border-[#2D3F55] rounded-full px-4 py-2">
              <Lock size={14} className="text-[#FF3B30]" />
              <span className="text-[#94A3B8] text-xs">
                {Math.floor(Math.random() * 800 + 2800)} more words locked
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-8 pt-8 pb-8 text-center">
        <h3 className="text-white text-lg font-bold font-syne mb-1">
          Your transcript is ready
        </h3>
        <p className="text-[#94A3B8] text-sm mb-5 max-w-sm mx-auto">
          Sign up free to unlock the full transcript and generate a blog post, SOP, or email
          sequence from it.
        </p>
        <a
          href={signupUrl}
          className="block w-full py-4 rounded-xl font-semibold text-white text-center text-base hover:opacity-90 transition-opacity"
          style={{
            background: "linear-gradient(135deg, #FF3B30, #FF8C42)",
          }}
        >
          Unlock Free — No Credit Card
        </a>
        <p className="text-[#94A3B8] text-xs mt-3">
          1 free transcript + 1 free output. Takes 30 seconds.
        </p>
      </div>
    </div>
  );
}
