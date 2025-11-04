"use client";

import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import styles from "./TestimonialsSection.module.css";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Desde ver una obra de arte que me gustó hasta colgarla en mi pared, todos los aspectos fueron fáciles y sentí que tenía un asistente personal durante todo el proceso.",
    author: "RALPH EDWARDS",
    role: "Coleccionista",
  },
  {
    id: 2,
    quote:
      "La galería DECORD ofrece una experiencia única. La curación es excepcional y el personal es increíblemente conocedor y apasionado por el arte.",
    author: "JANE COOPER",
    role: "Artista",
  },
  {
    id: 3,
    quote:
      "Un espacio inspirador que celebra el arte contemporáneo. Cada visita es un viaje a través de la creatividad y la expresión artística moderna.",
    author: "ROBERT FOX",
    role: "Crítico de Arte",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <div className={styles.testimonials__header}>
          <span className={styles.testimonials__subtitle}>TESTIMONIOS</span>
          <h2 className={styles.testimonials__title}>
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
        </div>

        <div className={styles.testimonials__grid}>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <div className={styles.testimonial}>
                <blockquote className={styles.testimonial__quote}>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className={styles.testimonial__author}>
                  <span className={styles.testimonial__authorName}>
                    {testimonial.author}
                  </span>
                  {testimonial.role && (
                    <span className={styles.testimonial__authorRole}>
                      {testimonial.role}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
