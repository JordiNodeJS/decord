"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./AboutGallery.module.css";

// Datos de estadísticas
const statsData = [
  {
    number: 15,
    label: "YEARS",
    description:
      "Our gallery was established in 2002 to show masterpieces from all over the world.",
  },
  {
    number: 34,
    label: "ARTISTS",
    description: "We have gathered the best artworks of the 20th century.",
  },
  {
    number: 89,
    label: "EXHIBITIONS",
    description:
      "Incredible collections of modern and experimental art, abstract art and portrait are represented in our gallery.",
  },
  {
    number: 12,
    label: "CURRENT",
    description:
      "We have a selection of thousands of artworks from some of the best names in contemporary art.",
  },
];

// Componente de contador animado
function AnimatedCounter({
  target,
  isVisible,
}: {
  target: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <>{count}</>;
}

// Componente de tarjeta de estadística
function StatCard({ stat }: { stat: (typeof statsData)[0] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={ref} className={styles.statCard}>
      <div className={styles.statCard__number}>
        <AnimatedCounter target={stat.number} isVisible={isVisible} />
      </div>
      <h3 className={styles.statCard__label}>{stat.label}</h3>
      <p className={styles.statCard__description}>{stat.description}</p>
    </div>
  );
}

export default function AboutGallery() {
  return (
    <section className={styles.aboutGallery} aria-label="About Art Gallery">
      <div className={styles.aboutGallery__container}>
        {/* Área superior: Título + Descripción + Estadísticas */}
        <div className={styles.aboutGallery__upper}>
          <header className={styles.aboutGallery__header}>
            <h2 className={styles.aboutGallery__title}>ABOUT ART GALLERY</h2>
          </header>

          <div className={styles.aboutGallery__description}>
            <p className={styles.aboutGallery__text}>
              Decord Gallery was established by Helen Stone to provide
              opportunities to artists entering the global art market. Ms. Stone
              was a visionary who founded the gallery on the principle that all
              artists benefit from having their artwork promoted by a
              professional gallery.
            </p>
          </div>

          <div className={styles.aboutGallery__stats}>
            {statsData.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
