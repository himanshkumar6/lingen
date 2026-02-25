import "@/index.css";
import type { Metadata } from "next";
import Snowfall from "@/components/Snowfall";
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
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Anti-Flicker Script: Must run BEFORE React hydrates or any UI paints */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let isDark = false;
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || theme === 'light') {
                  isDark = theme === 'dark';
                } else {
                  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                }
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />

        {/* Snow Background Layer */}
        <Snowfall />

        {/* Main App Layer */}
        <ThemeProvider>
          <div className="relative z-10 flex flex-col min-h-screen">

            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />

          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}