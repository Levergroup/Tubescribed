import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";
import { productSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Simple, Honest Pricing for YouTube Transcript AI",
  description:
    "TubeScribed pricing: Free run, Pro ($19/mo), and Agency ($49/mo). One transcript saves 45+ minutes. Pays for itself on day one.",
  path: "/pricing",
});

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema()) }}
      />
      {children}
    </>
  );
}
