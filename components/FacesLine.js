import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css'
import { supabase } from "../database/supabaseClient";
import Face from "./Face";

// export async function getStaticProps() {
//     const data = await supabase.from("people").select("*");
//     console.log("data", data.data);
//     return {
//       props: {
//         people: data.data,
//       },
//     };
//   }

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

    return (
        <StyledLineContainer>
            <div style={{alignSelf: 'flex-start'}}><p>I am the groupTitle</p></div>
            <button style={{alignSelf: "flex-end"}}>Expand</button>
            
        <StyledFacesContainer>
          {people.map((x) => (
            <Face name={x.name} github={x.github}/>
          ))}
        </StyledFacesContainer>
    
        </StyledLineContainer>
    )

}