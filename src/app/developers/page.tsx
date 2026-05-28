import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { DevelopersPage } from "@/components/DevelopersPage";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for Developers — YouTube Transcription & Content API",
  description:
    "Add YouTube transcription and AI content generation to any app, agent, or workflow. REST API with JSON responses, brand profile support, and 15 output types. Join the waitlist.",
  path: "/developers",
});

export default function DevelopersPageRoute() {
  return <DevelopersPage />;
}
