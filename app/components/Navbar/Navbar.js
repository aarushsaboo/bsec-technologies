import React from "react"
import styles from "./Navbar.module.css"

import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbarUl}>
        <div className={styles.firstDiv}>
          <li className={styles.navbarLi}>
            <Link href="/" style={{ textDecoration: "none" }}>
              {/* Added basic organization microdata here */}
              <div itemScope itemType="http://schema.org/Organization">
                <p className={styles.navHeading} itemProp="name">
                  BSec Technologies
                </p>
              </div>
            </Link>
          </li>
        </div>
        <div className={styles.secondDiv}>
          <li className={styles.navbarLi}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span className={styles.navHeading2}>HOME</span>
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href="/platforms" style={{ textDecoration: "none" }}>
              <span className={styles.navHeading2}>PLATFORMS</span>
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href="/services" style={{ textDecoration: "none" }}>
              <p className={styles.navHeading2}>SERVICES</p>
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href="/companies" style={{ textDecoration: "none" }}>
              <p className={styles.navHeading2}>COMPANY</p>
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <p className={styles.navHeading2}>CONTACT US</p>
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href="/welcome" style={{ textDecoration: "none" }}>
              <p className={styles.navHeading2}>Schedule a demo</p>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
