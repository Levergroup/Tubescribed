import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Best Descript Alternatives for YouTube Transcription in 2025 | TubeScribed",
  description: "Descript is a video editor. If you need YouTube transcription and content repurposing — not video editing — TubeScribed is the focused alternative.",
  path: "/alternatives/descript",
});

const reasons = [
  "TubeScribed connects directly to YouTube — Descript requires file uploads",
  "Focused on content repurposing, not video editing — do less, get more",
  "TubeScribed starts at $19/mo vs Descript's $24–48/mo for features you don't need",
  "15 content output types built-in — Descript has no content repurposing studio",
  "Brand workspace produces outputs in your voice automatically — Descript has no equivalent",
  "SOP generator built-in — Descript doesn't produce business documents",
];

export default function DescriptAlternativesPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Alternatives</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            The Best <GradientText>Descript Alternative</GradientText> for YouTube Transcription
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Descript is a video editing tool. If you need transcription and content repurposing — not video editing — TubeScribed does that job better, for less.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try TubeScribed Free</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10">Why creators switch from Descript to TubeScribed</h2>
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
          <Link href="/vs/descript" className="inline-flex items-center gap-2 text-brand-red hover:text-orange-400 font-medium transition-colors">
            See TubeScribed vs Descript <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
