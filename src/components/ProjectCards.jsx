import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "../styles/componentStyles/projectsContainer.module.css";
import githubIcon from "../assets/images/github.png";
import backupImage from "../assets/images/audiodidacts-logo.png";
import open from "../assets/images/open-in-new.png";

const ProjectCards = ({ project }) => {
  return (
    <article className={styles.projectCard}>
      <Link to={`/Projects/${project.slug}`}>
        {" "}
        <img
          src={project.image ? project.image : backupImage}
          className={styles.projectPicture}
          alt=""
        />
      </Link>
      <div className={styles.projectDetails}>
        <div>
          <h4>{project.title}</h4>
          <div className={styles.linkIcons}>
            {/* conditionally display github icon */}
            {project.github ? (
              <div className={styles.linkIcon}>
                <a
                  href={project.github}
                  target="_blank"
                  className={styles.linkIcon}
                >
                  <img src={githubIcon} alt="github icon" />
                </a>
                <span className={styles.tooltip}>Open Github</span>
              </div>
            ) : (
              ""
            )}
            {/* conditionally display liveurl icon */}
            {project.liveURL ? (
              <div className={styles.linkIcon}>
                <a
                  href={project.liveURL}
                  target="_blank"
                  className={styles.linkIcon}
                >
                  <img src={open} alt="open in new window" />
                </a>
                <span className={styles.tooltip}>Open Project</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <p className={styles.projectText}>{project.description}</p>
      </div>
    </article>
  );
};

ProjectCards.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string, // Optional
    description: PropTypes.string.isRequired,
    liveURL: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCards;
