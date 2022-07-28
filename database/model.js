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

export async function checkIfCohortInDb(cohortName) {
  const { count } = await supabase
    .from("cohorts")
    .select("*", { count: "exact" })
    .eq("name", cohortName);

  // create cohort if doesn't exist
  if (count < 1) {
    const { cohortData } = await supabase
      .from("cohorts")
      .insert([
        {
          name: cohortName,
          // doesn't work because needs github name too - can't be null
        },
      ])
      .single();
  }
}

const FACCohorts = [
  { name: "FAC27", github: "fac27" },
  { name: "FAC26", github: "fac26" },
  { name: "FAC25", github: "fac25" },
  { name: "FAC24", github: "fac24" },
  { name: "FAC23", github: "fac-23" },
  { name: "FAC22", github: "fac22" },
  { name: "FAC21", github: "fac21" },
  { name: "FAC20", github: "fac20" },
  { name: "FAC19", github: "fac19" },
  { name: "FAC19", github: "fac18" },
  { name: "FAC17", github: "fac-17" },
  { name: "FAC16", github: "" },
  { name: "FAC15", github: "fac-15" },
  { name: "FAC14", github: "fac-14" },
  { name: "FAC13", github: "fac-13" },
  { name: "FAC12", github: "fac-12" },
  { name: "FAC11", github: "fac-11" },
  { name: "FAC10", github: "fac10" },
  { name: "FAC9", github: "fac9" },
  { name: "FAC8", github: "fac8" },
  { name: "FAC7", github: "fac7" },
  { name: "FAC6", github: "fac6" },
  { name: "FAC5", github: "" },
  { name: "FAC4", github: "" },
  { name: "FAC3", github: "" },
  { name: "FAC2", github: "" },
  { name: "FAC1", github: "" },
];

export async function addAllCohortsToDb() {
  FACCohorts.map(async (cohort) => {
    const { cohortData } = await supabase
      .from("cohorts")
      .insert([
        {
          name: cohort.name,
          github: cohort.github,
        },
      ])
      .single();
  });
}
