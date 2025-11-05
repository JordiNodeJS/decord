// Script to download images from the original DECORD website
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const baseUrl = "https://ld-wt73.template-help.com/tf/decord_v1/";

// Images to download
const imagesToDownload = [
  // Hero
  {
    url: "images/home-01-720x900.jpg",
    dest: "public/images/hero/home-01-720x900.png",
  },

  // Gallery
  {
    url: "images/home-02-800x1200.jpg",
    dest: "public/images/gallery/home-02-800x1200.jpg",
  },
  {
    url: "images/home-03-1200x800.jpg",
    dest: "public/images/gallery/home-03-1200x800.jpg",
  },
  {
    url: "images/home-04-800x1200.jpg",
    dest: "public/images/gallery/home-04-800x1200.jpg",
  },
  {
    url: "images/home-05-1200x800.jpg",
    dest: "public/images/gallery/home-05-1200x800.jpg",
  },
  {
    url: "images/home-06-1200x800.jpg",
    dest: "public/images/gallery/home-06-1200x800.jpg",
  },

  // Events (we'll use gallery images for now)
  {
    url: "images/event-01-770x480.jpg",
    dest: "public/images/events/event-01.jpg",
  },
  {
    url: "images/event-02-770x480.jpg",
    dest: "public/images/events/event-02.jpg",
  },
  {
    url: "images/event-03-770x480.jpg",
    dest: "public/images/events/event-03.jpg",
  },

  // Blog
  { url: "images/post-01-770x360.jpg", dest: "public/images/blog/post-01.jpg" },
  { url: "images/post-02-770x360.jpg", dest: "public/images/blog/post-02.jpg" },
  { url: "images/post-03-770x360.jpg", dest: "public/images/blog/post-03.jpg" },

  // About
  {
    url: "images/about-01-570x703.jpg",
    dest: "public/images/about/about-01.jpg",
  },
  {
    url: "images/about-02-570x703.jpg",
    dest: "public/images/about/about-02.jpg",
  },
];

function downloadImage(imageUrl, destPath) {
  return new Promise((resolve, reject) => {
    const fullUrl = new URL(imageUrl, baseUrl).href;
    const protocol = fullUrl.startsWith("https") ? https : http;

    // Create directory if it doesn't exist
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(destPath);

    protocol
      .get(fullUrl, (response) => {
        if (response.statusCode !== 200) {
          reject(
            new Error(`Failed to download ${fullUrl}: ${response.statusCode}`)
          );
          return;
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`✓ Downloaded: ${imageUrl} -> ${destPath}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
  });
}

async function downloadAll() {
  console.log("Starting image download...\n");

  for (const image of imagesToDownload) {
    try {
      await downloadImage(image.url, image.dest);
    } catch (error) {
      console.error(`✗ Error downloading ${image.url}:`, error.message);
    }
  }

  console.log("\n✓ Image download complete!");
}

downloadAll().catch(console.error);
