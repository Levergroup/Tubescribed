import type { Metadata } from "next";
import { DevelopersPage } from "@/components/DevelopersPage";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { DEVELOPER_FAQS } from "@/lib/integrations";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed API — YouTube Transcripts and Business Assets in One Call",
  description:
    "REST API that turns any captioned YouTube video into a clean transcript, blog post, SOP or email sequence. Included in every plan: 10, 200 or 1,000 calls per month.",
  path: "/developers",
});

const apiSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TubeScribed API",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  url: "https://www.tubescribed.com/developers",
  description:
    "REST API and Claude connector that turns captioned YouTube videos into clean transcripts and business assets such as blog posts, SOPs and email sequences.",
  offers: [
    { "@type": "Offer", name: "Free Run (10 calls/month)", price: "0", priceCurrency: "USD" },
    { "@type": "Offer", name: "Pro (200 calls/month)", price: "19", priceCurrency: "USD" },
    { "@type": "Offer", name: "Agency (1,000 calls/month)", price: "49", priceCurrency: "USD" },
  ],
};

export default function DevelopersPageRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(apiSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(DEVELOPER_FAQS)) }} />
      <DevelopersPage />
    </>
  );
}
