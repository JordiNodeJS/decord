import styles from "./about.module.css";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Devon Lane",
    role: "Fundador",
    image: "/images/team/person-01.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Courtney Henry",
    role: "Jefe de Marketing",
    image: "/images/team/person-02.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Theresa Webb",
    role: "Gerente de Operaciones",
    image: "/images/team/person-03.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Jenny Wilson",
    role: "Asistente de Galería",
    image: "/images/team/person-04.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Albert Flores",
    role: "Coordinador de Exposiciones",
    image: "/images/team/person-05.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

const stats = [
  {
    number: "15",
    title: "Años de Experiencia",
    description:
      "Nuestra galería fue establecida en 2002 para exhibir obras maestras de todo el mundo.",
  },
  {
    number: "34",
    title: "Artistas Famosos",
    description:
      "Hemos reunido las mejores obras de arte del siglo XX.",
  },
  {
    number: "89",
    title: "Exposiciones Exitosas",
    description:
      "Increíbles colecciones de arte moderno y experimental, arte abstracto y retrato están representadas en nuestra galería.",
  },
  {
    number: "12",
    title: "Exposiciones Actuales",
    description:
      "Tenemos una selección de miles de obras de arte de algunos de los mejores nombres del arte fino contemporáneo.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumb__container}>
          <Link href="/" className={styles.breadcrumb__link}>
            Home
          </Link>
          <span className={styles.breadcrumb__separator}>|</span>
          <span className={styles.breadcrumb__current}>About</span>
        </div>
      </nav>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.about__container}>
          <ScrollReveal>
            <h3 className={styles.about__heading}>sobre la galería de arte</h3>
            <p className={styles.about__intro}>
              Es nuestra misión facilitar el descubrimiento y la colección de
              arte fino de artistas, galerías e instituciones culturales de
              renombre en todo el mundo.
            </p>
            <p className={styles.about__text}>
              Nuestra Galería fue establecida por Helen Stone para brindar
              oportunidades a artistas que ingresan al mercado del arte global.
              La Sra. Stone fue una visionaria que fundó la galería bajo el
              principio de que todos los artistas se benefician de tener su obra
              de arte promovida por una galería profesional.
            </p>
          </ScrollReveal>
        </div>
      </section>
              <div className={styles.missionCard}>
                <h3 className={styles.missionCard__title}>Inspirar</h3>
                <p className={styles.missionCard__text}>
                  Despertar la creatividad y provocar nuevas perspectivas a
                  través del poder transformador del arte contemporáneo.
                </p>
              </div>
              <div className={styles.missionCard}>
                <h3 className={styles.missionCard__title}>Conectar</h3>
                <p className={styles.missionCard__text}>
                  Crear puentes entre artistas, coleccionistas y amantes del
                  arte de todo el mundo en un espacio de diálogo cultural.
                </p>
              </div>
              <div className={styles.missionCard}>
                <h3 className={styles.missionCard__title}>Innovar</h3>
                <p className={styles.missionCard__text}>
                  Impulsar la experimentación artística y apoyar a los creadores
                  que redefinen los límites del arte moderno.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.team__container}>
          <ScrollReveal>
            <h2 className={styles.team__title}>Nuestro Equipo</h2>
            <p className={styles.team__description}>
              Detrás de DECORD hay un equipo apasionado de curadores,
              historiadores del arte y expertos dedicados a hacer que cada
              experiencia sea inolvidable.
            </p>
          </ScrollReveal>
          <div className={styles.team__grid}>
            {[
              {
                name: "Elena Rodríguez",
                role: "Directora y Curadora Principal",
              },
              { name: "Miguel Ángel Santos", role: "Curador de Exposiciones" },
              {
                name: "Carmen López",
                role: "Directora de Programas Educativos",
              },
              { name: "David Martín", role: "Coordinador de Eventos" },
            ].map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={styles.teamCard}>
                  <div className={styles.teamCard__image}></div>
                  <h3 className={styles.teamCard__name}>{member.name}</h3>
                  <p className={styles.teamCard__role}>{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
