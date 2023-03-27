import ArticleStyles from "../styles/article.module.css";
import ArticleItem from "./ArticleItem";
export default function ArticlesList({ articles }) {
    return (
        <div className={ArticleStyles.grid}>
            {
                articles?.map(article => (
                    <ArticleItem article={article} />
                ))
            }
        </div>
    )
}
