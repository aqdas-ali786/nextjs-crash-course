import { useRouter } from "next/router";
import Link from "next/link";
export default function Article({ article }) {
    // const router = useRouter();
    // const { id } = router.query;
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">GoBack</Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=6`);
    const articles = await res.json();
    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({
        params: { id: id.toString() }
    }))

    return {
       paths,
       fallback: false
    }
}
