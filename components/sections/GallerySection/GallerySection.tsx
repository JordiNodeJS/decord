"use client";

import { useState } from "react";
import ArtworkCard from "@/components/ui/ArtworkCard/ArtworkCard";
import Link from "next/link";
import styles from "./GallerySection.module.css";

// Datos de ejemplo de obras de arte
const artworksData = [
  {
    id: 1,
    title: "EL PODER DEL ÁTOMO",
    artist: "Frank Anderson",
    year: "2016",
    category: "Fotorrealismo",
    image: "/images/gallery/artwork-1.jpg",
  },
  {
    id: 2,
    title: "CUBOS",
    artist: "Emma Smith",
    year: "2018",
    category: "Abstracto",
    image: "/images/gallery/artwork-2.jpg",
  },
  {
    id: 3,
    title: "ESCALERAS",
    artist: "Sam Turner",
    year: "2020",
    category: "Surrealismo",
    image: "/images/gallery/artwork-3.jpg",
  },
  {
    id: 4,
    title: "REFLEXIÓN",
    artist: "María González",
    year: "2019",
    category: "Anamorfismo",
    image: "/images/gallery/artwork-4.jpg",
  },
  {
    id: 5,
    title: "DIMENSIONES",
    artist: "Carlos Ruiz",
    year: "2021",
    category: "Hiperrealismo",
    image: "/images/gallery/artwork-5.jpg",
  },
  {
    id: 6,
    title: "GEOMETRÍA",
    artist: "Ana Martínez",
    year: "2022",
    category: "Abstracto",
    image: "/images/gallery/artwork-6.jpg",
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
