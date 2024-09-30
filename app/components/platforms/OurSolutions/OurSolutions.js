import React from 'react';

import OurSolutionsCard from './OurSolutionsCard';
import styles from './OurSolutions.module.css'

const OurSolutions = () => {
    return (
      <div className={styles.ourSolutions}>
        <div className={styles.ourSolutionsHeadingContainer}>
          <h3 className={styles.ourSolutionsHeading1}>OUR SOLUTIONS</h3>
          <h2 className={styles.ourSolutionsHeading2}>What do we provide?</h2>
        </div>
        <div className={styles.ourSolutionsCardContainer}>
          <OurSolutionsCard
            image="/we-provide-1.svg"
            heading="Tiered Buyer Verification"
            content="Tailored software solutions for precision farming, crop monitor, and yield prediction"
          />
          <OurSolutionsCard
            image="/we-provide-2.svg"
            heading="Smart analysis Dashboard"
            content="Tailored software solutions for precision farming, crop monitor, and yield prediction"
          />
          <OurSolutionsCard
            image="/we-provide-3.svg"
            heading="Monitoring payment & Secure Transactions "
            content="Tailored software solutions for precision farming, crop monitor, and yield prediction"
          />
        </div>
      </div>
    )
};

export default OurSolutions;