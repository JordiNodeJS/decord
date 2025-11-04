import styles from "./about.module.css";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <ScrollReveal>
            <span className={styles.hero__label}>SOBRE NOSOTROS</span>
            <h1 className={styles.hero__title}>
              Celebrando el Arte
              <br />
              Moderno desde 2008
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.story__container}>
          <ScrollReveal delay={100}>
            <div className={styles.story__content}>
              <h2 className={styles.story__title}>Nuestra Historia</h2>
              <p className={styles.story__text}>
                DECORD nació de una visión simple pero poderosa: crear un
                espacio donde el arte contemporáneo pudiera florecer sin
                límites. Desde nuestros inicios en 2008, hemos sido un faro para
                artistas innovadores que desafían las convenciones y exploran
                nuevas fronteras creativas.
              </p>
              <p className={styles.story__text}>
                A lo largo de los años, hemos organizado más de 150
                exposiciones, presentado el trabajo de más de 300 artistas de 40
                países diferentes, y dado la bienvenida a más de medio millón de
                visitantes que comparten nuestra pasión por el arte moderno.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.mission__container}>
          <ScrollReveal delay={150}>
            <h2 className={styles.mission__title}>Nuestra Misión</h2>
            <div className={styles.mission__grid}>
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
