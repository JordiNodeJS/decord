import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Section */}
      <div className={styles.footer__cta}>
        <div className={styles.footer__ctaContainer}>
          <h2 className={styles.footer__ctaTitle}>HABLEMOS</h2>
        </div>
      </div>

      {/* Footer Main */}
      <div className={styles.footer__main}>
        <div className={styles.footer__container}>
          {/* Logo */}
          <div className={styles.footer__column}>
            <Link href="/" className={styles.footer__logo}>
              <span className={styles.footer__logoText}>DE</span>
              <span className={styles.footer__logoAccent}>C</span>
              <span className={styles.footer__logoText}>ORD</span>
            </Link>
          </div>

          {/* Column 1: Main Navigation */}
          <div className={styles.footer__column}>
            <nav className={styles.footer__nav}>
              <Link href="/" className={styles.footer__link}>
                Inicio
              </Link>
              <Link href="/about" className={styles.footer__link}>
                Sobre Nosotros
              </Link>
              <Link href="/gallery" className={styles.footer__link}>
                Galería
              </Link>
              <Link href="/events" className={styles.footer__link}>
                Eventos
              </Link>
              <Link href="/blog" className={styles.footer__link}>
                Blog
              </Link>
              <Link href="/contact" className={styles.footer__link}>
                Contacto
              </Link>
            </nav>
          </div>

          {/* Column 2: Gallery Categories */}
          <div className={styles.footer__column}>
            <nav className={styles.footer__nav}>
              <Link
                href="/gallery?category=anamorphosis"
                className={styles.footer__link}
              >
                Anamorfosis
              </Link>
              <Link
                href="/gallery?category=photorealism"
                className={styles.footer__link}
              >
                Fotorrealismo
              </Link>
              <Link
                href="/gallery?category=surrealism"
                className={styles.footer__link}
              >
                Surrealismo
              </Link>
              <Link
                href="/gallery?category=hyperrealism"
                className={styles.footer__link}
              >
                Hiperrealismo
              </Link>
              <Link
                href="/gallery?category=performance"
                className={styles.footer__link}
              >
                Arte de Performance
              </Link>
              <Link
                href="/gallery?category=abstract"
                className={styles.footer__link}
              >
                Obras Abstractas
              </Link>
            </nav>
          </div>

          {/* Column 3: Social Media */}
          <div className={styles.footer__column}>
            <div className={styles.footer__social}>
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footer__bottom}>
        <div className={styles.footer__container}>
          <p className={styles.footer__copyright}>
            © {new Date().getFullYear()} DECORD Gallery. Todos los derechos
            reservados.
          </p>
          <div className={styles.footer__legal}>
            <Link href="/privacy" className={styles.footer__legalLink}>
              Política de Privacidad
            </Link>
            <Link href="/terms" className={styles.footer__legalLink}>
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
