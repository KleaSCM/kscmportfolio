// components/Resume.tsx

import styles from '../styles/Resume.module.scss';

const Resume = () => (
  <section className={styles.resume}>
    <h2>Download My Resume/CV</h2>
    <a href="/path/to/your/resume.pdf" className={styles.downloadLink} download>
      Download PDF
    </a>
  </section>
);

export default Resume;
