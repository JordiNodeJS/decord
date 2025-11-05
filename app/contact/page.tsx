"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className={styles.contactPage}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumb__container}>
          <Link href="/" className={styles.breadcrumb__link}>
            HOME
          </Link>
          <span className={styles.breadcrumb__separator}>|</span>
          <span className={styles.breadcrumb__current}>CONTACTO</span>
        </div>
      </nav>

      {/* Contact Content */}
      <section className={styles.contact}>
        <div className={styles.contact__container}>
          <ScrollReveal>
            <h3 className={styles.contact__heading}>
              ¿necesitas ayuda? contáctanos.
            </h3>
            <p className={styles.contact__intro}>
              Si tienes alguna pregunta, simplemente rellena el formulario de
              contacto y te responderemos en breve. Si vives cerca, ven a
              visitar nuestra galería.
            </p>
          </ScrollReveal>

          <div className={styles.contact__grid}>
            {/* Contact Info */}
            <aside className={styles.info}>
              <ScrollReveal delay={100}>
                <div className={styles.infoCard}>
                  <div className={styles.infoCard__icon}>📞</div>
                  <a href="tel:+34912345678" className={styles.infoCard__link}>
                    +34 912 345 678
                  </a>
                </div>

                <div className={styles.infoCard}>
                  <p className={styles.infoCard__text}>
                    <strong>Lunes-Viernes:</strong> 8AM - 6PM
                  </p>
                  <p className={styles.infoCard__text}>
                    <strong>Sábado-Domingo:</strong> 8AM - 2PM
                  </p>
                  <p className={styles.infoCard__text}>
                    <strong>Festivos:</strong> Cerrado
                  </p>
                </div>

                <div className={styles.infoCard}>
                  <a
                    href="mailto:info@decord-gallery.com"
                    className={styles.infoCard__link}
                  >
                    info@decord-gallery.com
                  </a>
                  <a
                    href="mailto:contacto@decord-gallery.com"
                    className={styles.infoCard__link}
                  >
                    mail@mail.com
                  </a>
                </div>
              </ScrollReveal>
            </aside>

            {/* Contact Form */}
            <div className={styles.form}>
              <ScrollReveal delay={200}>
                <form onSubmit={handleSubmit} className={styles.form__form}>
                  <div className={styles.form__group}>
                    <label htmlFor="name" className={styles.form__label}>
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="e.g.: Emma McCoy"
                    />
                  </div>

                  <div className={styles.form__group}>
                    <label htmlFor="email" className={styles.form__label}>
                      E-MAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="e.g.: info@demolink.org"
                    />
                  </div>

                  <div className={styles.form__group}>
                    <label htmlFor="subject" className={styles.form__label}>
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="The subject of your message"
                    />
                  </div>

                  <div className={styles.form__group}>
                    <label htmlFor="message" className={styles.form__label}>
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={styles.form__textarea}
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button type="submit" className={styles.form__submit}>
                    SUBMIT
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
