import Link from "next/link";
import Image from "next/image";
import { Project } from "@/content/projects/data";
import styles from "./ProjectList.module.css";

type Props = {
  projects: Project[];
};

export function ProjectList({ projects }: Props) {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <article key={project.slug} className={styles.item}>
          <div className={styles.thumbnail}>
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="240px"
              className={styles.image}
            />
          </div>

          <div className={styles.body}>
            <div className={styles.top}>
              {project.isWorkExperience && (
                <span className={styles.badge}>Experiencia laboral</span>
              )}
              <h2 className={styles.name}>{project.name}</h2>
              <p className={styles.description}>{project.shortDescription}</p>
            </div>
            <div className={styles.tags}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            {project.caseStudy ? (
              <>
                <div className={styles.primaryAction}>
                  <span className={styles.deployBadge}>🚧 En progreso</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={styles.primaryButton}
                  >
                    <span>Ver caso</span>
                    <span>→</span>
                  </Link>
                </div>
                {project.links.repoFront && (
                  <a
                    href={project.links.repoFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                  >
                    <span>Frontend</span>
                    <span>↗</span>
                  </a>
                )}
                {project.links.repoBack && (
                  <a
                    href={project.links.repoBack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                  >
                    <span>Backend</span>
                    <span>↗</span>
                  </a>
                )}
              </>
            ) : (
              <div className={styles.primaryAction}>
                <span className={styles.privateNote}>
                  Código privado
                  <br />
                  empresa
                </span>

                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.primaryButton}
                >
                  <span>Ver demo</span>
                  <span>→</span>
                </Link>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
