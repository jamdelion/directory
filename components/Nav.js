import React, { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";

const StyledContainer = styled.div`
  display: flex;
`;

export default function Nav() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log("USER", user)
//   {
//   "nickname": "jamdelion",
//   "name": "Jo",
//   "picture": "https://avatars.githubusercontent.com/u/31373245?v=4",
//   "updated_at": "2022-07-28T13:26:41.939Z",
//   "sub": "github|31373245"
// }
  return (
    <StyledContainer>
      {user ? (
        <>
          <a href="/api/auth/logout">Logout</a>
          <p>Hello {user?.name}!</p>
        </>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </StyledContainer>
  );
}
