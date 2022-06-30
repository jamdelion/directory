import React, { useEffect } from "react";
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
`;

export default function FacesLine({people}) {

  console.log("PEOPLE", people)

  // needs to randomly show first few faces and be expandable to show the others

    return (
        <StyledLineContainer>
            <div style={{alignSelf: 'flex-start'}}><p>I am the groupTitle</p></div>
            <button style={{alignSelf: "flex-end"}}>Expand</button>
            
        <StyledFacesContainer>
          {people.map((x) => (
            <Face name={x.name} key={x.name} github={x.github}/>
          ))}
        </StyledFacesContainer>
    
        </StyledLineContainer>
    )

}