import { createClient } from "@supabase/supabase-js";

console.log("process.env", process.env.NEXT_PUBLIC_SUPABASE_URLess)

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)