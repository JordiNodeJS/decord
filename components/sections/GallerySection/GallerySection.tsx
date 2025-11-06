"use client";

import { useState } from "react";
import ArtworkCard from "@/components/ui/ArtworkCard/ArtworkCard";
import Lightbox from "@/components/ui/Lightbox/Lightbox";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import Link from "next/link";
import styles from "./GallerySection.module.css";

// Datos de obras de arte del sitio original
const artworksData = [
  {
    id: 1,
    title: "THE POWER OF ATOM",
    artist: "Frank Anderson",
    year: "2016",
    category: "Fotorrealismo",
    image: "/images/gallery/home-02-800x1200.jpg",
  },
  {
    id: 2,
    title: "CUBES",
    artist: "Emma Smith",
    year: "2018",
    category: "Abstracto",
    image: "/images/gallery/home-03-1200x800.jpg",
  },
  {
    id: 3,
    title: "STAIRS",
    artist: "Sam Turner",
    year: "2020",
    category: "Surrealismo",
    image: "/images/gallery/home-05-1200x800.jpg",
  },
  {
    id: 4,
    title: "CONFRONTATION",
    artist: "Johnny Lee",
    year: "2019",
    category: "Anamorfismo",
    image: "/images/gallery/home-04-800x1200.jpg",
  },
  {
    id: 5,
    title: "LINES & PUZZLES",
    artist: "Kathleen Davis",
    year: "2021",
    category: "Hiperrealismo",
    image: "/images/gallery/home-06-1200x800.jpg",
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < filteredArtworks.length - 1 ? prev + 1 : prev
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

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
          {filteredArtworks.map((artwork, index) => (
            <ScrollReveal key={artwork.id} delay={index * 100}>
              <ArtworkCard
                artwork={artwork}
                onClick={() => openLightbox(index)}
              />
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.gallery__cta}>
          <Link href="/gallery" className={styles.gallery__ctaButton}>
            VER TODAS LAS OBRAS
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredArtworks}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
          onThumbnailClick={goToImage}
        />
      )}
    </section>
  );
}
