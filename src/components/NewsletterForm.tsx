"use client";

import { useState } from "react";

type Source = "free_tool" | "blog" | "newsletter" | "other";

interface Props {
  source?: Source;
}

export function NewsletterForm({ source = "newsletter" }: Props) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, company_website: company }),
      });
      if (!res.ok) throw new Error("Failed");
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "generate_lead", lead_source: source });
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="max-w-md mx-auto text-center font-dm-sans text-green-400">
        You&apos;re in. Check your inbox for your first email.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company_website"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden opacity-0"
      />
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
