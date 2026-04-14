import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TubeScribed vs Otter.ai — Which Is Better for YouTube Transcription?",
  description:
    "Comparing TubeScribed and Otter.ai for YouTube content repurposing. See pricing, features, and which tool is right for creators and agencies.",
};

export default function VsOtterLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
