import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function CohortProfileCard({ api, db }) {
  return (
    <StyledContainer>
      <Image
        src={api.avatar_url}
        height={"160"}
        width={"160"}
        alt="placeholder"
      />

      <p>{db.name}</p>
      <p>{db.num_people} people</p>
      <p>{db.dates}</p>
      <p>{api.html_url}</p>
      <p>Number of repos: {api.public_repos}</p>

      {/* Timeline */}

      {/* Contact details button */}

      {/* <SocialIcons db={db}/> */}
    </StyledContainer>
  );
}
