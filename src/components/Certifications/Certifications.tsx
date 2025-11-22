import React from "react";
import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";
import { getImageUrl } from "../../utils";
import type { Certification } from "../../types";

export const Certifications = () => {
  const typedCertifications = certifications as (Certification & { description?: string })[];

  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications & Licenses</h2>
      <div className={styles.certifications}>
        {typedCertifications.length > 0 ? (
          typedCertifications.map((cert, id) => {
            return (
              <div key={id} className={styles.certificationCard}>
                <div className={styles.certImageContainer}>
                  <img src={getImageUrl(cert.imageSrc)} alt={cert.title} />
                </div>
                <div className={styles.certDetails}>
                  <h3>{cert.title}</h3>
                  <p className={styles.issuer}>{cert.issuer}</p>
                  <p className={styles.date}>{cert.issueDate}</p>
                  {cert.description && (
                    <p className={styles.description}>{cert.description}</p>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.credentialLink}
                    >
                      🔗 View Credential
                    </a>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className={styles.empty}>No certifications yet</p>
        )}
      </div>
    </section>
  );
};
