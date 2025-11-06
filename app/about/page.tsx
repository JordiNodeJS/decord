import Image from "next/image";
import styles from "./about.module.css";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "DEVON LANE",
    role: "FUNDADOR",
    image: "/images/team/person-01.jpg",
    social: {
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "COURTNEY HENRY",
    role: "JEFE DE MARKETING",
    image: "/images/team/person-02.jpg",
    social: {
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "THERESA WEBB",
    role: "GERENTE DE OPERACIONES",
    image: "/images/team/person-03.jpg",
    social: {
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "JENNY WILSON",
    role: "ASISTENTE DE GALERÍA",
    image: "/images/team/person-04.jpg",
    social: {
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "ALBERT FLORES",
    role: "COORDINADOR DE EXPOSICIONES",
    image: "/images/team/person-05.jpg",
    social: {
      instagram: "#",
      twitter: "#",
    },
  },
]; // Stats data
const stats = [
  {
    number: "15",
    label: "AÑOS DE EXPERIENCIA",
    description:
      "La galería fue establecida en 2007, además celebramos el arte fino en todo el mundo",
  },
  {
    number: "34",
    label: "ARTISTAS FAMOSOS",
    description:
      "Mostramos obras de renombrados artistas de primer orden del mundo",
  },
  {
    number: "89",
    label: "EXPOSICIONES EXITOSAS",
    description:
      "Nuestras colecciones de arte moderno y vanguardista de exposiciones internacionales sin un precedente de la galería",
  },
  {
    number: "12",
    label: "EXPOSICIONES ACTUALES",
    description:
      "Tenemos numerosos acontecimientos de diversos tipos de obras de arte en curso en la galería",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: "INICIO", href: "/" }, { label: "SOBRE NOSOTROS" }]}
      />

      {/* Main About Section with Image */}
      <section className={styles.aboutHero}>
        <div className={styles.aboutHero__container}>
          <div className={styles.aboutHero__grid}>
            <div className={styles.aboutHero__imageWrapper}>
              <ScrollReveal>
                <Image
                  src="/images/about/about-1.jpg"
                  alt="Galería de Arte"
                  width={570}
                  height={703}
                  className={styles.aboutHero__image}
                />
              </ScrollReveal>
            </div>

            <div className={styles.aboutHero__content}>
              <ScrollReveal delay={100}>
                <h3 className={styles.aboutHero__label}>ABOUT ART GALLERY</h3>
                <p className={styles.aboutHero__text}>
                  Decord Gallery was established by Helen Stone to provide
                  opportunities to artists entering the global art market. Ms.
                  Stone was a visionary who founded the gallery on the principle
                  that all artists benefit from having their artwork promoted by
                  a professional gallery.
                </p>
              </ScrollReveal>

              {/* Stats Mini Grid */}
              <div className={styles.statsGrid}>
                {stats.slice(0, 4).map((stat, index) => (
                  <ScrollReveal key={index} delay={200 + index * 50}>
                    <div className={styles.statCard}>
                      <div className={styles.statCard__number}>
                        {stat.number}
                      </div>
                      <div className={styles.statCard__label}>{stat.label}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Stats Section */}
      <section className={styles.stats}>
        <div className={styles.stats__container}>
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={styles.statDetail}>
                <div className={styles.statDetail__number}>{stat.number}</div>
                <div className={styles.statDetail__content}>
                  <h4 className={styles.statDetail__label}>{stat.label}</h4>
                  <p className={styles.statDetail__description}>
                    {stat.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.team__container}>
          <ScrollReveal>
            <h2 className={styles.team__title}>CONOCE AL EQUIPO</h2>
          </ScrollReveal>

          <div className={styles.team__grid}>
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 100}>
                <div className={styles.teamCard}>
                  <div className={styles.teamCard__imageWrapper}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={370}
                      height={370}
                      className={styles.teamCard__image}
                    />
                  </div>
                  <div className={styles.teamCard__content}>
                    <h3 className={styles.teamCard__name}>{member.name}</h3>
                    <p className={styles.teamCard__role}>{member.role}</p>
                    <div className={styles.teamCard__social}>
                      <a
                        href={member.social.instagram}
                        className={styles.teamCard__socialLink}
                        aria-label="Instagram"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href={member.social.twitter}
                        className={styles.teamCard__socialLink}
                        aria-label="Twitter"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
