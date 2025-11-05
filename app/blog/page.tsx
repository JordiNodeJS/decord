"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import styles from "./blog.module.css";

const blogPosts = [
  {
    id: 1,
    title: "FOTOGRAFÍA EN MOVIMIENTO",
    date: "9/4/21",
    excerpt:
      "La fotografía de Danny Johananoff busca compartir historias de sus viajes y permitir que las audiencias sean transportadas, aunque sea por un momento. Durante más de cincuenta años, Johananoff ha tomado fotografías, pero...",
    image: "/images/blog/news-01-570x480.jpg",
    slug: "fotografia-en-movimiento",
  },
  {
    id: 2,
    title: "ARTE LATINOAMERICANO",
    date: "9/4/21",
    excerpt:
      "Se podría argumentar que la categoría de arte latinoamericano tal como la entendemos hoy realmente surgió alrededor de 1970. Cualesquiera que sean sus orígenes exactos, ha sido evidente para historiadores del arte, conocedores...",
    image: "/images/blog/news-02-570x700.jpg",
    slug: "arte-latinoamericano",
  },
  {
    id: 3,
    title: "ENVÍA TU OBRA DE ARTE",
    date: "9/4/21",
    excerpt:
      "La mayoría de los artistas caminarían kilómetros por la oportunidad de mostrar su trabajo en una galería de arte. Junto con los museos, las galerías de arte son el lugar principal para exhibir y recibir comentarios sobre tus creaciones. Millones de personas...",
    image: "/images/blog/news-03-570x570.jpg",
    slug: "envia-tu-obra",
  },
  {
    id: 4,
    title: "EL RENACIMIENTO DEL ARTE ABSTRACTO",
    date: "9/4/21",
    excerpt:
      "El arte abstracto ha experimentado un resurgimiento notable en las últimas décadas, con artistas contemporáneos que reinterpretan los principios del movimiento original con nuevas técnicas y perspectivas culturales. Exploramos esta fascinante evolución...",
    image: "/images/blog/news-05-570x480.jpg",
    slug: "renacimiento-arte-abstracto",
  },
  {
    id: 5,
    title: "COLECCIONISMO DE ARTE MODERNO",
    date: "9/4/21",
    excerpt:
      "Adentrarse en el mundo del coleccionismo de arte puede parecer intimidante, pero con la orientación adecuada, cualquiera puede comenzar a construir una colección significativa que refleje sus gustos personales y su visión artística...",
    image: "/images/blog/news-04-570x800.jpg",
    slug: "coleccionismo-arte-moderno",
  },
  {
    id: 6,
    title: "TÉCNICAS MIXTAS EN EL ARTE CONTEMPORÁNEO",
    date: "9/4/21",
    excerpt:
      "Los artistas contemporáneos están rompiendo barreras tradicionales al combinar diferentes medios y técnicas en sus obras. Esta experimentación está creando nuevas formas de expresión que desafían nuestra comprensión del arte...",
    image: "/images/blog/news-06-570x390.jpg",
    slug: "tecnicas-mixtas-contemporaneas",
  },
];

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumb__container}>
          <Link href="/" className={styles.breadcrumb__link}>
            INICIO
          </Link>
          <span className={styles.breadcrumb__separator}>|</span>
          <span className={styles.breadcrumb__current}>BLOG</span>
        </div>
      </nav>

      {/* Blog Section */}
      <section className={styles.blog}>
        <div className={styles.blog__container}>
          <div className={styles.blog__grid}>
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <article className={styles.blogCard}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.blogCard__imageLink}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={570}
                      height={570}
                      className={styles.blogCard__image}
                    />
                  </Link>
                  <h2 className={styles.blogCard__title}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <time className={styles.blogCard__date}>{post.date}</time>
                  <p className={styles.blogCard__excerpt}>{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.blogCard__readMore}
                  >
                    LEER MÁS
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
