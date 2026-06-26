import { projects } from "@/content/projects/data";
import { ProjectList } from "@/components/sections/ProjectList";
import styles from "./page.module.css";

export const metadata = {
  title: "Proyectos — Isra QuirozZ",
  description: "Proyectos de desarrollo web y aplicaciones móviles.",
};

export default function ProjectsPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Proyectos</h1>
          <p className={styles.subtitle}>
            Una selección de lo que he construido.
          </p>
        </div>
        <ProjectList projects={projects} />
      </div>
    </main>
  );
}
