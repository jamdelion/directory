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

    export default function ProfileCard({ api, db}) {

    return (
        <StyledContainer>
            <Image src={api.avatar_url} height={'160'} width={'160'} alt="placeholder"/>
            
            <p>{db.name}</p>
            <p>{db.cohort}</p>
            <p>{db.bio}</p>

            {/* Timeline */}

            {/* Contact details button */}

            <SocialIcons db={db}/>
        </StyledContainer>
    )

}