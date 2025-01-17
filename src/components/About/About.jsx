import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/mypic.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Licensed Engineer, Nepal Engineering Council</h3>
              <p>
              Experienced in network engineering, teaching, and IT support, combining technical expertise and problem-solving to deliver efficient, scalable solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Researcher</h3>
              <p>
              Published impactful research on AI-based number plate recognition and IoT-enabled poultry management systems, solving real-world challenges with innovative technology.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Professional</h3>
              <p>
              Experienced in network security, Python, FortiGate, and Agile principles, with certifications in Cybersecurity and expertise in safeguarding digital systems. Certifications include TestOut Hybrid Server Pro: Core, CompTIA, and Certified in Cybersecurity (CC) from ISC2.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
