import Image from 'next/image';
import styles from '../styles/ProjectCard.module.scss';

type ProjectProps = {
  title: string;
  description: string;
  sourceCodeLink: string;
  type: string;
  status: string;
  codeSnippet: string;
  imageUrl: string;
  onPrev: () => void;
  onNext: () => void;
};

const ProjectCard = ({ title, description, sourceCodeLink, type, status, codeSnippet, imageUrl, onPrev, onNext }: ProjectProps) => (
  <div className={styles.projectCard}>
    <div className={styles.projectDetails}>
      <h3>{title} <span className={styles.projectType}>({type})</span></h3>
      <p className={styles.projectDescription}>{description}</p>
      <p className={styles.projectStatus}>Status: {status}</p>
      <div className={styles.links}>
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className={styles.link}>View Source Code</a>
      </div>
    </div>
    <div className={styles.projectMedia}>
      <div className={styles.thumbnail}>
        <Image src={imageUrl} alt={title} className={styles.projectImage} width={500} height={300} />
      </div>
      <pre className={styles.codeSnippet}>{codeSnippet}</pre>
      <div className={styles.navigation}>
        <button onClick={onPrev} className={styles.navButton}>Previous</button>
        <button onClick={onNext} className={styles.navButton}>Next</button>
      </div>
    </div>
  </div>
);

export default ProjectCard;


