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

export async function getCohorts() {
  const { data, error, status } = await supabase
    .from("cohorts")
    .select("github");

  if (error && status !== 406) {
    throw error;
  }

  return data.map((cohort) => {
    return {
      params: {
        cohort: cohort.github,
      },
    };
  });
}

export async function fetchFromGithubApi(username, type) {
  return await fetch(`https://api.github.com/${type}s/${username}`)
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

export async function getDataForCohort(name) {
  const { data, error, status } = await supabase
  .from("cohorts")
  .select("*")
  .eq("github", name)
  .single();
if (error && status !== 406) {
  throw error;
}
return data;
}