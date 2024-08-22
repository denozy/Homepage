import PostCard from "../components/PostCard.jsx";
import posts from "../assets/data/posts.json";
import styles from "../styles/pageStyles/postsPage.module.css";

const PostsPage = () => {
  return (
    <article className={styles.postPageContainer}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </article>
  );
};

export default PostsPage;
