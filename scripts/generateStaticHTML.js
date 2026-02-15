import fs from "fs-extra";
import path from "path";
import puppeteer from "puppeteer";
import { blogPosts } from "../data/blogData.ts"; // adjust path if needed

const baseUrl = "http://localhost:4173"; // vite preview default
const distPath = path.resolve("dist");

async function generate() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const routes = [
    "/",
    "/blog",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  for (const route of routes) {
    const url = baseUrl + route;
    console.log("Prerendering:", url);

    await page.goto(url, {
      waitUntil: "networkidle0",
    });

    const html = await page.content();

    const filePath =
      route === "/"
        ? path.join(distPath, "index.html")
        : path.join(distPath, route, "index.html");

    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, html);

    console.log("Generated:", filePath);
  }

  await browser.close();
}

generate();
