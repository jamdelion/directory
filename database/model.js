import { supabase } from "./supabaseClient";

export async function getGithubNames() {
    const { data, error, status } = await supabase
    .from("people")
    .select("github");

  if (error && status !== 406) {
    throw error;
  }
  
  return data.map(user => {
    return {
      params: {
        person: user.github
      }
    }
  })
}