import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | TubeScribed",
  description: "TubeScribed Privacy Policy. How we collect, use, and protect your personal data. GDPR and CCPA compliant.",
  path: "/privacy-policy",
});

const content = `
## Privacy Policy

**Last updated: March 1, 2025**

TubeScribed ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website (tubescribed.com) and services.

---

## 1. Information We Collect

**Information you provide directly:**
- Account registration: name, email address, password
- Payment information: processed by Stripe (we do not store card numbers)
- Brand workspace data: tone of voice settings, brand guidelines, preferences you configure
- Communications: support messages, emails

**Information collected automatically:**
- Usage data: pages visited, features used, transcript and output counts
- Device information: browser type, operating system, IP address
- Cookies and tracking technologies (see our Cookie Policy)

**Third-party integrations:**
- YouTube: we access publicly available video data to process transcription requests. We do not store YouTube credentials.

---

## 2. How We Use Your Information

We use your information to:
- Provide, operate, and maintain the TubeScribed service
- Process transactions and send billing-related communications
- Generate transcripts and AI-powered content outputs
- Improve and personalize our service
- Send product updates and marketing communications (with your consent)
- Comply with legal obligations
- Detect and prevent fraud or misuse

---

## 3. Third-Party Service Providers

We share data with the following providers to operate our service:

| Provider | Purpose | Data Shared |
|----------|---------|-------------|
| Stripe | Payment processing | Name, email, billing info |
| Supabase | Database and authentication | Account data |
| OpenAI | Whisper transcription | Audio content from YouTube URLs |
| Anthropic | Claude AI transcript cleanup and content generation | Transcript text |
| Vercel | Website hosting | Usage data, IP address |
| Google Analytics | Usage analytics (with consent) | Anonymized usage data |
| Meta | Advertising (with consent) | Hashed email, usage events |

---

## 4. Your Rights

**For EU/EEA residents (GDPR):** You have the right to access, correct, delete, restrict, or port your personal data. You may also withdraw consent or lodge a complaint with your supervisory authority. Contact us at privacy@tubescribed.com.

**For California residents (CCPA):** You have the right to know what personal information we collect, delete your personal information, and opt out of the sale of personal information. We do not sell personal information.

**For all users:** You may request account deletion at any time by contacting support@tubescribed.com.

---

## 5. Data Retention

We retain your data for as long as your account is active or as needed to provide services. If you delete your account, we will delete your personal data within 30 days, except where retention is required by law.

---

## 6. Cookies

We use essential cookies to operate the site, and optional analytics and marketing cookies with your consent. See our Cookie Policy for details.

---

## 7. Children's Privacy

TubeScribed is not directed to children under 13. We do not knowingly collect personal information from children under 13.

---

## 8. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a notice on our website.

---

## 9. Advertising and Tracking

TubeScribed uses the following advertising and tracking technologies:

**Google Analytics 4 (GA4):** We use GA4 to analyze website traffic and user behavior. Data is processed by Google Inc. You can opt out at [tools.google.com/dlpage/gaoptout](https://tools.google.com/dlpage/gaoptout).

**Meta Pixel:** We may use the Meta Pixel to measure the effectiveness of our Facebook and Instagram advertising, build custom audiences, and retarget website visitors. Data is processed by Meta Platforms Inc. You can opt out of interest-based advertising at [www.youronlinechoices.eu](https://www.youronlinechoices.eu) or [www.aboutads.info/choices](https://www.aboutads.info/choices).

**Google Ads:** We use Google Ads conversion tracking to measure ad performance. You can opt out at [myaccount.google.com/data-and-privacy](https://myaccount.google.com/data-and-privacy).

You can control cookie preferences at any time using the cookie consent banner at the bottom of our website. Declining tracking cookies will prevent these technologies from collecting your data.

---

## 10. Contact Us

For privacy-related questions or to exercise your rights:

Email: privacy@tubescribed.com
TubeScribed
support@tubescribed.com
`;

export default function PrivacyPolicyPage() {
  return <LegalPageLayout title="Privacy Policy" lastUpdated="March 1, 2025" content={content} />;
}
