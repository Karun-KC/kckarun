import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/mypic2.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>St. Cloud State University - St. Cloud, MN</h3>
              <p>
              Master of Science in Information Assurance (Specialization: Network Security)
              </p>
              <p>
              Aug 2024 - Present
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>Tribhuvan University (TU), Paschimanchal Campus – Kathmandu, Nepal</h3>
              <p>
              Bachelor of Engineering in Electronics, Communication & Information Engineering
              </p>
              <p>
                Nov 2018 - May 2023
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
