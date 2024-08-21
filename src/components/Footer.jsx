import { Link } from "react-router-dom";

import AllLinks from "../components/AllLinks";
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
          <AllLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
