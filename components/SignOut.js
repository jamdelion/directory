import React from "react";
import { supabase } from "../database/supabaseClient";
import Link from "next/link";

const SignOut = () => {
    return (
        <button onClick={()=> {
            supabase.auth.signOut();
        }}>
            <Link href="/">
                <a>Sign Out</a>
                </Link></button>
    )
}

export default SignOut;