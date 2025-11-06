"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  scrolled?: boolean;
}

export default function MobileMenu({ scrolled = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    // Return focus to hamburger button
    buttonRef.current?.focus();
  };

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      "a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])"
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    // Focus first element when menu opens
    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        ref={buttonRef}
        className={`${styles.hamburger} ${
          isOpen ? styles["hamburger--active"] : ""
        } ${scrolled ? styles["hamburger--scrolled"] : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span className={styles.hamburger__line}></span>
        <span className={styles.hamburger__line}></span>
        <span className={styles.hamburger__line}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`${styles.mobileMenu} ${
          isOpen ? styles["mobileMenu--open"] : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <nav className={styles.mobileMenu__nav} aria-label="Navegación móvil">
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
