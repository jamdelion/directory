import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export const useSupabase = () => {
    const [session, setSession] = useState(supabase.auth.session())

    supabase.auth.onAuthStateChange(async (_event, session) => {
        setSession(session)
    })
    return session;
}