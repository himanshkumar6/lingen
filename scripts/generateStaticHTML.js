import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, "../dist");
const baseUrl = "https://linkgen.in";

const routes = [
  "/",
  "/instagram-bio-generator",
  "/youtube-thumbnail-downloader",
  "/youtube-tag-extractor",
  "/youtube-description-extractor",
  "/font-converter",
  "/character-counter",
  "/anime-name-generator",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/contact",
  "/about",
  "/blog",

  // BLOG POSTS
  "/blog/how-to-write-a-bio-for-instagram",
  "/blog/how-to-change-youtube-shorts-thumbnail",
  "/blog/what-is-a-thumbnail",
  "/blog/what-are-tags",
];

function generateSitemap() {
  if (!fs.existsSync(distPath)) {
    console.log("❌ dist folder not found");
    return;
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
      .map(
        (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
      )
      .join("")}
</urlset>`;

  fs.writeFileSync(path.join(distPath, "sitemap.xml"), sitemap);
  console.log("✅ Sitemap generated successfully");
}

generateSitemap();
