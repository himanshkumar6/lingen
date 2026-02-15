import fs from 'fs'
import path from 'path'

// Static base URL for your site
const baseUrl = 'https://linkgen.in';

// Path to the output folder where build files are located
const distPath = path.resolve(__dirname, 'dist');

// Helper function to get all HTML files from a directory
function getAllHtmlFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  let filePaths = [];

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    // If the file is a directory, recurse into it
    if (stat.isDirectory()) {
      filePaths = filePaths.concat(getAllHtmlFiles(filePath));
    } else if (filePath.endsWith('.html')) {
      // Only include .html files
      filePaths.push(filePath);
    }
  });

  return filePaths;
}

// Function to generate the sitemap
function generateSitemap() {
  // Step 1: Get all HTML files in the dist directory
  const htmlFiles = getAllHtmlFiles(distPath);

  // Step 2: Map the HTML file paths to URLs
  const routes = htmlFiles.map(filePath => {
    const relativePath = path.relative(distPath, filePath);
    const url = `/${relativePath.replace(/\\/g, '/').replace(/\.html$/, '')}`;
    return url;
  });

  // Step 3: Generate the sitemap XML content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(route => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `)
      .join('')}
  </urlset>`;

  // Step 4: Write the sitemap.xml file in the dist folder
  fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
