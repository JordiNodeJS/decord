import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__container}>
        <h1 className={styles.notFound__title}>404</h1>
        <h2 className={styles.notFound__subtitle}>Página no encontrada</h2>
        <p className={styles.notFound__text}>
          La página que buscas no existe o ha sido movida.
        </p>
        <Link href="/" className={styles.notFound__link}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

