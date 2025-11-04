"use client";

import { useState } from "react";
import ArtworkCard from "@/components/ui/ArtworkCard/ArtworkCard";
import Link from "next/link";
import styles from "./GallerySection.module.css";

// Datos de ejemplo de obras de arte
const artworksData = [
  {
    id: 1,
    title: "THE POWER OF ATOM",
    artist: "Frank Anderson",
    year: "2016",
    category: "Fotorrealismo",
    image: "/images/gallery/artwork-02.jpg",
  },
  {
    id: 2,
    title: "CUBES",
    artist: "Emma Smith",
    year: "2018",
    category: "Abstracto",
    image: "/images/gallery/artwork-03.jpg",
  },
  {
    id: 3,
    title: "STAIRS",
    artist: "Sam Turner",
    year: "2020",
    category: "Surrealismo",
    image: "/images/gallery/artwork-05.jpg",
  },
  {
    id: 4,
    title: "CONFRONTATION",
    artist: "Johnny Lee",
    year: "2019",
    category: "Anamorfismo",
    image: "/images/gallery/artwork-04.jpg",
  },
  {
    id: 5,
    title: "LINES & PUZZLES",
    artist: "Kathleen Davis",
    year: "2021",
    category: "Hiperrealismo",
    image: "/images/gallery/artwork-06.jpg",
  },
];

const categories = [
  "TODAS LAS OBRAS",
  "ANAMORFISMO",
  "FOTORREALISMO",
  "SURREALISMO",
  "HIPERREALISMO",
  "OBRAS ABSTRACTAS",
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("TODAS LAS OBRAS");

  const filteredArtworks =
    activeCategory === "TODAS LAS OBRAS"
      ? artworksData
      : artworksData.filter((artwork) => {
          const categoryMap: Record<string, string> = {
            ANAMORFISMO: "Anamorfismo",
            FOTORREALISMO: "Fotorrealismo",
            SURREALISMO: "Surrealismo",
            HIPERREALISMO: "Hiperrealismo",
            "OBRAS ABSTRACTAS": "Abstracto",
          };
          return artwork.category === categoryMap[activeCategory];
        });

  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__header}>
          <span className={styles.gallery__label}>GALERÍA</span>
        </div>

        <div className={styles.gallery__categories}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.gallery__categoryBtn} ${
                activeCategory === category
                  ? styles["gallery__categoryBtn--active"]
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.gallery__grid}>
          {filteredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        <div className={styles.gallery__cta}>
          <Link href="/gallery" className={styles.gallery__ctaButton}>
            VER TODAS LAS OBRAS
          </Link>
        </div>
      </div>
    </section>
  );
}
