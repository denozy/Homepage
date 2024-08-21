import { Link } from "react-router-dom";

import AllLinks from "../components/AllLinks";
import styles from "../styles/componentStyles/footer.module.css";

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
          Pages
          <div className={styles.footerLinksContainer}>
            <Link className={styles.link} to="/Posts">
              Posts
            </Link>
            <Link className={styles.link} to="/Projects">
              Projects
            </Link>
            <Link className={styles.link} to="/About">
              About
            </Link>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div>Get in touch</div>
          <div>
            <AllLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
