import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.timeline}>
        <div className={`${styles.timelineItem} ${styles.cybersecurity}`}>
          <div className={styles.timelineIcon}>
            <img src={getImageUrl("about/security.png")} alt="Security icon" />
          </div>
          <div className={styles.timelineContent}>
            <span className={styles.timelineDate}>Aug 2024 - Present</span>
            <h3>Master of Science in Information Assurance</h3>
            <h4>St. Cloud State University</h4>
            <p className={styles.location}>St. Cloud, Minnesota</p>
            <p className={styles.specialization}>Specialization: Network Security</p>
            <div className={styles.highlights}>
              <p>Advanced study in cybersecurity, network architecture, and information systems protection</p>
            </div>
          </div>
        </div>

        <div className={`${styles.timelineItem} ${styles.electronics}`}>
          <div className={styles.timelineIcon}>
            <img src={getImageUrl("about/grad.png")} alt="Education icon" />
          </div>
          <div className={styles.timelineContent}>
            <span className={styles.timelineDate}>Nov 2018 - May 2023</span>
            <h3>Bachelor of Engineering</h3>
            <h4>Tribhuvan University (TU), Paschimanchal Campus</h4>
            <p className={styles.location}>Kathmandu, Nepal</p>
            <p className={styles.specialization}>Electronics, Communication & Information Engineering</p>
            <div className={styles.highlights}>
              <p>Strong foundation in embedded systems, telecommunications, and software development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
