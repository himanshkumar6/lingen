
import React, { useEffect } from 'react';

interface SchemaProps {
  type: 'SoftwareApplication' | 'Article' | 'FAQPage';
  data: any;
}

export const JsonLd: React.FC<SchemaProps> = ({ type, data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const content = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };
    script.innerHTML = JSON.stringify(content);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
};
