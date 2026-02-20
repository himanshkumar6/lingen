"use client";

import React from 'react';
import { APP_NAME, SUPPORT_EMAIL } from '@/constants';
import { Container } from '@/components/Layout/Container';

interface LegalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | 'contact' | 'about';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    disclaimer: 'Disclaimer',
    contact: 'Contact Support',
    about: 'About Us'
  };

  return (
    <Container className="py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-16 rounded-3xl shadow-sm">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-10 border-b border-border pb-6">
          {titles[type]}
        </h1>

        <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none prose-optimal">
          {type === 'contact' ? (
            <div className="space-y-8 text-muted-foreground not-prose animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-base md:text-lg">
                We appreciate your feedback and are happy to assist with any questions regarding our tools or website experience.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 space-y-4">
                  <h4 className="font-bold text-foreground text-lg md:text-xl">Technical Support</h4>
                  <p className="text-sm md:text-base">
                    For technical issues, bug reports, or general inquiries, please reach out via email.
                  </p>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-block text-primary font-bold hover:underline">
                    {SUPPORT_EMAIL}
                  </a>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 space-y-4">
                  <h4 className="font-bold text-foreground text-lg md:text-xl">Response Time</h4>
                  <p className="text-sm md:text-base">
                    We typically respond within <span>24–48 business hours</span>.
                  </p>
                </div>
              </div>
            </div>
          ) : type === 'about' ? (
            <div className="space-y-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-base md:text-lg">
                Welcome to <span className="text-foreground font-bold">{APP_NAME}</span>, a suite of productivity tools designed for digital creators and marketers.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-base md:text-lg">
                Our mission is to simplify content optimization by providing accessible tools for SEO research,
                metadata analysis, and creator productivity. We aim to support creators in making informed decisions.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-foreground">How We Operate</h2>
              <p className="text-base md:text-lg">
                Our platform provides research and productivity tools for informational purposes.
                We do not guarantee rankings, monetization approval, or specific growth results.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-foreground">Advertising Transparency</h2>
              <p className="text-base md:text-lg">
                To keep our tools free, we display advertisements through partners such as Google AdSense.
                These ads help support server and development costs while allowing users to access our tools at no charge.
              </p>
            </div>
          ) : type === 'privacy' ? (
            <div className="space-y-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <p>
                Your privacy is important to us. This Privacy Policy explains how <span className="text-foreground font-bold">{APP_NAME}</span> collects, uses, and safeguards information when you use our website.
              </p>

              <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
              <p>
                We do not require account registration and do not collect personally identifiable information such as names,
                payment information, or addresses.
                We may collect limited non-personal information such as browser type, device type, and usage statistics
                to improve website performance.
              </p>

              <h2 className="text-2xl font-bold text-foreground">2. Cookies & Advertising</h2>
              <p>
                Our website uses cookies to enhance user experience and serve relevant advertisements.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span>Google AdSense:</span> We use Google AdSense to display ads.
                  Google may use cookies to serve ads based on prior visits to this and other websites.
                  Users may opt out of personalized advertising by visiting Google Ads Settings.
                </li>
                <li>
                  <span>Analytics:</span> We may use analytics tools to understand website traffic and improve user experience.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground">3. Data Security</h2>
              <p>
                We implement reasonable security measures to protect information.
                However, no internet transmission is completely secure.
              </p>

              <h2 className="text-2xl font-bold text-foreground">4. Your Rights</h2>
              <p>
                Depending on your location (including California under CCPA or regions under GDPR),
                you may have rights regarding your data. Since we do not store personal user accounts,
                most preferences can be managed through your browser cookie settings.
              </p>

              <h2 className="text-2xl font-bold text-foreground">5. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party platforms such as YouTube or Instagram.
                We are not responsible for their privacy practices.
              </p>
            </div>
          ) : type === 'disclaimer' ? (
            <div className="space-y-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold text-foreground">1. Informational Purpose</h2>
              <p>
                All tools and content provided on <span className="text-foreground font-bold">{APP_NAME}</span> are for informational and educational purposes only.
                We do not guarantee specific SEO rankings, monetization approval, or platform growth.
              </p>

              <h2 className="text-2xl font-bold text-foreground">2. No Professional Advice</h2>
              <p>
                The information on this website does not constitute legal, financial, or professional advice.
                Always consult qualified professionals regarding your specific situation.
              </p>

              <h2 className="text-2xl font-bold text-foreground">3. Platform Responsibility</h2>
              <p>
                Users are responsible for complying with the policies of platforms such as Google, YouTube, Instagram, and TikTok.
                We are not responsible for account suspensions, removals, or third-party platform decisions.
              </p>

              <h2 className="text-2xl font-bold text-foreground">4. Advertising Disclosure</h2>
              <p>
                This website displays advertisements through Google AdSense and similar partners.
                Advertising revenue helps us maintain and improve our free tools.
              </p>
            </div>
          ) : (
            <div className="space-y-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing <span className="text-foreground font-bold">{APP_NAME}</span>, you agree to comply with these Terms of Service and applicable laws.
              </p>

              <h2 className="text-2xl font-bold text-foreground">2. Permitted Use</h2>
              <p>
                You may use our tools for lawful personal or commercial content creation purposes.
                You agree not to misuse the platform for spam, deceptive practices, or policy violations.
              </p>

              <h2 className="text-2xl font-bold text-foreground">3. Intellectual Property</h2>
              <p>
                All original branding, content, and tools on this website remain the property of {APP_NAME}.
              </p>

              <h2 className="text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
              <p>
                We are not liable for indirect, incidental, or consequential damages resulting from the use of our website or tools.
              </p>

              <h2 className="text-2xl font-bold text-foreground">5. Updates</h2>
              <p>
                We reserve the right to update these terms at any time.
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Legal;
