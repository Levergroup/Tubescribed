const TOOLS: Record<string, { title: string; description: string; href: string }> = {
  "youtube-transcript-generator": {
    title: "Free YouTube Transcript Generator",
    description: "Clean, punctuated, timestamped transcript from any YouTube video, with or without captions.",
    href: "/tools/youtube-transcript-generator",
  },
  "youtube-to-blog-post": {
    title: "Free YouTube to Blog Post Generator",
    description: "Turn a video into an SEO blog post with headings, intro and FAQ.",
    href: "/tools/youtube-to-blog-post",
  },
  "youtube-to-sop": {
    title: "Free YouTube to SOP Generator",
    description: "Numbered steps, warnings and a completion checklist from any how-to video.",
    href: "/tools/youtube-to-sop",
  },
  "youtube-to-email-sequence": {
    title: "Free YouTube to Email Sequence Tool",
    description: "A 5-email nurture sequence with subject lines and preview text.",
    href: "/tools/youtube-to-email-sequence",
  },
  "youtube-to-social-captions": {
    title: "Free YouTube to Social Captions Tool",
    description: "Captions for LinkedIn, X and Instagram, written for each platform.",
    href: "/tools/youtube-to-social-captions",
  },
  "youtube-to-faq": {
    title: "Free YouTube to FAQ Generator",
    description: "Question-and-answer content structured for Google's People Also Ask.",
    href: "/tools/youtube-to-faq",
  },
  "video-to-training-guide": {
    title: "Free Video to Training Guide Tool",
    description: "Learning objectives, organized sections and a knowledge check from any training video.",
    href: "/tools/video-to-training-guide",
  },
};

interface Props {
  tool: string;
  note?: string;
}

export default function FreeToolCard({ tool, note }: Props) {
  const t = TOOLS[tool];
  if (!t) return null;
  return (
    <div className="my-8 p-6 rounded-xl border-2 border-[#FF8C42]/60 bg-[#FFF7F0]">
      <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-2">Free tool · no credit card</p>
      <p className="text-gray-900 font-bold text-lg mb-1">{t.title}</p>
      <p className="text-gray-700 text-sm mb-4">{note || t.description}</p>
      <a
        href={t.href}
        className="inline-block px-5 py-2.5 rounded-lg font-semibold text-white bg-[#FF3B30] hover:bg-[#E63528] transition-colors text-sm no-underline"
      >
        Try it on a video →
      </a>
    </div>
  );
}
