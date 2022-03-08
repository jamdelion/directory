import { useRouter } from 'next/router'

const Person = () => {
  const router = useRouter()
  const { person } = router.query

  return <p>Person Profile: {person}</p>
}

export default Person
