import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://linkgen.in";

  const staticRoutes = [
    "",
    "/instagram-bio-generator",
    "/youtube-thumbnail-downloader",
    "/youtube-tag-extractor",
    "/youtube-description-extractor",
    "/font-converter",
    "/character-counter",
    "/anime-name-generator",
    "/anime-multiverse-generator",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/contact",
    "/about",
    "/blog",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
  }));

  return [...staticUrls, ...blogUrls];
}
