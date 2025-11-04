"use client";

import { useState } from "react";
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
    // Aquí iría la lógica de envío del formulario
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
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <ScrollReveal>
            <span className={styles.hero__label}>CONTACTO</span>
            <h1 className={styles.hero__title}>Hablemos</h1>
            <p className={styles.hero__description}>
              ¿Tienes alguna pregunta o quieres colaborar con nosotros? Estamos
              aquí para ayudarte.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.contact__container}>
          <div className={styles.contact__grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <ScrollReveal>
                <h2 className={styles.info__title}>Información de Contacto</h2>

                <div className={styles.infoCard}>
                  <h3 className={styles.infoCard__title}>Dirección</h3>
                  <p className={styles.infoCard__text}>
                    Calle del Arte, 123
                    <br />
                    28001 Madrid, España
                  </p>
                </div>

                <div className={styles.infoCard}>
                  <h3 className={styles.infoCard__title}>Teléfono</h3>
                  <p className={styles.infoCard__text}>+34 912 345 678</p>
                </div>

                <div className={styles.infoCard}>
                  <h3 className={styles.infoCard__title}>Email</h3>
                  <p className={styles.infoCard__text}>
                    info@decord-gallery.com
                  </p>
                </div>

                <div className={styles.infoCard}>
                  <h3 className={styles.infoCard__title}>Horarios</h3>
                  <p className={styles.infoCard__text}>
                    <strong>Martes - Viernes:</strong> 10:00 - 20:00
                    <br />
                    <strong>Sábado - Domingo:</strong> 11:00 - 21:00
                    <br />
                    <strong>Lunes:</strong> Cerrado
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className={styles.form}>
              <ScrollReveal delay={200}>
                <h2 className={styles.form__title}>Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className={styles.form__form}>
                  <div className={styles.form__group}>
                    <label htmlFor="name" className={styles.form__label}>
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className={styles.form__group}>
                    <label htmlFor="email" className={styles.form__label}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className={styles.form__group}>
                    <label htmlFor="subject" className={styles.form__label}>
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={styles.form__input}
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <div className={styles.form__group}>
                    <label htmlFor="message" className={styles.form__label}>
                      Mensaje
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
                    ENVIAR MENSAJE
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
