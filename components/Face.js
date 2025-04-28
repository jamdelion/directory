import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchFromGithubApi } from "../database/model";
import {
    faDev,
    faGithub,
    faHashnode,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

const StyledContainer = styled.div`
  height: 100%;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function Face({ name, github: githubUserName }) {
  const [githubData, setGithubData] = useState(null);

  useEffect(async () => {
    const data = await fetchFromGithubApi(githubUserName, "user");
    setGithubData(data);
  }, [githubUserName]);

  return (
    <StyledContainer>
      <Link href={`/people/${githubUserName}`}>
        <a>
          {githubData && (
            <Image
              src={
                githubData.avatar_url ||
                "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg"
                // use a better default picture and remove from next.config
              }
              height={"160"}
              width={"160"}
              alt="Github avatar"
            />
          )}
          <p>{name}</p>
          <p>{githubUserName}</p>
        </a>
      </Link>
    </StyledContainer>
  );
}
