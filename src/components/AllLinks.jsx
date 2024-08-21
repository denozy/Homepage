import styles from "../styles/allLinks.module.css";
import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";
import emailIcon from "../assets/images/email.png";
import resumeIcon from "../assets/images/file-document.png";

const Links = () => {
  return (
    <>
      {/* links start here */}
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
        {/* <a
          href="../Assets/Nicholas DenBleyker Resume-4.pdf"
          target="_blank"
          className={styles.linkIcon}
        >
          <img src={resumeIcon} alt="Resume Icon" />
        </a> */}
      </div>
      {/* links end here */}
    </>
  );
};

export default Links;
