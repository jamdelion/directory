import { useRouter } from "next/router";
import ProfileCard from "../../components/ProfileCard";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import utilStyles from '../../styles/utils.modules.css'

const Person = () => {
  const router = useRouter();
  const { person } = router.query;

  return (
    <div className={styles.main}>
      <ProfileCard name={person} />
      <p>Person Profile: {person}</p>
      <Link href="/">
          <a>Back to home</a>
        </Link>
    </div>
  );
};

export default Person;
