
// Add missing React import to fix namespace error
import React from 'react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  category: 'Instagram' | 'YouTube' | 'General';
  isAi?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolContent {
  title: string;
  subtitle: string;
  longFormContent: string;
  faqs: FAQItem[];
}