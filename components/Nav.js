import Link from 'next/link'
export default function Home() {
    return (
      <>
      <div>
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog/blog"><a>Blog</a></Link>
          <Link href="/blog/id/blog"><a>ID</a></Link>
      </div>
      </>
    )
  }
  