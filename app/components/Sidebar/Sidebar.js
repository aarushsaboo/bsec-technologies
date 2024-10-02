import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
      <div className={styles.sidebar}>
        <ul>
          <li>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className={styles.sidebar1}>
                <img src="/sidebar1.svg"></img>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className={styles.sidebar2}>
                <img src="/sidebar2.svg"></img>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className={styles.sidebar3}>
                <img src="/sidebar3.svg"></img>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className={styles.sidebar4}>
                <img src="/sidebar4.svg"></img>
              </div>
            </Link>
          </li>
        </ul>
        <div className={styles.sidebarCircle}>
                <img src="/sidebar_circle.svg"></img>
                <img src="/sidebar5.svg"></img>
        </div>
      </div>
    )
};

export default Sidebar;