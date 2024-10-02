import React from 'react';
import styles from './ContractFarmingIntroduction.module.css'

const ContractFarmingIntroduction = () => {
    return (
      <div className={styles.contractFarmingIntroduction}>
        <div className={styles.gradientContainer}>
          <div className={styles.servicesH1}>
            <h1>HOW CONTRACT FARMING WORKS</h1>
          </div>
        </div>
        <div className={styles.navigationImages}>
          <div className={styles.navigation1}>
            <img src="/navigation1.svg" alt="navigation1"></img>
          </div>
          <div className={styles.navigation2}>
            <img src="/navigation2.svg" alt="navigation2"></img>
          </div>
        </div>
      </div>
    )
};

export default ContractFarmingIntroduction;