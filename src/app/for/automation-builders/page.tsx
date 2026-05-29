import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AutomationBuildersPage } from "@/components/AutomationBuildersPage";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for Automation Builders — YouTube Transcription in Any Workflow",
  description:
    "Add YouTube transcription and AI content generation to any Zapier, Make, or n8n workflow. TubeScribed processes any YouTube URL and returns clean transcripts and 15 content types via API.",
  path: "/for/automation-builders",
});

export default function ForAutomationBuildersPage() {
  return <AutomationBuildersPage />;
}
