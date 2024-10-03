import React from 'react';
import ChartWhiteBoxCard from './ChartWhiteBoxCard';
import styles from './ChartWhiteBox.module.css'

const ChartWhiteBox = () => {
    return (
      <div className={styles.chartWhiteBox}>
        <div className={styles.chartWhiteBoxCardContainer}>
          <ChartWhiteBoxCard
            iconType={"dollar"}
            heading1={"Earning"}
            heading2={"$198k"}
            percent={"37.8"}
          />
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.chartWhiteBoxCardContainer}>
          <ChartWhiteBoxCard
            iconType={"dollar"}
            heading1={"Earning"}
            heading2={"$198k"}
            percent={"37.8"}
          />
        </div>
        <div className={styles.seperator2}></div>
        <div className={styles.chartWhiteBoxCardContainer}>
          <ChartWhiteBoxCard
            iconType={"dollar"}
            heading1={"Earning"}
            heading2={"$198k"}
            percent={"37.8"}
          />
        </div>
      </div>
    )
};

export default ChartWhiteBox;