import React from 'react';
import SVGIcon from './SVGIcon';
import styles from './ChartWhiteBoxCard.module.css'

const ChartWhiteBoxCard = ({iconType, heading1, heading2, percent}) => {
    return (
      <div className={styles.chartWhiteBoxCard}>
        <div className={styles.iconContainer}>
          <SVGIcon type="ellipse" />
          <SVGIcon type={iconType} width="44.78" height="42" />
        </div>
        <div className={styles.chartWhiteBoxCardTextContent}>
          <h3>{heading1}</h3>
          <h1>{heading2}</h1>
          <div className={styles.flexContainer}>
            {percent > 0 && <SVGIcon type="upArrow" />}
            {percent < 0 && <SVGIcon type="downArrow" />}
            <p className={percent > 0 ? styles.positive: styles.negative}>{`${Math.abs(percent)}%`}</p>
            <p>this month</p>
          </div>
        </div>
      </div>
    )
};

export default ChartWhiteBoxCard;