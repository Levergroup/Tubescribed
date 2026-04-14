import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TubeScribed vs Descript — Content Repurposing vs Video Editing",
  description:
    "Descript is a video editor with transcription. TubeScribed is a content repurposing machine. See which fits your workflow.",
};

export default function VsDescriptLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
