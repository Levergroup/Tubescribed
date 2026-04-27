import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | TubeScribed",
  description: "TubeScribed Terms of Service. Understand your rights and responsibilities when using our YouTube transcription and content repurposing platform.",
  path: "/terms-of-service",
});

const content = `
## Terms of Service

**Last updated: March 1, 2025**

By accessing or using TubeScribed (tubescribed.com), you agree to be bound by these Terms of Service. If you do not agree, do not use the service.

---

## 1. Service Description

TubeScribed provides YouTube video transcription and AI-powered content repurposing services. The service processes publicly available YouTube content to generate transcripts and derivative content formats.

---

## 2. YouTube Content Policy

By using TubeScribed, you acknowledge that:
- You will only submit YouTube URLs for videos you have the right to transcribe (your own videos, or videos with appropriate licenses)
- TubeScribed processes publicly available YouTube content. You are responsible for ensuring you have appropriate rights to use the transcripts and outputs generated
- We do not circumvent YouTube's access controls or process private or age-restricted videos
- Transcription of copyrighted content for commercial purposes without authorization may violate copyright law. You bear sole responsibility for ensuring lawful use

---

## 3. Accounts and Access

- You must provide accurate account information
- You are responsible for maintaining the security of your account credentials
- You may not share accounts between multiple users (unless on an Agency plan with team member seats)
- We reserve the right to suspend accounts that violate these Terms

---

## 4. Intellectual Property

**Your content:** You retain all intellectual property rights in the YouTube content you submit and the outputs generated from your content.

**TubeScribed platform:** The TubeScribed software, design, and underlying technology are our intellectual property. You may not copy, reverse engineer, or create derivative works from our platform.

---

## 5. Payment Terms

- Subscriptions are billed monthly in advance
- Credit packs are one-time purchases and non-refundable once credits are consumed
- All prices are in USD and exclusive of applicable taxes
- Failed payments will result in service suspension after a 3-day grace period
- We reserve the right to change pricing with 30 days' notice

---

## 6. Cancellation

- You may cancel your subscription at any time
- Cancellation takes effect at the end of the current billing period
- No prorated refunds for partial subscription periods
- See our Refund Policy for details

---

## 7. Acceptable Use

You may not use TubeScribed to:
- Generate content that violates any applicable law
- Process content that infringes third-party intellectual property rights without authorization
- Attempt to access, scrape, or reverse engineer our systems
- Circumvent usage limits or share accounts inappropriately

---

## 8. Disclaimers

TubeScribed is provided "as is." We make no warranties about transcript accuracy, service uptime, or fitness for a particular purpose. AI-generated content may contain errors.

---

## 9. Limitation of Liability

To the maximum extent permitted by law, TubeScribed's total liability to you for any claims arising from use of the service shall not exceed the amount you paid us in the 3 months preceding the claim.

---

## 10. Governing Law

These Terms are governed by the laws of the jurisdiction in which TubeScribed operates, without regard to conflict of law principles.

---

## 11. Changes

We may update these Terms. Material changes will be communicated by email. Continued use after changes constitutes acceptance.

---

## Contact

support@tubescribed.com
`;

export default function TermsOfServicePage() {
  return <LegalPageLayout title="Terms of Service" lastUpdated="March 1, 2025" content={content} />;
}
