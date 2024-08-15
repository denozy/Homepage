import styles from "../styles/hero.module.css";

import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import resumeIcon from "../assets/file-document.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.introduction}>
        <div>
          <div className={styles.nameContainer}>
            <h2>
              Lifelong Learner, Problem Solver,
              <br />
              Developer
            </h2>
          </div>
          <div className={styles.linkIcons}>
            <a
              href="https://github.com/denozy"
              target="_blank"
              className={styles.linkIcon}
            >
              <img src={githubIcon} alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/nick-denbleyker-566a35291"
              target="_blank"
              className={styles.linkIcon}
            >
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
            <a href="mailto:ndenbleyker@gmail.com" className={styles.linkIcon}>
              <img src={emailIcon} alt="Email icon" />
            </a>
            <a
              href="../Assets/Nicholas DenBleyker Resume-4.pdf"
              target="_blank"
              className={styles.linkIcon}
            >
              <img src={resumeIcon} alt="Resume Icon" />
            </a>
          </div>
        </div>
        <h4 className={styles.descriptionText}>
          I love learning new things, solving complex puzzles, and applying what
          I know to improve the world around me.
        </h4>
      </section>

      <section className={styles.skills}>
        <div>
          <h1>My Skills</h1>
        </div>
        <div className={styles.skillsContainer}>
          <span className={styles.skill}>
            HTML
            <span className={`${styles.tooltip} ${styles.structure}`}>
              Structure
            </span>
          </span>

          <span className={styles.skill}>
            CSS
            <span className={`${styles.tooltip} ${styles.style}`}>Styles</span>
          </span>

          <span className={styles.skill}>
            Javascript
            <span className={`${styles.tooltip} ${styles.backend}`}>
              Functionality
            </span>
          </span>

          <span className={styles.skill}>
            Typescript
            <span className={`${styles.tooltip} ${styles.backend}`}>
              Typed Functionality
            </span>
          </span>

          <span className={styles.skill}>
            React
            <span className={`${styles.tooltip} ${styles.frontend}`}>
              Frontend
            </span>
          </span>

          <span className={styles.skill}>
            Node.js
            <span className={`${styles.tooltip} ${styles.backend}`}>
              Backend
            </span>
          </span>

          <span className={styles.skill}>
            Express
            <span className={`${styles.tooltip} ${styles.backend}`}>
              Backend
            </span>
          </span>

          <span className={styles.skill}>
            Next.js
            <span className={`${styles.tooltip} ${styles.fullStack}`}>
              Full Stack
            </span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Hero;
