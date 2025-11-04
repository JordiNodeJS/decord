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

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.stats__container}>
        <div className={styles.stats__grid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statCard__number}>{stat.number}</div>
              <h3 className={styles.statCard__label}>{stat.label}</h3>
              <p className={styles.statCard__description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
