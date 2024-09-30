import React from 'react';
import styles from './Steps.module.css'

const StepItem = ({ stepButton, stepHeading, stepImage }) => {
    return (
      <div className={styles.step}>
        <div className={styles.stepContent}>
          <button className={styles.stepsBtn}>{stepButton}</button>
          <h1 className={styles.stepHeading}>
            {stepHeading}
          </h1>
        </div>

        <img src={stepImage}></img>
      </div>
    )
};

export default StepItem;