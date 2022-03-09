import { useRouter } from "next/router";
import ProfileCard from "../../components/ProfileCard";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { supabase } from "../../database/supabaseClient";
import { getGithubNames } from "../../database/model";

export async function getStaticPaths() {
  const paths = await getGithubNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  // do a promise.all here to get github api data too

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
      <ProfileCard name={data.name} cohort={data.cohort} bio={data.bio}/>
      <p>Person Profile: {person}</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default Person;
