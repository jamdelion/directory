import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Face from "./Face";
import styles from "../styles/Home.module.css";

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
  const [isExpanded, setIsExpanded] = useState(false);

  // needs to randomly show first few faces and be expandable to show the others

  const faces = people.map((x) => (
    <Face name={x.name} key={x.name} github={x.github} />
  ));

  return (
    <StyledLineContainer>
      <div style={{ alignSelf: "flex-start" }}>
        <p>{title}</p>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ alignSelf: "flex-end", marginBottom: "1rem" }}
      >
        {isExpanded ? "Minimise -" : "Expand +"}
      </button>

      <div className={styles.grid}>
        {isExpanded ? faces : faces.slice(0, 4)}
      </div>
    </StyledLineContainer>
  );
}
