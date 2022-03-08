import { useRouter } from "next/router";
import ProfileCard from "../../components/ProfileCard";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { supabase } from "../../database/supabaseClient";

export async function getStaticPaths() {
  // get all github names from database?
  const paths = [
    {
      params: {
        person: "jamdelion", // this should be a variable/dynamic
      },
    },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data, error, status } = await supabase
    .from("people")
    .select("*")
    .eq("github", params.person)
    .single();
  if (error && status !== 406) {
    throw error;
  }
  return {
    props: {
      data,
    },
  };
}

const Person = ({ data }) => {
  const router = useRouter();
  const { person } = router.query;

  return (
    <div className={styles.main}>
      {/* <ProfileCard name={person} /> */}
      <ProfileCard name={data.name} cohort={data.cohort}/>
      <p>Person Profile: {person}</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default Person;
