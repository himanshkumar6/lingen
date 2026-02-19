import "@/index.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme";

export const metadata: Metadata = {
  title: "LinkGen.in | Pro YouTube & Instagram Creator Tools",
  description:
    "Ultimate productivity suite for creators. AI Instagram bio generator, YouTube thumbnail downloader, SEO tag extractor, and more.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="saas-grid min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
