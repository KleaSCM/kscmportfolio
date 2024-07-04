import { useEffect, useState } from 'react';
import { fetchProjects } from '../utils/fetchProjects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Project } from '../types/Project';
import styles from '../styles/Projects.module.scss';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const loadProjects = async () => {
            const projectData = await fetchProjects();
            setProjects(projectData);
        };

        loadProjects();
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <h1>Projects</h1>
                {projects.length > 0 && (
                    <ProjectCard
                        title={projects[currentIndex].title}
                        description={projects[currentIndex].description}
                        sourceCodeLink={projects[currentIndex].sourceCodeLink}
                        type={projects[currentIndex].type}
                        status={projects[currentIndex].status}
                        codeSnippet={projects[currentIndex].codeSnippet}
                        imageUrl={projects[currentIndex].imageUrl}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />
                )}
            </main>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </div>
    );
};

export default Projects;


