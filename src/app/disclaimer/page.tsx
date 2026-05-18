import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer — TubeScribed",
  description: "Important disclaimers regarding TubeScribed's results, testimonials, and performance claims.",
  path: "/disclaimer",
});

const content = `
## Disclaimer

**Last updated: May 2026**

---

## Results Disclaimer

The results, testimonials, time savings, and performance claims described on this website and in our advertising are illustrative examples only. Individual results will vary based on usage frequency, video content type, plan selected, and other factors. TubeScribed does not guarantee specific outcomes, time savings, or business results from using the service. Any figures mentioned (such as hours saved, VA costs replaced, or content output volumes) are estimates based on typical usage patterns and should not be interpreted as guarantees of the same results for every user.

---

## Testimonials Disclaimer

Testimonials displayed on this website reflect the experiences of individual users and may not represent the typical user experience. These testimonials are not intended to represent or guarantee that any current or future user will achieve the same or similar results.

---

## AI-Generated Content Disclaimer

TubeScribed uses artificial intelligence to generate content outputs including but not limited to blog posts, SOPs, email sequences, and social media content. AI-generated content may contain errors, inaccuracies, or require editing before publication. Users are responsible for reviewing, editing, and fact-checking all AI-generated outputs before use. TubeScribed is not responsible for any errors in AI-generated content or consequences arising from its use.

---

## Third-Party Services Disclaimer

TubeScribed integrates with third-party services including YouTube, OpenAI, Anthropic, and Stripe. We are not affiliated with, endorsed by, or sponsored by YouTube, Google, OpenAI, or Anthropic. Use of TubeScribed is subject to YouTube's Terms of Service. Users are responsible for ensuring they have appropriate rights to process any video content they submit.

---

## Affiliate and Commission Disclaimer

TubeScribed operates an affiliate program. Some links on this website may be affiliate links. If you click on an affiliate link and make a purchase, TubeScribed may receive a commission. This does not affect the price you pay or our editorial independence.

---

## Advertising Disclaimer

TubeScribed runs paid advertising on platforms including Google and Meta (Facebook/Instagram). Ads are clearly labeled as advertisements on those platforms. Our advertising complies with platform policies and applicable laws.

---

## Contact

For questions about these disclaimers contact: hello@tubescribed.com
`;

export default function DisclaimerPage() {
  return <LegalPageLayout title="Disclaimer" lastUpdated="May 2026" content={content} />;
}
