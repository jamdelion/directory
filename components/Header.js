import React from "react";
import SignOut from "./SignOut";

const Header = ({session}) => {
    return (

        <div>
            {session && <SignOut/>}
        </div>
    )
}

export default Header;