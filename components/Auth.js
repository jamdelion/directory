import { useState } from "react";
import { supabase } from "../database/supabaseClient";
import { useForm } from "react-hook-form";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState({
    name: "",
    github: "",
    cohort: "",
    bio: "",
    socials: {},
  });
  const { name, github, cohort, bio, socials } = person;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onFieldChange = (e) => {
    setPerson(() => ({ ...person, [e.target.name]: e.target.value }));
  };

//   get user back form sup.auth.signin, get the user.id and make sure the person created also has the same id
// check that github doesn't already exist in people table.

  const addNewMember = async () => {
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
    // router.push(`/people/${data.github}`);
  };

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      addNewMember();
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section>
        <p>Log in:</p>
        <div className="m-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "center",
          }}
          onSubmit={handleSubmit(handleLogin)}
        >
          <input
            {...register("name", {
              required: "This field is required",
              minLength: 2,
              maxLength: 40,
            })}
            onChange={onFieldChange}
            name="name"
            placeholder="Name"
            value={person.name}
          />
          <span>{errors.name?.message}</span>
          <input
            {...register("github", {
              required: "This field is required",
              minLength: 4,
              maxLength: 35,
            })}
            onChange={onFieldChange}
            name="github"
            placeholder="Github username"
            value={person.github}
          />
          <span>{errors.github?.message}</span>

          <input
            {...register("cohort", {
              required: "This field is required",
              pattern: /(FAC)[0-9]{1,2}/,
            })}
            onChange={onFieldChange}
            name="cohort"
            placeholder="FAC Cohort (e.g. FAC22)"
            value={person.cohort}
          />
          <span>{errors.cohort?.message}</span>
          {errors.cohort && errors.cohort.type === "pattern" && (
            <p>Not a valid FAC cohort!</p>
          )}

          <input
            {...register("bio", { maxLength: 350 })}
            onChange={onFieldChange}
            name="bio"
            placeholder="A brief bio (optional)"
            value={person.bio}
          />

          {/* <StyledButton type="submit">Submit</StyledButton> */}
          {/* <input type="submit" /> */}
        </form>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Send login link"}</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Auth;
