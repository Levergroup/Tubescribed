import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap — TubeScribed",
  description: "Full list of all pages on the TubeScribed website.",
  path: "/sitemap-page",
  noIndex: true,
});

const sections = [
  {
    heading: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Changelog", href: "/changelog" },
      { label: "ROI Calculator", href: "/roi-calculator" },
    ],
  },
  {
    heading: "Use Cases",
    links: [
      { label: "For Content Creators", href: "/for/content-creators" },
      { label: "For Agencies", href: "/for/agencies" },
      { label: "For Business Coaches", href: "/for/coaches" },
      { label: "For AI Builders", href: "/for/ai-builders" },
      { label: "For Podcasters", href: "/for/podcasters" },
      { label: "For Course Creators", href: "/for/course-creators" },
    ],
  },
  {
    heading: "Features",
    links: [
      { label: "YouTube Transcription", href: "/features/youtube-transcription" },
      { label: "AI Transcript Cleaner", href: "/features/ai-transcript-cleaner" },
      { label: "Brand Workspace", href: "/features/brand-workspace" },
      { label: "SOP Generator", href: "/features/sop-generator" },
      { label: "Content Repurposing Studio", href: "/features/content-repurposing" },
    ],
  },
  {
    heading: "Comparisons",
    links: [
      { label: "TubeScribed vs Otter.ai", href: "/vs/otter-ai" },
      { label: "TubeScribed vs Descript", href: "/vs/descript" },
      { label: "TubeScribed vs Tactiq", href: "/vs/tactiq" },
      { label: "TubeScribed vs NoteGPT", href: "/vs/notegpt" },
      { label: "TubeScribed vs ChatGPT", href: "/vs/chatgpt" },
      { label: "TubeScribed vs YouTube Captions", href: "/vs/youtube-captions" },
    ],
  },
  {
    heading: "Alternatives",
    links: [
      { label: "Otter.ai Alternatives", href: "/alternatives/otter-ai" },
      { label: "Tactiq Alternatives", href: "/alternatives/tactiq" },
      { label: "Descript Alternatives", href: "/alternatives/descript" },
    ],
  },
  {
    heading: "Free Tools",
    links: [
      { label: "Free YouTube Transcript Generator", href: "/free-tools/youtube-transcript-generator" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "GDPR Compliance", href: "/gdpr" },
      { label: "Acceptable Use Policy", href: "/acceptable-use" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export default function SitemapPageRoute() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="font-syne font-bold text-4xl text-navy-100 mb-4">
            <GradientText>Sitemap</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-lg">Every page on the TubeScribed website.</p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-syne font-bold text-navy-100 text-sm tracking-wide uppercase mb-4">{section.heading}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="font-dm-sans text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
