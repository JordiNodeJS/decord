import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h1 className={styles.hero__title}>
          <span className={styles.hero__subtitle}>Galería de Arte</span>
          <span className={styles.hero__maintitle}>
            MUSEO
            <br />
            DE ARTE
            <br />
            MODERNO
          </span>
        </h1>
      </div>
    </section>
  );
}
