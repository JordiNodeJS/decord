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
    <div className={styles.contactPage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumb__container}>
          <Link href="/" className={styles.breadcrumb__link}>
            INICIO
          </Link>
          <span className={styles.breadcrumb__separator}>|</span>
          <span className={styles.breadcrumb__current}>CONTACTOS</span>
        </div>
      </div>

      {/* Contact Content */}
      <section className={styles.contact}>
        <div className={styles.contact__container}>
          <ScrollReveal>
            <h3 className={styles.contact__heading}>
              ¿NECESITAS AYUDA? CONTÁCTANOS.
            </h3>
            <p className={styles.contact__intro}>
              Si tienes alguna pregunta, solo llena el formulario de contacto y
              te responderemos en breve. Si vives cerca, ven a visitar nuestra
              galería.
            </p>
          </ScrollReveal>

          <div className={styles.contact__grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <ScrollReveal delay={100}>
                <div className={styles.infoCard}>
                  <div className={styles.infoCard__icon}>📞</div>
                  <a href="tel:+34912345678" className={styles.infoCard__link}>
                    +34 912 345 678
                  </a>
                </div>

                <div className={styles.infoCard}>
                  <p className={styles.infoCard__text}>
                    <strong>LUNES-VIERNES:</strong> 8AM - 6PM
                  </p>
                  <p className={styles.infoCard__text}>
                    <strong>SÁBADO-DOMINGO:</strong> 8AM - 2PM
                  </p>
                  <p className={styles.infoCard__text}>
                    <strong>FESTIVOS:</strong> CERRADO
                  </p>
                </div>

                <div className={styles.infoCard}>
                  <a
                    href="mailto:info@decord-gallery.com"
                    className={styles.infoCard__link}
                  >
                    INFO@DECORD-GALLERY.COM
                  </a>
                  <a
                    href="mailto:contacto@decord-gallery.com"
                    className={styles.infoCard__link}
                  >
                    CONTACTO@DECORD-GALLERY.COM
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className={styles.form}>
              <ScrollReveal delay={200}>
                <form onSubmit={handleSubmit} className={styles.form__form}>
                  <div className={styles.form__group}>
                    <label htmlFor="name" className={styles.form__label}>
                      NOMBRE
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="ej.: Emma McCoy"
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
                      placeholder="ej.: info@demolink.org"
                    />
                  </div>

                  <div className={styles.form__group}>
                    <label htmlFor="subject" className={styles.form__label}>
                      ASUNTO
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="El asunto de tu mensaje"
                    />
                  </div>

                  <div className={styles.form__group}>
                    <label htmlFor="message" className={styles.form__label}>
                      MENSAJE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={styles.form__textarea}
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <button type="submit" className={styles.form__submit}>
                    ENVIAR
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
