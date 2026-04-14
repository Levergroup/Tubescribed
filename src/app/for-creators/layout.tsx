import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "For YouTube Creators — Turn Videos Into Content",
  description:
    "TubeScribed for YouTube creators. Turn every video into a blog post, email sequence, and SOP — in 8 seconds. Free to start.",
};

export default function ForCreatorsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
