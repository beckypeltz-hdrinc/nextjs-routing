import Link from 'next/link'

function StudioList({ studioId = 100 }) {
  return (
    <>
      <Link href='/'>
        Home
      </Link>
      <h2>
        <Link href='studio/1'>
          Studio 1
        </Link>
      </h2>
      <h2>
        <Link href='studio/2'>
        Studio 2
        </Link>
      </h2>
      <h2>
        <Link href='studio/3' replace>
        Studio 3
        </Link>
      </h2>
      <h2>
        <Link href={`studio/${studioId}`}>
          Studio {studioId}
        </Link>
      </h2>
    </>
  )
}

export default StudioList
