import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/pageStyles/postsPage.module.css";

const PostCard = ({ post }) => {
  return (
    <section key={post.id} className={styles.postCard}>
      <Link className={styles.cardLink} to={`/Posts/${post.slug}`}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        Read More
      </Link>
    </section>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};
export default PostCard;
