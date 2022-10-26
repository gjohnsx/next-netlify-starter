import { fetchEntries } from 'utils/contentfulPosts'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />

        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>

      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  console.log('fetching entries...');
  
  const res = await fetchEntries()

  console.log('fetching entries complete.')
  console.log(res)

  const posts = await res.map((p) => {
    return p.fields
  })
  
  console.log('posts:\n', posts)

  return {
    props: {
      posts,
    },
  }
}
