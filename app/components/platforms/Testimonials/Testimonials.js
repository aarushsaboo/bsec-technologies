import React from 'react';
import styles from './Testimonials.module.css'

const Testimonials = () => {
    return (
      <div className={styles.testimonials}>
        <p className={`p-xsmall ${styles.testimonialsP1}`}>TESTIMONIALS</p>
        <h3 className={`h3 ${styles.testimonialsH3}`}>
          Hear From Our Customers
        </h3>
        <p className={`p-medium ${styles.testimonialsP2}`}>
          Lorem ipsum dior sit amet consectetur .Dignissim Malsuedda enim in
          facilici justo
        </p>
        <div className={styles.testimonialsContactCard}>
          <div className={styles.testimonialsContactCardImage}>
            <img src="/testimonials2.svg"></img>
          </div>
          <div className={styles.testimonialsContactCardInfo}>
            <p>Micheal Johnson</p>
            <p>@mj</p>
          </div>
        </div>
        <div className={styles.testimonialsSvgContainer}>
          <img src="/testimonials1.svg"></img>
        </div>
      </div>
    )
};

export default Testimonials;