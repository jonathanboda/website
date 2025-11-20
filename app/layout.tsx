import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "./components/AppLayout";

export const metadata: Metadata = {
  title: "Elvenwood Interior - Luxury Design",
  description: "Experience luxury interior design with Elvenwood. Custom kitchen designs, bedroom transformations, and whole home renovations.",
  openGraph: {
    title: "Elvenwood Interior",
    description: "Luxury interior design and home transformations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
