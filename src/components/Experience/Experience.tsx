import React from "react";
import styles from "./Experience.module.css";
import skillsData from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import type { Skill, HistoryItem } from "../../types";

export const Experience = () => {
  const skills = skillsData as Record<string, Skill[]>;
  const typedHistory = history as HistoryItem[];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skillsContainer}>
          {Object.entries(skills).map(([category, categorySkills], idx) => (
            <div key={idx} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.skills}>
                {categorySkills.map((skill, id) => (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {typedHistory.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
