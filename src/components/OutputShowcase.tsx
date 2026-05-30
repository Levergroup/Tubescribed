"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { APP_URL } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const OUTPUTS = [
  {
    id: "transcript",
    icon: "📄",
    badge: "Core",
    badgeColor: "#FF3B30",
    title: "Clean Transcript",
    tagline: "Your video, finally readable.",
    description:
      "OpenAI Whisper transcribes every word with 95–98% accuracy. Claude AI removes filler words, adds punctuation, structures into paragraphs, and timestamps every segment. The output you'd spend 45 minutes cleaning manually — done in 15 seconds.",
    stat: "95–98% accuracy",
    statLabel: "via OpenAI Whisper",
    preview: [
      { timestamp: "00:00", text: "The biggest mistake most content creators make is treating every video as a one-time event." },
      { timestamp: "00:18", text: "You spend six hours creating something valuable — and it disappears into the YouTube void after one watch." },
      { timestamp: "00:34", text: "What I want to show you today is the exact system I use to extract maximum value from every video..." },
    ],
  },
  {
    id: "blog",
    icon: "✍️",
    badge: "SEO",
    badgeColor: "#185FA5",
    title: "SEO Blog Post",
    tagline: "Rank on Google from what you said on YouTube.",
    description:
      "Not a summary — a full article. Introduction built on the PAS framework. H2s written as search queries for featured snippet eligibility. Primary keyword placed for rankings. CTAs at natural decision points. Built to rank AND convert, not just exist.",
    stat: "1,200 words avg",
    statLabel: "article length",
    preview: [
      { label: "Title", text: "How Content Creators Are Getting 3x More Traffic From Videos They Already Made" },
      { label: "Intro", text: "Most YouTube creators are invisible on Google. Not because their content isn't good — but because Google can't read a video. Here's the system that changes that..." },
      { label: "H2", text: "Why Is Your YouTube Content Invisible to Google Search?" },
    ],
  },
  {
    id: "sop",
    icon: "📋",
    badge: "Business",
    badgeColor: "#3B6D11",
    title: "SOP Document",
    tagline: "Your process documented. Finally.",
    description:
      "Purpose statement. Prerequisites. Numbered steps with consistent granularity. Decision points with IF/THEN logic. Warning callouts. Completion checklist. The difference between an SOP people actually follow and a bullet list nobody uses.",
    stat: "85–95%",
    statLabel: "publish-ready output",
    preview: [
      { label: "Purpose", text: "Defines the standard client onboarding process for consistent delivery from signed contract to first deliverable." },
      { label: "Step 2", text: "Schedule kickoff call within 48 hours of contract signing. Use Calendly link. Prepare kickoff agenda from Drive template." },
      { label: "⚠️ Warning", text: "Do not begin deliverables before kickoff call confirms scope alignment." },
    ],
  },
  {
    id: "email",
    icon: "📧",
    badge: "Conversion",
    badgeColor: "#854F0B",
    title: "Email Sequence",
    tagline: "5 emails that actually get opened.",
    description:
      "Subject lines built to compete in a 200-message inbox. First line written for the preview pane. One CTA per email. Sequence structured as a buyer journey — not five versions of the same message. Cliffhanger closings that make the next email irresistible.",
    stat: "5 emails",
    statLabel: "full sequence generated",
    preview: [
      { label: "Email 1 Subject", text: "The video that changed how I think about content" },
      { label: "Preview text", text: "I made a mistake for 2 years running this channel..." },
      { label: "Opening line", text: "Last week I realized I'd been leaving 90% of my content's value on the table. Here's exactly what I mean." },
    ],
  },
  {
    id: "social",
    icon: "📱",
    badge: "Platform-Specific",
    badgeColor: "#534AB7",
    title: "Social Captions",
    tagline: "Platform-specific. Not resized.",
    description:
      "LinkedIn gets the white space pattern that outperforms paragraphs on that platform. X gets the counterintuitive hook that drives retweets. Instagram gets the question that makes the reader feel seen. Three platforms, three completely different prompts.",
    stat: "3 platforms",
    statLabel: "unique copy each",
    preview: [
      { label: "LinkedIn", text: "Most creators spend 6 hours repurposing one video.\n\nI spend 3 minutes.\n\nHere's the difference..." },
      { label: "X / Twitter", text: "Your YouTube videos are invisible on Google.\nThat's not a YouTube problem.\nHere's the fix:" },
      { label: "Instagram", text: "Ever feel like you're creating content but nobody's finding it? 👇\nYou're probably posting in the wrong place..." },
    ],
  },
  {
    id: "thread",
    icon: "🧵",
    badge: "Viral",
    badgeColor: "#5F5E5A",
    title: "X Thread",
    tagline: "Built to be retweeted, not just read.",
    description:
      "Tweet 1 is a pattern interrupt — the most counterintuitive claim from your video. Each tweet ends with a micro-cliffhanger. The penultimate tweet builds the payoff. The final tweet delivers it and earns the follow.",
    stat: "8–10 tweets",
    statLabel: "engineered for shares",
    preview: [
      { label: "Tweet 1 — Hook", text: "The most prolific creators on the internet aren't creating more content.\n\nThey're doing this instead. 🧵" },
      { label: "Tweet 4", text: "One 45-min video contains:\n→ 1 blog post\n→ 5 emails\n→ 2 weeks of social\n→ 1 SOP\n\nMost people extract 0 of these." },
      { label: "Tweet 8 — CTA", text: "The system I use to extract all of it is linked below.\nFirst one's free. No card.\nFollow for more." },
    ],
  },
  {
    id: "faq",
    icon: "❓",
    badge: "Rich Results",
    badgeColor: "#0F6E56",
    title: "FAQ Document",
    tagline: "Google featured snippets, pre-loaded.",
    description:
      "Questions written to match the exact conversational search queries that trigger Google's People Also Ask boxes. Answers calibrated to 40–60 words — the featured snippet sweet spot. Self-contained. Schema markup ready.",
    stat: "40–60 word answers",
    statLabel: "featured snippet ready",
    preview: [
      { label: "Q", text: "What is the best way to repurpose a YouTube video into a blog post?" },
      { label: "A", text: "The fastest method is using an AI transcription tool that accepts YouTube URLs directly. The tool extracts audio, transcribes with Whisper, and generates a structured SEO article automatically — the full process takes under 2 minutes." },
    ],
  },
  {
    id: "newsletter",
    icon: "📰",
    badge: "Retention",
    badgeColor: "#993556",
    title: "Newsletter Issue",
    tagline: "Your subscriber list finally gets content.",
    description:
      "Subject line built for open rate. Preview text pulling them in before they click. Hook, insight, practical application, CTA — in your brand voice for your specific audience. Turning your video library into a consistent newsletter is the fastest way to build a loyal audience.",
    stat: "Weekly issue",
    statLabel: "from any video",
    preview: [
      { label: "Subject", text: "The system I use to publish 3x more content (without making anything new)" },
      { label: "Opening", text: "This week I want to show you something I wish I'd understood two years ago.\n\nIt's not a new tool. It's a mindset shift about what content creation actually means..." },
    ],
  },
  {
    id: "training",
    icon: "🎓",
    badge: "L&D",
    badgeColor: "#185FA5",
    title: "Training Guide",
    tagline: "Your video becomes a course module.",
    description:
      "Learning objective stated upfront. Content chunked into sections under 7 minutes of reading time. Key concepts in summary boxes. Practical application exercises after each concept. Knowledge check at the end. Built on instructional design principles.",
    stat: "Instructional design",
    statLabel: "built for completion",
    preview: [
      { label: "Learning Objective", text: "After completing this guide, you will be able to implement the 3-step content repurposing system and produce 5+ pieces of content from a single video recording." },
      { label: "Section 2", text: "Key Concept: The Content Extraction Method\nEvery spoken sentence contains 3–5 potential written assets. Here is how to identify them..." },
    ],
  },
  {
    id: "sales",
    icon: "💬",
    badge: "Revenue",
    badgeColor: "#7C2D12",
    title: "Sales Script",
    tagline: "Conversations that close without pressure.",
    description:
      "Opens with the prospect's problem in their language — not yours. Credibility through specificity not claims. Creates desire by making them imagine the outcome before presenting the solution. Handles three common objections before they're raised.",
    stat: "Direct response",
    statLabel: "built to close",
    preview: [
      { label: "Opening", text: "Before I tell you anything about what we do — when you record a training video, what happens to it after you publish it?" },
      { label: "Transition", text: "That's the exact problem we solved. Here's what our users tell us in their first week..." },
    ],
  },
  {
    id: "adcopy",
    icon: "🎯",
    badge: "Paid Media",
    badgeColor: "#854F0B",
    title: "Ad Copy",
    tagline: "5 ad angles. Test which one wins.",
    description:
      "Five distinct variations per video — each targeting a different emotional driver: time savings, competitive threat, identity, curiosity, and direct results. Hook written for thumb-stopping power in a scrolling feed. Ready to paste into Meta Ads Manager.",
    stat: "5 ad angles",
    statLabel: "per video",
    preview: [
      { label: "Time angle", text: "3 hours of content repurposing. Done in 8 seconds. TubeScribed turns any YouTube video into a blog post, SOP, and email sequence — automatically." },
      { label: "Identity angle", text: "Serious creators don't transcribe manually. They use systems. TubeScribed is the system." },
      { label: "Threat angle", text: "Your competitors are repurposing every video they make. Are you?" },
    ],
  },
  {
    id: "casestudy",
    icon: "📊",
    badge: "Social Proof",
    badgeColor: "#3B6D11",
    title: "Case Study",
    tagline: "Turn your process into proof.",
    description:
      "Problem → Solution → Results narrative structure. Specific details that create credibility. Before/after framing that makes the transformation tangible. Quotes and data points extracted from the video. Ready to publish on your site or send to prospects.",
    stat: "Prospect-ready",
    statLabel: "narrative format",
    preview: [
      { label: "Challenge", text: "A 7-person content agency was spending 40 hours per month manually transcribing client YouTube videos — consuming 25% of their billable capacity." },
      { label: "Result", text: "After implementing TubeScribed, the same workflow takes 4 hours. The team onboarded 3 new clients without adding headcount." },
    ],
  },
  {
    id: "linkedin",
    icon: "💼",
    badge: "B2B",
    badgeColor: "#0077B5",
    title: "LinkedIn Article",
    tagline: "Long-form authority on the platform that matters.",
    description:
      "LinkedIn's algorithm rewards long-form native articles with dramatically higher reach than external links. Written for LinkedIn's professional audience — not a blog post pasted in, but a piece engineered for the platform's specific context and reader behavior.",
    stat: "Native format",
    statLabel: "built for LinkedIn reach",
    preview: [
      { label: "Headline", text: "Why the Most Productive Marketing Teams Have Stopped Writing Content From Scratch" },
      { label: "Opening", text: "I've been in content marketing for eleven years. The single biggest shift I've seen in the last eighteen months isn't AI writing tools. It's what the smartest teams are doing with video content they already have..." },
    ],
  },
  {
    id: "shownotes",
    icon: "🎙️",
    badge: "Podcast",
    badgeColor: "#9333EA",
    title: "Podcast Show Notes",
    tagline: "Every episode becomes searchable content.",
    description:
      "Episode summary that makes listeners press play. Key topics with timestamps for navigation. Resources and links mentioned. Key quotes pulled from the episode. Optimized for podcast platform SEO AND Google search.",
    stat: "SEO + listener",
    statLabel: "optimized for both",
    preview: [
      { label: "Summary", text: "In this episode, we break down the exact content repurposing system that takes one video and extracts 30 days of content..." },
      { label: "Timestamps", text: "[00:00] Why creators waste 90% of their content value\n[08:24] The 3-step extraction framework\n[22:11] How agencies use this at scale" },
    ],
  },
  {
    id: "summary",
    icon: "⚡",
    badge: "Quick Read",
    badgeColor: "#0F6E56",
    title: "Executive Summary",
    tagline: "The whole video in 90 seconds.",
    description:
      "The three-sentence TL;DR plus five bullet key takeaways — the format busy decision-makers actually read. Perfect for sharing video insights with a team, sending to a client before a meeting, or keeping a permanent reference file for every video you process.",
    stat: "90 seconds",
    statLabel: "to read the full insight",
    preview: [
      { label: "TL;DR", text: "Content repurposing systems turn one video into a full month of cross-channel content by extracting spoken knowledge into written formats that rank on Google and nurture email subscribers." },
      { label: "Key Takeaways", text: "→ 95% of video content never gets repurposed\n→ Manual repurposing takes 3–6 hours per video\n→ Automated pipelines reduce this to under 5 minutes\n→ Expert content from video outranks generic AI articles on Google" },
    ],
  },
];

