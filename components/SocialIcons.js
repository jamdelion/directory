import React, { useEffect } from "react";
import styles from "./../styles/Home.module.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDev,
  faHashnode,
} from "@fortawesome/free-brands-svg-icons";
import { faBrowser } from "@fortawesome/free-solid-svg-icons";

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 10rem;
  padding: 1rem;
`;

const Icon = styled.a`
  max-width: 70px;
`;

export default function SocialIcons({ db }) {
  const githubUrl = `https://www.github.com/${db.github}`;
  const devtoUrl = `https://dev.to/${db.socials?.devto}`;
  const linkedinUrl = `https://www.linkedin.com/in/${db.socials?.linkedin}`;
  const hashnodeUrl = `https://${db.socials?.hashnode}.hashnode.dev`;
  const websiteUrl = `${db.socials?.website}`;

  return (
    <IconsContainer>
      {db.github && (
        <Icon href={githubUrl}>
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </Icon>
      )}

      {db.socials?.devto && (
        <Icon href={devtoUrl}>
          <FontAwesomeIcon icon={faDev} size="3x" />
        </Icon>
      )}

      {db.socials?.linkedin && (
        <Icon href={linkedinUrl}>
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </Icon>
      )}

      {db.socials?.hashnode && (
        <Icon href={hashnodeUrl}>
          <FontAwesomeIcon icon={faHashnode} size="3x" />
        </Icon>
      )}

      {db.socials?.website && (
        <Icon href={websiteUrl}>
          <FontAwesomeIcon icon={faBrowser} size="3x" />
        </Icon>
      )}
    </IconsContainer>
  );
}
