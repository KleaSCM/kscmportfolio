import styles from '../styles/Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <p className={styles.footerText}>
                &copy; {new Date().getFullYear()} John Farmer. All rights reserved.
                <span className={styles.resumeLink}>
                    <a href="/path-to-your-resume.pdf" download>
                        Download Resume
                    </a>
                </span>
            </p>
            <div className={styles.footerLinks}>
                <a href="https://github.com/Jay-SCM" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/material-rounded/24/ffffff/github.png" alt="GitHub Icon" className={styles.icon} />
                </a>
                <a href="https://www.curseforge.com/members/klieascm/projects" target="_blank" rel="noopener noreferrer">
                    <img src="/images/curseforgelogo.avif" alt="CurseForge Icon" className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/john-f-8094a9266/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/material-sharp/24/ffffff/linkedin.png" alt="LinkedIn Icon" className={styles.icon} />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;



