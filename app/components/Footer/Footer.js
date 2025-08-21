import Link from 'next/link';
import styles from './Footer.module.css'

const Footer = ({question}) => {
    return (
      <div className={styles.footer}>
        <div className={styles.footerPaddingContainer}>
          <h2 className={styles.footerH2}>{question}</h2>
          <Link href="/welcome">
            <button className={`p-xsmall ${styles.footerButton}`}>
              Talk to Us
            </button>
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerContent}>
            <h2>LOGO</h2> {/* to be replaced*/}
            <p className={`p-xsmall ${styles.footerContentP}`}>
              @B-sec Technologies 2023
            </p>
          </div>
          <div className={styles.footerIcons}>
            <img src="/footerFacebook.svg" alt="text_to_describe_your_image"></img>
            <img src="/footerTwitter.svg" alt="text_to_describe_your_image"></img>
            <img src="/footerLinkedin.svg" alt="text_to_describe_your_image"></img>
          </div>
        </div>
      </div>
    )
};

export default Footer;