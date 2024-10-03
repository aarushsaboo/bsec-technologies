import React from 'react';
import styles from './Company.module.css'

const Company = () => {
    return (
      <div className={styles.company}>
        <div className={styles.companyDetails}>
          <div className={styles.companyIcon}></div>
          <div className={styles.companyName}>
            <p>COMPANY NAME</p>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.imageContainer}>
            <img src="/companies_pending_payments_bell.svg"></img>
          </div>
          <div className={styles.imageContainer2}>
            <img src="/companies_pending_payments_block.svg"></img>
          </div>
        </div>
      </div>
    )
};

export default Company;