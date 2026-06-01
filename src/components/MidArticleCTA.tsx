"use client";

import { useState, useEffect } from "react";

export default function MidArticleCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const check = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total >= 0.4) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 w-72 shadow-2xl"
      style={{ opacity: 1, animation: "ctaSlideIn 0.3s ease-out" }}
    >
      <style>{`
        @keyframes ctaSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="bg-[#1E2A3A] rounded-xl p-5 border border-[#2D3F55] relative">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors leading-none"
          aria-label="Dismiss"
        >
          ✕
        </button>
        <p className="text-white font-semibold text-sm mb-1 pr-6 leading-snug">
          Turn this article into an SOP
        </p>
        <p className="text-[#94A3B8] text-xs mb-3 leading-relaxed">
          Try TubeScribed free — no credit card needed.
        </p>
        <a
          href="https://app.tubescribed.com/signup"
          className="block w-full text-center bg-gradient-to-r from-[#FF3B30] to-[#FF8C42] text-white text-xs font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          Try Free — No Credit Card →
        </a>
      </div>
    </div>
  );
}
