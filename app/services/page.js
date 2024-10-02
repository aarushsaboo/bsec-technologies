import Steps from '../components/platforms/Steps/Steps'
import ContractFarmingIntroduction from '../components/services/ContractFarmingIntroduction/ContractFarmingIntroduction'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import {stepsServices} from '../constants/steps'

import styles from './services.module.css'

const Services = () => {
  return (
    <div className={styles.services}>
      <ContractFarmingIntroduction />
      <Sidebar />
      <Steps stepsData={stepsServices} customClassName={styles.stepsSvg2Custom} customClassName2={styles.stepsCustom} />
      <Footer question={"Got a Query?"} />
    </div>
  )
}

export default Services
