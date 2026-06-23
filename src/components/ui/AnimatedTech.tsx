"use client";

import { useState, useEffect } from "react";
import styles from "./AnimatedTech.module.css";

const technologies = ["React", "Next.js", "Node.js", "PostgreSQL"];

export function AnimatedTech() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % technologies.length);
        setVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`${styles.tech} ${visible ? styles.visible : styles.hidden}`}
    >
      {technologies[index]}
    </span>
  );
}
