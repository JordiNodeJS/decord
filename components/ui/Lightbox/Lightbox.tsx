"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  images: Array<{
    id: number;
    title: string;
    artist: string;
    year: string;
    image: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onThumbnailClick: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  onThumbnailClick,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    },
    [onClose, onNext, onPrevious]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      {/* Overlay */}
      <div className={styles.lightbox__overlay} />

      {/* Content */}
      <div
        className={styles.lightbox__content}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className={styles.lightbox__close}
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Counter */}
        <div className={styles.lightbox__counter}>
          {currentIndex + 1} / {images.length}
        </div>

        {/* Navigation Arrows */}
        <button
          className={`${styles.lightbox__arrow} ${styles.lightbox__arrow_left}`}
          onClick={onPrevious}
          aria-label="Anterior"
          disabled={currentIndex === 0}
        >
          ←
        </button>

        <button
          className={`${styles.lightbox__arrow} ${styles.lightbox__arrow_right}`}
          onClick={onNext}
          aria-label="Siguiente"
          disabled={currentIndex === images.length - 1}
        >
          →
        </button>

        {/* Main Image */}
        <div className={styles.lightbox__imageWrapper}>
          <Image
            src={currentImage.image}
            alt={`${currentImage.title} - ${currentImage.artist}`}
            fill
            className={styles.lightbox__image}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Thumbnails Strip */}
        <div className={styles.lightbox__thumbnails}>
          <div className={styles.lightbox__thumbnailsScroll}>
            {images.map((img, index) => (
              <button
                key={img.id}
                className={`${styles.lightbox__thumbnail} ${
                  index === currentIndex
                    ? styles.lightbox__thumbnail_active
                    : ""
                }`}
                onClick={() => onThumbnailClick(index)}
                aria-label={`Ver ${img.title}`}
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  width={80}
                  height={80}
                  className={styles.lightbox__thumbnailImage}
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
