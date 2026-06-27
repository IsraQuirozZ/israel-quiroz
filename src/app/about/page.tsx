import styles from "./page.module.css";
import type { Metadata } from "next";
import { Timeline } from "@/components/sections/Timeline";
import { WorkStyle } from "@/components/sections/WorkStyle";
import { OutsideCode } from "@/components/sections/OutsideCode";

export const metadata: Metadata = {
  title: "Sobre mí — Isra QuirozZ",
  description:
    "Desarrollador fullstack mexicano en Madrid. Mi historia, forma de trabajar y hacia dónde voy.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Sobre mí</p>
          <h1 className={styles.title}>
            <span className={styles.accent}>Developer</span> en Madrid con
            experiencia en{" "}
            <span className={styles.accent}>desarrollo fullstack</span>{" "}
          </h1>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>El camino hasta aquí</h2>
            <Timeline />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cómo trabajo</h2>
            <WorkStyle />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Hacia dónde voy</h2>
            <p>
              Busco un equipo donde pueda crecer como developer desde el primer
              día — aportando valor, aprendiendo de gente más experimentada y
              construyendo cosas que importen. No busco solo un salario: busco
              buen ambiente, retos reales y un lugar donde mejorar cada día.
            </p>
          </section>

          <OutsideCode />
        </div>

        <footer className={styles.cta}>
          <p className={styles.ctaText}>
            ¿Trabajamos juntos o simplemente charlamos sobre un proyecto?
          </p>
          <a
            href="https://wa.me/34624677627?text=Hola%20Isra,%20vi%20tu%20portfolio%20y%20me%20gustaría%20hablar%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Escribime por WhatsApp</span>
            <span>→</span>
          </a>
        </footer>
      </div>
    </main>
  );
}
