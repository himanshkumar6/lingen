
import React from 'react';
import { 
  Instagram, 
  Youtube, 
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
    name: 'Instagram Bio Generator',
    description: 'Create professional and catchy Instagram bios using AI.',
    icon: <Sparkles className="w-6 h-6 text-pink-500" />,
    path: '/instagram-bio-generator',
    category: 'Instagram',
    isAi: true
  },
  {
    id: 'yt-thumbnail',
    name: 'YouTube Thumbnail Downloader',
    description: 'Grab high-quality thumbnails from any YouTube video instantly.',
    icon: <ImageIcon className="w-6 h-6 text-red-500" />,
    path: '/youtube-thumbnail-downloader',
    category: 'YouTube'
  },
  {
    id: 'yt-tags',
    name: 'YouTube Tag Extractor',
    description: 'Analyze competitors by extracting tags from any YouTube video.',
    icon: <Hash className="w-6 h-6 text-red-600" />,
    path: '/youtube-tag-extractor',
    category: 'YouTube'
  },
  {
    id: 'yt-desc',
    name: 'YouTube Description Extractor',
    description: 'Extract and analyze descriptions from any YouTube video for SEO research.',
    icon: <FileText className="w-6 h-6 text-red-400" />,
    path: '/youtube-description-extractor',
    category: 'YouTube'
  },
  {
    id: 'font-converter',
    name: 'Stylish Font Converter',
    description: 'Transform your text into cool, unicode-styled fonts for bios.',
    icon: <Type className="w-6 h-6 text-purple-600" />,
    path: '/font-converter',
    category: 'General'
  },
  {
    id: 'bio-counter',
    name: 'Bio Character Counter',
    description: 'Keep your bios within platform limits with real-time counting.',
    icon: <AlignLeft className="w-6 h-6 text-blue-500" />,
    path: '/character-counter',
    category: 'General'
  },
  {
    id: 'anime-name',
    name: 'Anime Name Generator',
    description: 'Generate unique anime-style names for your brand or OC.',
    icon: <Smile className="w-6 h-6 text-orange-500" />,
    path: '/anime-name-generator',
    category: 'General',
    isAi: true
  }
];

export const SEO_TEMPLATES = {
  home: {
    title: "LinkGen.in | Free Creator Tools for YouTube & Instagram",
    description: "LinkGen.in offers premium-quality free tools for creators. Generate Instagram bios, download YouTube thumbnails, extract tags, and more."
  },
  igBio: {
    title: "AI Instagram Bio Generator | Creative & Professional Bios",
    description: "Skyrocket your Instagram profile's engagement with our free AI Instagram Bio Generator. Create personalized bios based on your niche in seconds."
  },
  ytThumbnail: {
    title: "YouTube Thumbnail Downloader | Full HD High Quality",
    description: "Download YouTube thumbnails in various qualities including Max Res (1080p), High Def (720p), and more. Simply paste the link."
  }
};
