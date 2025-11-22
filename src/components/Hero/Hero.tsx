import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.greeting}>👋 Hello, World!</span>
        <h1 className={styles.title}>
          <span className={styles.titleMain}>Karun KC</span>
          <span className={styles.titleSub}>Network Security Engineer</span>
        </h1>
        <p className={styles.description}>
          Electronics Engineer with expertise in network systems and cybersecurity, currently pursuing a Master&apos;s in Information Assurance with a focus on Network Security. Passionate about building secure, scalable infrastructure and solving complex technical challenges.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>
          
        </div>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Karun-KC" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/kckarun07/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
          </a>
          <a href="mailto:kckarun07@gmail.com" aria-label="Email">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          </a>
        </div>
      </div>
      <div className={styles.heroImgContainer}>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Karun KC"
          className={styles.heroImg}
        />
        <div className={styles.glowEffect}></div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
