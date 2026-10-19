import { NextRequest, NextResponse } from "next/server";
import { addToList } from "@/lib/getresponse";

const VALID_SOURCES = ["free_tool", "blog", "newsletter", "other"] as const;
type Source = (typeof VALID_SOURCES)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory IP rate limiter: max 5 requests per IP per 10 minutes.
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  let body: {
    email?: unknown;
    firstName?: unknown;
    source?: unknown;
    company_website?: unknown;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  // Honeypot — a filled company_website means a bot. Return success, do nothing.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (isRateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in a few minutes." },
      { status: 429 },
    );
  }

  const source: Source = VALID_SOURCES.includes(body.source as Source)
    ? (body.source as Source)
    : "other";

  const firstName =
    typeof body.firstName === "string" && body.firstName.trim() !== ""
      ? body.firstName.trim()
      : undefined;

  // Non-blocking: addToList never throws and logs its own failures.
  await addToList({
    email,
    listId: process.env.GR_LIST_LEADS ?? "",
    name: firstName,
    source,
  });

  return NextResponse.json({ success: true });
}
