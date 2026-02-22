"use client";

import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PageLoader from "../PageLoader";
import { usePathname } from "next/navigation";

interface PageLayoutProps {
  children: React.ReactNode;
}

/**
 * Global Layout Wrapper
 * Centralizes standard page elements and layout guards.
 */
const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // Ensure window scrolls to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/10 selection:text-primary">
      <PageLoader />
      <Navbar />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
