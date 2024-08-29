import styles from "../styles/componentStyles/mySkills.module.css";

import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import typescript from "../assets/images/typescript.png";
import sql from "../assets/images/sql.png";
import node from "../assets/images/nodejs.png";

const MySkills = () => {
  return (
    <>
      {" "}
      {/* skills start */}
      <div className={styles.skillsContainer}>
        <div className={styles.skillsTop}>
          <div className={styles.skill}>
            <img src={html} />
            <span className={styles.tooltip}>HTML</span>
          </div>

          <div className={styles.skill}>
            <img src={css} />
            <span className={styles.tooltip}>CSS</span>
          </div>

          <div className={styles.skill}>
            <img src={js} />
            <span className={styles.tooltip}>Javascript</span>
          </div>

          <div className={styles.skill}>
            <img src={typescript} />
            <span className={styles.tooltip}>Typescript</span>
          </div>

          <div className={styles.skill}>
            <img src={react} />
            <span className={styles.tooltip}>React</span>
          </div>

          <div className={styles.skill}>
            <img src={node} />
            <span className={styles.tooltip}>Node</span>
          </div>

          <div className={styles.skill}>
            <img src={sql} />
            <span className={styles.tooltip}>SQL</span>
          </div>
        </div>

        {/* skills that dont have icons go here */}
        <div className={styles.skillsBottom}>
          <div>
            <h2>Skills in Progress</h2>
          </div>
          <br />
          <div className={styles.skillsInProgress}>Express, Python, DSA</div>
        </div>
      </div>
      {/* skills end */}
    </>
  );
};

export default MySkills;
