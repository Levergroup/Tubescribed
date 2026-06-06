import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "You're in — TubeScribed",
  description: "Thanks for subscribing. We'll be in touch soon.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center py-24">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={56} className="text-green-400" />
        </div>
        <h1 className="font-syne font-bold text-3xl text-navy-100 mb-3">
          You&apos;re in!
        </h1>
        <p className="font-dm-sans text-navy-400 text-lg mb-8">
          Check your inbox — we&apos;ll be in touch shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl text-sm"
          >
            Back to TubeScribed
          </Link>
          <Link
            href="/blog"
            className="border border-navy-600 text-navy-300 hover:text-navy-100 hover:border-navy-400 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
