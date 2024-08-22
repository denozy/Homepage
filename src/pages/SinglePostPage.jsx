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
        </header>
        <section>
          <p className={styles.content}>{post.content}</p>
          <time>{post.date}</time>
        </section>
      </div>
    </article>
  );
};

export default SinglePostPage;
