import React from 'react';
import styles from './Steps.module.css'
import Step234 from './Step234';

const Steps = () => {
    return (
      <div className={styles.steps}>
        <button className={styles.stepsBtn}>STEP 1</button>
        <div className={styles.stepsMainContainer}>
          <img
            src="/stepsMain.png"
            alt="steps main"
            className={styles.stepsMain}
          ></img>
          <h1 className={styles.stepsMainHeading}>
            FIND THE CORPORATE ENTITY/FARMER THAT MEETS YOUR REQUIREMENTS
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
          <Step234 />
        </div>
      </div>
    )
};

export default Steps;