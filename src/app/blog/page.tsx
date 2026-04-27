import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed Blog — YouTube Transcription Tips, Content Repurposing Guides",
  description: "Guides, strategies, and tips for turning YouTube content into business assets. Learn how to repurpose video content, document SOPs, and scale your content output.",
  path: "/blog",
});

const posts = [
  {
    slug: "how-to-repurpose-youtube-videos",
    title: "How to Repurpose YouTube Videos Into 15 Content Formats",
    excerpt: "One YouTube video contains enough content for a blog post, email newsletter, LinkedIn post, Twitter thread, and more. Here's the exact process.",
    date: "2025-03-15",
    readTime: "7 min read",
    category: "Content Strategy",
  },
  {
    slug: "youtube-transcript-vs-auto-captions",
    title: "YouTube Auto-Captions vs. Accurate Transcription: The Real Difference",
    excerpt: "Auto-captions are free and instant — but they're also unpunctuated, error-filled, and unusable for any business purpose. Here's what accurate transcription actually looks like.",
    date: "2025-03-08",
    readTime: "5 min read",
    category: "Transcription",
  },
  {
    slug: "sop-from-video-guide",
    title: "How to Turn Any Video Into a Standard Operating Procedure",
    excerpt: "If your methodology lives in your head (or in a video nobody watches twice), this guide shows you how to turn recorded content into structured, shareable SOPs.",
    date: "2025-03-01",
    readTime: "8 min read",
    category: "SOPs & Systems",
  },
];

const categories = ["All", "Content Strategy", "Transcription", "SOPs & Systems", "Agency Tips"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Blog</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Turn Your YouTube Content Into <GradientText>Real Business Assets</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Guides, strategies, and tips for creators, agencies, and coaches who want to get more from the content they already have.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} className={`text-sm font-medium px-4 py-2 rounded-xl transition-colors ${cat === "All" ? "bg-brand-red text-white" : "bg-navy-800 text-navy-400 hover:text-navy-100 border border-navy-700"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-navy-800 border border-navy-700 hover:border-brand-red/50 rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-full">{post.category}</span>
                  <span className="text-navy-500 text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-syne font-bold text-navy-100 text-lg mb-3 leading-tight group-hover:text-brand-red transition-colors">
                  {post.title}
                </h2>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-1.5 text-brand-red text-sm font-medium">
                  Read more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8 text-center">
            <h3 className="font-syne font-bold text-navy-100 text-xl mb-3">Get new guides in your inbox</h3>
            <p className="font-dm-sans text-navy-400 text-sm mb-5">No fluff. Just actionable content repurposing strategies, weekly.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-navy-900 border border-navy-600 rounded-xl px-4 py-3 text-navy-100 placeholder-navy-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="btn-gradient text-white font-semibold px-5 py-3 rounded-xl whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
