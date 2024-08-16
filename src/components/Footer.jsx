import { Link } from "react-router-dom";

import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";
import emailIcon from "../assets/images/email.png";
import resumeIcon from "../assets/images/file-document.png";
import styles from "../styles/footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              {currentYear}-Present Nick DenBleyker. All Rights Reserved.
            </span>
          </div>
        </div>

        <div className={styles.footerCenter}>
          <h4>Links</h4>
          <div className={styles.foorterLinksContainer}>
            <Link to="/About">
              <h4>About</h4>
            </Link>
            <Link to="/Blog">
              <h4>Blog</h4>
            </Link>
            <Link to="/Projects">
              <h4>Projects</h4>
            </Link>
            <Link to="/Contact">
              <h4>Contact</h4>
            </Link>
          </div>
        </div>
        <div className="footerRight">
          <h4>Get in touch</h4>
          <div className="linkIcons">
            <Link
              to="https://github.com/denozy"
              target="_blank"
              className="linkIcon"
            >
              <img src={githubIcon} alt="github icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/nick-denbleyker-566a35291"
              target="_blank"
              className="linkIcon"
            >
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </Link>
            <Link to="mailto:ndenbleyker@gmail.com" className="linkIcon">
              <img src={emailIcon} alt="Email icon" />
            </Link>
            <Link
              to="../Assets/Nicholas DenBleyker Resume-4.pdf"
              target="_blank"
              className="linkIcon"
            >
              <img src={resumeIcon} alt="Resume Icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
