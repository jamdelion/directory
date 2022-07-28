import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { supabase } from "../database/supabaseClient";
import FacesLine from "../components/FacesLine";
import Nav from "../components/Nav";

export async function getStaticProps() {
  const peopleData = await supabase.from("people").select("*");
  const cohortData = await supabase.from("cohorts").select("*");

  return {
    props: {
      people: peopleData.data,
      cohorts: cohortData.data
    },
  };
}

export default function Home({ people, cohorts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAC Directory</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>

      <main className={styles.main}>
        <h1 className={styles.title}>FAC Directory</h1>

        <Link href="/add">
          <a style={{margin: "2rem"}}>+ Add FAC member</a>
        </Link>

        <p className={styles.description}>
          <input placeholder="FAC22" />
          <code className={styles.code}>Search for a cohort/name...</code>
        </p>


        {/* for a few (or all??) cohorts, show a sample of faces, i.e. one line each */}

        {cohorts.map(cohort => {
          return (
            <FacesLine key={cohort.id} title={cohort.name} people={people.filter(p => p.cohort === cohort.name)}/>
          )
        })}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
          </a>

        </div>
        <Link href="/people/jamdelion">
          <a>Go to Jo profile</a>
        </Link>
        <Link href="/cohorts/fac21">
          <a>Go to FAC21 profile</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
