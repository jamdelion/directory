import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { fetchFromGithubApi } from "../database/model";

const StyledContainer = styled.div`
  height: 100%;
  min-width: 100px;
  border-radius: 50%;
//   border: 1px solid;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default function Face({ name, github }) {
  const [githubData, setGithubData] = useState({
    avatar_url: "https://avatars.githubusercontent.com/u/31373245?v=4",
  });

//   Probably need to do this earlier, currenttly it does a useEffect and fetch for every user in the facelines on the index page
  useEffect(async () => {
    await fetchFromGithubApi(github, "user").then((data) => {
      setGithubData(data);
    });
  }, []);

  return (
    <StyledContainer>
      <Link href={`/people/${github}`}>
        <a>
          {githubData && (
            <div style={{borderRadius: '50%', overflow: 'hidden'}}>
            <Image
              src={githubData.avatar_url || "/vercel.svg" }
              height={"160"}
              width={"160"}
              alt="placeholder"
              layout="fixed"
              objectFit="cover"
            />
            </div>
          )}
          <p>{name}</p>
        </a>
      </Link>
    </StyledContainer>
  );
}
