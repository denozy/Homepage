import PropTypes from "prop-types";

import styles from "../styles/projectsContainer.module.css";
import coolFrog from "../assets/images/cool-frog.jpg";
import githubIcon from "../assets/images/github.png";
import open from "../assets/images/open-in-new.png";

const ProjectCards = ({ project }) => {
  return (
    <article>
      <img
        src={project.image ? project.image : coolFrog}
        className={styles.projectPicture}
        alt=""
      />
      <div className={styles.articleDetails}>
        <h4>{project.title}</h4>
        <div className="linkIcons">
          <a href={project.github} target="_blank" className="linkIcon">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href={project.liveURL} target="_blank" className="linkIcon">
            <img src={open} alt="open-in-new" />
          </a>
        </div>
        <p className="projectText">{project.description}</p>
      </div>
    </article>
  );
};

ProjectCards.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string, // Optional
    description: PropTypes.string.isRequired,
    liveURL: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCards;
