import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_URL, SITE_NAME } from "@/data/site-config";
import { localBusinessJsonLd } from "@/lib/schema";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Café in Emly, Tipperary`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "An independent café and bakeshop in Emly, County Tipperary, serving homemade baking, coffee and simple, honest food.",
  keywords: [
    "Seasons Café",
    "Seasons Bakeshop",
    "café Emly",
    "bakery Tipperary",
    "coffee shop Emly",
    "Emly County Tipperary",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Café in Emly, Tipperary`,
    description:
      "An independent café and bakeshop in Emly, County Tipperary, serving homemade baking, coffee and simple, honest food.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Café in Emly, Tipperary`,
    description:
      "An independent café and bakeshop in Emly, County Tipperary, serving homemade baking, coffee and simple, honest food.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf5ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IE" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/*
          LocalBusiness structured data — see src/lib/schema.ts.
          Only fields marked `verified: true` in src/data/site-config.ts
          are ever emitted here, so this never publishes invented
          opening hours, phone numbers, or ratings.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-cream-100 font-sans text-charcoal-800 antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        {/*
          tabIndex={-1} makes the skip link above actually move keyboard
          focus here (not just scroll position) — without it, <main> isn't
          focusable and focus falls back to <body>, so a keyboard user's
          next Tab press would jump back to the top of the page instead of
          continuing through the page content.
        */}
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
