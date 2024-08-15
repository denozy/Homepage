import styles from "../styles/hero.module.css";

import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import resumeIcon from "../assets/file-document.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";

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
        <br></br>

        <div className={styles.skillsContainer}>
          <div className={styles.skill}>
            <img src={html} />
            <span className={`${styles.tooltip} ${styles.structure}`}>
              HTML
            </span>
          </div>

          <div className={styles.skill}>
            <img src={css} />
            <span className={`${styles.tooltip} ${styles.style}`}>CSS</span>
          </div>

          <div className={styles.skill}>
            <img src={js} />
            <span className={`${styles.tooltip} ${styles.style}`}>
              Javascript
            </span>
          </div>

          <div className={styles.skill}>
            <img src={react} />
            <span className={`${styles.tooltip} ${styles.style}`}>React</span>
          </div>

          <div className={styles.skill}>
            <img src={typescript} />
            <span className={`${styles.tooltip} ${styles.style}`}>
              Typescript
            </span>
          </div>

          <div className={styles.skill}>
            <img src={css} />
            <span className={`${styles.tooltip} ${styles.style}`}>Node</span>
          </div>

          <div className={styles.skill}>
            <img src={css} />
            <span className={`${styles.tooltip} ${styles.style}`}>Express</span>
          </div>

          <div className={styles.skill}>
            <img src={css} />
            <span className={`${styles.tooltip} ${styles.style}`}>SQL</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
