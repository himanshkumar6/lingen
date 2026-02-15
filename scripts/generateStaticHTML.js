import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Fix for __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = "https://linkgen.in";
const distPath = path.resolve(__dirname, "../dist");

// Helper: recursively get all HTML files
function getAllHtmlFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  let filePaths = [];

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      filePaths = filePaths.concat(getAllHtmlFiles(fullPath));
    } else if (fullPath.endsWith(".html")) {
      filePaths.push(fullPath);
    }
  }

  return filePaths;
}

function generateSitemap() {
  if (!fs.existsSync(distPath)) {
    console.log("❌ dist folder not found");
    return;
  }

  const htmlFiles = getAllHtmlFiles(distPath);  // Ensures all subpages are included.

  const routes = htmlFiles.map((filePath) => {
    const relativePath = path.relative(distPath, filePath);
    let route = "/" + relativePath.replace(/\\/g, "/");

    // Ensure you are handling index.html and any subdirectories
    route = route.replace("index.html", "");
    route = route.replace(".html", "");

    return route;
  });

  console.log("Found routes:", routes);  // Check what's being added here.

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
