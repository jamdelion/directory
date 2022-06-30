import React, { useEffect } from "react";
import styles from "./../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDev, faHashnode } from "@fortawesome/free-brands-svg-icons";
import { faBrowser } from "@fortawesome/free-solid-svg-icons";


export default function SocialIcons({ db }) {
  const githubUrl = `https://www.github.com/${db.github}`;
  const devtoUrl = `https://dev.to/${db.socials?.devto}`;
  const linkedinUrl = `https://www.linkedin.com/in/${db.socials?.linkedin}`;
  const hashnodeUrl = `https://${db.socials?.hashnode}.hashnode.dev`;
  const websiteUrl = `${db.socials?.website}`;

  return (
    <div className={styles.grid}>
      {db.github && (
        <a href={githubUrl}>
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
      )}

      {db.socials?.devto && (
        <a href={devtoUrl}>
          <FontAwesomeIcon icon={faDev} size="3x" />
        </a>
      )}

      {db.socials?.linkedin && (
        <a href={linkedinUrl}>
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
      )}

      {db.socials?.hashnode && (
        <a href={hashnodeUrl}>
          <FontAwesomeIcon icon={faHashnode} size="3x" />
        </a>
      )}

      {db.socials?.website && (
        <a href={websiteUrl}>
          <FontAwesomeIcon icon={faBrowser} size="3x" />
        </a>
      )}
    </div>
  );
}
