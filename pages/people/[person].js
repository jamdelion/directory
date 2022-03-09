import { useRouter } from "next/router";
import ProfileCard from "../../components/ProfileCard";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { supabase } from "../../database/supabaseClient";
import { getDataForOnePerson, getGithubNames , fetchFromGithubApi} from "../../database/model";

export async function getStaticPaths() {
  const paths = await getGithubNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  return await Promise.all([
    fetchFromGithubApi(params.person),
    getDataForOnePerson(params.person),
  ])
    .then((data) => {
      const githubData = data[0];
      const databaseData = data[1];
      return {
        props: {
          githubData,
          databaseData
        },
       };


    })
    .catch((error) => console.log("Error: ", error));
}

const Person = ({ githubData, databaseData }) => {
  const router = useRouter();
  const { person } = router.query;

  console.log("databaseData", databaseData)
  console.log("githubData", githubData)

  return (
    <div className={styles.main}>
      <ProfileCard name={databaseData.name} cohort={databaseData.cohort} bio={databaseData.bio} avatar={githubData.avatar_url} />
      <p>Person Profile: {person}</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default Person;
