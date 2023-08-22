import { useRouter } from 'next/router'

function Review() {
  const router = useRouter()
  const { studioId, projectId } = router.query
  return (
    <h1>
      Project {projectId} in studio {studioId}
    </h1>
  )
}

export default Review