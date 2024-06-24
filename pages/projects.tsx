// pages/projects.tsx
import { useEffect, useState } from 'react';
import { fetchProjects } from '../utils/fetchProjects';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Projects.module.scss';

// Define Project type
type Project = {
  title: string;
  description: string;
  demoLink?: string;
  sourceCodeLink: string;
  type: string;
  status: string;
};

const Projects: React.FC = () => {
  // Initialize projects state with empty array of Project type
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const projectData = await fetchProjects();
      setProjects(projectData);
    };

    loadProjects();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Projects</h1>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              demoLink={project.demoLink}
              sourceCodeLink={project.sourceCodeLink}
              type={project.type}
              status={project.status}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;








