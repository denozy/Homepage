import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import resume from "../assets/images/resume.png";
import styles from "../styles/pageStyles/aboutPage.module.css";

const AboutPage = () => {
  return (
    <article className={styles.resumeContainer}>
      <div className={styles.resumeWrapper}>
        <section>
          <header className={styles.resumeHeader}>
            <h1>About Me</h1>
          </header>
          <div className={styles.resumeRedirect}>
            If you&apos;re looking for my resume,
            <strong className={styles.boldText}> check it out here </strong>
            <FaArrowRight />
            <a
              href="/homepage/resume_Nick_DenBleyker.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.resumeIcon} src={resume} alt="Resume" />
            </a>
          </div>
        </section>
        <section className={styles.resumeBlock}>
          <h2 className={styles.resumeHeader}>Summary</h2>
          <p className={styles.resumeText}>
            I&apos;ve worked in a variety of industries, building skillsets in
            tech, health, entertainment, and marketing. I try to spend as much
            of my time learning new topics and building cool things as possible.
            I&apos;m always looking for new opportunities to share my knowledge
            and learn from others.
          </p>
        </section>
        <section className={styles.resumeBlock}>
          <h2 className={styles.resumeHeader}>Studies</h2>
          <p className={styles.resumeText}></p>
        </section>
        <section className={styles.resumeBlock}>
          <h2 className={styles.resumeHeader}>Work Life</h2>
          <p className={styles.resumeText}></p>
        </section>
        <section className={styles.resumeBlock}>
          <h2 className={styles.resumeHeader}>Courses||Certifications</h2>
          <ul className={`${styles.certificationList} ${styles.resumeText}`}>
            <li className={styles.certificationItem}>
              The Odin Project - check out this{" "}
              <Link to="/Posts/the-top-experience">post</Link> about my
              experience learning web dev through TOP!
            </li>

            <li className={styles.certificationItem}>The Odin Project</li>
          </ul>
          <br />
        </section>
      </div>
    </article>
  );
};

export default AboutPage;
