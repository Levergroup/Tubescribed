import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Content Repurposing Studio — 15 Formats From Every YouTube Video | TubeScribed",
  description: "Turn one YouTube video into 15 content formats: blog posts, email sequences, social captions, LinkedIn posts, YouTube descriptions, newsletters, and more.",
  path: "/features/content-repurposing",
});

const outputTypes = [
  { name: "Blog Post", description: "Full-length, SEO-structured article from your video content" },
  { name: "Email Newsletter", description: "Ready-to-send email with subject line and call to action" },
  { name: "Email Sequence", description: "Multi-part email series from a single piece of video content" },
  { name: "LinkedIn Post", description: "Formatted LinkedIn post with hooks and engagement structure" },
  { name: "Twitter/X Thread", description: "Numbered thread format with hooks and closing CTA" },
  { name: "Instagram Caption", description: "Short-form caption with hashtag suggestions" },
  { name: "YouTube Description", description: "SEO-optimized video description with timestamps" },
  { name: "YouTube Chapter Markers", description: "Timestamped chapter titles for video navigation" },
  { name: "Standard Operating Procedure", description: "Step-by-step process document in your brand voice" },
  { name: "Training Guide", description: "Formatted learning document for internal or client use" },
  { name: "Key Takeaways Summary", description: "Bullet-point summary of the video's main points" },
  { name: "Quote Cards", description: "Pullquotes formatted for visual content creation" },
  { name: "Newsletter Snippet", description: "Short excerpt suitable for inclusion in a broader newsletter" },
  { name: "Content Brief", description: "Structured brief for creating related content" },
  { name: "FAQ Document", description: "Questions and answers derived from the video content" },
];

export default function ContentRepurposingFeaturePage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/features" className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-100 text-sm mb-10 transition-colors">
            <ArrowLeft size={14} /> All Features
          </Link>
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Feature</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Content Repurposing Studio — <GradientText>15 Formats, One URL</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed mb-10 max-w-2xl">
            One YouTube URL. One transcript. Fifteen content formats — each one automatically written in your brand voice. No copy-pasting, no prompting, no extra work.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10 text-center">All 15 output types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {outputTypes.map((output, i) => (
              <div key={output.name} className="bg-navy-900 border border-navy-700 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-brand-red/20 border border-brand-red/30 flex items-center justify-center text-brand-red text-xs font-bold">{i + 1}</span>
                  <p className="font-syne font-semibold text-navy-100 text-sm">{output.name}</p>
                </div>
                <p className="font-dm-sans text-navy-400 text-xs leading-relaxed">{output.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Generate All 15 Formats Free</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
