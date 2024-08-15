import styles from "../styles/projectsContainer.module.css";
import ProjectCards from "./ProjectCards";
import check from "../assets/images/matchem.png";

const ProjectsContainer = () => {
  return (
    <main>
      <div className={styles.mainHeader}>
        <h2>Projects</h2>
      </div>
      <div className={styles.articleContainer}>
        <ProjectCards pic={check} />
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
