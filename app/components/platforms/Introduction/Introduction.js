import Link from 'next/link';
import styles from './Introduction.module.css'

const Introduction = () => {
    return (
      <div className={styles.introduction}>
        <div className={styles.platforms1}>
          <img src="/platforms1.svg" alt="text_to_describe_your_image"></img>
        </div>
        <div className={styles.platforms2}>
          <img src="/platforms2.svg" alt="text_to_describe_your_image"></img>
        </div>
        <div className={styles.platforms3}>
          <img src="/platforms3.svg" alt="text_to_describe_your_image"></img>
        </div>
        <div className={styles.platforms4}>
          <img src="/platforms4.svg" alt="text_to_describe_your_image"></img>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.enhancedGradientContainer}></div>
          <div className={styles.login}>
            <h1 className={styles.h1}>BSEC Technologies</h1>
            <h3 className={styles.h3}>
              Empowering farmers with trusted partnerships
            </h3>
            <div className={styles.buttonContainer}>
              <Link href="/welcome">
                <button className={styles.button1}>Login</button>
              </Link>
              <Link href="/welcome">
                <button className={styles.button2}>Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Introduction;