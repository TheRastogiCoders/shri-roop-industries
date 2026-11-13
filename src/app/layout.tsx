import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Sans,
  Noto_Sans_Devanagari,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import { company, jsonLd } from "@/lib/site";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const hindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-hindi",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.shortName} · Copper & Aluminium Scrap`,
    template: `%s · ${company.shortName}`,
  },
  description: company.description,
  applicationName: company.shortName,
  authors: [{ name: company.legalName, url: siteUrl }],
  creator: company.legalName,
  publisher: company.legalName,
  keywords: [
    "Shri Roop Industries",
    "copper scrap Panipat",
    "aluminium scrap Panipat",
    "brass scrap Haryana",
    "millberry copper",
    "non-ferrous scrap",
    "GT Karnal Road scrap yard",
  ],
  category: "business",
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": absoluteUrl("/index.md"),
      "text/plain": [
        { url: absoluteUrl("/llms.txt"), title: "llms.txt" },
        { url: absoluteUrl("/llms-full.txt"), title: "llms-full.txt" },
      ],
    },
  },
  openGraph: {
    title: `${company.shortName} · Copper & Aluminium Scrap`,
    description: company.description,
    url: siteUrl,
    locale: "en_IN",
    type: "website",
    siteName: company.shortName,
    images: [
      {
        url: "/images/shri-roop-logo-v3.png",
        width: 1541,
        height: 471,
        alt: company.legalName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} · Copper & Aluminium Scrap`,
    description: company.description,
    images: ["/images/shri-roop-logo-v3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi, New Delhi",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2414",
  colorScheme: "light",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${hindi.variable}`}
    >
      <head>
        <link rel="describedby" href="/llms.txt" title="llms.txt" />
        <link rel="author" type="text/plain" href="/humans.txt" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
