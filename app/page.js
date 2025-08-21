import Link from "next/link";

import Navbar from "./components/Navbar/Navbar";
import './globals.css'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      <div className={styles.home1}>
        <picture>
          <source srcSet="/images/photo.webp" type="image/webp" />
          <img src="/home1.svg" alt="text_to_describe_your_image" />
        </picture>

      </div>
      <div className={styles.home2}>
        <img src="/home2.svg" alt="text_to_describe_your_image"></img>
      </div>
      <div className={styles.home3}>
        <img src="/home3.svg" alt="text_to_describe_your_image"></img>
      </div>
      <div className={styles.home4}>
        <img src="/home4.svg" alt="text_to_describe_your_image"></img>
      </div>
    </div>
  );
}
