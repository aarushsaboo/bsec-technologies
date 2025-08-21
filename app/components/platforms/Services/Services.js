import Link from 'next/link';
import styles from './Services.module.css'

const Services = () => {
    return (
      <div className={styles.services}>
        <div className={styles.servicesImage}>
          <img src="/services1.png" alt="text_to_describe_your_image"></img>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesContainer2}>
            <div className={styles.servicesHeadingContainer}>
              <p className={`p-xsmall ${styles.servicesHeadingContainerP}`}>
                OUR MOST LOVED SOLUTION
              </p>
              <h3 className={`h3 ${styles.servicesHeadingContainerH3}`}>
                ANNOTATION SERVICES
              </h3>
            </div>
            <div className={styles.servicesPContainer}>
              <p className={`p-medium ${styles.servicesPContainerP}`}>
                If you find it challenging to read or understand the content,
                don’t worry—our dashboard includes a helpful voiceover feature.
                Simply click on the voice icon, and our system will provide
                clear, spoken explanations and annotations to guide you through
                the information
              </p>
            </div>
            <div className={styles.servicesButtonContainer}>
              <Link href="/welcome">
                <button className={`p-xsmall ${styles.servicesButton1}`}>
                  Schedule a demo
                </button>
              </Link>
              <div className={styles.servicesLearnMoreButton}>
                <Link href="/services">
                  <button className={`p-xsmall ${styles.servicesButton2}`}>
                    Learn more
                  </button>
                </Link>
                <img src="/servicesRightArrow.svg" alt="text_to_describe_your_image"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Services;