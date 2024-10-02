import React from 'react';
import styles from './Steps.module.css'
import Step234 from './Step234';

const Steps = ({stepsData, customClassName, customClassName2}) => {
    return (
      <div className={`${customClassName2} ${styles.steps}`}>
        <button className={styles.stepsBtn}>{stepsData[0].buttonText}</button>
        <div className={styles.stepsMainContainer}>
          <img
            src={stepsData[0].imgSrc}
            alt="steps main"
            className={styles.stepsMain}
          ></img>
          <h1 className={styles.stepsMainHeading}>{stepsData[0].heading}</h1>
          <div className={styles.stepsSvg1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={stepsData[0].svgWidth}
              height={stepsData[0].svgHeight}
              viewBox={stepsData[0].svgViewBox}
              fill="none"
            >
              <path
                d={stepsData[0].svgPath}
                stroke="#3C5A31"
                stroke-width="5"
                stroke-dasharray="5 5"
              />
            </svg>
          </div>
          {/* the div below is the same for steps 2,3,4 => create a component */}
          <Step234 stepsData={stepsData} customClassName={customClassName} />
        </div>
      </div>
    )
};

export default Steps;