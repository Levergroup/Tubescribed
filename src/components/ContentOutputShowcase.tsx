"use client";

import { useState, useEffect, useRef } from "react";
import {
  FileText,
  ClipboardList,
  Mail,
  Share2,
  MessageSquare,
  HelpCircle,
  Newspaper,
  FileCheck,
  Play,
} from "lucide-react";

interface OutputCard {
  id: string;
  label: string;
  Icon: React.ElementType;
  description: string;
  badge: { bg: string; color: string };
  preview: string;
}

const OUTPUT_CARDS: OutputCard[] = [
  {
    id: "blog",
    label: "Blog Post",
    Icon: FileText,
    description: "SEO-ready post with H2s, intro, and CTA",
    badge: { bg: "#E6F1FB", color: "#185FA5" },
    preview: `**How to Build a $50K/Year Content Business from YouTube**\n\nMost creators treat YouTube like a content black hole — hours in, nothing out. The creators making real money treat every video as a content asset.\n\nHere's the framework that changes everything:\n\n**Step 1 — Niche down before you scale up**\nBefore you film your tenth video, define the exact person you're talking to. Not "entrepreneurs" — "first-time service business owners who want to replace their salary within 12 months."\n\n**Step 2 — Build your content ladder**\nEvery video should connect to a product, service, or email list. If it doesn't, you're creating content without a business.\n\n**Step 3 — Repurpose everything**\nOne video becomes a blog post, 3 emails, 10 social posts, and a newsletter. If you're only getting YouTube views from a YouTube video, you're leaving 80% of the value on the table.`,
  },
  {
    id: "sop",
    label: "SOP",
    Icon: ClipboardList,
    description: "Step-by-step process doc, ready to delegate",
    badge: { bg: "#EAF3DE", color: "#3B6D11" },
    preview: `**Standard Operating Procedure: YouTube Content Business Setup**\n\nPurpose: Document the repeatable process for building and scaling a YouTube-based content business to $50K/year.\n\nPrerequisites: YouTube account, email marketing platform, basic video recording setup\n\n**Step 1 — Define your content niche**\n→ Identify your target audience (be specific)\n→ Validate demand with keyword research\n→ Map 3 content pillars to business goals\n\n**Step 2 — Set up your content funnel**\n→ Create lead magnet tied to your niche\n→ Set up email sequence (minimum 5 emails)\n→ Connect YouTube channel to email capture\n\n**Step 3 — Establish publishing cadence**\n→ Film 2x/week minimum for first 90 days\n→ Batch film 4 videos per session\n→ Schedule uploads for Tuesday and Thursday 9am\n\n**Completion checklist:**\n☐ Niche defined and validated\n☐ Funnel live and tested\n☐ First 4 videos filmed and scheduled`,
  },
  {
    id: "email",
    label: "Email Sequence",
    Icon: Mail,
    description: "3-part nurture sequence from the video",
    badge: { bg: "#FAEEDA", color: "#854F0B" },
    preview: `**Email 1 — The Hook (Day 0)**\nSubject: "The $50K mistake most creators make in year one"\n\nHey [First Name],\n\nI spent 18 months creating content with zero monetization strategy. Good videos. Zero income.\n\nThe turning point wasn't a viral video. It was realizing I was building an audience with no ladder for them to climb.\n\nTomorrow I'll show you the exact framework I used to fix it — and how it generated my first $50K year.\n\n—\n\n**Email 2 — The Framework (Day 2)**\nSubject: "The 3-step content ladder (works for any niche)"\n\nThe content ladder has three rungs:\n1. Free content (YouTube) → builds trust\n2. Lead magnet → captures email\n3. Paid offer → generates revenue\n\nMost creators build rung 1 obsessively and ignore rungs 2 and 3. Fix that first.\n\n**Email 3 — The CTA (Day 4)**\nSubject: "Ready to build yours?"\n\nIf you want to turn your YouTube channel into a real business, I built a course that walks through every step...`,
  },
  {
    id: "social",
    label: "Social Captions",
    Icon: Share2,
    description: "Platform-ready captions for every channel",
    badge: { bg: "#EEEDFE", color: "#534AB7" },
    preview: `**LinkedIn:**\nMost YouTube creators make $0 from 10,000 subscribers.\n\nNot because their content is bad.\nBecause they have no content ladder.\n\nHere's the 3-step system that changed everything for me:\n\n1. Every video connects to a lead magnet\n2. Every lead magnet connects to an email list\n3. Every email list connects to an offer\n\nThe math is simple. The execution is what separates $0 creators from $50K/year creators.\n\nWhat's step 1 of your content ladder? Drop it below.\n\n---\n\n**Instagram:**\nYouTube views don't pay bills. Your content funnel does. 💡\n\nHere's what $50K/year from YouTube actually looks like:\n↳ 3 videos/week → 1,000 subscribers/month\n↳ 1,000 subs → 80 email signups\n↳ 80 emails → 3-5 buyers\n↳ 3-5 buyers × $97 offer = $300-500/month minimum\n\nScale that up. That's the model. 🎯`,
  },
  {
    id: "xthread",
    label: "X Thread",
    Icon: MessageSquare,
    description: "Viral-ready thread with hook and CTA",
    badge: { bg: "#F1EFE8", color: "#5F5E5A" },
    preview: `**Thread: How I built a $50K/year content business from YouTube (the exact framework)**\n\n1/ Most creators spend 10 hours making a video and 10 minutes thinking about how it makes money.\n\nI used to be one of them. Then I discovered the content ladder.\n\nHere's everything:\n\n2/ The problem isn't your content.\n\nIt's that you have no mechanism to convert viewers into revenue.\n\nYouTube pays you pennies. Your business should pay you thousands.\n\n3/ The content ladder has 3 rungs:\n\n→ Rung 1: Free content (builds trust)\n→ Rung 2: Lead magnet (captures attention)\n→ Rung 3: Paid offer (generates revenue)\n\nMost people obsess over rung 1 and ignore the other two.\n\n4/ The math:\n\n1,000 views → 50 clicks to lead magnet → 30 email signups → 2 buyers\n\n2 buyers × $497 offer = $994 from 1,000 views\n\nYouTube AdSense from 1,000 views = $3-5\n\nThe difference is the ladder.\n\n5/ RT the first tweet if this helped you see YouTube differently.`,
  },
  {
    id: "faq",
    label: "FAQ Doc",
    Icon: HelpCircle,
    description: "Schema-ready Q&A from the video content",
    badge: { bg: "#E1F5EE", color: "#0F6E56" },
    preview: `**FAQ: Building a $50K/Year YouTube Content Business**\n\n**Q: How long does it take to build a $50K/year YouTube business?**\nA: Most creators with a clear niche and monetization strategy reach $50K annually within 18–24 months. The key variable is how quickly you build and test your content ladder.\n\n**Q: Do I need a large subscriber count to make money from YouTube?**\nA: No. A channel with 5,000 highly targeted subscribers and a clear offer can outperform a channel with 100,000 general subscribers. Monetization comes from your offer, not ad revenue.\n\n**Q: What's the most important first step?**\nA: Define your niche and connect it to a specific paid offer before you film your first video. Retrofitting a business model onto an existing audience is much harder.\n\n**Q: What type of content converts best?**\nA: Tutorial and how-to content consistently outperforms entertainment content for business results. Viewers who watch tutorials are actively solving problems — they're primed to buy solutions.\n\n**Q: How much time per week does this require?**\nA: Plan for 8–12 hours/week: 2 videos filmed, edited, and uploaded plus email and social distribution.`,
  },
  {
    id: "newsletter",
    label: "Newsletter",
    Icon: Newspaper,
    description: "Ready-to-send edition from the video",
    badge: { bg: "#FBEAF0", color: "#993556" },
    preview: `**This Week: The Content Ladder Framework**\n\n*Edition #47 · 3 min read*\n\n---\n\nHey reader,\n\nThis week I broke down the exact framework I've used to build a $50K/year content business from YouTube — and I want to give you the condensed version right here.\n\n**The insight most creators miss:**\n\nYouTube is a distribution platform, not a business model. The creators who win treat it as the top of a funnel — not the destination.\n\n**The 3-rung content ladder:**\n\n**Rung 1 — Visibility** (YouTube)\nCreate content that solves a specific problem for a specific person. Niche beats broad every single time.\n\n**Rung 2 — Capture** (Lead Magnet)\nEvery video should offer something free in exchange for an email. A checklist, template, or mini-course works well.\n\n**Rung 3 — Convert** (Paid Offer)\nYour email list is where revenue happens. One well-crafted offer to 500 subscribers beats 50,000 YouTube views with no email list.\n\n**This week's action:**\nIdentify which rung of your ladder needs the most work. Most creators are over-invested in Rung 1.\n\nSee you next week,\n[Your Name]`,
  },
  {
    id: "transcript",
    label: "Clean Transcript",
    Icon: FileCheck,
    description: "Punctuated, filler-free, searchable text",
    badge: { bg: "#FCEBEB", color: "#A32D2D" },
    preview: `**Transcript — "How I Built a $50K/Year Content Business from YouTube"**\n\n*[00:00]* Welcome back. Today I want to walk you through the exact framework I used to turn my YouTube channel into a business that generates over $50,000 a year — and I'm going to be specific about the numbers, the mistakes, and the process.\n\n*[01:24]* The first thing I got wrong — and most creators get wrong — is thinking that subscriber count equals revenue. It doesn't. I had 12,000 subscribers and was making about $180 a month from ad revenue. That's not a business. That's a hobby with a monetization badge.\n\n*[02:45]* The turning point came when I stopped asking "how do I get more views" and started asking "how does a viewer become a customer." That single question reframed everything.\n\n*[04:12]* What I call the content ladder has three rungs. Rung one is the free content — the YouTube videos. Rung two is the lead capture — something free you offer in exchange for an email address. Rung three is the paid offer — the product, course, or service that actually generates revenue.\n\n*[06:30]* Most creators build rung one obsessively and ignore two and three. I did it for 18 months. Don't make the same mistake.`,
  },
];

