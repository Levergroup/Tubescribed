import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/CookieConsent";

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
  metadataBase: new URL("https://www.tubescribed.com"),
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
    url: "https://www.tubescribed.com",
    siteName: "TubeScribed",
    title: "TubeScribed — Turn YouTube Videos Into Branded Business Assets",
    description:
      "Paste a YouTube URL. Get a transcript, SOP, blog post, and more — in seconds.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "TubeScribed" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TubeScribed — Turn YouTube Videos Into Branded Business Assets",
    description:
      "Paste a YouTube URL. Get a transcript, SOP, blog post, and more — in seconds.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2FCXQH9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <CookieConsent />
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N2FCXQH9');
        `}</Script>
      </body>
    </html>
  );
}
