// components/Footer.tsx
import styles from '../styles/Home.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
  </footer>
);

export default Footer;
