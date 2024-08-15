import styles from "../styles/hero.module.css";

import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";
import emailIcon from "../assets/images/email.png";
import resumeIcon from "../assets/images/file-document.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import typescript from "../assets/images/typescript.png";
import sql from "../assets/images/sql.png";
import node from "../assets/images/nodejs.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.introduction}>
        <div>
          <div className={styles.nameContainer}>
            <h1>
              Lifelong Learner, Problem Solver,
              <br />
              Developer
            </h1>
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

      {/* skill section start */}
      <section className={styles.skills}>
        <div>
          <h2>My Skills</h2>
        </div>
        <br></br>

        <div className={styles.skillsContainer}>
          <div className={styles.skillsTop}>
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
              <img src={node} />
              <span className={`${styles.tooltip} ${styles.style}`}>Node</span>
            </div>

            <div className={styles.skill}>
              <img src={sql} />
              <span className={`${styles.tooltip} ${styles.style}`}>SQL</span>
            </div>
          </div>

          {/* skills that dont have icons go here */}
          <div className={styles.skillsBottom}>
            <div className={styles.moreSkills}>
              <div className={styles.skill}>
                Express
                <span className={`${styles.tooltip} ${styles.style}`}>
                  Express
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
