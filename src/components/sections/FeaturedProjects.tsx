import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "@/content/projects/data";
import styles from "./FeaturedProjects.module.css";

export function FeaturedProjects() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Proyectos destacados</h2>
        <Link href="/projects" className={`${styles.seeAll} link-arrow`}>
          <span>Ver todos</span>
          <span>→</span>
        </Link>
      </div>
      <div className={styles.grid}>
        {featuredProjects.map((project) => (
          <article key={project.slug} className={styles.card}>
            <div className={styles.thumbnail}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.description}>{project.shortDescription}</p>
              <div className={styles.cardFooter}>
                <div className={styles.stack}>
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className={styles.tag}>
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
                {project.caseStudy ? (
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className={styles.link}
                  >
                    <span>Ver proyecto</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                ) : (
                  <span className={styles.badge}>Experiencia laboral</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
