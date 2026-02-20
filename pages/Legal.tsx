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
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="inline-block text-primary font-bold hover:underline"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 space-y-4">
                  <h4 className="font-bold text-foreground text-lg md:text-xl">Response Time</h4>
                  <p className="text-sm md:text-base">
                    We typically respond within 24–48 business hours.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-muted-foreground">
              {type === 'about' && (
                <>
                  <p className="text-base md:text-lg">
                    Welcome to <span className="text-foreground font-bold">{APP_NAME}</span>, a suite of productivity tools designed for digital creators and marketers.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Our Mission</h2>
                  <p className="text-base md:text-lg">
                    Our mission is to simplify content optimization by providing accessible tools for SEO research,
                    metadata analysis, and creator productivity.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-foreground">How We Operate</h2>
                  <p className="text-base md:text-lg">
                    Our platform provides research and productivity tools for informational purposes.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Advertising Transparency</h2>
                  <p className="text-base md:text-lg">
                    To keep our tools free, we display advertisements through partners such as Google AdSense.
                  </p>
                </>
              )}

              {type === 'privacy' && (
                <>
                  <p>Last updated: {new Date().toLocaleDateString()}</p>
                  <p>
                    This Privacy Policy explains how <span className="text-foreground font-bold">{APP_NAME}</span> collects,
                    uses, and safeguards information when you use our website.
                  </p>
                  <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
                  <p>We do not require account registration and do not collect personally identifiable information.</p>
                  <h2 className="text-2xl font-bold text-foreground">2. Cookies & Advertising</h2>
                  <p>Our website uses cookies to enhance user experience and serve relevant advertisements.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Google AdSense: We use Google AdSense to display ads.</li>
                    <li>Analytics: We may use analytics tools to understand website traffic.</li>
                  </ul>
                </>
              )}

              {type === 'disclaimer' && (
                <>
                  <p>Last updated: {new Date().toLocaleDateString()}</p>
                  <h2 className="text-2xl font-bold text-foreground">1. Informational Purpose</h2>
                  <p>All tools and content provided on <span className="text-foreground font-bold">{APP_NAME}</span> are for informational purposes only.</p>
                  <h2 className="text-2xl font-bold text-foreground">2. No Professional Advice</h2>
                  <p>The information on this website does not constitute legal or financial advice.</p>
                  <h2 className="text-2xl font-bold text-foreground">3. Platform Responsibility</h2>
                  <p>Users are responsible for complying with platform policies.</p>
                </>
              )}

              {type === 'terms' && (
                <>
                  <p>Last updated: {new Date().toLocaleDateString()}</p>
                  <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                  <p>By accessing <span className="text-foreground font-bold">{APP_NAME}</span>, you agree to comply with these Terms of Service.</p>
                  <h2 className="text-2xl font-bold text-foreground">2. Permitted Use</h2>
                  <p>You may use our tools for lawful content creation purposes.</p>
                  <h2 className="text-2xl font-bold text-foreground">3. Intellectual Property</h2>
                  <p>All original branding and tools remain the property of {APP_NAME}.</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Legal;