interface PreviewItem {
  timestamp?: string;
  label?: string;
  text: string;
}

export function OutputShowcase() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, stopAuto = true) => {
    if (stopAuto) setPaused(true);
    setVisible(false);
    setTimeout(() => {
      setActive(index);
      setVisible(true);
    }, 120);
  }, []);

  const advance = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % OUTPUTS.length);
      setVisible(true);
    }, 120);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, 3200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, advance]);

  const output = OUTPUTS[active];
  const hex = (color: string, opacity: string) => `${color}${opacity}`;

  return (
    <div
      className="rounded-2xl p-4 sm:p-6"
      style={{ backgroundColor: "#1E2A3A" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Pill nav */}
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
        {OUTPUTS.map((o, i) => (
          <button
            key={o.id}
            onClick={() => goTo(i)}
            className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap"
            style={
              i === active
                ? { backgroundColor: o.badgeColor, border: `1.5px solid ${o.badgeColor}`, color: "#fff", fontWeight: 600 }
                : { backgroundColor: "#243447", border: "1.5px solid #2D3F55", color: "#94A3B8" }
            }
          >
            {o.title}
          </button>
        ))}
      </div>

      {/* Active card */}
      <div
        className="rounded-xl p-5 sm:p-6 mt-2 transition-all"
        style={{
          backgroundColor: "#243447",
          border: "1px solid #2D3F55",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
        }}
      >
        {/* Card header row */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
          <div className="flex items-center gap-3 flex-1">
            {/* Icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
              style={{
                backgroundColor: hex(output.badgeColor, "22"),
                border: `1.5px solid ${hex(output.badgeColor, "44")}`,
              }}
            >
              {output.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="font-syne font-bold text-navy-100 text-base">{output.title}</h3>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: hex(output.badgeColor, "22"),
                    border: `1px solid ${hex(output.badgeColor, "44")}`,
                    color: output.badgeColor,
                  }}
                >
                  {output.badge}
                </span>
              </div>
              <p className="font-dm-sans text-xs font-medium" style={{ color: output.badgeColor }}>
                {output.tagline}
              </p>
            </div>
          </div>

          {/* Stat */}
          <div className="text-left sm:text-right shrink-0">
            <p className="font-syne font-bold text-navy-100 text-base leading-tight">{output.stat}</p>
            <p className="font-dm-sans text-navy-500 text-xs">{output.statLabel}</p>
          </div>
        </div>

        {/* Description */}
        <p className="font-dm-sans text-navy-400 text-sm leading-relaxed mb-5">{output.description}</p>

        {/* Preview block */}
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#1E2A3A" }}>
          {/* macOS-style header */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-navy-700/50">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-70" />
            <span className="font-mono text-navy-500 text-xs ml-2">Preview Output</span>
          </div>
          <div className="p-4 space-y-3">
            {(output.preview as PreviewItem[]).map((item, i) => (
              <div key={i}>
                {item.timestamp !== undefined ? (
                  <div className="flex gap-3">
                    <span className="font-mono text-navy-600 text-xs shrink-0 mt-0.5">[{item.timestamp}]</span>
                    <p className="font-dm-sans text-navy-300 text-xs leading-relaxed">{item.text}</p>
                  </div>
                ) : (
                  <div>
                    <p className="font-dm-sans text-navy-600 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="font-dm-sans text-navy-300 text-xs leading-relaxed whitespace-pre-line">{item.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end mt-4">
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex items-center gap-1 text-brand-red text-xs font-medium hover:opacity-80 transition-opacity"
          >
            Try this output free <ArrowRight size={12} />
          </a>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {OUTPUTS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? 20 : 6,
              height: 6,
              backgroundColor: i === active ? "#FF3B30" : "#2D3F55",
            }}
            aria-label={`Go to output ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
