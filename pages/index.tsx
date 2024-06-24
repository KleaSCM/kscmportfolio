// pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <h1 className={`${styles.title} ${styles.fadeIn}`}>Welcome to My Portfolio</h1>
      <p className={`${styles.description} ${styles.fadeInDescription}`}>This is a showcase of my software engineering projects.</p>
    </main>
    <Footer />
  </div>
);

export default HomePage;
