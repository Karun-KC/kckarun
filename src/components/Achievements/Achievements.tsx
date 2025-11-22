import React from "react";
import styles from "./Achievements.module.css";
import achievements from "../../data/achievements.json";
import { getImageUrl } from "../../utils";
import type { Achievement } from "../../types";

export const Achievements = () => {
  const typedAchievements = achievements as (Achievement & { organization?: string; link?: string; linkText?: string })[];

  const renderDescription = (description: string, link?: string, linkText?: string) => {
    if (!link || !linkText) {
      return description;
    }
    
    const parts = description.split(linkText);
    return (
      <>
        {parts[0]}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.descriptionLink}
        >
          {linkText}
        </a>
        {parts[1]}
      </>
    );
  };

  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.achievements}>
        {typedAchievements.length > 0 ? (
          typedAchievements.map((achievement, id) => {
            return (
              <div key={id} className={styles.achievementCard}>
                {achievement.imageSrc && (
                  <div className={styles.achievementImageContainer}>
                    <img src={getImageUrl(achievement.imageSrc)} alt={achievement.title} />
                  </div>
                )}
                <div className={styles.achievementDetails}>
                  <h3>{achievement.title}</h3>
                  {achievement.organization && (
                    <p className={styles.organization}>{achievement.organization}</p>
                  )}
                  <p className={styles.description}>
                    {renderDescription(achievement.description, achievement.link, achievement.linkText)}
                  </p>
                  <p className={styles.date}>{achievement.date}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className={styles.empty}>No achievements yet</p>
        )}
      </div>
    </section>
  );
};
