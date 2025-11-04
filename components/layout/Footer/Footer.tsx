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
          {/* Column 1: About */}
          <div className={styles.footer__column}>
            <h3 className={styles.footer__columnTitle}>SOBRE NOSOTROS</h3>
            <p className={styles.footer__text}>
              Museo de Arte Moderno dedicado a exhibir obras contemporáneas de
              artistas emergentes y establecidos de todo el mundo.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className={styles.footer__column}>
            <h3 className={styles.footer__columnTitle}>NAVEGACIÓN</h3>
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
              <Link href="/contact" className={styles.footer__link}>
                Contacto
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className={styles.footer__column}>
            <h3 className={styles.footer__columnTitle}>INFORMACIÓN</h3>
            <div className={styles.footer__info}>
              <p className={styles.footer__text}>
                <strong>Dirección:</strong>
                <br />
                Calle del Arte, 123
                <br />
                28001 Madrid, España
              </p>
              <p className={styles.footer__text}>
                <strong>Teléfono:</strong>
                <br />
                +34 912 345 678
              </p>
              <p className={styles.footer__text}>
                <strong>Email:</strong>
                <br />
                info@decord-gallery.com
              </p>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div className={styles.footer__column}>
            <h3 className={styles.footer__columnTitle}>HORARIOS</h3>
            <div className={styles.footer__info}>
              <p className={styles.footer__text}>
                <strong>Martes - Viernes:</strong>
                <br />
                10:00 - 20:00
              </p>
              <p className={styles.footer__text}>
                <strong>Sábado - Domingo:</strong>
                <br />
                11:00 - 21:00
              </p>
              <p className={styles.footer__text}>
                <strong>Lunes:</strong>
                <br />
                Cerrado
              </p>
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
