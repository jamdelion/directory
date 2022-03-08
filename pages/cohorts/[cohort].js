import { useRouter } from 'next/router'

const Cohort = () => {
  const router = useRouter()
  const { cohort } = router.query

  return <p>Cohort Profile: {cohort}</p>
}

export default Cohort
