"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevenir scroll cuando el menu está abierto
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`${styles.hamburger} ${
          isOpen ? styles["hamburger--active"] : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.hamburger__line}></span>
        <span className={styles.hamburger__line}></span>
        <span className={styles.hamburger__line}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles["mobileMenu--open"] : ""
        }`}
      >
        <nav className={styles.mobileMenu__nav}>
          <Link
            href="/"
            className={styles.mobileMenu__link}
            onClick={closeMenu}
          >
            INICIO
          </Link>
          <Link
            href="/about"
            className={styles.mobileMenu__link}
            onClick={closeMenu}
          >
            SOBRE NOSOTROS
          </Link>
          <Link
            href="/gallery"
            className={styles.mobileMenu__link}
            onClick={closeMenu}
          >
            GALERÍA
          </Link>
          <Link
            href="/events"
            className={styles.mobileMenu__link}
            onClick={closeMenu}
          >
            EVENTOS
          </Link>
          <Link
            href="/blog"
            className={styles.mobileMenu__link}
            onClick={closeMenu}
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className={styles.mobileMenu__link}
            onClick={closeMenu}
          >
            CONTACTO
          </Link>
        </nav>
      </div>
    </>
  );
}
