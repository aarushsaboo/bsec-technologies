import React from "react"
import ChartWhiteBoxCard from "./ChartWhiteBoxCard"
import Chart from "./Chart"
import styles from "./ChartWhiteBox.module.css"

const ChartWhiteBox = ({ monthlyData, metrics }) => {
  return (
    <div className={styles.chartWhiteBox}>
      <div className={styles.chartWhiteBoxCardContainer}>
        <ChartWhiteBoxCard
          iconType={"dollar"}
          heading1={"Total Revenue"}
          heading2={`$${(metrics.totalRevenue / 1000).toFixed(0)}k`}
          percent={metrics.revenueGrowth}
        />
      </div>
      <div className={styles.seperator}></div>
      <div className={styles.chartWhiteBoxCardContainer}>
        <ChartWhiteBoxCard
          iconType={"dollar"}
          heading1={"Average Transaction"}
          heading2={`$${metrics.averageTransaction}`}
          percent={metrics.transactionGrowth}
        />
      </div>
      <div className={styles.seperator2}></div>
      <div className={styles.chartWhiteBoxCardContainer}>
        <ChartWhiteBoxCard
          iconType={"dollar"}
          heading1={"Total Customers"}
          heading2={metrics.totalCustomers}
          percent={metrics.customerGrowth}
        />
      </div>
      <Chart data={monthlyData} />
    </div>
  )
}
export default ChartWhiteBox
