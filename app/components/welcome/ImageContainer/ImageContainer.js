import React from 'react';
import styles from './ImageContainer.module.css'

const ImageContainer = () => {
    return (
      <div className={styles.imagesContainer}>
        <div className={styles.home1}>
          <img src="/home1.svg"></img>
        </div>
        <div className={styles.home2}>
          <img src="/home2.svg"></img>
        </div>
        <div className={styles.home3}>
          <img src="/home3.svg"></img>
        </div>
        <div className={styles.home4}>
          <img src="/home4.svg"></img>
        </div>
      </div>
    )
};

export default ImageContainer;