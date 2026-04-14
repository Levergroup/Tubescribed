import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "For Marketing Agencies — Content Repurposing at Scale",
  description:
    "TubeScribed for agencies. Save each client as a brand profile. Deliver content in their voice automatically. One tool, every client.",
};

export default function ForAgenciesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
