import Head from 'next/head'
import ArticlesList from '@/components/ArticlesList';
export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Webdev Newz</title>
        <meta name="keywords" content="Web Development"></meta>
      </Head>
      <ArticlesList articles={articles} />
    </div>

  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
