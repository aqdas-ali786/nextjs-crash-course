import NavStyles from "../styles/nav.module.css";
import  Link  from "next/link";
export default function Nav() {
    return (
        <nav className={NavStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About US</Link>
                </li>
            </ul>
        </nav>
    )
}
