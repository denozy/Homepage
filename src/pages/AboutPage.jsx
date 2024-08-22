import { FaArrowRight } from "react-icons/fa";
import resume from "../assets/images/resume.png";
import styles from "../styles/pageStyles/aboutPage.module.css";

const AboutPage = () => {
  return (
    <article className={styles.resumeContainer}>
      <section className={styles.resumeHeader}>
        <header>
          <h1>About Me</h1>
        </header>
        <p className={styles.resumeRedirect}>
          HEY! If you&apos;re looking for a resume,{" "}
          <strong className={styles.boldText}> GO HERE!</strong>{" "}
          <FaArrowRight />{" "}
          <a
            href="/resume_Nick_DenBleyker.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.resumeIcon} src={resume} alt="Resume" />
          </a>
        </p>
      </section>

      <section className={styles.resumeBlock}>
        <h2 className={styles.resumeHeader}>Summary</h2>
        <p className={styles.resumeText}>
          Highly motivated, agile, punctual and dependable. Lifelong learner
          working towards a career change to provide more challenge and
          professional growth. Comfortable learning complex topics and applying
          my knowledge to improve the world around me.
        </p>
      </section>

      <section className={styles.resumeBlock}>
        <h2 className={styles.resumeHeader}>Work History</h2>
        <ol className={styles.jobList}>
          <li className={styles.jobItem}>
            What I learned in boating school is
          </li>
        </ol>
      </section>

      <section className={styles.resumeBlock}>
        <h2 className={styles.resumeHeader}>Learning History</h2>
        <p>What I learned in boating school is</p>
      </section>

      <section className={styles.resumeBlock}>
        <h2 className={styles.resumeHeader}>Certifications</h2>
        <p>What I learned in boating school is</p>
      </section>
    </article>
  );
};

export default AboutPage;
