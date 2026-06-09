import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { FileText, BookOpen, Mail, MessageSquare, HelpCircle, GraduationCap, Mic } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Free AI Tools for YouTube Content — TubeScribed",
  description: "7 free tools to turn any YouTube video into transcripts, blog posts, SOPs, email sequences, social captions, FAQs, and training guides.",
  path: "/tools",
});

const TOOLS = [
  {
    icon: Mic,
    title: "YouTube Transcript Generator",
    description: "Clean, punctuated, timestamped transcript from any YouTube URL. Powered by OpenAI Whisper.",
    href: "/tools/youtube-transcript-generator",
    badge: "Most popular",
    badgeColor: "bg-[#FF3B30] text-white",
  },
  {
    icon: FileText,
    title: "YouTube to Blog Post Generator",
    description: "Complete SEO blog post with H2 structure, intro, FAQ, and brand voice. Ready to publish.",
    href: "/tools/youtube-to-blog-post",
    badge: null,
    badgeColor: "",
  },
  {
    icon: BookOpen,
    title: "YouTube to SOP Generator",
    description: "Formatted SOP with purpose statement, numbered steps, warnings, and completion checklist.",
    href: "/tools/youtube-to-sop",
    badge: null,
    badgeColor: "",
  },
  {
    icon: Mail,
    title: "YouTube to Email Sequence",
    description: "5-email nurture sequence with subject lines, preview text, and direct response copy.",
    href: "/tools/youtube-to-email-sequence",
    badge: null,
    badgeColor: "",
  },
  {
    icon: MessageSquare,
    title: "YouTube to Social Captions",
    description: "Platform-specific captions for LinkedIn, X, and Instagram — rewritten for each, not resized.",
    href: "/tools/youtube-to-social-captions",
    badge: null,
    badgeColor: "",
  },
  {
    icon: HelpCircle,
    title: "YouTube to FAQ Generator",
    description: "FAQ document structured for Google featured snippets and People Also Ask. Schema markup included.",
    href: "/tools/youtube-to-faq",
    badge: null,
    badgeColor: "",
  },
  {
    icon: GraduationCap,
    title: "Video to Training Guide",
    description: "Structured training guide with learning objectives, organized sections, and knowledge check.",
    href: "/tools/video-to-training-guide",
    badge: null,
    badgeColor: "",
  },
];

export default function ToolsIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 pt-16 pb-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-[#FF3B30] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase mb-5 font-dm-sans">
            Free Tools
          </span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            Free AI Tools for YouTube Content
          </h1>
          <p className="font-dm-sans text-gray-600 text-xl leading-relaxed max-w-xl mx-auto">
            Paste a YouTube URL. Get a transcript, blog post, SOP, email sequence, social captions, FAQ, or training guide — in under 2 minutes.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map(({ icon: Icon, title, description, href, badge, badgeColor }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#FF3B30] hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-[#FF3B30]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#FF3B30]" />
                  </div>
                  {badge && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColor}`}>
                      {badge}
                    </span>
                  )}
                </div>
                <h2 className="font-syne font-bold text-gray-900 text-base mb-2 group-hover:text-[#FF3B30] transition-colors">
                  {title}
                </h2>
                <p className="font-dm-sans text-gray-500 text-sm leading-relaxed flex-1">
                  {description}
                </p>
                <div className="mt-4 text-[#FF3B30] text-sm font-semibold font-dm-sans group-hover:underline">
                  Use tool →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1E2A3A] py-14 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-syne font-bold text-2xl text-white mb-3">
            All tools. One account.
          </h2>
          <p className="font-dm-sans text-gray-300 mb-6">
            Every tool here runs inside TubeScribed. One URL generates all 7 formats simultaneously.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="inline-flex items-center justify-center bg-[#FF3B30] hover:bg-[#E53528] text-white font-syne font-bold text-base px-8 py-3.5 rounded-xl transition-colors"
          >
            Start Free — No Credit Card
          </a>
        </div>
      </section>
    </main>
  );
}
