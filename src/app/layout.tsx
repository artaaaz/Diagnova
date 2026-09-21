import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#345DAB",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://diagnova.id"),
  title: {
    default: "DIAGNOVA — AI-Powered Laboratory Intelligence Platform",
    template: "%s | DIAGNOVA",
  },
  description:
    "Diagnova transforms laboratory data into clinical intelligence. End-to-end LIS, direct analyzer interfacing, auto-verification, and Nova AI copilot for modern hospitals and laboratories.",
  keywords: [
    "Laboratory Information System",
    "LIS Indonesia",
    "AI Laboratory Intelligence",
    "Nova AI",
    "SIMRS LIS Integration",
    "SATUSEHAT Lab",
    "HL7 ASTM Analyzer",
    "Diagnova",
  ],
  authors: [{ name: "Diagnova Healthcare Technologies" }],
  creator: "Diagnova",
  publisher: "Diagnova",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://diagnova.id",
    siteName: "DIAGNOVA",
    title: "DIAGNOVA — AI-Powered Laboratory Intelligence Platform",
    description:
      "From Results to Intelligence. The modern, clinical-grade laboratory operating system connecting people, specimens, instruments, and clinical decisions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DIAGNOVA Laboratory Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIAGNOVA — From Results to Intelligence",
    description: "AI-Powered Laboratory Intelligence Platform for modern hospitals and laboratories.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-[#CAE2F1] selection:text-[#0B1528]">
        {children}
      </body>
    </html>
  );
}
