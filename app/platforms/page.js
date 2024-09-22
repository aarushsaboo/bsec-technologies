import Link from "next/link"

import Navbar from "../components/Navbar/Navbar"
import "../globals.css"
import styles from "./platforms.module.css"
import OurSolutionsCard from "../components/platforms/OurSolutions/OurSolutionsCard"

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

      <div className={styles.ourSolutions}>
        <div className={styles.ourSolutionsHeadingContainer}>
          <h3 className={styles.ourSolutionsHeading1}>OUR SOLUTIONS</h3>
          <h2 className={styles.ourSolutionsHeading2}>What do we provide?</h2>
        </div>
        <div className={styles.ourSolutionsCardContainer}>
          <OurSolutionsCard
            image="/we-provide-1.svg"
            heading="Tiered Buyer Verification"
            content="Tailored software solutions for precision farming, crop monitor, and yield prediction"
          />
          <OurSolutionsCard
            image="/we-provide-2.svg"
            heading="Smart analysis Dashboard"
            content="Tailored software solutions for precision farming, crop monitor, and yield prediction"
          />
          <OurSolutionsCard
            image="/we-provide-3.svg"
            heading="Monitoring payment & Secure Transactions "
            content="Tailored software solutions for precision farming, crop monitor, and yield prediction"
          />
        </div>
      </div>

      <div className={styles.navigation}>
        <div className={styles.navigationHeadingContainer}>
          <p className={styles.navigationHeading1}>NAVIGATION</p>
          <h3 className={styles.navigationHeading2}>How it Works</h3>
        </div>
        <div className={styles.navigationContentContainer}>
          <p className={styles.navigationContent}>
            Our secure transactions dashboard provides real-time insights into
            the status of your transactions with intuitive visual indicators and
            AI-powered analytics. Easily monitor security levels, track trends,
            and receive alerts to ensure your transactions are always protected
          </p>
        </div>
      </div>
      <div className={styles.navigationImages}>
        <img
          src="/navigation1.svg"
          alt="navigation1"
          className={styles.navigation1}
        ></img>
        <img
          src="/navigation2.svg"
          alt="navigation2"
          className={styles.navigation2}
        ></img>
      </div>
    </div>
  )
}
