import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = buildMetadata({
  title: "GDPR Compliance | TubeScribed",
  description: "TubeScribed's GDPR compliance statement. How we protect the data of EU and EEA residents under the General Data Protection Regulation.",
  path: "/gdpr",
});

const content = `
## GDPR Compliance

**Last updated: March 1, 2025**

TubeScribed is committed to complying with the General Data Protection Regulation (GDPR) for users in the European Union and European Economic Area.

---

## Legal Basis for Processing

We process personal data under the following legal bases:

- **Contract performance:** Processing necessary to provide the TubeScribed service you have subscribed to
- **Legitimate interests:** Analytics to improve our service, fraud prevention
- **Consent:** Marketing communications and optional analytics/marketing cookies
- **Legal obligation:** Compliance with applicable laws

---

## Your Rights Under GDPR

As an EU/EEA resident, you have the following rights:

**Right of access:** Request a copy of the personal data we hold about you.

**Right to rectification:** Request correction of inaccurate or incomplete data.

**Right to erasure ("right to be forgotten"):** Request deletion of your personal data, subject to legal retention requirements.

**Right to restriction:** Request that we restrict processing of your data in certain circumstances.

**Right to data portability:** Receive your personal data in a machine-readable format.

**Right to object:** Object to processing based on legitimate interests or for direct marketing.

**Right to withdraw consent:** Withdraw consent for processing based on consent at any time without affecting the lawfulness of prior processing.

---

## Data Transfers

TubeScribed uses third-party service providers who may process data outside the EU/EEA. We ensure appropriate safeguards are in place, including:
- Standard Contractual Clauses (SCCs) with applicable providers
- Use of providers who participate in EU-approved transfer mechanisms

Our key processors include Stripe (US), Supabase (EU/US), OpenAI (US), Anthropic (US), and Vercel (US).

---

## Data Retention

We retain personal data for as long as your account is active or as required by law. Upon account deletion, personal data is deleted within 30 days unless legal retention obligations apply.

---

## How to Exercise Your Rights

To exercise any of your rights under GDPR, contact us at:

**Email:** privacy@tubescribed.com

We will respond within 30 days. We may need to verify your identity before fulfilling certain requests.

---

## Supervisory Authority

If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with your national data protection supervisory authority.

---

## Data Protection Officer

TubeScribed does not currently meet the threshold requiring a formal Data Protection Officer. For all privacy-related inquiries, contact privacy@tubescribed.com.
`;

export default function GDPRPage() {
  return <LegalPageLayout title="GDPR Compliance" lastUpdated="March 1, 2025" content={content} />;
}
