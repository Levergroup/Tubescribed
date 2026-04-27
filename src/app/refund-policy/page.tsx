import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Refund Policy | TubeScribed",
  description: "TubeScribed Refund Policy. Our 48-hour refund window, how credit packs work, and how to request a refund.",
  path: "/refund-policy",
});

const content = `
## Refund Policy

**Last updated: March 1, 2025**

---

## Subscription Refunds

TubeScribed offers a **48-hour refund window** for subscription charges.

If you are charged for a subscription renewal and request a refund within 48 hours of that charge, we will issue a full refund — no questions asked.

To request a refund, email support@tubescribed.com with your account email and the charge date.

**What is not refundable:**
- Subscription charges older than 48 hours
- Subscription periods where the service has been actively used (transcripts generated or AI outputs produced)
- Charges for months after your first billing cycle where usage has occurred

---

## Credit Pack Refunds

Credit packs (Starter, Growth, Pro Pack) are **non-refundable** once purchased.

- Credits never expire and carry forward indefinitely
- Unused credits at account cancellation are forfeited and not refunded

If you purchased a credit pack in error and have not used any credits from it, contact support within 24 hours and we will review on a case-by-case basis.

---

## Free Run

New accounts receive 1 free transcript and 1 free AI output — no credit card required. No purchase is made during the free run.

---

## How to Request a Refund

Email: support@tubescribed.com
Subject: Refund Request
Include: Your account email address and the date of the charge

We process refund requests within 2 business days. Refunds are returned to the original payment method within 5–10 business days.

---

## Chargebacks

If you initiate a chargeback without first contacting us, your account will be immediately suspended. We encourage you to contact us first — we are easy to reach and happy to resolve billing issues directly.

---

## Changes

We may update this Refund Policy from time to time. The policy in effect at the time of your purchase governs any refund requests for that purchase.
`;

export default function RefundPolicyPage() {
  return <LegalPageLayout title="Refund Policy" lastUpdated="March 1, 2025" content={content} />;
}
