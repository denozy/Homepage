import styles from "../styles/projectsContainer.module.css";
import ProjectCards from "./ProjectCards";
import projects from "../assets/data/projects.json";

const ProjectsContainer = () => {
  return (
    <main>
      <div className={styles.mainHeader}>
        <h2>Projects</h2>
      </div>
      <div className={styles.articleContainer}>
        {projects.map((project) => (
          <ProjectCards key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsContainer;
