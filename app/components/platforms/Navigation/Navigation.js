import React from 'react';
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
      <div className={styles.navigation}>
        <div className={styles.navigationHeadingContainer}>
          <p className={styles.navigationHeading1}>NAVIGATION</p>
          <h3 className={styles.navigationHeading2}>How it Works</h3>
        </div>
        <div className={styles.navigationContentContainer}>
          <p className={styles.navigationContent}>
            Our secure transactions dashboard provides real-time insights into
            the status of your transactions with intuitive visual indicators and
            AI-powered analytics. Easily monitor security levels, track trends,
            and receive alerts to ensure your transactions are always protected
          </p>
        </div>
      </div>
    )
};

export default Navigation;