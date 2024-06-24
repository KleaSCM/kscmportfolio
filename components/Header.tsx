// components/Header.tsx
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <NavLink href="/" text="Home" />
      <NavLink href="/projects" text="Projects" />
    </nav>
    <div className={styles.socialLinks}>
      <ExternalLink href="https://github.com/Jay-SCM" text="GitHub" />
      <ExternalLink href="https://www.curseforge.com/members/klieascm/projects" text="CurseForge" />
      <ExternalLink href="https://www.linkedin.com/in/john-f-8094a9266/" text="LinkedIn" />
    </div>
  </header>
);

const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <Link href={href}>
    <span className={styles.navLink}>{text}</span>
  </Link>
);

const ExternalLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <span className={styles.socialLink}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </span>
);

export default Header;








