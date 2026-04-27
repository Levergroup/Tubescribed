import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Acceptable Use Policy | TubeScribed",
  description: "TubeScribed Acceptable Use Policy. What you may and may not do when using our YouTube transcription and content repurposing service.",
  path: "/acceptable-use",
});

const content = `
## Acceptable Use Policy

**Last updated: March 1, 2025**

This Acceptable Use Policy ("AUP") governs your use of TubeScribed services. By using TubeScribed, you agree to comply with this AUP.

---

## Permitted Uses

You may use TubeScribed to:
- Transcribe your own YouTube videos or videos for which you have the right to generate transcripts
- Generate content repurposing assets from videos you are licensed to use
- Create SOPs, blog posts, emails, and other content formats from your own video library
- Process client video content on their behalf (with their authorization) under an Agency plan
- Feed transcripts into AI agents, RAG pipelines, or knowledge bases for legitimate business use

---

## Prohibited Uses

You may not use TubeScribed to:

**Copyright and intellectual property violations:**
- Transcribe or repurpose copyrighted content without appropriate rights or licenses
- Generate derivative works from content you do not have the right to use commercially
- Circumvent DRM or access controls on video content

**Harmful or illegal content:**
- Generate content that is illegal, defamatory, harassing, or threatening
- Process content involving minors in any harmful context
- Create content designed to deceive, defraud, or mislead consumers

**Platform abuse:**
- Share account credentials with users outside your authorized team members
- Attempt to circumvent usage limits or credit systems
- Scrape, reverse engineer, or replicate TubeScribed's systems
- Attempt unauthorized access to TubeScribed's infrastructure

**Spam and misuse:**
- Generate content for mass spam campaigns
- Use AI outputs to manufacture fake reviews, testimonials, or deceptive endorsements

---

## Enforcement

Violations of this AUP may result in:
- Account suspension or termination without refund
- Reporting to relevant authorities where applicable
- Legal action where damages have occurred

---

## Reporting Violations

If you become aware of a violation of this AUP, please report it to: support@tubescribed.com

---

## Changes

We may update this AUP from time to time. Continued use of TubeScribed after changes constitutes acceptance of the updated policy.
`;

export default function AcceptableUsePage() {
  return <LegalPageLayout title="Acceptable Use Policy" lastUpdated="March 1, 2025" content={content} />;
}
