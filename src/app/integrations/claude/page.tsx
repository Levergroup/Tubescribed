import type { Metadata } from "next";
import { ClaudeIntegrationPage } from "@/components/ClaudeIntegrationPage";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { CLAUDE_FAQS, CLAUDE_STEPS } from "@/lib/integrations";

export const metadata: Metadata = buildMetadata({
  title: "Use TubeScribed Inside Claude — YouTube Transcripts in Claude (MCP Connector)",
  description:
    "Add TubeScribed to Claude as a connector. Claude can then transcribe any captioned YouTube video and turn it into SOPs, blog posts and email sequences right in the chat. One-minute setup.",
  path: "/integrations/claude",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to add TubeScribed to Claude",
  description: "Connect TubeScribed to Claude so Claude can transcribe YouTube videos and generate business assets.",
  totalTime: "PT1M",
  step: CLAUDE_STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
};

export default function ClaudeIntegrationRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(CLAUDE_FAQS)) }} />
      <ClaudeIntegrationPage />
    </>
  );
}
