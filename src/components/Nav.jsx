import { NavLink } from "react-router-dom";
import styles from "../styles/nav.module.css";
const Nav = () => {
  return (
    <header>
      <nav className={styles.headerLinksContainer}>
        <div className={styles.navRoot}>
          <NavLink to="/">Nick DenBleyker</NavLink>
        </div>
        <div className={styles.navLinks}>
          <NavLink to="/About" className="about">
            About
          </NavLink>
          <NavLink to="/Blog" className="blog">
            Blog
          </NavLink>
          <NavLink to="/Projects" className="projects">
            Projects
          </NavLink>
          <NavLink to="/Contact" className="contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
