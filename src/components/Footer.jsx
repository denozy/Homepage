import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import resumeIcon from "../assets/file-document.png";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerBlocksContainer}>
        <div className={styles.footerLeft}>
          <div>
            <h3>Nick DenBleyker</h3>
            <div className={styles.descriptionTextFooter}>
              Thanks for stopping by!
            </div>
          </div>
          <div>
            &copy;
            <span id="year">
              CODEYEAR-present Nick DenBleyker. All Rights Reserved.
            </span>
          </div>
        </div>

        <div className={styles.footerCenter}>
          <h4>Links</h4>
          <div className={styles.foorterLinksContainer}>
            <a href="" className="about">
              <h4>about</h4>
            </a>
            <a href="" className="blog">
              <h4>blog</h4>
            </a>
            <a href="" className="projects">
              <h4>projects</h4>
            </a>
            <a href="" className="contact">
              <h4>contact</h4>
            </a>
          </div>
        </div>
        <div className="footerRight">
          <h4>Get in touch</h4>
          <div className="linkIcons">
            <a
              href="https://github.com/denozy"
              target="_blank"
              className="linkIcon"
            >
              <img src={githubIcon} alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/nick-denbleyker-566a35291"
              target="_blank"
              className="linkIcon"
            >
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
            <a href="mailto:ndenbleyker@gmail.com" className="linkIcon">
              <img src={emailIcon} alt="Email icon" />
            </a>
            <a
              href="../Assets/Nicholas DenBleyker Resume-4.pdf"
              target="_blank"
              className="linkIcon"
            >
              <img src={resumeIcon} alt="Resume Icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
