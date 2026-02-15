import path from "path";
import fs from "fs";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import prerender from "vite-prerender-plugin";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  const appRoutes = [
    "/",
    "/anime-name-generator",
    "/instagram-bio-generator",
    "/blog",
    "/contact",
    "/about",
    "/privacy-policy",
    "/terms",
  ];

  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },

    plugins: [
      react(),
      tailwindcss(),

      // ✅ PRERENDER FOR SEO
      prerender({
        staticDir: path.resolve(__dirname, "dist"),
        routes: appRoutes,
      }),

      // ✅ AUTO SITEMAP GENERATOR
      {
        name: "generate-sitemap",
        apply: "build",
        closeBundle: () => {
          const distPath = path.resolve(__dirname, "dist");
          const baseUrl = "https://linkgen.in";

          const pages = fs
            .readdirSync(distPath)
            .filter((file) => file.endsWith(".html"));

          const urls = pages.map((file) => {
            if (file === "index.html") return `${baseUrl}/`;
            return `${baseUrl}/${file.replace(".html", "")}`;
          });

          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
  )
  .join("")}
</urlset>`;

          fs.writeFileSync(path.join(distPath, "sitemap.xml"), sitemap);
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

    // ❌ REMOVE process.env define (unsafe for frontend)
    // Use import.meta.env.VITE_* instead
  };
});
 