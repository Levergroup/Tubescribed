import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "For Business Coaches — Document Your Methodology in SOPs",
  description:
    "TubeScribed for coaches. Turn your coaching videos into branded SOPs automatically. Your methodology, documented, in your voice.",
};

export default function ForCoachesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
