import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { DollarSign, Users, BarChart3, Link as LinkIcon } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed Affiliate Program — Earn 30% Recurring Commission",
  description: "Join the TubeScribed affiliate program and earn 30% recurring commission on every subscription you refer. Perfect for creators, educators, and marketers.",
  path: "/affiliate",
});

const perks = [
  { icon: DollarSign, title: "30% recurring commission", body: "Earn 30% of every subscription — every month — for as long as your referrals stay subscribed. Not a one-time payout." },
  { icon: Users, title: "90-day cookie window", body: "Your referral link is tracked for 90 days. If someone clicks your link today and subscribes next month, you still earn." },
  { icon: BarChart3, title: "Real-time dashboard", body: "Track clicks, conversions, and earnings in your affiliate dashboard. Paid out monthly via Stripe." },
  { icon: LinkIcon, title: "Custom referral link", body: "One link. Shareable anywhere — in videos, newsletters, blog posts, or social profiles." },
];

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">Affiliate Program</p>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            Earn <GradientText>30% recurring commission</GradientText> for every referral
          </h1>
          <p className="font-dm-sans text-navy-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Share TubeScribed with your audience. Earn 30% of every subscription — monthly, for as long as they stay subscribed. No cap. No expiry.
          </p>
          <Button href="mailto:affiliates@tubescribed.com" variant="primary" className="px-8 py-4 text-lg">Apply to Join</Button>
          <p className="font-dm-sans text-navy-500 text-sm mt-3">Email us at affiliates@tubescribed.com to get started.</p>
        </div>
      </section>

      <section className="py-24 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-bold text-3xl text-navy-100 text-center mb-12">What you get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="bg-navy-900 border border-navy-700 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand-red" />
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-navy-100 text-base mb-2">{perk.title}</h3>
                      <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{perk.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne font-bold text-2xl text-navy-100 mb-4">The math</h2>
          <p className="font-dm-sans text-navy-400 text-lg leading-relaxed mb-8">
            If you refer 10 people to the Agency plan ($49/mo), you earn $147/month — every month. 50 referrals at Pro ($19/mo) = $285/month recurring. This is real money from content you&apos;re already creating.
          </p>
          <Button href="mailto:affiliates@tubescribed.com" variant="primary" className="px-8 py-4 text-lg">Get Your Affiliate Link</Button>
        </div>
      </section>
    </div>
  );
}
