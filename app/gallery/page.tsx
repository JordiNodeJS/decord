"use client";

import { useState } from "react";
import ArtworkCard from "@/components/ui/ArtworkCard/ArtworkCard";
import styles from "./gallery.module.css";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";

const categories = [
  "Todas",
  "Anamorfismo",
  "Fotorrealismo",
  "Surrealismo",
  "Abstracto",
];

const artworksData = [
  {
    id: 1,
    title: "Reflejos Urbanos",
    artist: "María González",
    year: "2023",
    category: "Fotorrealismo",
    image: "/images/home-02-420x570.jpg",
  },
  {
    id: 2,
    title: "Dimensión Paralela",
    artist: "Carlos Ruiz",
    year: "2022",
    category: "Surrealismo",
    image: "/images/home-03-570x480.jpg",
  },
  {
    id: 3,
    title: "Geometría Orgánica",
    artist: "Ana Martínez",
    year: "2023",
    category: "Abstracto",
    image: "/images/home-04-570x800.jpg",
  },
  {
    id: 4,
    title: "Perspectiva Distorsionada",
    artist: "Juan López",
    year: "2022",
    category: "Anamorfismo",
    image: "/images/home-05-720x700.jpg",
  },
  {
    id: 5,
    title: "Sueños Líquidos",
    artist: "Laura Fernández",
    year: "2023",
    category: "Surrealismo",
    image: "/images/home-06-570x390.jpg",
  },
  {
    id: 6,
    title: "Realidad Fragmentada",
    artist: "Pedro Sánchez",
    year: "2022",
    category: "Fotorrealismo",
    image: "/images/home-07-570x790.jpg",
  },
  {
    id: 7,
    title: "Espacio Cuántico",
    artist: "Isabel Torres",
    year: "2023",
    category: "Abstracto",
    image: "/images/home-02-420x570.jpg",
  },
  {
    id: 8,
    title: "Ilusión Óptica",
    artist: "Roberto Díaz",
    year: "2022",
    category: "Anamorfismo",
    image: "/images/home-03-570x480.jpg",
  },
  {
    id: 9,
    title: "Metamorfosis Urbana",
    artist: "Sofía Ramírez",
    year: "2023",
    category: "Fotorrealismo",
    image: "/images/home-04-570x800.jpg",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredArtworks =
    activeCategory === "Todas"
      ? artworksData
      : artworksData.filter((artwork) => artwork.category === activeCategory);

  return (
    <div className={styles.galleryPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <ScrollReveal>
            <span className={styles.hero__label}>GALERÍA</span>
            <h1 className={styles.hero__title}>
              Nuestra Colección
              <br />
              de Arte Contemporáneo
            </h1>
            <p className={styles.hero__description}>
              Explora más de 500 obras que representan la vanguardia del arte
              moderno
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <div className={styles.gallery__container}>
          {/* Category Filter */}
          <div className={styles.filter}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filter__button} ${
                  activeCategory === category
                    ? styles["filter__button--active"]
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
                <ArtworkCard artwork={artwork} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
