import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pricing — Simple, Honest Pricing",
  description:
    "TubeScribed pricing: Free, Pro ($9/mo), and Agency ($29/mo). One transcript saves 45+ minutes. Pays for itself on day one.",
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
