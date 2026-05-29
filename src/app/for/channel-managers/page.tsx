import type { Metadata } from "next";
import { ChannelManagersPage } from "@/components/ChannelManagersPage";

export const metadata: Metadata = {
  title: "TubeScribed for Channel Managers — Process Multiple YouTube Channels at Scale",
  description:
    "Manage content repurposing across multiple YouTube channels with brand profiles for each creator. TubeScribed is built for channel managers handling 3-15 active YouTube channels.",
  alternates: {
    canonical: "https://www.tubescribed.com/for/channel-managers",
  },
};

export default function ForChannelManagersPage() {
  return <ChannelManagersPage />;
}
