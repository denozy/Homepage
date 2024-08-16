import { NavLink } from "react-router-dom";
import styles from "../styles/nav.module.css";
const Nav = () => {
  return (
    <header>
      <nav className={styles.headerLinksContainer}>
        <div className={styles.navRoot}>
          <NavLink to="/" className={styles.navLink}>
            Nick DenBleyker
          </NavLink>
        </div>
        <div className={styles.navLinks}>
          <NavLink to="/About" className={styles.navLink}>
            About
          </NavLink>
          <NavLink to="/Blog" className={styles.navLink}>
            Blog
          </NavLink>
          <NavLink to="/Projects" className={styles.navLink}>
            Projects
          </NavLink>
          <NavLink to="/Contact" className={styles.navLink}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
