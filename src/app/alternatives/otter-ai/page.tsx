import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Best Otter.ai Alternatives for YouTube Creators in 2025 | TubeScribed",
  description: "Looking for an Otter.ai alternative that works with YouTube? TubeScribed is built for YouTube content repurposing — not meeting notes. See why creators switch.",
  path: "/alternatives/otter-ai",
});

const reasons = [
  "TubeScribed connects directly to YouTube — Otter.ai requires a live meeting or file upload",
  "Brand workspace ensures every output sounds like you — Otter.ai has no brand voice system",
  "15 content output types from every transcript — Otter.ai only produces transcripts and meeting notes",
  "SOP generator built-in — Otter.ai doesn't support this",
  "TubeScribed starts at $19/mo — comparable to Otter.ai but purpose-built for content creators",
];

export default function OtterAIAlternativesPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Alternatives</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            The Best <GradientText>Otter.ai Alternative</GradientText> for YouTube Creators
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Otter.ai is great for meeting notes. If you create YouTube content, TubeScribed is the tool Otter.ai was never built to be.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try TubeScribed Free</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10">Why YouTube creators choose TubeScribed over Otter.ai</h2>
          <div className="space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-4 bg-navy-900 border border-navy-700 rounded-2xl p-6">
                <CheckCircle2 size={20} className="text-green-400 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-navy-100 text-sm leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne font-bold text-2xl text-navy-100 mb-6">Want the full comparison?</h2>
          <Link href="/vs/otter-ai" className="inline-flex items-center gap-2 text-brand-red hover:text-orange-400 font-medium transition-colors">
            See TubeScribed vs Otter.ai <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
