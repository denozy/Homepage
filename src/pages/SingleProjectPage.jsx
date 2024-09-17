import { useParams } from "react-router-dom";
import { useState } from "react";
import ProjectLinks from "../components/ProjectLinks";
import projects from "../assets/data/projects.json";
import styles from "../styles/pageStyles/singleProjectPage.module.css";

const SingleProjectPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDetail, setCurrentDetail] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImage(index);
    setCurrentDetail(index);
  };

  const { slug } = useParams();
  const project = projects.find((post) => post.slug === slug);
  return (
    <article className={styles.projectWrapper}>
      <header className={styles.heading}>
        <h1>{project.title}</h1>
      </header>
      <div className={styles.moreDetailsContainer}>
        <h2 className={styles.detailsHeading}>Project Summary</h2>
        <p className={styles.summaryText}>{project.summary}</p>
        <div className={styles.linkIcons}>
          <ProjectLinks project={project} />
        </div>
      </div>
      <div className={styles.projectImages}>
        <img
          src={project.moreImages[currentImage]}
          alt={project.title}
          className={styles.currentImage}
        />
        <div className={styles.moreDetailsContainer}>
          <p className={styles.detailsText}>
            {project.moreDetails[currentDetail]}
          </p>
        </div>
        <div className={styles.projectImagesContainer}>
          {project.moreImages.map((image, index) => (
            <img
              onClick={() => handleImageClick(index)}
              value={index}
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
