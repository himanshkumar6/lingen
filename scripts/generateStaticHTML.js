import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your dist folder
const distPath = path.resolve(__dirname, "dist");
const baseUrl = "https://linkgen.in";

// This function scans directories and adds all HTML files
function getAllHtmlFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  let filePaths = [];

  // Loop through each file and folder
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively get HTML files from subdirectories
      filePaths = filePaths.concat(getAllHtmlFiles(fullPath));
    } else if (fullPath.endsWith(".html")) {
      filePaths.push(fullPath);
    }
  }

  return filePaths;
}

// Function to generate the sitemap
function generateSitemap() {
  if (!fs.existsSync(distPath)) {
    console.log("❌ dist folder not found");
    return;
  }

  const htmlFiles = getAllHtmlFiles(distPath); // Get all .html files recursively

  if (htmlFiles.length === 0) {
    console.log("❌ No HTML files found in the dist directory.");
    return;
  }

  const routes = htmlFiles.map((filePath) => {
    const relativePath = path.relative(distPath, filePath);
    let route = "/" + relativePath.replace(/\\/g, "/");

    // Remove 'index.html' or '.html' to match route paths
    route = route.replace("index.html", "");
    route = route.replace(".html", "");

    return route;
  });

  console.log("Found routes:", routes);  // Debug log for the routes

  // Create sitemap XML content
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

  // Write sitemap to the dist folder
  fs.writeFileSync(path.join(distPath, "sitemap.xml"), sitemap);

  console.log("✅ Sitemap generated successfully!");
}

// Run the function
generateSitemap();
