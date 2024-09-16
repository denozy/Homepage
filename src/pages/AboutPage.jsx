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
            <p className={styles.resumeText}>Check out my Resume!</p>
            <FaArrowRight />
            <a
              href="/homepage/public/Resume_Nick_DenBleyker-4.pdf"
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
            <ul className={styles.aboutMeList}>
              <li>
                Appalachian State University - Bachelors, Health and Fitness
              </li>
              <li>
                The Odin Project - Web Development fundamentals
                <Link
                  className={styles.aboutMeLink}
                  to="/Posts/the-top-experience"
                >
                  Check out my post about learning with TOP!
                </Link>
              </li>
              <li>
                Comptia A+ - Utilized resources to gain understanding of
                computer hardware and software fundamentals
              </li>

              <li>
                Free Code Camp - So many turtoials and projects, so little time
              </li>
            </ul>
          </p>
        </section>
        <section className={styles.resumeBlock}>
          <h2 className={styles.resumeHeader}>Work Life</h2>
          <p className={styles.resumeText}>
            <ul className={styles.aboutMeList}>
              <li>Web Development - Hobbiest, 2022-Present</li>
              <li>Audio Production - Freelance, 2021-Present</li>
              <li>Personal Trainer - Fitness Together, 2020-2023</li>
              <li>Sales Development Rep, SDR - IronNet, 2019-2020</li>
              <li>Program Coordinator, HealthTrax, 2018-2019</li>
              <li>Assistant Store Accountant, Harris Teeter, 2017-2018</li>
            </ul>
          </p>
        </section>
      </div>
    </article>
  );
};

export default AboutPage;
