import styles from "../styles/Home.module.css";
import Link from "next/link";
import { supabase } from "../database/supabaseClient";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import Select from "react-select";
import { range, cohortOptions } from "../utils";

const StyledInput = styled.input`
  padding: 1rem;
  border: solid 1px;
  font-size: 1rem;
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  padding: 1rem;
  border: solid 1px;
  font-size: 1rem;
  margin-top: 2rem;
  width: 50%;
  border: none;
  border-radius: 10px;
`;

const AddMember = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
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

  const createNewPerson = async () => {
    console.log("creating new person");
    if (!name || !github || !cohort) {
      console.log("Unable to create new person", name, github, cohort);
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

        {/* Might be nicer as a ReactSelect6 but couldn't get it to work! */}

        {/* <div>
          <label>Cohort</label>
          <Controller
            name="cohort"
            control={control}
            render={({ onChange, value }) => (
              <ReactSelect
                isClearable
                options={cohortOptions}
                onChange={(e) => {
                  onChange(e.value);
                }}
                value={{
                  value: value,
                  label: value,
                }}
                // value={cohortOptions.find(c => c.value === value)}
                // onChange={val => onChange(val.value)}
              />
            )}
          />
          <span>{errors.cohort?.message}</span>
        </div> */}

        <StyledInput
          {...register("bio", { maxLength: 350 })}
          onChange={onChange}
          name="bio"
          placeholder="A brief bio (optional)"
          value={person.bio}
        />
        {/* <input
        defaultValue={intialValues.age}
        placeholder="0"
        type="text"
        {...register("age", {
          validate: {
            positiveNumber: (value) => parseFloat(value) > 0,
            lessThanHundred: (value) => parseFloat(value) < 200
          }
        })}
      /> */}
        {errors.age && errors.age.type === "positiveNumber" && (
          <p>Your age is invalid</p>
        )}
        {errors.age && errors.age.type === "lessThanHundred" && (
          <p>Your age should be greater than 200</p>
        )}

        <StyledButton type="submit">Submit</StyledButton>
        {/* <input type="submit" /> */}
      </form>
  );
};

export default AddMember;
