import { useParams } from "react-router-dom";
import posts from "../assets/data/posts.json";
import styles from "../styles/pageStyles/singlePostPage.module.css";

const SinglePostPage = () => {
  const { slug } = useParams();
  const post = posts.find((post) => post.slug === slug);
  return (
    <article>
      <div className={styles.postWrapper}>
        <header className={styles.heading}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.postDetails}>
            By {post.author} on {new Date(post.date).toLocaleDateString()}
          </div>
        </header>

        <section className={styles.postBody}>
          {post.content.map((section, index) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={index} className={styles.content}>
                    {section.text}
                  </p>
                );
              case "image":
                return (
                  <img
                    key={index}
                    src={section.src}
                    alt={section.alt}
                    className={styles.image}
                  />
                );
              case "header":
                return (
                  <h2 key={index} className={styles.header}>
                    {section.text}
                  </h2>
                );
              default:
                return null;
            }
          })}
        </section>
      </div>
    </article>
  );
};

export default SinglePostPage;
