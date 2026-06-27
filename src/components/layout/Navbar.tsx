"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import styles from "./Navbar.module.css";

const links = [
  { href: "/projects", label: "Proyectos" },
  { href: "/about", label: "Sobre mí" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            isrquirozz.dev
          </Link>

          {/* Desktop links */}
          <div className={styles.desktopLinks}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <a href="/documents/cv.pdf" download className={styles.cvButton}>
              CV
            </a>
            <div className={styles.socials}>
              <a
                href="https://github.com/israquirozz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialLink}
              >
                <IconBrandGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/israel-quirozz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <IconBrandLinkedin size={25} />
              </a>
            </div>
          </div>

          {/* Hamburguesa mobile */}
          <button
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/documents/cv.pdf"
            download
            className={styles.mobileCvButton}
          >
            Descargar CV
          </a>
          <div className={styles.mobileSocials}>
            <a
              href="https://github.com/israquirozz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.socialLink}
            >
              <IconBrandGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <IconBrandLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}
    </>
  );
}
