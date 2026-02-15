import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import { blogPosts } from "./data/blogData";

const baseUrl = "https://linkgen.in";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    {
      name: "generate-seo-files",
      apply: "build",
      closeBundle() {
        const distPath = path.resolve(process.cwd(), "dist");
        if (!fs.existsSync(distPath)) return;

        const staticRoutes = [
          "/",
          "/blog",
          "/contact",
          "/about",
          "/privacy-policy",
          "/terms",
          "/disclaimer",
        ];

        const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

        const allRoutes = [...staticRoutes, ...blogRoutes];

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
  )
  .join("")}
</urlset>`;

        fs.writeFileSync(path.join(distPath, "sitemap.xml"), sitemap);

        const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

        fs.writeFileSync(path.join(distPath, "robots.txt"), robots);

        console.log("✅ Sitemap & robots generated successfully");
      },
    },
  ],

  build: {
    outDir: "dist",
  },
});
