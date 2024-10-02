import React from 'react';
import StepItem from './StepItem';
import styles from './Steps.module.css'

const Step234 = ({ stepsData, customClassName }) => {
  console.log('hello')
  console.log(customClassName)
    return (
      <div>
        <div className={styles.steps234Container}>
          <StepItem
            stepButton={stepsData[1].stepButton}
            stepHeading={stepsData[1].stepHeading}
            stepImage={stepsData[1].stepImage}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={stepsData[1].svgWidth}
            height={stepsData[1].svgHeight}
            viewBox={stepsData[1].svgViewBox}
            fill="none"
            className={` ${styles.stepsSvg2} ${customClassName || ''}`}
          >
            <path
              d={stepsData[1].svgPath}
              stroke="#3C5A31"
              strokeWidth="5"
              strokeDasharray="5 5"
            />
          </svg>
          <StepItem
            stepButton={stepsData[2].stepButton}
            stepHeading={stepsData[2].stepHeading}
            stepImage={stepsData[2].stepImage}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={stepsData[2].svgWidth}
            height={stepsData[2].svgHeight}
            viewBox={stepsData[2].svgViewBox}
            fill="none"
            className={`${customClassName || ''} ${styles.stepsSvg2}`}
          >
            <path
              d={stepsData[2].svgPath}
              stroke="#3C5A31"
              strokeWidth="5"
              strokeDasharray="5 5"
            />
          </svg>
          <StepItem
            stepButton={stepsData[3].stepButton}
            stepHeading={stepsData[3].stepHeading}
            stepImage={stepsData[3].stepImage}
          />
          {stepsData[4] && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={stepsData[3].svgWidth}
                height={stepsData[3].svgHeight}
                viewBox={stepsData[3].svgViewBox}
                fill="none"
                className={`${customClassName || ''} ${styles.stepsSvg2}`}
              >
                <path
                  d={stepsData[2].svgPath}
                  stroke="#3C5A31"
                  strokeWidth="5"
                  strokeDasharray="5 5"
                />
              </svg>
              <StepItem
                stepButton={stepsData[4].stepButton}
                stepHeading={stepsData[4].stepHeading}
                stepImage={stepsData[4].stepImage}
              />
            </>
          )}
        </div>
      </div>
    )
};

export default Step234;