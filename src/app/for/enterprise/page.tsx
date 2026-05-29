import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { EnterprisePage } from "@/components/EnterprisePage";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for Enterprise — Turn Video Training Libraries Into Searchable SOPs",
  description:
    "Convert your entire video training library into formatted SOPs, onboarding guides, and compliance documentation automatically. TubeScribed for enterprise teams.",
  path: "/for/enterprise",
});

export default function ForEnterprisePage() {
  return <EnterprisePage />;
}
