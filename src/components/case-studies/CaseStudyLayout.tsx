import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects/data";
import styles from "./CaseStudyLayout.module.css";

type Section = {
  title: string;
  content: React.ReactNode;
};

type Props = {
  project: Project;
  sections: Section[];
};

export function CaseStudyLayout({ project, sections }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Back link */}
        <Link href="/projects" className={styles.back}>
          <span>←</span>
          <span>Todos los proyectos</span>
        </Link>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            {project.isWorkExperience && (
              <span className={styles.badge}>Experiencia laboral</span>
            )}
            <h1 className={styles.title}>{project.name}</h1>
            <p className={styles.description}>{project.shortDescription}</p>
          </div>

          <div className={styles.meta}>
            <div className={styles.stack}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.links}>
              <div className={styles.statusBadge}>
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryLink}
                  >
                    <span>Ver demo</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <span className={styles.deployBadge}>
                    🚧 Deploy en progreso
                  </span>
                )}
              </div>
              <div className={styles.repoLinks}>
                {project.links.repoFront && (
                  <a
                    href={project.links.repoFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryLink}
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
                    className={styles.secondaryLink}
                  >
                    <span>Backend</span>
                    <span>↗</span>
                  </a>
                )}
                {project.links.document && (
                  <a
                    href={project.links.document}
                    download
                    className={styles.secondaryLink}
                  >
                    <span>Memoria TFG</span>
                    <span>↓</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Screenshot */}
        <div className={styles.screenshot}>
          <Image
            src={project.image}
            alt={`Screenshot de ${project.name}`}
            width={1100}
            height={620}
            className={styles.image}
            priority
          />
        </div>

        {/* Sections */}
        <div className={styles.content}>
          {sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.sectionContent}>{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
