import styles from "../styles/componentStyles/projectsContainer.module.css";
import ProjectCards from "./ProjectCards";
import projects from "../assets/data/projects.json";

const ProjectsContainer = () => {
  return (
    <main>
      <div className={styles.mainHeader}>
        <h3>Projects</h3>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCards key={index} project={project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsContainer;
