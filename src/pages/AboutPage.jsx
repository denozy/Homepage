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
              href="/resume_Nick_DenBleyker.pdf"
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
          <p className={styles.resumeText}>
            I graduated college with a degree in Exercise Science. I felt that a
            degree in the health field would be a great way to help others.
            However, over time I found that the day to day of the work life was
            not for me, and I began seeking alternatives. <br />
            <br />I fell in love with audiobooks, so I taught myself how to
            produce audiobooks. To me it just seemed the natural conclusion. If
            I find something interesting, why wouldn&apos;t I invest time into
            learning how that thing worked. It was that same mindset that led me
            to web development, which I&apos;ve found to be far and away my
            favorite never ending rabbit hole of learning.
          </p>
        </section>
        <section className={styles.resumeBlock}>
          <h2 className={styles.resumeHeader}>Work Life</h2>
          <p className={styles.resumeText}>
            Heres a snapshot of my work life throughout my 20s. <br />
            <br /> I graduated college, got a job in health program management,
            found the work life to be wanting, so I transitioned to tech sales,
            that seemed fun at the outset, but I found certain aspects of sales
            to be absolutely gut wrenchingly horrible. Sorry sales. The big
            one-nine hit, and my team got laid off. So I went back to my roots
            and worked as a personal trainer. Along the way, I taught myself to
            produce audiobooks, started freelancing as a producer, and learned
            web development.
          </p>
        </section>
        <section className={styles.resumeBlock}>
          <h2 className={styles.resumeHeader}>Courses||Certifications</h2>
          <ul className={`${styles.certificationList} ${styles.resumeText}`}>
            <li className={styles.certificationItem}>
              The Odin Project - check out this <Link to="/">post</Link> about
              my experience learning web dev through TOP!
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
