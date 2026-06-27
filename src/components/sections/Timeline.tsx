import styles from "./Timeline.module.css";

const milestones = [
  {
    year: "2021",
    title: "Primer curso Udemy",
    subtitle: "Fullstack desde cero, autodidacta",
  },
  {
    year: "2022 - 2023",
    title: "Fullstack Developer",
    subtitle: "Coderhouse — Remoto",
  },
  { year: "2024", title: "FP en DAM", subtitle: "Ilerna — Madrid" },
  {
    year: "2024",
    title: "Dieta App",
    subtitle: "Prácticas — proyecto interno",
  },
  {
    year: "2025",
    title: "COEMAC Networking",
    subtitle: "Prácticas — agencia web",
  },
  {
    year: "2026",
    title: "Fin FP + Portfolio",
    subtitle: "Disponible para trabajar",
  },
];

export function Timeline() {
  return (
    <div className={styles.scroll}>
      <div className={styles.track}>
        {milestones.map((item, index) => {
          const isInverted = index % 2 !== 0;
          const isLast = index === milestones.length - 1;

          return (
            <div
              key={index}
              className={`${styles.item} ${isInverted ? styles.inverted : ""} ${isLast ? styles.last : ""}`}
            >
              <div className={styles.top}>
                {!isInverted && (
                  <span className={styles.year}>{item.year}</span>
                )}
                {isInverted && (
                  <div className={styles.content}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.subtitle}>{item.subtitle}</span>
                  </div>
                )}
              </div>

              <div className={styles.mid}>
                <div
                  className={`${styles.line} ${styles.lineLeft} ${index === 0 ? styles.lineHidden : ""}`}
                />
                <div className={styles.dot} />
                <div
                  className={`${styles.line} ${styles.lineRight} ${isLast ? styles.lineHidden : ""}`}
                />
              </div>

              <div className={styles.bottom}>
                {!isInverted && (
                  <div className={styles.content}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.subtitle}>{item.subtitle}</span>
                  </div>
                )}
                {isInverted && <span className={styles.year}>{item.year}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
