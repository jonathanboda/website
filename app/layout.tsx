import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import AppLayout from "./components/AppLayout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elvenwood Interior - Luxury Design",
  description:
    "Experience luxury interior design with Elvenwood. Custom kitchen designs, bedroom transformations, and whole home renovations.",
  keywords: [
    "interior design",
    "luxury interiors",
    "home renovation",
    "kitchen design",
    "modular furniture",
    "custom interiors",
  ],
  authors: [{ name: "Elvenwood Interior" }],
  openGraph: {
    title: "Elvenwood Interior - Luxury Design",
    description: "Luxury interior design and home transformations",
    type: "website",
    locale: "en_US",
    siteName: "Elvenwood Interior",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvenwood Interior - Luxury Design",
    description: "Luxury interior design and home transformations",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <meta name="theme-color" content="#ff6b00" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-white text-gray-900 font-sans`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
