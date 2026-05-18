"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "ts_cookie_consent";
const COOKIE_NAME = "ts_consent";

function getCookieConsent(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setConsentCookie(value: string) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${COOKIE_NAME}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  setConsentCookie(consent.analytics || consent.marketing ? "accepted" : "declined");
}

type WindowWithTracking = typeof window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

function fireAnalytics() {
  if (typeof window === "undefined") return;
  const w = window as WindowWithTracking;
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", { analytics_storage: "granted" });
  }
}

function fireMarketing() {
  if (typeof window === "undefined") return;
  const w = window as WindowWithTracking;
  if (typeof w.fbq === "function") {
    w.fbq("consent", "grant");
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [prefs, setPrefs] = useState<ConsentState>({ analytics: false, marketing: false });

  useEffect(() => {
    const cookie = getCookieConsent();
    const stored = getStoredConsent();
    if (!cookie && !stored) {
      setVisible(true);
    } else {
      const consent = stored ?? { analytics: false, marketing: false };
      if (consent.analytics) fireAnalytics();
      if (consent.marketing) fireMarketing();
    }
  }, []);

  function acceptAll() {
    const consent: ConsentState = { analytics: true, marketing: true };
    storeConsent(consent);
    fireAnalytics();
    fireMarketing();
    setVisible(false);
  }

  function decline() {
    storeConsent({ analytics: false, marketing: false });
    setVisible(false);
  }

  function savePrefs() {
    storeConsent(prefs);
    if (prefs.analytics) fireAnalytics();
    if (prefs.marketing) fireMarketing();
    setManageOpen(false);
    setVisible(false);
  }

  return (
    <>
      <AnimatePresence>
        {visible && !manageOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-[100]"
            style={{ background: "#1E2A3A", borderTop: "1px solid #2D3F55" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-dm-sans text-[#94A3B8] text-sm text-center sm:text-left">
                We use cookies to improve your experience, analyze traffic, and serve relevant ads. See our{" "}
                <Link href="/cookie-policy" className="text-white underline hover:text-[#FF8C42] transition-colors">
                  Cookie Policy
                </Link>
                .
              </p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => setManageOpen(true)}
                  className="text-[#94A3B8] hover:text-white text-xs font-medium transition-colors underline"
                >
                  Manage
                </button>
                <button
                  onClick={decline}
                  className="text-sm font-semibold px-4 py-2 rounded-lg border transition-colors"
                  style={{ borderColor: "#2D3F55", color: "#94A3B8" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#94A3B8"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2D3F55"; e.currentTarget.style.color = "#94A3B8"; }}
                >
                  Decline
                </button>
                <button
                  onClick={acceptAll}
                  className="text-sm font-semibold px-5 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(to right, #FF3B30, #FF8C42)" }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {manageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center bg-navy-950/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-navy-800 border border-navy-700 rounded-2xl p-6 w-full max-w-md shadow-2xl"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-syne font-bold text-navy-100 text-base">Cookie Preferences</h3>
                <button onClick={() => setManageOpen(false)} className="text-navy-400 hover:text-navy-100 transition-colors">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between gap-4 p-4 bg-navy-900 rounded-xl border border-navy-700">
                  <div>
                    <p className="font-dm-sans font-medium text-navy-100 text-sm mb-1">Essential Cookies</p>
                    <p className="font-dm-sans text-navy-400 text-xs">Required for the site to function. Cannot be disabled.</p>
                  </div>
                  <div className="shrink-0 mt-0.5 w-10 h-5 bg-brand-red rounded-full opacity-60 cursor-not-allowed" />
                </div>

                <div className="flex items-start justify-between gap-4 p-4 bg-navy-900 rounded-xl border border-navy-700">
                  <div>
                    <p className="font-dm-sans font-medium text-navy-100 text-sm mb-1">Analytics Cookies</p>
                    <p className="font-dm-sans text-navy-400 text-xs">Help us understand how visitors use the site (Google Analytics).</p>
                  </div>
                  <button
                    onClick={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
                    className={`shrink-0 mt-0.5 w-10 h-5 rounded-full transition-colors duration-200 ${prefs.analytics ? "bg-brand-red" : "bg-navy-600"}`}
                    aria-label="Toggle analytics cookies"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 p-4 bg-navy-900 rounded-xl border border-navy-700">
                  <div>
                    <p className="font-dm-sans font-medium text-navy-100 text-sm mb-1">Marketing Cookies</p>
                    <p className="font-dm-sans text-navy-400 text-xs">Used for targeted advertising (Meta Pixel, Google Ads).</p>
                  </div>
                  <button
                    onClick={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
                    className={`shrink-0 mt-0.5 w-10 h-5 rounded-full transition-colors duration-200 ${prefs.marketing ? "bg-brand-red" : "bg-navy-600"}`}
                    aria-label="Toggle marketing cookies"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={savePrefs} className="btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex-1">
                  Save Preferences
                </button>
                <button onClick={acceptAll} className="text-navy-300 hover:text-navy-100 text-sm font-medium px-5 py-2.5 rounded-lg border border-navy-600 hover:border-navy-500 transition-colors flex-1">
                  Accept All
                </button>
              </div>

              <p className="font-dm-sans text-navy-500 text-xs text-center mt-4">
                See our{" "}
                <Link href="/cookie-policy" className="text-navy-400 hover:text-navy-100 underline">Cookie Policy</Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-navy-400 hover:text-navy-100 underline">Privacy Policy</Link>.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
