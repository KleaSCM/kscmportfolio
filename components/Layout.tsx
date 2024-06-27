import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
       
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
};

export default Layout;

