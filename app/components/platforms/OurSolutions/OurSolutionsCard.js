import React from "react"
import styles from "./OurSolutionsCard.module.css"

const OurSolutionsCard = ({ image, heading, content }) => {
  return (
    <>
      <div className={styles.ourSolutionsCard}>
        <img src={image} alt="we provide tier image"></img>
        <h2 className={styles.weProvideHeading}>{heading}</h2>
        <p className={styles.weProvideContent}>{content}</p>
      </div>
      {/* </div> */}
    </>
  )
}

export default OurSolutionsCard
