import React from 'react';
import styles from './Steps.module.css'

const StepItem = ({ stepButton, stepHeading, stepImage }) => {
    return (
      <div className={styles.step}>
        <div className={styles.stepContent}>
          <button className={styles.stepsBtn}>{stepButton}</button>
          <h1 className={styles.stepHeading}>{stepHeading}</h1>
        </div>
        <div className={styles.stepItemImageContainer}>
          <img src={stepImage} alt="text_to_describe_your_image"></img>
        </div>
      </div>
    )
};

export default StepItem;