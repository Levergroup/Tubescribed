import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About TubeScribed — Built for YouTube Creators Who Work Smarter",
  description: "TubeScribed was built to solve a simple problem: YouTube is full of valuable content that nobody can access. We fix that, in 8 seconds.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">About</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Built because YouTube content <GradientText>deserves better.</GradientText>
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl leading-relaxed">
            Creators, coaches, and agencies are sitting on libraries of YouTube content that&apos;s locked in video format — inaccessible, unsearchable, and impossible to repurpose at scale. We built TubeScribed to fix that.
          </p>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-8">The problem we&apos;re solving</h2>
          <div className="space-y-5 font-dm-sans text-navy-400 text-lg leading-relaxed">
            <p>You record a great video. You spend hours creating valuable content — your methodology, your expertise, your framework. You post it to YouTube.</p>
            <p>And then it just... sits there. Your blog hasn&apos;t been updated in months. Your email list is waiting. Your LinkedIn profile is quiet. The same content that could be driving business across every channel is locked inside a video file.</p>
            <p>The existing tools don&apos;t help. YouTube auto-captions are unusable. ChatGPT and Claude can&apos;t access YouTube URLs. Manual transcription takes hours and costs a fortune in team time.</p>
            <p>We built TubeScribed because we kept running into this problem ourselves. The solution turned out to be simpler than expected: connect YouTube directly to a proper AI transcription pipeline, add brand voice customization, and let the content repurposing happen automatically.</p>
            <p className="text-navy-100 font-medium">That&apos;s all TubeScribed is. One URL in. Everything else out.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-8">What we believe</h2>
          <div className="space-y-5">
            {[
              { title: "The best content is already created", body: "Most creators and businesses have more valuable content than they realize — it's just locked in video format. Our job is to unlock it." },
              { title: "Brand voice matters", body: "Generic AI output doesn't build trust. Everything TubeScribed generates should sound like you — not like a machine." },
              { title: "Tools should do more than one thing", body: "We don't want to be another point solution. TubeScribed handles the entire pipeline from YouTube URL to finished business asset." },
              { title: "Speed shouldn't mean sacrifice", body: "8 seconds per transcript shouldn't mean lower quality. Powered by OpenAI Whisper and Claude AI — the same tools used by Fortune 500 companies." },
            ].map((item) => (
              <div key={item.title} className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
                <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">{item.title}</h3>
                <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne font-bold text-3xl text-navy-100 mb-6">Try it yourself</h2>
          <p className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-8">
            The free run gives you 1 transcript and 1 AI output. No credit card. You&apos;ll know in 30 seconds if this is the tool you&apos;ve been looking for.
          </p>
          <Button href={`${APP_URL}/signup`} variant="primary" className="px-8 py-4 text-lg">Try Free</Button>
        </div>
      </section>
    </div>
  );
}
