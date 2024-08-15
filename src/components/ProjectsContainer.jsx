import styles from "../styles/projectsContainer.module.css";
import ProjectCards from "./ProjectCards";

const ProjectsContainer = () => {
  return (
    <main>
      <div className={styles.mainHeader}>
        <h2>Projects</h2>
      </div>
      <div className={styles.articleContainer}>
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </main>
  );
};

export default ProjectsContainer;
