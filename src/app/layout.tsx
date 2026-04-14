import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TubeScribed — Turn YouTube Videos Into Branded Business Assets",
    template: "%s | TubeScribed",
  },
  description:
    "TubeScribed turns any YouTube video into a clean transcript, branded SOP, blog post, email sequence, and more — in seconds. Free to start.",
  keywords: [
    "youtube transcript",
    "AI transcript tool",
    "youtube to SOP",
    "content repurposing tool",
    "branded transcript generator",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tubescribed.com",
    siteName: "TubeScribed",
    title: "TubeScribed — Turn YouTube Videos Into Branded Business Assets",
    description:
      "Paste a YouTube URL. Get a transcript, SOP, blog post, and more — in seconds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TubeScribed — Turn YouTube Videos Into Branded Business Assets",
    description:
      "Paste a YouTube URL. Get a transcript, SOP, blog post, and more — in seconds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-navy-900 text-navy-100 font-dm-sans antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
