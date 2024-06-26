//AboutMe.tsx
import { useEffect, useState } from 'react';
import styles from '../styles/AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMeContent}>
        <div className={styles.aboutMeBox}>
          <p>
            I am a versatile software developer skilled in both frontend and backend technologies. I build web applications with React, integrate video streaming with CefSharp and WebView2, and create desktop apps with .NET. Projects like EasyWorkApp showcase my ability to design user-friendly interfaces and manage complex functions.
          </p>
          <p><strong>Frontend:</strong></p>
          <p>
            Proficient in JavaScript, TypeScript, React, and Next.js. Experienced with Material-UI and Framer Motion.
          </p>
          <p><strong>Backend:</strong></p>
          <p>
            Specialize in Node.js and .NET, using Express.js. Skilled in MySQL and MongoDB.
          </p>
          <p><strong>API Integration:</strong></p>
          <p>
            Develop applications with RESTful and GraphQL APIs, using Axios and Socket.IO.
          </p>
          <p><strong>Desktop Development:</strong></p>
          <p>
            Use .NET WinForms and C# for task automation and productivity.
          </p>
          <p>
            I am passionate about learning new technologies to enhance my skills and contribute to innovative projects with high-quality solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;