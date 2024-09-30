import React from 'react';
import styles from './WhoWeAre.module.css'

const WhoWeAre = () => {
    return (
      <div className={styles.whoWeAre}>
        <div className={styles.aboutPage}>
          <h3 className={styles.aboutHeading1}>WHO WE ARE</h3>
          <h2 className={styles.aboutHeading2}>ABOUT KISANDAR</h2>
          <p className={styles.aboutP}>
            Welcome to the forefront of AgriTech innovation where future of
            fresh products meet cutting edge solution. As your dedicated
            software service partner, We are committing to cultivate,
            revolutionize, harvest and distribute fresh produce. Our expertise
            seamlessly integrates technology and agriculture, creating a synergy
            that propels your business towards unprecedented growth.
          </p>
        </div>
      </div>
    )
};

export default WhoWeAre;