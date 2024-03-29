import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";


const StyledContainer = styled.div`
    height: 100%;
    min-width: 100px;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;


export default function Face({name, github}) {

    return (
        <StyledContainer>
            <Link href={`/people/${github}`}>
            <a>
                {/* <Image/> */}
            <p>{name}</p>
            <p>{github}</p>
            </a>
            </Link>
        </StyledContainer>
    )

}