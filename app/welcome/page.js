import Sidebar from '../components/Sidebar/Sidebar'
import ImageContainer from '../components/welcome/ImageContainer/ImageContainer'
import styles from './welcome.module.css'

const Welcome = () => {
  return (
    <>
      <div className={styles.welcome}>
        <div className={styles.whiteContainer}>
          <div className={styles.logoContainer}>LOGO</div>
          <div className={styles.inputContainer}>
            <h3>WELCOME BACK</h3>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <button className={styles.login}>Login</button>
            <button className={styles.signup}>Sign up</button>
          </div>
        </div>
      </div>
      <ImageContainer />
      <Sidebar />
    </>
  )
}

export default Welcome
