"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.hero} aria-label="Hero principal">
      <div className={styles.hero__container}>
        {/* Image positioned absolutely on the left */}
        <figure className={styles.hero__imageWrapper}>
          <Image
            src="/images/hero/home-01-720x900.png"
            alt="Columnas de arte moderno"
            width={720}
            height={900}
            priority
            className={styles.hero__image}
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </figure>

        {/* Text content overlaying on the right side of the image */}
        <header
          className={styles.hero__content}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <p className={styles.hero__subtitle}>ART GALLERY</p>
          <h1 className={styles.hero__title}>
            <span>MUSEUM</span>
            <span>OF MODERN</span>
            <span>ART</span>
          </h1>
        </header>
      </div>

      {/* Scroll Indicator */}
      <button
        className={styles.hero__scrollIndicator}
        onClick={scrollToContent}
        aria-label="Desplazarse hacia abajo"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </button>
    </section>
  );
}
