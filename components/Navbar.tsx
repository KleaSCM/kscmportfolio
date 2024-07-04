import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles.logo}>
                    <Image src="/images/prof2.jpg" alt="Your Logo" width={50} height={50} className={styles.logoImage} />
                </div>
            </Link>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/projects">
                        <div className={styles.navLink}>Projects</div>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="https://github.com/Jay-SCM">
                        <div className={styles.navLink}>
                            <img src="https://img.icons8.com/material-rounded/24/ffffff/github.png" alt="GitHub Icon" className={styles.icon} />
                            GitHub
                        </div>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="https://www.linkedin.com/in/john-f-8094a9266/">
                        <div className={styles.navLink}>
                            <img src="https://img.icons8.com/material-sharp/24/ffffff/linkedin.png" alt="LinkedIn Icon" className={styles.icon} />
                            LinkedIn
                        </div>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="https://www.curseforge.com/members/klieascm/projects">
                        <div className={styles.navLink}>
                            <Image src="/images/curseforgelogo.avif" alt="CurseForge Icon" width={24} height={24} className={styles.icon} />
                            CurseForge
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;







