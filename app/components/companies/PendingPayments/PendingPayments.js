import React from "react"
import Company from "./Company"
import styles from "./PendingPayments.module.css"

const PendingPayments = () => {
  return (
    <div className={styles.pendingPayments}>
      <h2>PENDING PAYMENTS</h2>
      <div className={styles.companiesContainer}>
        <Company />
        <Company />
        <Company />
      </div>
    </div>
  )
}

export default PendingPayments
