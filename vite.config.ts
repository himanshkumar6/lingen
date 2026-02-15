import path from "path";
import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // ✅ AUTO SITEMAP + ROBOTS GENERATOR
    {
      name: "generate-seo-files",
      apply: "build",
      closeBundle() {
        const distPath = path.resolve(__dirname, "dist");
        const baseUrl = "https://linkgen.in";

        if (!fs.existsSync(distPath)) return;

        const routes = [
          "/",
          "/anime-name-generator",
          "/instagram-bio-generator",
          "/blog",
          "/contact",
          "/about",
          "/privacy-policy",
          "/terms",
        ];

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
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

        const robots = `
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

        fs.writeFileSync(path.join(distPath, "robots.txt"), robots);
      },
    },
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
  },
});
