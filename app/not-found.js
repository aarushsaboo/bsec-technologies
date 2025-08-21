// app/not-found.js
import Link from "next/link"

export default function NotFound() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Page Not Found (404)</h1>
      <p>Sorry, the page you are looking for does not exist or has been moved.</p>

      <p>
        Here are some helpful links instead:
      </p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Our Services</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>

      <p>If you need help, please <a href="mailto:support@yoursite.com">contact us</a>.</p>

      {/* Optional: Add a simple search box */}
      {/* <input type="search" placeholder="Search our site..." /> */}
    </main>
  )
}
