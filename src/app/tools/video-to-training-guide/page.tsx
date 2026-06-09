import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import ToolEmbed from '@/components/ToolEmbed'

export const metadata: Metadata = buildMetadata({
  title: "Video to Training Guide Generator — Turn Any Tutorial Into Course Material",
  description:
    "Convert any YouTube tutorial or training video into a structured training guide with learning objectives, sections, and knowledge check.",
  path: "/tools/video-to-training-guide",
});

export default function VideoToTrainingGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What's the difference between a training guide and an SOP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An SOP documents a process for reference — steps, warnings, checklists. A training guide is designed for learning — it has a stated objective, concept-organized sections, and a knowledge check. Use SOPs for delegating processes. Use training guides for onboarding, courses, and knowledge transfer.",
        },
      },
      {
        "@type": "Question",
        name: "What format does the training guide output use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TubeScribed generates training guides in structured Markdown compatible with Notion, Confluence, Google Docs, Teachable, Thinkific, and most LMS platforms. The output includes a learning objective, organized sections, instructional notes, and multiple-choice knowledge check questions with correct answers marked.",
        },
      },
      {
        "@type": "Question",
        name: "How many knowledge check questions are generated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3-5 multiple-choice questions by default, each with one correct answer marked. The questions test the core concepts covered in the video, not trivia. You can add, edit, or remove questions before publishing your training module.",
        },
      },
      {
        "@type": "Question",
        name: "What video length works best?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tutorial videos between 10 and 60 minutes produce the best training guides. Shorter videos may not have enough content for a full module. Videos over 60 minutes generate comprehensive guides but may work better when split into separate modules before uploading.",
        },
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Video to Training Guide Generator",
    applicationCategory: "ProductivityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Convert any YouTube tutorial or training video into a structured training guide with learning objectives, sections, and knowledge check.",
    url: "https://app.tubescribed.com/signup",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tubescribed.com" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.tubescribed.com/tools" },
      { "@type": "ListItem", position: 3, name: "Video to Training Guide Generator", item: "https://www.tubescribed.com/tools/video-to-training-guide" },
    ],
  }

  const relatedTools = [
    {
      title: "YouTube to SOP Generator",
      desc: "Tutorial videos into step-by-step process docs",
      href: "/tools/youtube-to-sop",
    },
    {
      title: "YouTube to FAQ Generator",
      desc: "Featured snippet-ready FAQ from any video",
      href: "/tools/youtube-to-faq",
    },
  ];

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* TLDR */}
      <div className="bg-gray-100 border-b border-gray-200 py-2 px-4 text-center text-sm text-gray-600">
        <strong>TL;DR:</strong> Paste a tutorial video URL → get a structured training guide with learning objectives and a knowledge check in under 3 minutes. Free, no credit card.
      </div>

      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 pt-20 pb-14 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block bg-[#FF3B30] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase mb-5 font-dm-sans">
            TubeScribed Tools
          </span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
            Video to Training Guide Generator
          </h1>
          <p className="font-dm-sans text-gray-600 text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Paste any tutorial video URL. Get a structured training guide — learning objective,
            sections, knowledge check — built on instructional design principles.
          </p>
          <ToolEmbed
            outputType="training_guide"
            placeholder="Paste tutorial video URL..."
            buttonText="Generate Training Guide →"
            successBadges={[
              "✓ Learning Objective Set",
              "✓ Sections Created",
              "✓ Knowledge Check Added",
            ]}
          />
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white py-14 px-4">
        <div className="mx-auto max-w-3xl">
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            Watching a tutorial once doesn&apos;t create retention. A structured training guide does.
            TubeScribed converts any tutorial video into a proper learning document — with a stated
            objective, organized sections, and a knowledge check to confirm understanding.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-4">
            The output follows instructional design principles: learning objective first, content
            organized by concept rather than chronologically, and a multiple-choice knowledge check
            at the end. The format works in any LMS, Notion, Confluence, or Google Docs.
          </p>
          <p className="font-dm-sans text-gray-700 text-lg leading-relaxed mb-8">
            One 30-minute onboarding video becomes a complete training module in under 3 minutes —
            instead of a full day of documentation work.
          </p>
          <ul className="space-y-4">
            {[
              "Learning objective extracted and stated upfront",
              "Content organized by concept, not chronologically like the video",
              "Multiple-choice knowledge check generated from key concepts",
              "Compatible with Notion, Confluence, Teachable, and major LMS platforms",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#FF3B30]" />
                <span className="font-dm-sans text-gray-700 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample output */}
      <section className="bg-gray-50 border-y border-gray-200 py-14 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne font-bold text-xl text-gray-900 mb-5">What Does a Video to Training Guide Output Look Like?</h2>
          <div className="bg-[#0F1923] border border-[#2D3F55] rounded-xl p-6 text-sm font-dm-sans">
            <p className="text-[#94A3B8] text-xs mb-4 uppercase tracking-wide">
              Training Guide &middot; &ldquo;Product Onboarding — Admin Dashboard&rdquo; &middot;
              Module 1 of 3
            </p>

            <p className="text-[#FF3B30] text-xs font-semibold uppercase tracking-wide mb-1">
              Learning Objective
            </p>
            <p className="text-[#94A3B8] text-xs leading-relaxed mb-4">
              By the end of this guide, you will be able to configure a new workspace, add team
              members, and publish your first project using the admin dashboard.
            </p>

            <p className="text-white text-xs font-semibold mb-2">Section 1: Workspace Setup</p>
            <p className="text-[#94A3B8] text-xs leading-relaxed mb-1">
              1. Navigate to Settings &gt; Workspace in the left sidebar&hellip;
            </p>
            <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">
              2. Enter your organization name and upload a logo&hellip;
            </p>

            <div className="border-t border-[#2D3F55] pt-4 mt-1">
              <p className="text-[#FF3B30] text-xs font-semibold uppercase tracking-wide mb-2">
                Knowledge Check
              </p>
              <p className="text-[#94A3B8] text-xs">
                Where do you navigate to create a new workspace?{" "}
                <span className="text-[#94A3B8]">
                  a) Dashboard&nbsp;&nbsp;b) Settings &gt; Workspace ✓&nbsp;&nbsp;c)
                  Projects&nbsp;&nbsp;d) Billing
                </span>
              </p>
            </div>
          </div>
          <p className="mt-3 font-dm-sans text-gray-500 text-xs text-center">
            Full training guide including learning objective, 4 sections, and 5 knowledge check
            questions — from a 31-minute onboarding walkthrough.
          </p>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-white py-12 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne font-semibold text-lg text-gray-900 mb-5">More Free Video Content Tools</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {relatedTools.map((tool) => (
              <div
                key={tool.href}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#FF3B30] transition-colors flex-1"
              >
                <p className="font-syne font-semibold text-gray-900 text-sm mb-1">{tool.title}</p>
                <p className="text-gray-500 text-xs mb-3">{tool.desc}</p>
                <a href={tool.href} className="text-[#FF3B30] text-xs font-semibold hover:underline">
                  Try it free →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-[#1E2A3A] py-14 px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-syne font-bold text-2xl text-white mb-3">
            Turn your training videos into reusable learning modules
          </h2>
          <p className="font-dm-sans text-gray-300 text-base mb-7">
            Your team shouldn&apos;t need to re-watch a video to learn a process.
          </p>
          <a
            href="https://app.tubescribed.com/signup"
            className="bg-[#FF3B30] hover:bg-[#E53528] text-white font-syne font-bold text-base px-8 py-3.5 rounded-xl inline-block transition-colors"
          >
            Generate My Training Guide Free
          </a>
          <p className="mt-3 font-dm-sans text-gray-400 text-sm">
            No credit card. Your first training guide is free.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne font-bold text-2xl text-gray-900 mb-8">Video to Training Guide Generator — Frequently Asked Questions</h2>
          <dl>
            {[
              {
                q: "What's the difference between a training guide and an SOP?",
                a: "An SOP documents a process for reference — steps, warnings, checklists. A training guide is designed for learning — it has a stated objective, concept-organized sections, and a knowledge check. Use SOPs for delegating processes. Use training guides for onboarding, courses, and knowledge transfer.",
              },
              {
                q: "What format does the training guide output use?",
                a: "TubeScribed generates training guides in structured Markdown compatible with Notion, Confluence, Google Docs, Teachable, Thinkific, and most LMS platforms. The output includes a learning objective, organized sections, instructional notes, and multiple-choice knowledge check questions with correct answers marked.",
              },
              {
                q: "How many knowledge check questions are generated?",
                a: "3-5 multiple-choice questions by default, each with one correct answer marked. The questions test the core concepts covered in the video, not trivia. You can add, edit, or remove questions before publishing your training module.",
              },
              {
                q: "What video length works best?",
                a: "Tutorial videos between 10 and 60 minutes produce the best training guides. Shorter videos may not have enough content for a full module. Videos over 60 minutes generate comprehensive guides but may work better when split into separate modules before uploading.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6 last:border-0">
                <dt className="font-syne font-semibold text-gray-900 mb-2">{faq.q}</dt>
                <dd className="font-dm-sans text-gray-600 text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
