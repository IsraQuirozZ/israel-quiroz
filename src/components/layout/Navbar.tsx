import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          IsraQuirozZ.dev
        </Link>

        <div className={styles.links}>
          <Link href="/projects" className={styles.link}>
            Proyectos
          </Link>
          <Link href="/about" className={styles.link}>
            Sobre mí
          </Link>
          <a href="/cv.pdf" download className={styles.cvButton}>
            CV
          </a>
          <div className={styles.socials}>
            <a
              href="https://github.com/IsraQuirozZ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/IsraQuirozZ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
