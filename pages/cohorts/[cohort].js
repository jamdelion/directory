import { useRouter } from 'next/router'
import ProfileCard from '../../components/ProfileCard'
import Link from 'next/link'

const Cohort = () => {
  const router = useRouter()
  const { cohort } = router.query

  return (
    <>
    <ProfileCard name={cohort} />
  <p>Cohort Profile: {cohort}</p>
  <Link href="/">
          <a>Back to home</a>
        </Link>
  </>
  )
}

export default Cohort
