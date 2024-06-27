
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import AnimatedIcon from '../components/AnimatedIcons'; 
import styles from '../styles/Home.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Navbar />
    <main className={styles.main}>
      <h1 className={`${styles.title} ${styles.fadeIn}`}>Welcome to My Portfolio</h1>
      <p className={`${styles.description} ${styles.fadeInDescription}`}>
        This is a showcase of my software engineering projects.
      </p>
      <AboutMe />
    </main>
    <Footer />
    <div className={styles.iconContainer}>
      <AnimatedIcon icon="/images/html.png" alt="HTML5 Icon" delay={0} left={0} top={0} />
      <AnimatedIcon icon="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png" alt="CSS Icon" delay={0.2} left={-40} top={-40} />
      <AnimatedIcon icon="/images/js.png" alt="JavaScript Icon" delay={1} left={20} top={0} />
      <AnimatedIcon icon="/images/ts.png" alt="TypeScript Icon" delay={0.4} left={-90} top={-80} />
      <AnimatedIcon icon="/images/next.png" alt="Next.js Icon" delay={2} left={10} top={2} />
    </div>
  </div>
);

export default HomePage;









