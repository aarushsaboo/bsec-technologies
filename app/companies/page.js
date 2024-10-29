"use client"
import ChartWhiteBox from "../components/companies/ChartWhiteBox/ChartWhiteBox"
import Menu from "../components/companies/Menu/Menu"
import PendingPayments from "../components/companies/PendingPayments/PendingPayments"
import Sidebar from "../components/Sidebar/Sidebar"

import { useState, useEffect } from "react"

import styles from "./companies.module.css"

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const res = await fetch("http://localhost/bsec-backend/bsec-technologies-api/index.php");
      const data = await res.json();
      setCompanies(data);
    };

    fetchCompanies();
  }, []);
  return (
    <div className={styles.companiesContainer}>
      <div className={styles.companies}>
        <Menu />
        <div className={styles.chart}>
          <ChartWhiteBox />
        </div>
        <PendingPayments companies={companies}/>
      </div>
      <Sidebar />
    </div>
  )
}

export default Companies;