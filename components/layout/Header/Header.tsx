"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        {/* Logo - always dark/visible on light/transparent background */}
        <Link href="/" className={styles.header__logo}>
          <Image
            src="/images/logo-dark.png"
            alt="DECORD Art Gallery"
            width={343}
            height={45}
            className={styles.header__logoImage}
            priority
          />
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
          <Link href="/blog" className={styles.header__link}>
            BLOG
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