interface Props {
  videoTitle?: string;
}

export function ContentOutputShowcase({ videoTitle = "How I Built a $50K/Year Content Business from YouTube" }: Props) {
  const [activeId, setActiveId] = useState<string>(OUTPUT_CARDS[0].id);
  const [userSelected, setUserSelected] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeCard = OUTPUT_CARDS.find((c) => c.id === activeId) ?? OUTPUT_CARDS[0];

  useEffect(() => {
    if (userSelected) return;
    intervalRef.current = setInterval(() => {
      setActiveId((prev) => {
        const idx = OUTPUT_CARDS.findIndex((c) => c.id === prev);
        const next = OUTPUT_CARDS[(idx + 1) % OUTPUT_CARDS.length];
        setPreviewKey((k) => k + 1);
        return next.id;
      });
    }, 2800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [userSelected]);

  function handleCardClick(id: string) {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setUserSelected(true);
    setActiveId(id);
    setPreviewKey((k) => k + 1);
  }

  return (
    <section className="py-20 lg:py-28" style={{ background: "#1E2A3A" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#FF3B30] text-sm font-semibold tracking-widest uppercase mb-3">
            Live Output Preview
          </p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-white mb-3">
            One video. Eight outputs. Seconds.
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Click any output type to preview what TubeScribed generates.
          </p>
        </div>

        {/* Source video card */}
        <div
          className="rounded-2xl border p-4 mb-6 flex items-center justify-between gap-4 flex-wrap"
          style={{ background: "#243447", borderColor: "#2D3F55" }}
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#FF3B30" }}>
              <Play size={20} className="text-white fill-white" />
            </div>
            <div className="min-w-0">
              <p className="text-white font-semibold text-sm leading-snug truncate">{videoTitle}</p>
              <p className="text-[#94A3B8] text-xs mt-0.5">47-minute video · paste URL · results in seconds</p>
            </div>
          </div>
          <span className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(255,59,48,0.15)", color: "#FF3B30" }}>
            <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse" />
            Processing
          </span>
        </div>

        {/* Output grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {OUTPUT_CARDS.map((card) => {
            const isActive = card.id === activeId;
            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="text-left rounded-xl p-4 border transition-all duration-300 focus:outline-none"
                style={{
                  background: "#243447",
                  borderColor: isActive ? "#FF3B30" : "#2D3F55",
                  borderWidth: isActive ? "1.5px" : "1px",
                  transform: isActive ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: isActive ? "0 0 0 1px rgba(255,59,48,0.2), 0 4px 12px rgba(255,59,48,0.1)" : "none",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <card.Icon size={15} color={isActive ? "#FF3B30" : "#94A3B8"} />
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: card.badge.bg, color: card.badge.color }}
                  >
                    {card.label}
                  </span>
                </div>
                <p className="text-[#94A3B8] text-xs leading-snug">{card.description}</p>
              </button>
            );
          })}
        </div>

        {/* Preview panel */}
        <div
          key={previewKey}
          className="rounded-2xl border p-6 animate-fade-in"
          style={{ background: "#243447", borderColor: "#2D3F55" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <activeCard.Icon size={14} color="#94A3B8" />
            <span className="text-[#94A3B8] text-xs uppercase tracking-widest font-semibold">
              {activeCard.label} preview
            </span>
          </div>
          <div className="text-[#94A3B8] text-sm leading-relaxed whitespace-pre-line font-mono max-h-64 overflow-y-auto">
            {activeCard.preview}
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-sm text-center sm:text-left">
            All outputs in your brand voice. Every time.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: "linear-gradient(to right, #FF3B30, #FF8C42)" }}
          >
            Try Free →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInUp 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
}
