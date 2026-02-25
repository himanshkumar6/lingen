import {
  Type,
  Hash,
  Image as ImageIcon,
  Sparkles,
  AlignLeft,
  Smile,
  Info,
  FileText
} from 'lucide-react';
import { Tool } from './types';

export const APP_NAME = "LinkGen.in";
export const SUPPORT_EMAIL = "support@linkgen.in";

export const TOOLS: Tool[] = [
  {
    id: 'ig-bio-gen',
    name: 'Instagram Bio Generator (Free) – Create Stylish & Professional Bios',
    description: 'Generate stylish, professional, and catchy Instagram bios instantly with our free Instagram bio generator. Create unique bios for personal, business, or creator profiles.',
    icon: <Sparkles className="w-6 h-6 text-pink-500" />,
    path: '/instagram-bio-generator',
    category: 'Instagram',
    isAi: true
  },
  {
    id: 'yt-thumbnail',
    name: 'YouTube Thumbnail Downloader (HD) – Download Video Thumbnails',
    description: 'Download high-quality YouTube thumbnails in HD from any video instantly. Free YouTube thumbnail downloader tool for creators and marketers.',
    icon: <ImageIcon className="w-6 h-6 text-red-500" />,
    path: '/youtube-thumbnail-downloader',
    category: 'YouTube'
  },
  {
    id: 'yt-tags',
    name: 'YouTube Tag Extractor – Extract Tags from Any Video',
    description: 'Extract and analyze YouTube video tags instantly. Use our free YouTube tag extractor for competitor research and SEO optimization.',
    icon: <Hash className="w-6 h-6 text-red-600" />,
    path: '/youtube-tag-extractor',
    category: 'YouTube'
  },
  {
    id: 'yt-desc',
    name: 'YouTube Description Extractor – Copy & Analyze Video Descriptions',
    description: 'Extract and analyze YouTube video descriptions easily. Free YouTube description extractor tool for SEO research and content optimization.',
    icon: <FileText className="w-6 h-6 text-red-400" />,
    path: '/youtube-description-extractor',
    category: 'YouTube'
  },
  {
    id: 'font-converter',
    name: 'Stylish Font Converter – Generate Cool Unicode Text',
    description: 'Convert normal text into stylish, fancy, and cool Unicode fonts instantly. Free font converter for Instagram bios, usernames, and social media.',
    icon: <Type className="w-6 h-6 text-purple-600" />,
    path: '/stylish-font-converter',
    category: 'General'
  },
  {
    id: 'bio-counter',
    name: 'Character Counter Tool – Count Words & Characters Online',
    description: 'Free online character counter tool to count words and characters instantly. Perfect for Instagram bios, tweets, and social media limits.',
    icon: <AlignLeft className="w-6 h-6 text-blue-500" />,
    path: '/character-counter',
    category: 'General'
  },
  {
    id: 'anime-name',
    name: 'Anime Name Generator (Free) – Create Random Anime Character Names',
    description: 'Generate unique anime names instantly with our free anime name generator. Create cool anime character names, usernames, and alter-ego identities in seconds.',
    icon: <Smile className="w-6 h-6 text-orange-500" />,
    path: '/ai-anime-name-generator',
    category: 'General',
    isAi: true
  },
  {
    id: 'anime-multiverse',
    name: 'Anime Name Generator (Free) – Create Random Anime Character Names',
    description: 'Generate unique anime names instantly with our free anime name generator. Create cool anime character names, usernames, and alter-ego identities in seconds.',
    icon: <Sparkles className="w-6 h-6 text-orange-600" />,
    path: '/anime-name-generator',
    category: 'General',
    isAi: true
  },
  {
    id: 'image-watermark-remover',
    name: 'Free AI Watermark Remover – High Quality Photo Cleanup',
    description: 'Instantly remove watermarks, logos, text, or unwanted objects from photos without quality loss. Our advanced AI ensures high-precision, professional results for free.',
    icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
    path: '/image-watermark-remover',
    category: 'General'
  }
];

export const SEO_TEMPLATES = {
  home: {
    title: "LinkGen.in | Free Creator Tools for YouTube, Instagram & More",
    description: "LinkGen.in offers premium-quality free tools for creators. Generate Instagram bios, download YouTube thumbnails, extract tags, create anime names, and more."
  },

  igBio: {
    title: "AI Instagram Bio Generator | Create Stylish & Professional Bios",
    description: "Create unique, stylish, and professional Instagram bios instantly with our free AI Instagram bio generator. Perfect for creators, influencers, and brands."
  },

  ytThumbnail: {
    title: "YouTube Thumbnail Downloader | Download HD Thumbnails Free",
    description: "Download YouTube video thumbnails in HD, Full HD, and Max resolution instantly. Free YouTube thumbnail downloader for creators and marketers."
  },

  ytTags: {
    title: "YouTube Tag Extractor | Extract Tags from Any Video",
    description: "Extract and analyze tags from any YouTube video instantly. Free YouTube tag extractor tool for competitor research and video SEO optimization."
  },

  ytDesc: {
    title: "YouTube Description Extractor | Copy Video Descriptions",
    description: "Extract and analyze YouTube video descriptions instantly. Free YouTube description extractor tool for SEO research and content optimization."
  },

  fontConverter: {
    title: "Stylish Font Converter | Generate Cool Unicode Text",
    description: "Convert normal text into stylish, fancy, and cool Unicode fonts instantly. Perfect for Instagram bios, usernames, and social media posts."
  },

  charCounter: {
    title: "Character Counter Tool | Count Words & Characters Online",
    description: "Free online character counter tool to count words and characters instantly. Perfect for Instagram bios, tweets, captions, and content writing."
  },

  animeName: {
    title: "Anime Name Generator (Free) – Create Random Anime Character Names",
    description: "Generate unique anime names instantly with our free anime name generator. Create cool anime character names, usernames, and alter-ego identities in seconds."
  }
};
