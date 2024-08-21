import { NavLink, useLocation } from "react-router-dom";
import styles from "../styles/nav.module.css";

import logo from "../assets/images/audiodidacts-logo.png";
const Nav = () => {
  const location = useLocation();
  const Paths = ["/Posts", "/Projects", "/About"];
  const isActive = Paths.includes(location.pathname);

  return (
    <header
      className={isActive ? `${styles.navbar} ${styles.sticky}` : styles.navbar}
    >
      <nav className={styles.headerLinksContainer}>
        <div className={styles.navRoot}>
          <NavLink to="/" className={styles.rootLink}>
            <img src={logo} alt="Audiodidacts logo" className={styles.logo} />
            Nick DenBleyker
          </NavLink>
        </div>
        <div className={styles.navLinks}>
          <NavLink
            to="/Posts"
            className={
              location.pathname === "/Posts"
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/Projects"
            className={
              location.pathname === "/Projects"
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/About"
            className={
              location.pathname === "/About"
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
