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
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        {/* Image positioned absolutely on the right */}
        <div className={styles.hero__imageWrapper}>
          <Image
            src="/images/hero/home-01-720x900.png"
            alt="Columnas de arte moderno"
            width={720}
            height={900}
            priority
            className={styles.hero__image}
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </div>

        {/* Text content overlaying on the left side of the image */}
        <div
          className={styles.hero__content}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h4 className={styles.hero__subtitle}>GALERÍA DE ARTE</h4>
          <h1 className={styles.hero__title}>
            <span>MUSEO</span>
            <span>DE ARTE</span>
            <span>MODERNO</span>
          </h1>
        </div>
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
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </button>
    </section>
  );
}
