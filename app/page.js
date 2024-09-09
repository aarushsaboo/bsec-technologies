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
  );
}
