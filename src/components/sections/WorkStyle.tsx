import styles from "./WorkStyle.module.css";
import {
  IconDiamond,
  IconCode,
  IconImageGeneration,
} from "@tabler/icons-react";
const pillars = [
  {
    icon: <IconDiamond size={30} />,
    title: "Metódico",
    description:
      "Libreta antes que código. Diseño el modelo de datos y la arquitectura antes de ejecutar.",
  },
  {
    icon: <IconCode size={30} />,
    title: "Código limpio",
    description:
      "Sin deuda técnica innecesaria. El código que escribo hoy lo va a leer alguien en seis meses y no quiero que me odie.",
  },
  {
    icon: <IconImageGeneration size={30} />,
    title: "IA como herramienta",
    description:
      "No como sustituto. La uso para ser más productivo y concentrarme en lo que realmente importa.",
  },
];

export function WorkStyle() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.intro}>
        Me importa el código limpio y entender el negocio detrás de lo que
        construyo. Un developer que solo sigue tickets es reemplazable; uno que
        entiende las reglas de negocio y el por qué de cada feature, mucho
        menos.
      </p>

      <div className={styles.pillars}>
        {pillars.map((pillar) => (
          <div key={pillar.title} className={styles.card}>
            <span className={styles.icon}>{pillar.icon}</span>
            <h3 className={styles.cardTitle}>{pillar.title}</h3>
            <p className={styles.cardDesc}>{pillar.description}</p>
          </div>
        ))}
      </div>

      <p className={styles.weakness}>
        <span className={styles.weaknessLabel}>Punto débil honesto: </span>{" "}
        Terminar proyectos. Tengo varios a medias y lo sé. Este portfolio existe
        en parte para obligarme a llevar cosas a producción, no solo a "funciona
        en local".
      </p>
    </div>
  );
}
