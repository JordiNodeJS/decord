"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error:", error);
    }
  }, [error]);

  return (
    <div className={styles.error}>
      <div className={styles.error__container}>
        <h1 className={styles.error__title}>Algo salió mal</h1>
        <p className={styles.error__text}>
          Ocurrió un error inesperado. Por favor, intenta de nuevo.
        </p>
        {error.digest && (
          <p className={styles.error__digest}>
            Error ID: {error.digest}
          </p>
        )}
        <div className={styles.error__actions}>
          <button onClick={reset} className={styles.error__button}>
            Intentar de nuevo
          </button>
          <Link href="/" className={styles.error__link}>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

