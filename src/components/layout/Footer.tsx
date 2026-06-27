import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <p className={styles.label}>¿Trabajamos juntos?</p>

          <a href="mailto:israel_quirozz@hotmail.com" className={styles.email}>
            <IconMail size={20} />
            Contáctame
          </a>
        </div>
        <div className={styles.socials}>
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
            href="https://www.linkedin.com/in/israel-quirozz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <IconBrandLinkedin size={30} />
          </a>
        </div>
        <p className={styles.meta}>
          Hecho con Next.js, TypeScript &amp; CSS Modules · Desplegado en Vercel
        </p>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Israel Quiroz. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
