import styles from "./TechStack.module.css";

const technologies = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
];

export function TechStack() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Stack principal</p>
      <ul className={styles.list}>
        {technologies.map((tech) => (
          <li key={tech} className={styles.pill}>
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
