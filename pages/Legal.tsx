import React from 'react';
import { APP_NAME, SUPPORT_EMAIL } from '../constants';
import { Container } from '../components/Layout/Container';

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
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-16 rounded-3xl border border-border/40 shadow-sm backdrop-blur-sm">

        <h1 className="text-4xl font-black tracking-tight text-foreground mb-10 border-b border-border pb-6">
          {titles[type]}
        </h1>

        {type === 'contact' ? (

          <div className="space-y-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-lg">
              We appreciate your feedback and are happy to assist with any questions regarding our tools or website experience.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 space-y-4">
                <h4 className="font-bold text-foreground text-xl">Technical Support</h4>
                <p>
                  For technical issues, bug reports, or general inquiries, please reach out via email.
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-block text-primary font-bold hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>

              <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 space-y-4">
                <h4 className="font-bold text-foreground text-xl">Response Time</h4>
                <p>
                  We typically respond within 24–48 business hours.
                </p>
              </div>
            </div>
          </div>

        ) : (

          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* ABOUT */}
            {type === 'about' && (
              <>
                <p className="text-lg text-muted-foreground">
                  Welcome to <span className="text-foreground font-bold">{APP_NAME}</span>, a suite of productivity tools designed for digital creators and marketers.
                </p>

                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="text-muted-foreground">
                  Our mission is to simplify content optimization by providing accessible tools for SEO research,
                  metadata analysis, and creator productivity.
                </p>

                <h2 className="text-2xl font-bold text-foreground">How We Operate</h2>
                <p className="text-muted-foreground">
                  Our platform provides research and productivity tools for informational purposes.
                  We do not guarantee rankings, monetization approval, or specific growth results.
                </p>

                <h2 className="text-2xl font-bold text-foreground">Advertising Transparency</h2>
                <p className="text-muted-foreground">
                  To keep our tools free, we display advertisements through partners such as Google AdSense.
                </p>
              </>
            )}

            {/* PRIVACY */}
            {type === 'privacy' && (
              <>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <p className="text-muted-foreground">
                  This Privacy Policy explains how <span className="text-foreground font-bold">{APP_NAME}</span> collects,
                  uses, and safeguards information when you use our website.
                </p>

                <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We do not require account registration and do not collect personally identifiable information.
                </p>

                <h2 className="text-2xl font-bold text-foreground">2. Cookies & Advertising</h2>
                <p className="text-muted-foreground">
                  Our website uses cookies to enhance user experience and serve relevant advertisements.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Google AdSense: We use Google AdSense to display ads.</li>
                  <li>Analytics: We may use analytics tools to understand website traffic.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground">3. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement reasonable security measures to protect information.
                </p>

                <h2 className="text-2xl font-bold text-foreground">4. Your Rights</h2>
                <p className="text-muted-foreground">
                  Depending on your location, you may have rights regarding your data.
                </p>

                <h2 className="text-2xl font-bold text-foreground">5. Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party platforms.
                </p>
              </>
            )}

            {/* DISCLAIMER */}
            {type === 'disclaimer' && (
              <>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-2xl font-bold text-foreground">1. Informational Purpose</h2>
                <p className="text-muted-foreground">
                  All tools and content provided on <span className="text-foreground font-bold">{APP_NAME}</span> are for informational purposes only.
                </p>

                <h2 className="text-2xl font-bold text-foreground">2. No Professional Advice</h2>
                <p className="text-muted-foreground">
                  The information on this website does not constitute legal or financial advice.
                </p>

                <h2 className="text-2xl font-bold text-foreground">3. Platform Responsibility</h2>
                <p className="text-muted-foreground">
                  Users are responsible for complying with platform policies.
                </p>

                <h2 className="text-2xl font-bold text-foreground">4. Advertising Disclosure</h2>
                <p className="text-muted-foreground">
                  This website displays advertisements through Google AdSense.
                </p>
              </>
            )}

            {/* TERMS */}
            {type === 'terms' && (
              <>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing <span className="text-foreground font-bold">{APP_NAME}</span>, you agree to comply with these Terms of Service.
                </p>

                <h2 className="text-2xl font-bold text-foreground">2. Permitted Use</h2>
                <p className="text-muted-foreground">
                  You may use our tools for lawful content creation purposes.
                </p>

                <h2 className="text-2xl font-bold text-foreground">3. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All original branding and tools remain the property of {APP_NAME}.
                </p>

                <h2 className="text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  We are not liable for indirect damages resulting from the use of our website.
                </p>

                <h2 className="text-2xl font-bold text-foreground">5. Updates</h2>
                <p className="text-muted-foreground">
                  We reserve the right to update these terms at any time.
                </p>
              </>
            )}

          </div>

        )}

      </div>
    </Container>
  );
};

export default Legal;