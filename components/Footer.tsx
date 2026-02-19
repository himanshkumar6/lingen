import React from "react";
import Link from "next/link";
import { APP_NAME, SUPPORT_EMAIL } from "../constants";

import { Container } from "./Layout/Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border mt-24 md:mt-32">
      <Container className="py-14 md:py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              {APP_NAME}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto sm:mx-0">
              Premium productivity tools for the modern content creator.
              Speed up your workflow on YouTube and Instagram with our
              suite of free, high-performance web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact
            </h4>
            <p className="text-sm text-muted-foreground">
              Questions? Reach out to us:
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
