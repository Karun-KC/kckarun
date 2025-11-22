import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.aboutImage}>
          <img
            src={getImageUrl("about/mypic-new.png")}
            alt="Professional profile"
          />
        </div>
        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <div className={styles.iconWrapper}>
              <img src={getImageUrl("about/engineer.png")} alt="Engineering icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Licensed Engineer</h3>
              <p className={styles.subtitle}>Nepal Engineering Council</p>
              <p>
                Registered Electronics Engineer with hands-on experience in network systems, IT infrastructure, and technical problem-solving. Skilled at designing reliable, scalable solutions that support efficient system performance.
              </p>
            </div>
          </div>

          <div className={styles.aboutItem}>
            <div className={styles.iconWrapper}>
              <img src={getImageUrl("about/researcher.png")} alt="Research icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Researcher & Innovator</h3>
              <p className={styles.subtitle}>Published Author</p>
              <p>
                Published impactful research on AI-based automated number plate recognition systems and IoT-enabled poultry management, addressing real-world challenges through innovative technological solutions.
              </p>
            </div>
          </div>

          <div className={styles.aboutItem}>
            <div className={styles.iconWrapper}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Security icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Professional</h3>
              <p className={styles.subtitle}>Multiple Certifications</p>
              <p>
                Focused on network security, Python automation, and secure configurations across Windows and Linux environments. Backed by multiple industry certifications and hands-on experience safeguarding digital systems and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
