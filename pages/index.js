import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Listing Studios')
    router.push('/studio')
  }
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href='/blog'>
        Blog
      </Link>
      <br />
      <Link href='/docs/1/2'>
        Docs
      </Link>
      <br />
      <Link href='/studio'>
        Studios
      </Link>
      <br />
      <Link href='/studio/1/project/1'>
        Review
      </Link>

      <br />
      <button onClick={handleClick}>Choose a studio</button>
      <br />

      <Link href='/studio/1/project/2'>
        Project 2 in Studio 1
      </Link>
    </>
  )
}

export default Home
