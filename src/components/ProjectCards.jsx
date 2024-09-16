import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "../styles/componentStyles/projectsContainer.module.css";

import backupImage from "../assets/images/audiodidacts-logo.png";
import ProjectLinks from "./ProjectLinks";

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
          <ProjectLinks project={project} />
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
