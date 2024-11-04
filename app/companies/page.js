"use client"
import ChartWhiteBox from "../components/companies/ChartWhiteBox/ChartWhiteBox"
import Menu from "../components/companies/Menu/Menu"
import PendingPayments from "../components/companies/PendingPayments/PendingPayments"
import Sidebar from "../components/Sidebar/Sidebar"

import { useState, useEffect } from "react"

import styles from "./companies.module.css"

const Companies = () => {
    const [data, setData] = useState({
      companies: [],
      monthlyData: [],
      metrics: {},
    })

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          "http://localhost/bsec-api/bsec-technologies-api/index.php?action=all"
        )
        const jsonData = await res.json()
        setData(jsonData)
      }

      fetchData()
    }, [])
  
  console.log(data)

  return (
    <div className={styles.companiesContainer}>
      <div className={styles.companies}>
        <Menu />
        <div className={styles.chart}>
          <ChartWhiteBox
            monthlyData={data.monthlyData}
            metrics={data.metrics}
          />
        </div>
        <PendingPayments companies={data.companies} />
      </div>
      <Sidebar />
    </div>
  )
}

export default Companies;