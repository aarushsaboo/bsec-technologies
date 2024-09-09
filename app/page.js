import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home">
        <nav>
          <ul>
            <li>
              <Link href="/">BSec Technologies</Link>
            </li>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/">SERVICES</Link>
            </li>
            <li>
              <Link href="/">COMPANY</Link>
            </li>
            <li>
              <Link href="/">CONTACT US</Link>
            </li>
            <li>
              <Link href="/">Schedule a demo</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
