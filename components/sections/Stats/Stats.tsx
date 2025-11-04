"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const statsData = [
  {
    number: "15",
    label: "Años de Experiencia",
    description:
      "Nuestra galería fue establecida en 2002 para exhibir obras maestras de todo el mundo.",
  },
  {
    number: "34",
    label: "Artistas Famosos",
    description: "Hemos reunido las mejores obras de arte del siglo XX.",
  },
  {
    number: "89",
    label: "Exposiciones Exitosas",
    description:
      "Colecciones increíbles de arte moderno y experimental, arte abstracto y retrato están representadas en nuestra galería.",
  },
  {
    number: "12",
    label: "Exposiciones Actuales",
    description:
      "Tenemos una selección de miles de obras de arte de algunos de los mejores nombres del arte contemporáneo.",
  },
];

function StatCard({ stat }: { stat: (typeof statsData)[0] }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const targetNumber = parseInt(stat.number);

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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <div ref={ref} className={styles.statCard}>
      <div className={styles.statCard__number}>{count}</div>
      <h3 className={styles.statCard__label}>{stat.label}</h3>
      <p className={styles.statCard__description}>{stat.description}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.stats__container}>
        <div className={styles.stats__grid}>
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
