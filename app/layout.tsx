import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import SmoothScroll from "@/components/layout/SmoothScroll";
import JsonLd from "@/components/shared/JsonLd";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import { siteSchema } from "@/lib/schema";
import "lenis/dist/lenis.css";
import "./globals.css";

// Two typefaces only: Outfit for headings, Plus Jakarta Sans for body.
// Mapped to Tailwind's font-heading / font-sans in globals.css (@theme inline).
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "Robotic knee, partial knee and hip replacement and arthroscopy in Nashik with Dr. Vishal Kasliwal, fellowship-trained joint replacement surgeon.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  openGraph: {
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-800 antialiased">
        <JsonLd data={siteSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
        <SmoothScroll />
      </body>
    </html>
  );
}
