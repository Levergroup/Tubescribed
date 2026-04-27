import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ROICalculatorClient } from "@/components/ROICalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "YouTube Content ROI Calculator — How Much Is Manual Transcription Costing You?",
  description: "Calculate exactly how much time and money you're losing to manual YouTube transcription. See your ROI from switching to TubeScribed.",
  path: "/roi-calculator",
});

export default function ROICalculatorPage() {
  return <ROICalculatorClient />;
}
