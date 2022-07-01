import { useRouter } from "next/router";
import UserProfileCard from "../../components/UserProfileCard";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { supabase } from "../../database/supabaseClient";
import utilStyles from '../../styles/utils.module.css'
import { getDataForOnePerson, getGithubNames , fetchFromGithubApi} from "../../database/model";
import FacesLine from "../../components/FacesLine";

export async function getStaticPaths() {
  const paths = await getGithubNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  return await Promise.all([
    fetchFromGithubApi(params.person, 'user'),
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
      <UserProfileCard api={githubData} db={databaseData}/>

      {/* <Connections> */}

      <p style={{padding: "2rem", fontSize: "1.5rem"}}>Knows:</p>

      {/* Facelines here */}
      <FacesLine people={[{name: "fake", github: "fake1"}]} title="On cohort with..."/>

      <FacesLine people={[{name: "fakeMentor", github: "mentor"}]} title="Mentored by..."/>

      <FacesLine people={[{name: "fakeCF", github: "CFyeah"}]} title="Course facilitated by..."/>

      <FacesLine people={[{name: "Speaker McSpeaker", github: "speakeasy"}]} title="Had talks from..."/>

      <FacesLine people={[{name: "Great Colleague", github: "user1234"}]} title="Works or works with..."/>



      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default Person;
