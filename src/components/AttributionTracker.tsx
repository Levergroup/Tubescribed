"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordTouch, decorateAppUrl, getFirstTouch } from "@/lib/attribution";

// Records where each visitor came from and carries it to app.tubescribed.com on signup clicks.
export default function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      recordTouch();
    } catch {}
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null;
      if (!a || !a.href || !a.href.startsWith("https://app.tubescribed.com")) return;
      try {
        a.href = decorateAppUrl(a.href);
        const ft = getFirstTouch();
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "signup_click",
          link_url: a.href.split("?")[0],
          page_path: window.location.pathname,
          first_source: ft?.source,
          first_medium: ft?.medium,
          first_campaign: ft?.campaign,
        });
      } catch {}
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
