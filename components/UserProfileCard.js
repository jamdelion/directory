import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css'
import SocialIcons from "./SocialIcons";


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

const StyledButton = styled.button`
    background-color: lightgray;
    border: none;
    border-radius: 10px;
    padding: 0.7rem;
`

    export default function UserProfileCard({ api, db}) {

    return (
        <StyledContainer>
            <div style={{marginTop: "2rem"}}>
            <Image src={api.avatar_url} height={'160'} width={'160'} alt="placeholder"/>
            </div>
            
            <p className={utilStyles.headingXl}>{db.name}</p>
            <p className={utilStyles.headingLg}>{db.cohort}</p>
            <p style={{marginTop: "2rem", marginBottom: "2rem"}}>{db.bio}</p>

            {/* Timeline */}

            {/* Contact details button */}
            <StyledButton>Contact details here@gmail.com</StyledButton>

            <SocialIcons db={db}/>
        </StyledContainer>
    )

}