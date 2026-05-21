import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { APP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowLeft, CheckCircle2, Mail, TrendingUp } from "lucide-react";
import { TimeSavedCalculator, LibraryScoreCounter } from "@/components/ProgressReportsInteractive";

export const metadata: Metadata = buildMetadata({
  title: "Monthly Progress Reports — Watch Your Content Library Grow | TubeScribed",
  description:
    "TubeScribed sends you a monthly progress report showing hours saved, content created, and your growing content library score. The only AI content tool that shows you the asset you're building.",
  path: "/features/progress-reports",
});

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TubeScribed Monthly Progress Reports",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Monthly email reports showing hours saved, content pieces created, and content library score for YouTube creators and agencies.",
  offers: { "@type": "Offer", price: "19", priceCurrency: "USD" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What counts as a content piece in my progress report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every output TubeScribed generates — blog post, SOP, email sequence, social caption, FAQ, training guide, newsletter, LinkedIn article.",
      },
    },
    {
      "@type": "Question",
      name: "What if I barely used TubeScribed this month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We still send the report — even 2 videos saves 1.5 hours and adds content to your library.",
      },
    },
    {
      "@type": "Question",
      name: "Why does the content library score matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Month 1 you have 20 pieces. Month 6 you have 200. That's 200 pieces of content your business owns — built from videos you already made.",
      },
    },
  ],
};

const steps = [
  {
    number: "01",
    title: "Process YouTube videos normally",
    body: "Paste URLs into TubeScribed as you always would. Generate transcripts, SOPs, blog posts, email sequences — whatever your workflow needs.",
  },
  {
    number: "02",
    title: "TubeScribed tracks everything automatically",
    body: "Every transcript processed and every AI output generated is counted in the background. No extra setup. No tagging. Nothing to configure.",
  },
  {
    number: "03",
    title: "Your report lands on the 1st",
    body: "On the 1st of every month, your personal progress report arrives in your inbox — hours saved, content pieces created, and your running library score.",
  },
];

const objections = [
  {
    q: "What counts as a content piece?",
    a: "Every output TubeScribed generates — blog post, SOP, email sequence, social caption, FAQ, training guide, newsletter, LinkedIn article. If TubeScribed made it, it counts.",
  },
  {
    q: "What if I barely used it this month?",
    a: "We still send the report. Even 2 videos saves 1.5 hours and adds content to your library. The report shows your actual numbers — no inflation.",
  },
  {
    q: "Why does the library score matter?",
    a: "Month 1 you have 20 pieces. Month 6 you have 200. That's 200 pieces of content your business owns — built from videos you already made. The score makes that visible.",
  },
];

