import HeaderStyles from "../styles/header.module.css";

export default function Header() {
    return (
        <div>
            <h1><spa className={HeaderStyles.title}>WebDev</spa>News</h1>
            <p className={HeaderStyles.description}>Keep up to date with the latest web dev news</p>
        </div>
    )
}
