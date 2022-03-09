import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css'


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

// export default function ProfileCard({name, cohort, bio, avatar}) {
    export default function ProfileCard({data}) {
        console.log("DATA", data)

    return (
        <StyledContainer>
            <Image src={data.githubData.avatar_url} height={'160'} width={'160'} alt="placeholder"/>
            
            <p>{data.databaseData.name}</p>
            <p>{data.databaseData.cohort}</p>
            <p>{data.databaseData.bio}</p>

            {/* Timeline */}

            {/* Contact details button */}

            {/* Social icons */}
        </StyledContainer>
    )

}