function EmailMockupHero() {
  return (
    <div className="bg-navy-800 border border-navy-700 rounded-2xl shadow-[0_16px_60px_rgba(0,0,0,0.5)] max-w-lg mx-auto overflow-hidden">
      {/* Browser chrome */}
      <div className="bg-navy-900 px-4 py-3 flex items-center gap-2 border-b border-navy-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="flex-1 bg-navy-800 rounded-full h-5 mx-4 flex items-center px-3">
          <span className="text-navy-500 text-xs">inbox · noreply@tubescribed.com</span>
        </div>
      </div>
      {/* Email body */}
      <div className="p-5">
        {/* Sender row */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-navy-700">
          <div className="w-9 h-9 rounded-full btn-gradient flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold font-syne">TS</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-syne font-semibold text-navy-100 text-sm">TubeScribed</p>
            <p className="text-navy-500 text-xs truncate">noreply@tubescribed.com</p>
          </div>
          <p className="text-navy-500 text-xs shrink-0">May 1</p>
        </div>
        {/* Subject */}
        <p className="font-syne font-bold text-navy-100 text-sm leading-snug mb-4">
          April recap: 14 hours saved, 47 new pieces — your library hits 112 📈
        </p>
        {/* Stat chips */}
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Videos", value: "19" },
            { label: "Pieces", value: "47" },
            { label: "Time saved", value: "14h 15m" },
            { label: "Library total", value: "112" },
          ].map((s) => (
            <div key={s.label} className="bg-navy-900 border border-navy-700 rounded-lg px-3 py-1.5 text-center">
              <p className="font-syne font-bold text-navy-100 text-sm">{s.value}</p>
              <p className="font-dm-sans text-navy-500 text-xs">{s.label}</p>
            </div>
          ))}
          <div className="bg-navy-900 border border-orange-400/30 rounded-lg px-3 py-1.5 text-center">
            <p className="font-syne font-bold text-orange-400 text-sm">🔥 4</p>
            <p className="font-dm-sans text-navy-500 text-xs">month streak</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SampleReportPreview() {
  return (
    <div className="bg-navy-800 border border-navy-700 rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
      {/* Header bar */}
      <div
        className="px-8 py-6"
        style={{ background: "linear-gradient(135deg, rgba(255,59,48,0.15), rgba(255,140,66,0.10))" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full btn-gradient flex items-center justify-center">
            <span className="text-white text-xs font-bold font-syne">TS</span>
          </div>
          <div>
            <p className="font-syne font-bold text-navy-100 text-sm">TubeScribed Progress Report</p>
            <p className="text-navy-400 text-xs">April 2025 · Delivered May 1</p>
          </div>
        </div>
        <p className="font-syne font-bold text-navy-100 text-base leading-snug">
          April recap: 14 hours saved, 47 new pieces — your library hits 112 📈
        </p>
      </div>
      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-navy-700 border-t border-navy-700">
        {[
          { label: "Videos processed", value: "19", icon: "▶" },
          { label: "Content pieces", value: "47", icon: "📄" },
          { label: "Time saved", value: "14h 15m", icon: "⏱" },
          { label: "Library score", value: "112", icon: "📚" },
        ].map((s) => (
          <div key={s.label} className="p-5 text-center bg-navy-900/50">
            <p className="text-lg mb-1">{s.icon}</p>
            <p className="font-syne font-bold text-2xl text-navy-100">{s.value}</p>
            <p className="font-dm-sans text-navy-400 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Streak + note */}
      <div className="px-8 py-5 border-t border-navy-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔥</span>
          <span className="font-syne font-semibold text-navy-100 text-sm">4-month streak</span>
          <span className="text-navy-400 text-sm">— keep it going</span>
        </div>
        <span className="font-dm-sans text-navy-500 text-xs">
          Next report: June 1, 2025
        </span>
      </div>
    </div>
  );
}

export default function ProgressReportsPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-navy-900">
        <div className="section-glow-tr" />
        <div className="section-glow-bl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            For content creators and agencies
          </p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight max-w-2xl">
            Every Month, See Exactly{" "}
            <GradientText>What You&apos;ve Built</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-8 max-w-2xl">
            TubeScribed tracks every video you process and every piece of content you create. On the
            1st of each month, we send you a personal report — hours saved, content created, and
            your growing library score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">
              Start Free — Get Your First Report
            </Button>
          </div>
          <div className="flex items-center gap-2 mb-12">
            <span className="text-yellow-400 text-base">⭐⭐⭐⭐⭐</span>
            <span className="font-dm-sans text-navy-400 text-sm">Trusted by 500+ creators and agencies</span>
          </div>
          <EmailMockupHero />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-mid-left" />
        <div className="section-glow-tr" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-12 leading-tight">
            Three steps. Zero extra work.
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
              >
                <span
                  className="font-syne font-bold text-4xl shrink-0 bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent"
                  style={{ opacity: 0.5 }}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-syne font-semibold text-navy-100 text-lg mb-2">{step.title}</h3>
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIME SAVED CALCULATOR */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">
            Time Saved Calculator
          </p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4 text-center leading-tight">
            How much time are you saving?
          </h2>
          <p className="font-dm-sans text-navy-400 text-base text-center mb-10 max-w-xl mx-auto">
            Adjust the slider to see what your monthly progress report would show.
          </p>
          <TimeSavedCalculator />
        </div>
      </section>

      {/* CONTENT LIBRARY SCORE EXPLAINER */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-bl" />
        <div className="section-glow-tr" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center shrink-0">
              <TrendingUp size={20} className="text-brand-red" />
            </div>
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase">Content Library Score</p>
          </div>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-6 leading-tight max-w-2xl">
            The Asset That Keeps Growing
          </h2>
          <p className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-12 max-w-2xl">
            Every content piece TubeScribed creates for you — blog posts, SOPs, email sequences,
            social captions, training guides — is tracked in your Content Library Score. It starts
            at 0 and grows every time you process a video. After 6 months, the average TubeScribed
            user has 200+ pieces of content in their library.
          </p>
          <LibraryScoreCounter />
          <p className="font-dm-sans text-navy-500 text-xs mt-6 text-center">
            Average based on 10 videos/month · ~5 outputs per transcript
          </p>
        </div>
      </section>

      {/* SAMPLE REPORT PREVIEW */}
      <section className="relative overflow-hidden py-24 bg-navy-900">
        <div className="section-glow-mid-left" />
        <div className="section-glow-br" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">
            Sample Report
          </p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-4 text-center leading-tight">
            This is what lands in your inbox
          </h2>
          <p className="font-dm-sans text-navy-400 text-base text-center mb-10 max-w-xl mx-auto">
            Every number is calculated from your real usage. No estimates. No motivational fluff.
            Just your actual output.
          </p>
          <SampleReportPreview />
          <div className="flex items-center justify-center gap-2 mt-6">
            <Mail size={14} className="text-navy-500" />
            <span className="font-dm-sans text-navy-500 text-xs">
              Delivered to your inbox on the 1st of every month
            </span>
          </div>
        </div>
      </section>

      {/* OBJECTION HANDLING */}
      <section className="relative overflow-hidden py-24 bg-navy-800">
        <div className="section-glow-tl" />
        <div className="section-glow-mid-right" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4 text-center">
            Common Questions
          </p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100 mb-10 text-center leading-tight">
            Answers before you ask
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {objections.map((obj) => (
              <div
                key={obj.q}
                className="bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-brand-red transition-colors duration-300"
              >
                <CheckCircle2 size={18} className="text-brand-red mb-4" />
                <h3 className="font-syne font-semibold text-navy-100 text-base mb-3">{obj.q}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{obj.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            Ready to Start?
          </p>
          <h2 className="font-syne font-bold text-3xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Start building your content library today.
          </h2>
          <p className="font-dm-sans text-navy-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Every video you&apos;ve already made is waiting to become blog posts, SOPs, email
            sequences, and more. Your first progress report arrives after your first month.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-10 py-4 text-lg">
            Start Free — No Credit Card
          </Button>
          <p className="font-dm-sans text-navy-400 text-sm mt-5">
            ⭐⭐⭐⭐⭐ Trusted by 500+ creators and agencies
          </p>
        </div>
      </section>
    </div>
  );
}
