"use client";

import { useState } from "react";
import Link from "next/link";
import ArtworkCard from "@/components/ui/ArtworkCard/ArtworkCard";
import Lightbox from "@/components/ui/Lightbox/Lightbox";
import styles from "./gallery.module.css";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";

const categories = [
  "ANAMORFOSIS",
  "FOTORREALISMO",
  "SURREALISMO",
  "HIPERREALISMO",
  "OBRAS ABSTRACTAS",
  "TODAS LAS OBRAS",
];

const artworksData = [
  {
    id: 1,
    title: "EL PODER DEL ÁTOMO",
    artist: "Frank Anderson",
    year: "2016",
    category: "ANAMORFOSIS",
    image: "/images/gallery/home-02-800x1200.jpg",
  },
  {
    id: 2,
    title: "CUBOS",
    artist: "Emma Smith",
    year: "2018",
    category: "ANAMORFOSIS",
    image: "/images/gallery/home-03-1200x800.jpg",
  },
  {
    id: 3,
    title: "ESCALERAS",
    artist: "Sam Turner",
    year: "2020",
    category: "FOTORREALISMO",
    image: "/images/gallery/home-05-1200x800.jpg",
  },
  {
    id: 4,
    title: "CONFRONTACIÓN",
    artist: "Johnny Lee",
    year: "2019",
    category: "SURREALISMO",
    image: "/images/gallery/home-04-800x1200.jpg",
  },
  {
    id: 5,
    title: "LÍNEAS Y ROMPECABEZAS",
    artist: "Kathleen Davis",
    year: "2021",
    category: "OBRAS ABSTRACTAS",
    image: "/images/gallery/home-06-1200x800.jpg",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("TODAS LAS OBRAS");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredArtworks =
    activeCategory === "TODAS LAS OBRAS"
      ? artworksData
      : artworksData.filter((artwork) => artwork.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredArtworks.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredArtworks.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.galleryPage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumb__container}>
          <Link href="/" className={styles.breadcrumb__link}>
            INICIO
          </Link>
          <span className={styles.breadcrumb__separator}>|</span>
          <span className={styles.breadcrumb__current}>GALERÍA</span>
        </div>
      </div>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <div className={styles.gallery__container}>
          <ScrollReveal>
            <h3 className={styles.gallery__title}>GALERÍA</h3>
          </ScrollReveal>

          {/* Category Filter */}
          <div className={styles.filter}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filter__button} ${
                  activeCategory === category
                    ? styles.filter__button_active
                    : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Artworks Grid */}
          <div className={styles.gallery__grid}>
            {filteredArtworks.map((artwork, index) => (
              <ScrollReveal key={artwork.id} delay={index * 50}>
                <div onClick={() => handleOpenLightbox(index)}>
                  <ArtworkCard artwork={artwork} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredArtworks}
          currentIndex={currentImageIndex}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          onThumbnailClick={setCurrentImageIndex}
        />
      )}
    </div>
  );
}
