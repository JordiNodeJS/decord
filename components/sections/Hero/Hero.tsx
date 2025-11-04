"use client";

import { useEffect, useState } from "react";
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
      <div
        className={styles.hero__container}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className={styles.hero__content}>
          <span className={styles.hero__subtitle}>GALERÍA DE ARTE</span>
          <h1 className={styles.hero__title}>MUSEO DE ARTE MODERNO</h1>
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
