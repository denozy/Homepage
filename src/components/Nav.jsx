import styles from "../styles/nav.module.css";
const Nav = () => {
  return (
    <header>
      <nav className={styles.headerLinksContainer}>
        <div className={styles.navRoot}>
          <a href="index.html">Nick DenBleyker</a>
        </div>
        <div className={styles.navLinks}>
          <a href="" className="about">
            About
          </a>
          <a href="" className="blog">
            Blog
          </a>
          <a href="" className="projects">
            Projects
          </a>
          <a href="" className="contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
