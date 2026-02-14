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
      <div className="max-w-3xl mx-auto bg-card/50 p-8 md:p-16 rounded-3xl border border-border/40 shadow-sm backdrop-blur-sm">
        <h1 className="text-4xl font-black tracking-tight text-foreground mb-10 border-b border-border pb-6">
          {titles[type]}
        </h1>

        {type === 'contact' ? (
          <div className="space-y-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-lg">We value your feedback and are here to assist you with any questions or technical issues regarding our tools.</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 space-y-4">
                <h4 className="font-bold text-foreground text-xl">Technical Support</h4>
                <p>For bug reports or feature requests, please contact our dev team directly.</p>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-block text-primary font-bold hover:underline">{SUPPORT_EMAIL}</a>
              </div>
              <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 space-y-4">
                <h4 className="font-bold text-foreground text-xl">Response Time</h4>
                <p>We are a small, dedicated team. We typically respond to all inquiries within <strong>24-48 business hours</strong>.</p>
              </div>
            </div>
          </div>
        ) : type === 'about' ? (
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-lg">Welcome to <strong>{APP_NAME}</strong>, a premium suite of productivity tools designed specifically for the modern content creator economy.</p>

            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <p>Our goal is to automate the repetitive parts of content creation—like writing SEO-optimized bios, extracting tags, and formatting descriptions—so you can focus on what matters most: your art and your community.</p>

            <h2 className="text-2xl font-bold text-foreground">Monetization & Transparency</h2>
            <p>To keep our tools 100% free for users, we support our development and server costs through high-quality advertisements from partners like <strong>Google AdSense</strong>. We are committed to maintaining a clean, non-intrusive user experience while ensuring our platform remains sustainable.</p>

            <h2 className="text-2xl font-bold text-foreground">AI Implementation</h2>
            <p>We leverage cutting-edge AI models, including <strong>Google Gemini Pro</strong>, to provide the highest quality generators. We believe in "AI-Augmentation"—using technology to spark creativity rather than replace it.</p>
          </div>
        ) : type === 'privacy' ? (
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Your privacy is critically important to us. This Privacy Policy describes how <strong>{APP_NAME}</strong> collects, uses, and protects your information when you use our website.</p>

            <h2 className="text-2xl font-bold text-foreground">1. Information Collection</h2>
            <p>We do not require account registration or collect personally identifiable information (PII) like names or addresses. We collect non-personal data, such as browser type and tool usage statistics, to improve our services.</p>

            <h2 className="text-2xl font-bold text-foreground">2. Cookies & Advertising</h2>
            <p>We use cookies to personalize content and ads, and to analyze our traffic. We share information about your use of our site with our advertising and analytics partners.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google AdSense:</strong> Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and other sites on the Internet.</li>
              <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our website to improve user experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">3. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your information. However, please remember that no method of transmission over the internet is 100% secure.</p>

            <h2 className="text-2xl font-bold text-foreground">4. Your Rights</h2>
            <p>Depending on your location (e.g., GDPR in Europe, CCPA in California), you may have rights regarding your data. Since we do not store personal profiles, your data rights are largely handled by your local browser settings and clearing cookies.</p>
          </div>
        ) : type === 'disclaimer' ? (
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold text-foreground">1. Informational Purpose</h2>
            <p>All information and tools provided on <strong>{APP_NAME}</strong> are for informational and productivity purposes only. We make no guarantees regarding the performance or accuracy of AI-generated content.</p>

            <h2 className="text-2xl font-bold text-foreground">2. No Liability</h2>
            <p>Under no circumstances shall {APP_NAME} be liable for any direct, indirect, incidental, or consequential damages resulting from your use of our tools. This includes, but is not limited to, account suspensions or copyright issues on third-party platforms like YouTube, Instagram, or TikTok.</p>

            <h2 className="text-2xl font-bold text-foreground">3. External Links</h2>
            <p>Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies.</p>

            <h2 className="text-2xl font-bold text-foreground">4. Professional Advice</h2>
            <p>The content on this site is not intended to be a substitute for professional digital marketing or legal advice. Always seek the advice of a qualified professional regarding your specific situation.</p>
          </div>
        ) : (
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2 className="text-2xl font-bold text-foreground">1. Terms</h2>
            <p>By accessing <strong>{APP_NAME}</strong>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

            <h2 className="text-2xl font-bold text-foreground">2. Use License</h2>
            <p>Permission is granted to temporarily use our tools for personal or commercial content creation. This is the grant of a license, not a transfer of title.</p>

            <h2 className="text-2xl font-bold text-foreground">3. User Conduct</h2>
            <p>You agree not to use our tools for generating spam, deceptive content, or anything that violates the community guidelines of platforms like Google, YouTube, or Instagram.</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Legal;
