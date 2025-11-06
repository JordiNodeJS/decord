"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import styles from "./contact.module.css";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingresa un correo electrónico válido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      setSubmitStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
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
            <h3 className={styles.hero__title}>
              ¿NECESITAS AYUDA? CONTÁCTANOS.
            </h3>
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
                {/* Description */}
                <p className={styles.sidebar__description}>
                  Si tienes alguna pregunta, simplemente rellena el formulario
                  de contacto y te responderemos en breve. Si vives cerca, ven a
                  visitar nuestra galería.
                </p>

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
                {/* Success Message */}
                {submitStatus === "success" && (
                  <div
                    className={styles.form__success}
                    role="alert"
                    aria-live="polite"
                  >
                    ¡Gracias por contactarnos! Te responderemos pronto.
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className={styles.form}
                  noValidate
                >
                  <div className={styles.form__row}>
                    <div className={styles.form__group}>
                      <label htmlFor="name" className={styles.form__text}>
                        NAME{" "}
                        <span
                          aria-label="requerido"
                          className={styles.form__required}
                        >
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        autoComplete="name"
                        className={`${styles.form__input} ${errors.name ? styles["form__input--error"] : ""}`}
                        placeholder="e.g.: Emma McCoy"
                      />
                      {errors.name && (
                        <span
                          id="name-error"
                          className={styles.form__error}
                          role="alert"
                        >
                          {errors.name}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.form__row}>
                    <div className={styles.form__group}>
                      <label htmlFor="email" className={styles.form__text}>
                        E-MAIL{" "}
                        <span
                          aria-label="requerido"
                          className={styles.form__required}
                        >
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        autoComplete="email"
                        className={`${styles.form__input} ${errors.email ? styles["form__input--error"] : ""}`}
                        placeholder="e.g.: info@demolink.org"
                      />
                      {errors.email && (
                        <span
                          id="email-error"
                          className={styles.form__error}
                          role="alert"
                        >
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.form__row}>
                    <div className={styles.form__group}>
                      <label htmlFor="subject" className={styles.form__text}>
                        SUBJECT{" "}
                        <span
                          aria-label="requerido"
                          className={styles.form__required}
                        >
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={errors.subject ? "true" : "false"}
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                        className={`${styles.form__input} ${errors.subject ? styles["form__input--error"] : ""}`}
                        placeholder="The subject of your message"
                      />
                      {errors.subject && (
                        <span
                          id="subject-error"
                          className={styles.form__error}
                          role="alert"
                        >
                          {errors.subject}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.form__row}>
                    <div className={styles.form__group}>
                      <label htmlFor="message" className={styles.form__text}>
                        MESSAGE{" "}
                        <span
                          aria-label="requerido"
                          className={styles.form__required}
                        >
                          *
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        rows={8}
                        className={`${styles.form__textarea} ${errors.message ? styles["form__input--error"] : ""}`}
                        placeholder="Write your message here..."
                      />
                      {errors.message && (
                        <span
                          id="message-error"
                          className={styles.form__error}
                          role="alert"
                        >
                          {errors.message}
                        </span>
                      )}
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
