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
        {/* <div className={styles.icons}>
          <a href="https://github.com/Jay-SCM" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/material-rounded/24/ffffff/github.png" alt="GitHub Icon" className={styles.icon} />
          </a>
          <a href="https://www.curseforge.com/members/klieascm/projects" target="_blank" rel="noopener noreferrer">
            <img src="/images/curseforgelogo.avif" alt="CurseForge Icon" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/john-f-8094a9266/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/material-sharp/24/ffffff/linkedin.png" alt="LinkedIn Icon" className={styles.icon} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;






