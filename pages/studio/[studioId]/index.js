import { useRouter } from 'next/router'

function StudioDetail() {
  const router = useRouter()
  const studioId = router.query.studioId
  return <h1>Details about Studios {studioId}</h1>
}

export default StudioDetail
