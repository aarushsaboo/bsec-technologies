import ChartWhiteBox from "../components/companies/ChartWhiteBox/ChartWhiteBox"
import Menu from "../components/companies/Menu/Menu"
import PendingPayments from "../components/companies/PendingPayments/PendingPayments"
import Sidebar from "../components/Sidebar/Sidebar"

import styles from "./companies.module.css"

const Companies = () => {
  return (
    <div className={styles.companiesContainer}>
      <div className={styles.companies}>
        <Menu />
        <div className={styles.chart}>
          <ChartWhiteBox />
        </div>
        <PendingPayments />
      </div>
      <Sidebar />
    </div>
  )
}

export default Companies
