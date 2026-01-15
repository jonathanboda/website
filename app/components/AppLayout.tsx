'use client';

import Header from './Header';
import Footer from './Footer';
import ScrollingWatermark from './ScrollingWatermark';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">
      <ScrollingWatermark />
      <Header />
      <main className="flex-1 pt-16 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
