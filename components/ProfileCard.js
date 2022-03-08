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

const ProfilePic = styled.div`
    border: solid 1px black;
    border-radius: 100%;
    width: 200px;
    height: 200px;
    margin: 2rem;
`

// fetch github image from username here?

export default function ProfileCard({name, cohort}) {

    return (
        <StyledContainer>
            <ProfilePic>
                <Image src="/images/vercel.svg" height={'100%'} width={'100%'} alt="placeholder"/>
            </ProfilePic>
            
            <p>{name}</p>
            <p>{cohort}</p>

            {/* Short description */}
            <p>Lorem ipsum grinder skate gnarly kickflip heel toeside</p>

            {/* Timeline */}

            {/* Contact details button */}

            {/* Social icons */}
        </StyledContainer>
    )

}