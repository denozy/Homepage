import PropTypes from "prop-types";
import styles from "../styles/componentStyles/projectsContainer.module.css";
import githubIcon from "../assets/images/github.png";
import open from "../assets/images/open-in-new.png";

const ProjectLinks = ({ project }) => {
  return (
    <div className={styles.linkIcons}>
      {/* conditionally display github icon */}
      {project.github ? (
        <div className={styles.linkIcon}>
          <a href={project.github} target="_blank" className={styles.linkIcon}>
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
          <a href={project.liveURL} target="_blank" className={styles.linkIcon}>
            <img src={open} alt="open in new window" />
          </a>
          <span className={styles.tooltip}>Open Project</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
ProjectLinks.propTypes = {
  project: PropTypes.shape({
    liveURL: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectLinks;
