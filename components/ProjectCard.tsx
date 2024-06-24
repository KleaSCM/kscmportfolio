// components/ProjectCard.tsx
import styles from '../styles/ProjectCard.module.scss'; // Adjusted module import

type ProjectProps = {
  title: string;
  description: string;
  demoLink?: string;
  sourceCodeLink: string;
  type: string;
  status: string;
};

const ProjectCard = ({ title, description, demoLink, sourceCodeLink, type, status }: ProjectProps) => (
  <div className={styles.projectCard}>
    <div className={styles.thumbnail}>
      <img src="/images/projects.jpg" alt={title} className={styles.projectImage} />
    </div>
    <div className={styles.projectDetails}>
      <h3>{title} ({type})</h3>
      <p>{description}</p>
      <p>Status: {status}</p>
      {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>}
      <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">View Source Code</a>
    </div>
  </div>
);

export default ProjectCard;


  