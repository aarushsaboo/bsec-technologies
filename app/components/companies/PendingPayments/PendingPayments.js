import React from "react"
import Company from "./Company"
import styles from "./PendingPayments.module.css"

const PendingPayments = ({companies}) => {
  return (
    <div className={styles.pendingPayments}>
      <h2>PENDING PAYMENTS</h2>
      <div className={styles.companiesContainer}>
      {companies.length > 0 ? (
          companies.map((company) => (
            <Company key={company.id} name={company.name} />
          ))
        ) : (
          <p>No companies available.</p>
        )}
      </div>
    </div>
  )
}

export default PendingPayments
