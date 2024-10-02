import Link from "next/link"

import Navbar from "../components/Navbar/Navbar"
import "../globals.css"
import styles from "./platforms.module.css"
import Steps from "../components/platforms/Steps/Steps"
import Services from "../components/platforms/Services/Services"
import Testimonials from "../components/platforms/Testimonials/Testimonials"
import Blogs from "../components/platforms/Blogs/Blogs"
import Footer from "../components/Footer/Footer"
import Introduction from "../components/platforms/Introduction/Introduction"
import WhoWeAre from "../components/platforms/WhoWeAre/WhoWeAre"
import Navigation from "../components/platforms/Navigation/Navigation"
import OurSolutions from "../components/platforms/OurSolutions/OurSolutions"
import { stepsPlatforms } from "../constants/steps"

export default function Platforms() {
  return (
    <div className="platforms">
      <div className="navbarWrapper">
        <Navbar />
      </div>
      <Introduction />
      {/* <div className={styles.wheatImage}>
        <img src="/wheatImage.svg" alt="wheat crop image"></img>
      </div> */}
      <WhoWeAre />

      <div className={styles.sponsorsImageContainer}>
        <img src="/sponsors.svg" className={styles.sponsorsImage}></img>
      </div>

      <OurSolutions />

      <Navigation />
      <div className={styles.navigationImages}>
        <div className={styles.navigation1}>
          <img src="/navigation1.svg" alt="navigation1"></img>
        </div>
        <div className={styles.navigation2}>
          <img
            src="/navigation2.svg"
            alt="navigation2"
          ></img>
        </div>
      </div>

      <div className={styles.clippedRectangle}></div>
      <Steps stepsData={stepsPlatforms}/>
      <Services />
      <Testimonials />
      <Blogs />
      <Footer question={"Want to learn about Contract Farming?"} />
    </div>
  )
}
