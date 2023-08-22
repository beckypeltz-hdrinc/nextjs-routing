import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
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
      <Link href='/product'>
        Products
      </Link>
      <br />
      <Link href='/product/1/review/1'>
        Review
      </Link>

      <br />
      <button onClick={handleClick}>Place Order</button>
      <br />

      <Link href='/product/1/review/1'>
        Review 1 for Product 1
      </Link>
    </>
  )
}

export default Home
