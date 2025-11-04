"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles["header--scrolled"] : ""
      }`}
    >
      <div className={styles.header__container}>
        {/* Logo */}
        <Link href="/" className={styles.header__logo}>
          <span className={styles.header__logoText}>ART GALLERY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.header__nav}>
          <Link href="/" className={styles.header__link}>
            INICIO
          </Link>
          <Link href="/about" className={styles.header__link}>
            SOBRE NOSOTROS
          </Link>
          <Link href="/gallery" className={styles.header__link}>
            GALERÍA
          </Link>
          <Link href="/events" className={styles.header__link}>
            EVENTOS
          </Link>
          <Link href="/contact" className={styles.header__link}>
            CONTACTO
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </div>
    </header>
  );
}
