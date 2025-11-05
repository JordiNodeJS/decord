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
  {
    url: "images/news-01-570x480.jpg",
    dest: "public/images/blog/news-01-570x480.jpg",
  },
  {
    url: "images/news-02-570x700.jpg",
    dest: "public/images/blog/news-02-570x700.jpg",
  },
  {
    url: "images/news-03-570x570.jpg",
    dest: "public/images/blog/news-03-570x570.jpg",
  },
  {
    url: "images/news-04-570x800.jpg",
    dest: "public/images/blog/news-04-570x800.jpg",
  },
  {
    url: "images/news-05-570x480.jpg",
    dest: "public/images/blog/news-05-570x480.jpg",
  },
  {
    url: "images/news-06-570x390.jpg",
    dest: "public/images/blog/news-06-570x390.jpg",
  },

  // About - Main image
  {
    url: "images/about-01-570x790.jpg",
    dest: "public/images/about/about-01-570x790.jpg",
  },

  // About - Team members
  {
    url: "images/person-01-420x633.jpg",
    dest: "public/images/team/person-01-420x633.jpg",
  },
  {
    url: "images/person-02-570x774.jpg",
    dest: "public/images/team/person-02-570x774.jpg",
  },
  {
    url: "images/person-03-420x570.jpg",
    dest: "public/images/team/person-03-420x570.jpg",
  },
  {
    url: "images/person-04-420x570.jpg",
    dest: "public/images/team/person-04-420x570.jpg",
  },
  {
    url: "images/person-05-420x633.jpg",
    dest: "public/images/team/person-05-420x633.jpg",
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
