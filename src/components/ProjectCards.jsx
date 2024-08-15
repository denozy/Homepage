import styles from "../styles/projectsContainer.module.css";
import coolFrog from "../assets/cool-frog.jpg";
import githubIcon from "../assets/github.png";
import open from "../assets/open-in-new.png";

const ProjectCards = () => {
  return (
    <article>
      <img src={coolFrog} className={styles.articleHeader} alt="" />
      <div className={styles.articleText}>
        <div className={styles.articleImg}>
          <h4>Project name</h4>
          <div className="linkIcons">
            <a
              href="https://github.com/denozy"
              target="_blank"
              className="linkIcon"
            >
              <img src={githubIcon} alt="github icon" />
            </a>
            <a href="" target="_blank" className="linkIcon">
              <img src={open} alt="open-in-new" />
            </a>
          </div>
        </div>
        <p className="projectText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </article>
  );
};

export default ProjectCards;
