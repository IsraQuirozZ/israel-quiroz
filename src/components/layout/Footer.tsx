import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <p className={styles.label}>¿Trabajamos juntos?</p>
          <a href="mailto:israel.quiroz@example.com" className={styles.email}>
            Contáctame
          </a>
        </div>
        <p className={styles.meta}>
          Hecho con Next.js, TypeScript &amp; CSS Modules · Desplegado en Vercel
        </p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Israel Quiroz. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
