import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Face from "./Face";

const StyledFacesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
`;

const StyledLineContainer = styled.div`
  width: 70%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export default function FacesLine({ people, title }) {
  // needs to randomly show first few faces and be expandable to show the others

  return (
    <StyledLineContainer>
      <div style={{ alignSelf: "flex-start" }}>
        {/* <p>{title}</p> */}
        <Link href={`/cohorts/${title.toLowerCase()}`}>
          <a>
            <p>{title}</p>
          </a>
        </Link>
      </div>
      <button style={{ alignSelf: "flex-end" }}>Expand</button>
      {/* TODO: functionality to expand  */}

      <StyledFacesContainer>
        {people.map((face) => (
          <Face name={face.name} key={face.name} github={face.github} />
        ))}
      </StyledFacesContainer>
    </StyledLineContainer>
  );
}
