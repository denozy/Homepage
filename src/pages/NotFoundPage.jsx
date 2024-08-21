import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../styles/pageStyles/notFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={styles.section}>
      <FaExclamationTriangle className={styles.icon} />
      <header>
        <h1 className={styles.title}>404 Not Found</h1>
      </header>
      <p className={styles.message}>This page does not exist</p>
      <Link to="/" className={styles.link}>
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
