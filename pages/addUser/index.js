import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../database/supabaseClient";
import styles from "../../styles/Home.module.css";
import { range } from "../../utils";
import { StyledButton, StyledInput } from "./styles";

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [person, setPerson] = useState({
    name: "",
    github: "",
    cohort: "",
    bio: "",
    socials: {},
  });
  const { name, github, cohort, bio, socials } = person;

  const onChange = (e) => {
    setPerson(() => ({ ...person, [e.target.name]: e.target.value }));
  };

  // const generateCohorts = () => {
  //   return range(1, 29).map((num) => {
  //     const obj = {};
  //     obj.value = `FAC${num}`;
  //     obj.label = `FAC${num}`;
  //     return obj;
  //   });
  // };

  // const cohortOptions = generateCohorts();

  const createNewPerson = async () => {
    if (!name || !github || !cohort) {
      console.error("Unable to create new person", name, github, cohort);
      // TODO: Throw an error and show in UI
      return;
    }
    const { data } = await supabase
      .from("people")
      .insert([
        {
          name,
          github,
          cohort,
          bio,
          socials,
        },
      ])
      .single();
    router.push(`/people/${data.github}`);
  };

  return (
    <div className={styles.main}>
      <p style={{ padding: "2rem", fontSize: "1.5rem" }}>Add FAC member:</p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(createNewPerson)}
      >
        <StyledInput
          {...register("name", {
            required: "This field is required",
            minLength: 2,
            maxLength: 40,
          })}
          onChange={onChange}
          name="name"
          placeholder="Name"
          value={person.name}
        />
        <span>{errors.name?.message}</span>
        <StyledInput
          {...register("github", {
            required: "This field is required",
            minLength: 4,
            maxLength: 35,
          })}
          onChange={onChange}
          name="github"
          placeholder="Github username"
          value={person.github}
        />
        <span>{errors.github?.message}</span>

        <StyledInput
          {...register("cohort", {
            required: "This field is required",
            pattern: /(FAC)[0-9]{1,2}/,
          })}
          onChange={onChange}
          name="cohort"
          placeholder="FAC Cohort (e.g. FAC22)"
          value={person.cohort}
        />
        <span>{errors.cohort?.message}</span>
        {errors.cohort && errors.cohort.type === "pattern" && (
          <p>Not a valid FAC cohort!</p>
        )}

        <StyledInput
          {...register("bio", { maxLength: 350 })}
          onChange={onChange}
          name="bio"
          placeholder="A brief bio (optional)"
          value={person.bio}
        />

        <StyledButton type="submit">Submit</StyledButton>
      </form>

      <Link href="/">
        <a style={{ marginTop: "3rem" }}>Back to home</a>
      </Link>
    </div>
  );
};

export default AddUserForm;
