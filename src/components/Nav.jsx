import { NavLink, useLocation } from "react-router-dom";
import styles from "../styles/nav.module.css";

import logo from "../assets/images/audiodidacts-logo.png";
const Nav = () => {
  const location = useLocation();
  const stickyPaths = ["/Posts", "/Projects", "/About"];
  const isSticky = stickyPaths.includes(location.pathname);

  return (
    <header
      className={isSticky ? `${styles.navbar} ${styles.sticky}` : styles.navbar}
    >
      <nav className={styles.headerLinksContainer}>
        <div className={styles.navRoot}>
          <NavLink to="/" className={styles.navLink}>
            <img src={logo} alt="Audiodidacts logo" className={styles.logo} />
            Nick DenBleyker
          </NavLink>
        </div>
        <div className={styles.navLinks}>
          <NavLink to="/Posts" className={styles.navLink}>
            Posts
          </NavLink>
          <NavLink to="/Projects" className={styles.navLink}>
            Projects
          </NavLink>
          <NavLink to="/About" className={styles.navLink}>
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
