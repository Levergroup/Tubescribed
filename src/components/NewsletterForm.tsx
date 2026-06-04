"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  source?: string;
}

export function NewsletterForm({ source = "newsletter_footer" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error("Failed");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF3B30]"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 rounded-lg font-semibold text-white bg-[#FF3B30] hover:bg-[#E63528] transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="absolute mt-14 text-red-400 text-xs">Something went wrong — try again.</p>
      )}
    </form>
  );
}
