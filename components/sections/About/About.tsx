import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__header}>
          <span className={styles.about__label}>SOBRE LA GALERÍA DE ARTE</span>
          <h2 className={styles.about__title}>
            LA COLECCIÓN CUENTA CON OBRAS DE{" "}
            <span className={styles.about__titleHighlight}>
              ARTISTAS CONTEMPORÁNEOS
            </span>{" "}
            FAMOSOS EN MUCHOS GÉNEROS DESDE ABSTRACTO HASTA FIGURATIVO
          </h2>
        </div>
        <div className={styles.about__content}>
          <p className={styles.about__text}>
            La Galería Decord fue establecida por Helen Stone para brindar
            oportunidades a artistas que ingresan al mercado global del arte. La
            Sra. Stone fue una visionaria que fundó la galería bajo el principio
            de que todos los artistas se benefician al tener su trabajo
            promovido por una galería profesional.
          </p>
        </div>
      </div>
    </section>
  );
}
