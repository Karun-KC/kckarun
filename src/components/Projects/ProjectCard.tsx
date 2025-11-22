import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, researchPaper, doi },
}: ProjectCardProps) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        {description}
        {doi ? (
          <>
            {" DOI:"}
            <a href={researchPaper} target="_blank" rel="noopener noreferrer" className={styles.researchLink}>
              {doi}
            </a>
          </>
        ) : researchPaper ? (
          <>
            {" Published research: "}
            <a href={researchPaper} target="_blank" rel="noopener noreferrer" className={styles.researchLink}>
              Research Paper
            </a>
          </>
        ) : null}
      </p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          Demo
        </a> */}
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
