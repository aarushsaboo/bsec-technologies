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
      <div className={styles.clippedRectangle}></div>
      <div className={styles.steps}>
        <button className={styles.stepsBtn}>STEP 1</button>
        <div className={styles.stepsMainContainer}>
          <img
            src="/stepsMain.png"
            alt="steps main"
            className={styles.stepsMain}
          ></img>
          <h1 className={styles.stepsMainHeading}>
            FIND THE COORPORATE ENTIRTY/FARMER THAT MEETS YOUR REQUIREMENTS
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="580"
            height="348"
            viewBox="0 0 580 348"
            fill="none"
            className={styles.stepsSvg1}
          >
            <path
              d="M576.663 0V122.17C579.131 148.268 569.418 158.668 501.581 157.957H79.569C10.8213 157.334 1.41354 168.093 3.19268 194.362V348"
              stroke="#3C5A31"
              stroke-width="5"
              stroke-dasharray="5 5"
              className={styles.stepsSvg1Path}
            />
          </svg>
          {/* the div below is the same for steps 2,3,4 => create a component */}
          <div className={styles.steps234Container}>
            <div className={styles.step}>
              <div className={styles.stepContent}>
                <button className={styles.stepsBtn}>STEP 2</button>
                <h1 className={styles.stepHeading}>
                  SEND IMAGES OF YOUR CROP/ SEE THE QUALITY SHOWN
                </h1>
              </div>

              <img src="/steps3.svg"></img>

            </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="179"
                viewBox="0 0 8 179"
              fill="none"
              className={styles.stepsSvg2}
              >
                <path
                  d="M4.99882 0V62.8404C5.00742 76.2644 4.97358 81.6137 4.73722 81.2482H3.26679C3.02725 80.9274 2.99447 86.4615 3.00067 99.9734V179"
                  stroke="#3C5A31"
                  stroke-width="5"
                  stroke-dasharray="5 5"
                />
              </svg>
            <div className={styles.step}>
              <div className={styles.stepContent}>
                <button className={styles.stepsBtn}>STEP 3</button>
                <h1 className={styles.stepHeading}>
                  CONTACT FARMER / ENTITY (YOU MAY REFER OUR RESOURCES FOR
                  UNDERSTANDING)
                </h1>
              </div>

              <img src="/steps4.png"></img>

            </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="179"
                viewBox="0 0 8 179"
                fill="none"
                className={styles.stepsSvg2}
              >
                <path
                  d="M4.99882 0V62.8404C5.00742 76.2644 4.97358 81.6137 4.73722 81.2482H3.26679C3.02725 80.9274 2.99447 86.4615 3.00067 99.9734V179"
                  stroke="#3C5A31"
                  stroke-width="5"
                  stroke-dasharray="5 5"
                />
              </svg>
            <div className={styles.step}>
              <div className={styles.stepContent}>
                <button className={styles.stepsBtn}>STEP 4</button>
                <h1 className={styles.stepHeading}>
                  SIGN CONTRACT AND TRACK ALL PAYMENTS. IF NOT MAINTAINED YOU
                  MAY/MAY BE BLACKLISTED
                </h1>
              </div>

              <img src="/steps5.png"></img>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
