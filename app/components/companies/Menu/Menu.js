import React from 'react';
import Link from "next/link"

import styles from './Menu.module.css'

const Menu = () => {
    return (
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="/" style={{ textDecoration: "none" }}>
              <button className={styles.payments}>PAYMENTS</button>
            </Link>
          </li>
          <li>
            <Link href="/" style={{ textDecoration: "none" }}>
              <button className={styles.deliveries}>DELIVERIES</button>
            </Link>
          </li>
          <li>
            <Link href="/" style={{ textDecoration: "none" }}>
              <button className={styles.ongoingContracts}>
                ONGOING CONTRACTS
              </button>
            </Link>
          </li>
          <li>
            <Link href="/" style={{ textDecoration: "none" }}>
              <input placeholder="Search" className={styles.search}></input>
            </Link>
          </li>
        </ul>
      </div>
    )
};

export default Menu;