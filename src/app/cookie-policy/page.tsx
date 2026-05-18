import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | TubeScribed",
  description: "TubeScribed Cookie Policy. What cookies we use, why we use them, and how to manage your preferences.",
  path: "/cookie-policy",
});

const content = `
## Cookie Policy

**Last updated: March 1, 2025**

This Cookie Policy explains what cookies are, how TubeScribed uses them, and how you can manage your cookie preferences.

---

## What Are Cookies?

Cookies are small text files stored on your device by your browser when you visit a website. They help websites remember information about your visit.

---

## All Cookies We Set

| Cookie Name | Purpose | Duration | Type |
|-------------|---------|----------|------|
| ts_consent | Cookie consent preference | 365 days | Essential |
| _ga | Google Analytics — distinguishes users | 2 years | Analytics |
| _ga_XXXXXXXX | Google Analytics — session persistence | 2 years | Analytics |
| _fbp | Meta Pixel — tracks visits across sites | 3 months | Marketing |
| sb_session | Supabase auth session | Session | Essential |

---

## Types of Cookies We Use

### Essential Cookies
These cookies are necessary for the site to function. They cannot be disabled.

| Cookie | Purpose | Duration |
|--------|---------|----------|
| ts_consent | Stores your cookie consent preference | 365 days |
| sb_session | Authentication and session management | Session |

### Analytics Cookies (Optional)
These cookies help us understand how visitors use the site. We only activate these after you give consent.

| Cookie | Provider | Purpose |
|--------|----------|---------|
| _ga | Google Analytics | Distinguishes users, page view tracking |
| _ga_XXXXXXXX | Google Analytics | Session persistence |

### Marketing Cookies (Optional)
These cookies are used for targeted advertising. We only activate these after you give consent.

| Cookie | Provider | Purpose |
|--------|----------|---------|
| _fbp | Meta (Facebook) | Advertising attribution, visit tracking |

---

## Managing Your Preferences

You can manage your cookie preferences at any time by clicking the cookie settings link in the footer, or by clearing cookies in your browser settings.

We do not activate analytics or marketing cookies until you explicitly accept them.

---

## Changes

We may update this Cookie Policy from time to time. Material changes will be posted on this page.

---

## Contact

For questions about our use of cookies: privacy@tubescribed.com
`;

export default function CookiePolicyPage() {
  return <LegalPageLayout title="Cookie Policy" lastUpdated="March 1, 2025" content={content} />;
}
