import { useParams } from "react-router-dom";
import projects from "../assets/data/projects.json";
import styles from "../styles/pageStyles/singleProjectPage.module.css";

const SingleProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((post) => post.slug === slug);
  return (
    <article>
      <div className={styles.projectWrapper}>
        <header className={styles.heading}>
          <h1>{project.title}</h1>
        </header>
        <section>
          <p className={styles.description}>{project.description}</p>
        </section>
      </div>
    </article>
  );
};

export default SingleProjectPage;
