"use client";

import { useState } from "react";
import ArtworkCard from "@/components/ui/ArtworkCard/ArtworkCard";
import Lightbox from "@/components/ui/Lightbox/Lightbox";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import Link from "next/link";
import { artworksData, categories } from "@/data/artworks";
import styles from "./Gallery.module.css";

interface GalleryProps {
  /** Show only a limited number of artworks (for preview mode) */
  limit?: number;
  /** Show category filters */
  showFilters?: boolean;
  /** Show "View All" button */
  showViewAll?: boolean;
  /** Custom class name */
  className?: string;
  /** Layout variant */
  variant?: "preview" | "full";
}

export default function Gallery({
  limit,
  showFilters = true,
  showViewAll = false,
  className = "",
  variant = "full",
}: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState("todas las obras");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter artworks by category
  const filteredArtworks =
    activeCategory === "todas las obras"
      ? artworksData
      : artworksData.filter(
          (artwork) => artwork.category.toLowerCase() === activeCategory
        );

  // Apply limit if specified
  const displayedArtworks = limit
    ? filteredArtworks.slice(0, limit)
    : filteredArtworks;

  const handleOpenLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === displayedArtworks.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? displayedArtworks.length - 1 : prev - 1
    );
  };

  return (
    <section
      className={`${styles.gallery} ${
        styles[`gallery--${variant}`]
      } ${className}`}
    >
      <div className={styles.gallery__container}>
        {showFilters && (
          <div className={styles.gallery__filters}>
            <h2 className={styles.gallery__title}>GALERÍA</h2>
            <nav className={styles.filter} aria-label="Filtro de categorías">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filter__button} ${
                    activeCategory === category
                      ? styles.filter__button_active
                      : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        )}

        <div className={styles.gallery__grid}>
          {displayedArtworks.map((artwork, index) => (
            <ScrollReveal key={artwork.id} delay={index * 50}>
              <div onClick={() => handleOpenLightbox(index)}>
                <ArtworkCard artwork={artwork} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {showViewAll && (
          <div className={styles.gallery__cta}>
            <Link href="/gallery" className={styles.gallery__ctaButton}>
              VER TODAS LAS OBRAS
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={displayedArtworks}
          currentIndex={currentImageIndex}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          onThumbnailClick={setCurrentImageIndex}
        />
      )}
    </section>
  );
}
