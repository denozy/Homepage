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
          <p className={styles.content}>{project.content}</p>
        </section>
        <div className={styles.projectImagesContainer}>
          {project.moreImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={project.title}
              className={styles.projectImage}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default SingleProjectPage;
