import Link from "next/link"

import Navbar from "../components/Navbar/Navbar"
import "../globals.css"
import styles from "./platforms.module.css"

export default function Platforms() {
  return (
    <div className="platforms">
      <div className="navbarWrapper">
        <Navbar />
      </div>
      <div className={styles.platforms1}>
        <img src="/platforms1.svg"></img>
      </div>
      <div className={styles.platforms2}>
        <img src="/platforms2.svg"></img>
      </div>
      <div className={styles.platforms3}>
        <img src="/platforms3.svg"></img>
      </div>
      <div className={styles.platforms4}>
        <img src="/platforms4.svg"></img>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.enhancedGradientContainer}></div>
        <div className={styles.login}>
          <h1 className={styles.h1}>BSEC Technologies</h1>
          <h3 className={styles.h3}>
            Empowering farmers with trusted partnerships
          </h3>
          <div className={styles.buttonContainer}>
            <button className={styles.button1}>Login</button>
            <button className={styles.button2}>Sign Up</button>
          </div>
        </div>
      </div>
      {/* <div className={styles.wheatImage}>
        <img src="/wheatImage.svg" alt="wheat crop image"></img>
      </div> */}
      <div className={styles.whoWeAre}>
        <div className={styles.aboutPage}>
          <h3 className={styles.aboutHeading1}>WHO WE ARE</h3>
          <h2 className={styles.aboutHeading2}>ABOUT KISANDAR</h2>
          <p className={styles.aboutP}>
            Welcome to the forefront of AgriTech innovation where future of
            fresh products meet cutting edge solution. As your dedicated
            software service partner, We are committing to cultivate,
            revolutionize, harvest and distribute fresh produce. Our expertise
            seamlessly integrates technology and agriculture, creating a synergy
            that propels your business towards unprecedented growth.
          </p>
        </div>
      </div>

      <div className={styles.sponsorsImageContainer}>
        <img src="/sponsors.svg" className={styles.sponsorsImage}></img>
      </div>
    </div>
  )
}
