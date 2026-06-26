"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./OutsideCode.module.css";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];

const KONAMI_DISPLAY = "↑ ↑ ↓ ↓ ← → ← →";

export function OutsideCode() {
  const [showToast, setShowToast] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shake, setShake] = useState(false);
  const sequence = useRef<string[]>([]);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function triggerEasterEgg() {
    setShowToast(true);
    setProgress(0);
    sequence.current = [];
    setTimeout(() => setShowToast(false), 4000);
  }

  function handleKey(key: string) {
    if (!KONAMI.includes(key)) {
      // Tecla incorrecta — resetear con shake
      if (sequence.current.length > 0) {
        setShake(true);
        setTimeout(() => setShake(false), 400);
      }
      sequence.current = [];
      setProgress(0);
      return;
    }

    const next = [...sequence.current, key];
    const expected = KONAMI[next.length - 1];

    if (key !== expected) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      sequence.current = [];
      setProgress(0);
      return;
    }

    sequence.current = next;
    setProgress(next.length);

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      sequence.current = [];
      setProgress(0);
    }, 3000);

    if (next.length === KONAMI.length) {
      triggerEasterEgg();
    }
  }

  // Konami en cualquier parte de la página
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (KONAMI.includes(e.key)) e.preventDefault();
      handleKey(e.key);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className={`${styles.section} ${hovering ? styles.tattooCursor : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <h2 className={styles.sectionTitle}>Fuera del código</h2>

      <p>
        Cuando no estoy programando, estoy en el aeropuerto — literalmente.
        Aunque me encanta viajar, trabajo como agente administrativo: embarco
        aviones, facturo maletas y ayudo a pasajeros a llegar a donde tienen que
        llegar. Me encanta el trato con la gente, la adrenalina de un vuelo que
        cierra en diez minutos y la satisfacción de resolver un problema rápido
        bajo presión.
      </p>
      <p>
        Suena distinto al perfil típico de developer, y probablemente lo sea.
        Pero creo que saber escuchar, comunicar y mantener la calma cuando todo
        va rápido son habilidades que funcionan igual de bien delante de un
        pasajero nervioso que delante de un bug en producción.
      </p>

      <div className={`${styles.secretBox} ${shake ? styles.shake : ""}`}>
        <span className={styles.secretHint}>
          {"// Psst! prueba con las flechas del teclado..."}
        </span>
        <div className={styles.konamiDisplay}>
          {KONAMI_DISPLAY.split(" ").map((arrow, i) => (
            <span
              key={i}
              className={`${styles.arrow} ${i < progress ? styles.arrowActive : ""}`}
            >
              {arrow}
            </span>
          ))}
        </div>
      </div>

      {showToast && (
        <div className={styles.toast}>¡Fun fact!: También soy tatuador 🖋️</div>
      )}
    </section>
  );
}
