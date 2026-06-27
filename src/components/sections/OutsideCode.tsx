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
const TAPS_REQUIRED = 5;

export function OutsideCode() {
  const [showToast, setShowToast] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shake, setShake] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sequence = useRef<string[]>([]);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tapCount = useRef(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detectar mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function triggerEasterEgg() {
    setShowToast(true);
    setProgress(0);
    sequence.current = [];
    tapCount.current = 0;
    setTimeout(() => setShowToast(false), 4000);
  }

  function handleKey(key: string) {
    if (!KONAMI.includes(key)) {
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

  // Konami — solo desktop
  useEffect(() => {
    if (isMobile) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (KONAMI.includes(e.key)) e.preventDefault();
      handleKey(e.key);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobile]);

  // 5 taps en el título — solo mobile
  function handleTitleTap() {
    if (!isMobile) return;

    tapCount.current += 1;

    if (tapTimer.current) clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => {
      tapCount.current = 0;
    }, 1500);

    if (tapCount.current >= TAPS_REQUIRED) {
      triggerEasterEgg();
    }
  }

  return (
    <section
      className={`${styles.section} ${hovering ? styles.tattooCursor : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <h2 className={styles.sectionTitle} onClick={handleTitleTap}>
        Fuera del código
      </h2>

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
          {isMobile
            ? '// Psst! prueba pulsando rápido "Fuera del código"'
            : "// Psst! prueba con las flechas del teclado..."}
        </span>
        {!isMobile && (
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
        )}
      </div>

      {showToast && (
        <div className={styles.toast}>¡Fun fact!: También soy tatuador 🖋️</div>
      )}
    </section>
  );
}
