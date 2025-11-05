import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./post.module.css";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  image: string;
  author: string;
  category: string;
}

const blogPosts: Record<string, BlogPost> = {
  "fotografia-en-movimiento": {
    slug: "fotografia-en-movimiento",
    title: "FOTOGRAFÍA EN MOVIMIENTO",
    date: "9/4/21",
    author: "Danny Johananoff",
    category: "Fotografía",
    image: "/images/blog/news-01-570x480.jpg",
    content: `
      <p>La fotografía de Danny Johananoff busca compartir historias de sus viajes y permitir que las audiencias sean transportadas, aunque sea por un momento. Durante más de cincuenta años, Johananoff ha tomado fotografías, pero recientemente comenzó a compartir su trabajo con un público más amplio.</p>
      
      <p>Su enfoque único combina técnicas tradicionales con una sensibilidad moderna, capturando momentos que cuentan historias profundas sobre la condición humana y el mundo que nos rodea.</p>
      
      <p>Cada imagen es cuidadosamente compuesta para evocar emociones y provocar reflexión. Johananoff cree que la fotografía no es solo sobre capturar lo que vemos, sino sobre revelar lo que sentimos.</p>
      
      <h3>El Arte de Contar Historias</h3>
      <p>A través de sus viajes por más de 40 países, Danny ha desarrollado un estilo distintivo que combina elementos documentales con una visión artística. Sus fotografías han sido exhibidas en galerías de todo el mundo.</p>
      
      <p>"La cámara es mi herramienta para conectar con la humanidad", dice Johananoff. "Cada fotografía es una conversación entre el fotógrafo, el sujeto y el espectador."</p>
    `,
  },
  "arte-latinoamericano": {
    slug: "arte-latinoamericano",
    title: "ARTE LATINOAMERICANO",
    date: "9/4/21",
    author: "María González",
    category: "Historia del Arte",
    image: "/images/blog/news-02-570x700.jpg",
    content: `
      <p>Se podría argumentar que la categoría de arte latinoamericano tal como la entendemos hoy realmente surgió alrededor de 1970. Cualesquiera que sean sus orígenes exactos, ha sido evidente para historiadores del arte, conocedores y coleccionistas que el arte latinoamericano ha tenido un impacto significativo en el mundo del arte contemporáneo.</p>
      
      <p>Durante las últimas décadas, artistas de toda América Latina han ganado reconocimiento internacional por su trabajo innovador y culturalmente significativo. Desde el muralismo mexicano hasta el arte conceptual brasileño, la región ha producido algunos de los artistas más influyentes del siglo XX y XXI.</p>
      
      <h3>Movimientos Clave</h3>
      <p>El arte latinoamericano abarca una amplia gama de estilos y movimientos, incluyendo:</p>
      <ul>
        <li>Muralismo mexicano (Diego Rivera, David Alfaro Siqueiros)</li>
        <li>Surrealismo latinoamericano (Frida Kahlo, Remedios Varo)</li>
        <li>Arte concreto y cinético (Jesús Rafael Soto, Carlos Cruz-Diez)</li>
        <li>Arte conceptual contemporáneo</li>
      </ul>
      
      <p>Estos movimientos no solo reflejan las realidades políticas y sociales de la región, sino que también han contribuido significativamente al discurso artístico global.</p>
    `,
  },
  "envia-tu-obra": {
    slug: "envia-tu-obra",
    title: "ENVÍA TU OBRA DE ARTE",
    date: "9/4/21",
    author: "Helen Stone",
    category: "Consejos para Artistas",
    image: "/images/blog/news-03-570x570.jpg",
    content: `
      <p>La mayoría de los artistas caminarían kilómetros por la oportunidad de mostrar su trabajo en una galería de arte. Junto con los museos, las galerías de arte son el lugar principal para exhibir y recibir comentarios sobre tus creaciones. Millones de personas visitan galerías cada año, buscando obras que resuenen con ellos.</p>
      
      <h3>¿Por Qué Exhibir en una Galería?</h3>
      <p>Exhibir tu trabajo en una galería profesional ofrece numerosos beneficios:</p>
      <ul>
        <li>Exposición a coleccionistas serios y compradores potenciales</li>
        <li>Validación profesional de tu trabajo</li>
        <li>Networking con otros artistas y profesionales del arte</li>
        <li>Oportunidades para ventas y comisiones</li>
        <li>Desarrollo de tu carrera artística</li>
      </ul>
      
      <h3>Cómo Preparar Tu Portafolio</h3>
      <p>Antes de acercarte a una galería, asegúrate de tener:</p>
      <ol>
        <li>Un portafolio cohesivo que muestre tu mejor trabajo</li>
        <li>Fotografías profesionales de alta calidad de tus obras</li>
        <li>Un artist statement claro y conciso</li>
        <li>Tu CV artístico actualizado</li>
        <li>Referencias o recomendaciones si es posible</li>
      </ol>
      
      <p>En DECORD Gallery, estamos siempre buscando nuevos talentos para representar. Si crees que tu trabajo encaja con nuestra visión, no dudes en contactarnos.</p>
      
      <p>Visitanos o envía tu portafolio digital a info@decord-gallery.com. Revisamos todas las presentaciones cuidadosamente y respondemos dentro de 4-6 semanas.</p>
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  return {
    title: `${post.title} | DECORD Gallery Blog`,
    description: post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.post}>
      <div className={styles.post__container}>
        {/* Breadcrumb */}
        <nav className={styles.post__breadcrumb} aria-label="Breadcrumb">
          <Link href="/">INICIO</Link>
          <span className={styles.post__breadcrumbSeparator}>|</span>
          <Link href="/blog">BLOG</Link>
        </nav>

        {/* Featured Image */}
        <div className={styles.post__imageWrapper}>
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className={styles.post__image}
            priority
          />
        </div>

        {/* Meta Info */}
        <div className={styles.post__meta}>
          <time className={styles.post__date}>{post.date}</time>
          <span className={styles.post__category}>{post.category}</span>
        </div>

        {/* Title */}
        <h1 className={styles.post__title}>{post.title}</h1>

        {/* Author */}
        <div className={styles.post__author}>Por {post.author}</div>

        {/* Content */}
        <article
          className={styles.post__content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to Blog */}
        <div className={styles.post__footer}>
          <Link href="/blog" className={styles.post__backButton}>
            ← VOLVER AL BLOG
          </Link>
        </div>
      </div>
    </main>
  );
}
