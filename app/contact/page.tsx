"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
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
      <Breadcrumb
        items={[{ label: "INICIO", href: "/" }, { label: "CONTACTO" }]}
      />

      {/* Contact Hero */}
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <ScrollReveal>
            <h1 className={styles.hero__title}>
              ¿NECESITAS AYUDA? CONTÁCTANOS.
            </h1>
            <p className={styles.hero__text}>
              Si tienes alguna pregunta, simplemente rellena el formulario de
              contacto y te responderemos en breve. Si vives cerca, ven a
              visitar nuestra galería.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={styles.contact}>
        <div className={styles.contact__container}>
          <div className={styles.contact__grid}>
            {/* Contact Info Sidebar */}
            <aside className={styles.sidebar}>
              <ScrollReveal delay={100}>
                {/* Phone */}
                <div className={styles.infoBlock}>
                  <div className={styles.infoBlock__icon}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3 className={styles.infoBlock__title}>+34 912 345 678</h3>
                </div>

                {/* Schedule */}
                <div className={styles.infoBlock}>
                  <p className={styles.infoBlock__text}>
                    <strong>LUNES-VIERNES:</strong> 8AM - 6PM
                  </p>
                  <p className={styles.infoBlock__text}>
                    <strong>SÁBADO-DOMINGO:</strong> 8AM - 2PM
                  </p>
                  <p className={styles.infoBlock__text}>
                    <strong>FESTIVOS:</strong> CERRADO
                  </p>
                </div>

                {/* Email */}
                <div className={styles.infoBlock}>
                  <p className={styles.infoBlock__email}>
                    INFO@DECORD-GALLERY.COM
                  </p>
                  <p className={styles.infoBlock__email}>MAIL@MAIL.COM</p>
                </div>
              </ScrollReveal>
            </aside>

            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <ScrollReveal delay={200}>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.form__row}>
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
                  </div>

                  <div className={styles.form__row}>
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
                  </div>

                  <div className={styles.form__row}>
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
                  </div>

                  <div className={styles.form__row}>
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
                        rows={8}
                        className={styles.form__textarea}
                        placeholder="Write your message here..."
                      />
                    </div>
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
