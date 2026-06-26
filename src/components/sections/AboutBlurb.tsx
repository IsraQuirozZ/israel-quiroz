import Link from "next/link";
import styles from "./AboutBlurb.module.css";

export function AboutBlurb() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.text}>
          Soy Isra QuirozZ, desarrollador fullstack autodidacta con formación en
          DAM. Me apasiona construir productos completos — desde la base de
          datos hasta la interfaz — y aprender resolviendo problemas reales.
        </p>
        <Link href="/about" className={`${styles.link} link-arrow`}>
          <span>Más sobre mí</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
