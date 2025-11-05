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
  "renacimiento-arte-abstracto": {
    slug: "renacimiento-arte-abstracto",
    title: "EL RENACIMIENTO DEL ARTE ABSTRACTO",
    date: "9/4/21",
    author: "Carlos Mendoza",
    category: "Arte Contemporáneo",
    image: "/images/blog/news-05-570x480.jpg",
    content: `
      <p>El arte abstracto ha experimentado un resurgimiento notable en las últimas décadas, con artistas contemporáneos que reinterpretan los principios del movimiento original con nuevas técnicas y perspectivas culturales. Lo que comenzó como una revolución a principios del siglo XX con pioneros como Kandinsky y Mondrian, ahora encuentra nueva vida en las manos de una generación digital.</p>
      
      <h3>Una Nueva Era de Abstracción</h3>
      <p>Los artistas abstractos contemporáneos están llevando el movimiento en direcciones inesperadas. Mientras que los maestros originales buscaban liberarse de la representación figurativa, los artistas de hoy están explorando la intersección entre lo analógico y lo digital, creando obras que desafían nuestra percepción de espacio, color y forma.</p>
      
      <p>La tecnología ha abierto nuevas posibilidades para la expresión abstracta. Desde algoritmos generativos hasta realidad aumentada, los artistas están utilizando herramientas que sus predecesores nunca imaginaron. Sin embargo, el núcleo del arte abstracto permanece: la búsqueda de una forma pura de expresión visual.</p>
      
      <h3>Tendencias Actuales</h3>
      <p>Entre las tendencias más notables en el arte abstracto contemporáneo encontramos:</p>
      <ul>
        <li><strong>Abstracción Gestual Digital:</strong> Artistas que utilizan tabletas y software para crear obras que mantienen la espontaneidad del expresionismo abstracto tradicional.</li>
        <li><strong>Minimalismo Maximalista:</strong> Una paradoja fascinante donde la simplicidad formal se encuentra con la complejidad conceptual.</li>
        <li><strong>Abstracción Orgánica:</strong> Formas inspiradas en la naturaleza y procesos biológicos, creando obras que parecen vivas y en constante evolución.</li>
        <li><strong>Color Field Contemporáneo:</strong> Una reinterpretación del movimiento de los años 50 y 60, pero con paletas y técnicas modernas.</li>
      </ul>
      
      <h3>El Mercado del Arte Abstracto</h3>
      <p>El mercado del arte ha respondido positivamente a este renacimiento. Las subastas de arte abstracto contemporáneo han alcanzado cifras récord, y las galerías dedicadas exclusivamente a la abstracción están proliferando en ciudades de todo el mundo.</p>
      
      <p>Lo que hace que este renacimiento sea particularmente emocionante es su accesibilidad. A diferencia de décadas pasadas, cuando el arte abstracto era principalmente dominio de élites culturales, ahora artistas de diversos orígenes están contribuyendo al movimiento, enriqueciéndolo con nuevas perspectivas y experiencias.</p>
      
      <p>En DECORD Gallery, celebramos esta evolución presentando obras de artistas emergentes y establecidos que están redefiniendo lo que significa crear arte abstracto en el siglo XXI. Nuestra próxima exposición, "Abstracciones Contemporáneas", explorará estas nuevas direcciones en profundidad.</p>
    `,
  },
  "coleccionismo-arte-moderno": {
    slug: "coleccionismo-arte-moderno",
    title: "COLECCIONISMO DE ARTE MODERNO",
    date: "9/4/21",
    author: "Isabella Rossi",
    category: "Guía para Coleccionistas",
    image: "/images/blog/news-04-570x800.jpg",
    content: `
      <p>Adentrarse en el mundo del coleccionismo de arte puede parecer intimidante, pero con la orientación adecuada, cualquiera puede comenzar a construir una colección significativa que refleje sus gustos personales y su visión artística. El coleccionismo no es solo una inversión financiera, es un viaje de descubrimiento personal y cultural.</p>
      
      <h3>Por Dónde Comenzar</h3>
      <p>El primer paso en el coleccionismo de arte es la educación. Antes de realizar tu primera adquisición, es fundamental:</p>
      <ul>
        <li>Visitar museos y galerías regularmente</li>
        <li>Asistir a exposiciones y ferias de arte</li>
        <li>Leer sobre historia del arte y tendencias contemporáneas</li>
        <li>Hablar con artistas, galeristas y otros coleccionistas</li>
        <li>Definir tus intereses y preferencias estéticas</li>
      </ul>
      
      <h3>Establece Tu Presupuesto</h3>
      <p>Una colección exitosa no requiere necesariamente grandes sumas de dinero. Algunos de los coleccionistas más respetados comenzaron con presupuestos modestos, enfocándose en artistas emergentes y obras en papel. Lo importante es ser consistente y paciente.</p>
      
      <p>Recomendamos destinar entre el 5% y 10% de tu ingreso discrecional al coleccionismo de arte. Esto te permite construir una colección sostenible a largo plazo sin comprometer tu estabilidad financiera.</p>
      
      <h3>Compra con el Corazón, pero Usa la Cabeza</h3>
      <p>Si bien es importante que te apasione el arte que coleccionas, también debes considerar:</p>
      
      <h4>Autenticidad y Procedencia</h4>
      <p>Siempre verifica la autenticidad de una obra y su historial de propiedad. Trabaja con galerías reputables que proporcionen certificados de autenticidad y documentación completa.</p>
      
      <h4>Condición de la Obra</h4>
      <p>Examina cuidadosamente el estado de conservación. Restauraciones mal hechas o daños significativos pueden afectar tanto el valor como el disfrute de la obra.</p>
      
      <h4>Contexto del Artista</h4>
      <p>Investiga la trayectoria del artista, sus exposiciones, representación en galerías y presencia en colecciones institucionales. Esto te dará una idea de la relevancia y potencial de apreciación de su trabajo.</p>
      
      <h3>Diversificación</h3>
      <p>Como en cualquier portafolio, la diversificación es clave. Considera coleccionar:</p>
      <ul>
        <li>Diferentes medios (pintura, escultura, fotografía, arte digital)</li>
        <li>Artistas en diferentes etapas de sus carreras</li>
        <li>Obras de distintas regiones geográficas</li>
        <li>Piezas de diferentes períodos o movimientos artísticos</li>
      </ul>
      
      <h3>Cuidado y Preservación</h3>
      <p>Una vez que adquieres una obra, es tu responsabilidad preservarla adecuadamente:</p>
      <ul>
        <li>Controla la iluminación (evita luz solar directa)</li>
        <li>Mantén temperatura y humedad estables</li>
        <li>Considera el enmarcado profesional con materiales de conservación</li>
        <li>Contrata seguros especializados en arte</li>
        <li>Documenta tu colección con fotografías profesionales</li>
      </ul>
      
      <h3>El Aspecto Social del Coleccionismo</h3>
      <p>Coleccionar arte te conecta con una comunidad vibrante de personas que comparten tu pasión. Participa en inauguraciones, únete a grupos de coleccionistas y considera prestar obras a exposiciones. Estas actividades enriquecen tu experiencia y profundizan tu comprensión del arte.</p>
      
      <p>En DECORD Gallery, ofrecemos asesoramiento personalizado para coleccionistas nuevos y experimentados. Nuestro equipo puede ayudarte a identificar obras que se alineen con tus intereses y objetivos, asegurando que cada adquisición sea una decisión informada y satisfactoria.</p>
    `,
  },
  "tecnicas-mixtas-contemporaneas": {
    slug: "tecnicas-mixtas-contemporaneas",
    title: "TÉCNICAS MIXTAS EN EL ARTE CONTEMPORÁNEO",
    date: "9/4/21",
    author: "Alejandro Torres",
    category: "Técnicas Artísticas",
    image: "/images/blog/news-06-570x390.jpg",
    content: `
      <p>Los artistas contemporáneos están rompiendo barreras tradicionales al combinar diferentes medios y técnicas en sus obras. Esta experimentación está creando nuevas formas de expresión que desafían nuestra comprensión del arte y expanden las posibilidades de lo que una obra puede ser y comunicar.</p>
      
      <h3>¿Qué Son las Técnicas Mixtas?</h3>
      <p>Las técnicas mixtas implican la combinación de dos o más medios artísticos en una sola obra. Esto puede incluir la integración de pintura con collage, escultura con elementos encontrados, fotografía con intervenciones manuales, o la fusión de medios tradicionales con tecnología digital.</p>
      
      <p>Lo que hace que las técnicas mixtas sean tan emocionantes en el contexto contemporáneo es la libertad creativa que ofrecen. Los artistas ya no están limitados por las convenciones de un solo medio, permitiéndoles expresar ideas complejas de maneras innovadoras.</p>
      
      <h3>Historia y Evolución</h3>
      <p>Aunque las técnicas mixtas pueden parecer un fenómeno moderno, tienen raíces históricas profundas. Los cubistas como Picasso y Braque comenzaron a incorporar elementos reales en sus pinturas a principios del siglo XX. Los dadaístas y surrealistas llevaron esto más lejos con sus assemblages y collages.</p>
      
      <p>Sin embargo, el movimiento contemporáneo de técnicas mixtas ha alcanzado niveles de sofisticación y diversidad sin precedentes. La disponibilidad de nuevos materiales y tecnologías ha abierto posibilidades ilimitadas.</p>
      
      <h3>Técnicas y Enfoques Populares</h3>
      
      <h4>Collage y Assemblage Digital-Analógico</h4>
      <p>Artistas combinan elementos impresos digitalmente con técnicas de pintura tradicional, creando capas de significado visual que dialogan entre lo virtual y lo físico.</p>
      
      <h4>Incorporación de Materiales No Convencionales</h4>
      <p>Desde textiles hasta componentes electrónicos, los artistas están utilizando materiales que tradicionalmente no se asocian con el arte para crear obras que desafían expectativas y provocan nuevas interpretaciones.</p>
      
      <h4>Transferencias de Imagen</h4>
      <p>Técnicas como la transferencia de gel medium permiten a los artistas incorporar fotografías e imágenes impresas en superficies pintadas, creando efectos fantasmales y capas de temporalidad.</p>
      
      <h4>Encáustica Contemporánea</h4>
      <p>La antigua técnica de pintura con cera de abejas está experimentando un renacimiento, con artistas que la combinan con pigmentos modernos, collage y elementos incrustados.</p>
      
      <h4>Arte Híbrido Digital-Manual</h4>
      <p>Los artistas crean obras digitalmente pero luego las intervienen manualmente, o viceversa, creando piezas que existen simultáneamente en espacios físicos y digitales.</p>
      
      <h3>Artistas Destacados</h3>
      <p>Algunos artistas contemporáneos que están llevando las técnicas mixtas a nuevos territorios incluyen:</p>
      <ul>
        <li><strong>Julie Mehretu:</strong> Conocida por sus complejas composiciones que combinan dibujo arquitectónico, pintura abstracta y marcas gestuales.</li>
        <li><strong>Anselm Kiefer:</strong> Incorpora materiales como paja, ceniza, arcilla y plomo en sus obras monumentales.</li>
        <li><strong>El Anatsui:</strong> Crea tapices escultóricos impresionantes usando tapas de botellas de aluminio recicladas.</li>
      </ul>
      
      <h3>Consideraciones para Coleccionistas</h3>
      <p>Si estás interesado en coleccionar obras de técnicas mixtas, ten en cuenta:</p>
      
      <h4>Conservación</h4>
      <p>Las obras de técnicas mixtas pueden requerir cuidados especiales debido a la variedad de materiales utilizados. Consulta con conservadores profesionales sobre las mejores prácticas de preservación.</p>
      
      <h4>Autenticidad de Materiales</h4>
      <p>Asegúrate de entender completamente qué materiales se han utilizado y si hay preocupaciones sobre su durabilidad a largo plazo.</p>
      
      <h4>Documentación</h4>
      <p>Dada la complejidad de estas obras, es especialmente importante tener documentación detallada sobre técnicas, materiales y procesos de creación.</p>
      
      <h3>El Futuro de las Técnicas Mixtas</h3>
      <p>A medida que la tecnología continúa evolucionando, las posibilidades para las técnicas mixtas se expanden exponencialmente. La realidad aumentada, la impresión 3D, los materiales inteligentes y la bioarte están abriendo nuevas fronteras para la expresión artística.</p>
      
      <p>Lo que permanece constante es el deseo humano de experimentar, innovar y comunicar ideas complejas a través del arte. Las técnicas mixtas son simplemente la última manifestación de esta búsqueda eterna.</p>
      
      <p>En DECORD Gallery, estamos comprometidos a presentar lo mejor del arte contemporáneo de técnicas mixtas. Nuestra colección incluye obras que demuestran la increíble diversidad y creatividad que este enfoque puede ofrecer.</p>
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
