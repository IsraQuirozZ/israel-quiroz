import styles from "./Hero.module.css";
import { AnimatedTech } from "@/components/ui/AnimatedTech";

export function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>
        <span className={styles.dot} />
        Disponible para nuevas oportunidades
      </p>
      <h1 className={styles.title}>
        Hola, soy <span className={styles.accent}>Isra QuirozZ</span> —{" "}
        fullstack developer con experiencia real en <AnimatedTech />
      </h1>
      <p className={styles.subtitle}>
        Desarrollo productos web y aplicaciones multiplataforma que van del
        diseño a producción. Me enfoco en crear soluciones efectivas y resolver
        problemas reales con criterio propio.
      </p>
      <div className={styles.actions}>
        <a href="/projects" className={styles.primaryButton}>
          Ver proyectos
        </a>
        <a href="/documents/cv.pdf" download className={styles.secondaryButton}>
          Descargar CV
        </a>
      </div>
    </section>
  );
}
