import { supabase } from "./supabaseClient";

export async function getGithubNames() {
  const { data, error, status } = await supabase
    .from("people")
    .select("github");

  if (error && status !== 406) {
    throw error;
  }

  return data.map((user) => {
    return {
      params: {
        person: user.github,
      },
    };
  });
}

export async function fetchFromGithubApi(username) {
  return await fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export async function getDataForOnePerson(username) {
    const { data, error, status } = await supabase
    .from("people")
    .select("*")
    .eq("github", username)
    .single();
  if (error && status !== 406) {
    throw error;
  }
  return data;
}