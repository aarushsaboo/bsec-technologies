import React from 'react';
import StepItem from './StepItem';
import styles from './Steps.module.css'

const Step234 = () => {
    return (
      <div>
        <div className={styles.steps234Container}>
          <StepItem
            stepButton={"STEP 2"}
            stepHeading={"SEND IMAGES OF YOUR CROP/ SEE THE QUALITY SHOWN"}
            stepImage={"/steps3.svg"}
          />
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
          <StepItem
            stepButton={"STEP 3"}
            stepHeading={
              "CONTACT FARMER / ENTITY (YOU MAY REFER OUR RESOURCES FOR UNDERSTANDING)"
            }
            stepImage={"/steps4.png"}
          />
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
          <StepItem
            stepButton={"STEP 4"}
            stepHeading={
              "SIGN CONTRACT AND TRACK ALL PAYMENTS. IF NOT MAINTAINED YOU MAY/MAY BE BLACKLISTED"
            }
            stepImage={"/steps5.png"}
          />
        </div>
      </div>
    )
};

export default Step234;