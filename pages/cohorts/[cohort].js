import { useRouter } from "next/router";
import CohortProfileCard from "./components/CohortProfileCard";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { supabase } from "../../database/supabaseClient";
import { getDataForCohort, getCohorts, fetchFromGithubApi} from "../../database/model";

export async function getStaticPaths() {
  const paths = await getCohorts();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  return await Promise.all([
    fetchFromGithubApi(params.cohort, 'org'),
    getDataForCohort(params.cohort),
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

const Cohort = ({ githubData, databaseData }) => {

  console.log("databaseData", databaseData)
  console.log("githubData", githubData)

  const router = useRouter();
  const { cohort } = router.query;

  return (
    <>
      <CohortProfileCard api={githubData} db={databaseData}/>
      <p>Cohort Profile: {cohort}</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
};

export default Cohort;
