// First-party lead attribution for tubescribed.com and app.tubescribed.com.
//
// On every page view we record where the visitor came from (UTM tags, ad click IDs,
// referrer, landing page) in two cookies scoped to .tubescribed.com, so the app on
// app.tubescribed.com can read them at signup:
//   ts_ft  first touch (set once, kept 90 days)
//   ts_lt  last non-direct touch (updated whenever a new campaign or referrer arrives)
// Links to the app also carry the first-touch UTM tags as URL parameters, as a
// fallback for browsers that block the cookie.

export interface Touch {
  source: string;
  medium: string;
  campaign?: string;
  term?: string;
  content?: string;
  click_id?: string;
  referrer?: string;
  landing_page: string;
  ts: string;
}

const FT = "ts_ft";
const LT = "ts_lt";
const MAX_AGE = 60 * 60 * 24 * 90;

const SEARCH_ENGINES: Record<string, string> = {
  "google.": "google",
  "bing.com": "bing",
  "duckduckgo.com": "duckduckgo",
  "search.yahoo.com": "yahoo",
  "yandex.": "yandex",
  "ecosia.org": "ecosia",
  "search.brave.com": "brave",
};
const SOCIAL: Record<string, string> = {
  "facebook.com": "facebook",
  "fb.com": "facebook",
  "l.facebook.com": "facebook",
  "lm.facebook.com": "facebook",
  "instagram.com": "instagram",
  "linkedin.com": "linkedin",
  "lnkd.in": "linkedin",
  "t.co": "x",
  "x.com": "x",
  "twitter.com": "x",
  "reddit.com": "reddit",
  "youtube.com": "youtube",
  "medium.com": "medium",
};
const AI: Record<string, string> = {
  "chatgpt.com": "chatgpt",
  "chat.openai.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "claude.ai": "claude",
  "gemini.google.com": "gemini",
  "copilot.microsoft.com": "copilot",
};

function match(host: string, table: Record<string, string>): string | null {
  for (const k of Object.keys(table)) {
    if (k.endsWith(".")) {
      // e.g. "google." matches google.com, google.co.uk, www.google.de
      if (host.startsWith(k) || host.includes("." + k)) return table[k];
    } else if (host === k || host.endsWith("." + k)) return table[k];
  }
  return null;
}

function readCookie(name: string): Touch | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  if (!m) return null;
  try {
    return JSON.parse(decodeURIComponent(m[1])) as Touch;
  } catch {
    return null;
  }
}

function writeCookie(name: string, t: Touch) {
  const host = window.location.hostname;
  const domain = host.endsWith("tubescribed.com") ? "; domain=.tubescribed.com" : "";
  document.cookie = `${name}=${encodeURIComponent(JSON.stringify(t))}; path=/; max-age=${MAX_AGE}; SameSite=Lax${domain}${
    window.location.protocol === "https:" ? "; Secure" : ""
  }`;
}

export function currentTouch(): Touch | null {
  const url = new URL(window.location.href);
  const p = url.searchParams;
  const landing_page = url.pathname;
  const ts = new Date().toISOString();
  const click_id = p.get("gclid") ? `gclid:${p.get("gclid")}` : p.get("fbclid") ? "fbclid" : p.get("msclkid") ? "msclkid" : undefined;

  let refHost = "";
  try {
    refHost = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, "") : "";
  } catch {}
  const external = refHost && !refHost.endsWith("tubescribed.com");

  if (p.get("utm_source")) {
    return {
      source: p.get("utm_source")!,
      medium: p.get("utm_medium") || "(not set)",
      campaign: p.get("utm_campaign") || undefined,
      term: p.get("utm_term") || undefined,
      content: p.get("utm_content") || undefined,
      click_id,
      referrer: external ? refHost : undefined,
      landing_page,
      ts,
    };
  }
  if (p.get("gclid")) return { source: "google", medium: "cpc", click_id, landing_page, ts };
  if (p.get("fbclid")) return { source: "facebook", medium: external ? "social" : "paid_social", click_id, landing_page, ts };
  if (p.get("msclkid")) return { source: "bing", medium: "cpc", click_id, landing_page, ts };
  if (external) {
    const ai = match(refHost, AI);
    if (ai) return { source: ai, medium: "ai_referral", referrer: refHost, landing_page, ts };
    const se = match(refHost, SEARCH_ENGINES);
    if (se) return { source: se, medium: "organic", referrer: refHost, landing_page, ts };
    const so = match(refHost, SOCIAL);
    if (so) return { source: so, medium: "social", referrer: refHost, landing_page, ts };
    return { source: refHost, medium: "referral", referrer: refHost, landing_page, ts };
  }
  return null; // direct or internal navigation
}

/** Call once per page view. */
export function recordTouch() {
  const t = currentTouch();
  if (!readCookie(FT)) writeCookie(FT, t ?? { source: "(direct)", medium: "(none)", landing_page: window.location.pathname, ts: new Date().toISOString() });
  if (t) writeCookie(LT, t);
}

export function getFirstTouch(): Touch | null {
  return readCookie(FT);
}
export function getLastTouch(): Touch | null {
  return readCookie(LT) ?? readCookie(FT);
}

/** Short one-line summary for CRMs, e.g. "facebook / social / blog-sop | landing /blog/x | last: google / organic". */
export function originSummary(): string {
  const ft = getFirstTouch();
  const lt = getLastTouch();
  if (!ft) return "";
  const fmt = (t: Touch) => [t.source, t.medium, t.campaign].filter(Boolean).join(" / ");
  let s = `${fmt(ft)} | landing ${ft.landing_page}`;
  if (lt && (lt.source !== ft.source || lt.medium !== ft.medium || lt.campaign !== ft.campaign)) s += ` | last: ${fmt(lt)}`;
  return s;
}

/** Adds first-touch UTM tags to an app.tubescribed.com link (keeps any existing params). */
export function decorateAppUrl(href: string): string {
  const ft = getFirstTouch();
  const lt = getLastTouch();
  if (!ft) return href;
  try {
    const u = new URL(href);
    const set = (k: string, v?: string) => {
      if (v && !u.searchParams.has(k)) u.searchParams.set(k, v);
    };
    set("utm_source", ft.source);
    set("utm_medium", ft.medium);
    set("utm_campaign", ft.campaign);
    set("utm_term", ft.term);
    set("utm_content", ft.content);
    set("ts_landing", ft.landing_page);
    if (lt && (lt.source !== ft.source || lt.medium !== ft.medium || lt.campaign !== ft.campaign)) set("ts_last", [lt.source, lt.medium, lt.campaign].filter(Boolean).join("/"));
    return u.toString();
  } catch {
    return href;
  }
}
