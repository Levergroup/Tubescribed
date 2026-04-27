import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Best Tactiq Alternatives for YouTube Content Repurposing in 2025 | TubeScribed",
  description: "Tactiq captures meeting captions. If you need to repurpose YouTube content, TubeScribed is the alternative built for that job. No meeting required.",
  path: "/alternatives/tactiq",
});

const reasons = [
  "TubeScribed works without a meeting — just paste a YouTube URL",
  "Brand workspace produces branded outputs automatically — Tactiq has no brand voice system",
  "15 content output types built-in — Tactiq only captures live captions",
  "SOP generator from any video or recording — Tactiq doesn't support this",
  "Accurate Whisper transcription vs. live caption capture — better accuracy on pre-recorded content",
];

export default function TactiqAlternativesPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Alternatives</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            The Best <GradientText>Tactiq Alternative</GradientText> for YouTube Content
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Tactiq captures Google Meet captions. TubeScribed turns any YouTube video into business assets — no meeting required.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try TubeScribed Free</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-10">Why content creators choose TubeScribed over Tactiq</h2>
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
          <Link href="/vs/tactiq" className="inline-flex items-center gap-2 text-brand-red hover:text-orange-400 font-medium transition-colors">
            See TubeScribed vs Tactiq <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
