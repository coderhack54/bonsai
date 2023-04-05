import React from 'react'
import styles from "@/styles/Banner.module.scss";
const Switch = () => {
  return (
    <>
        <input type="checkbox" id="switch" className={styles.switch}/>
       
        <label htmlFor='switch' className={styles.switch__label}>
        <span className={styles.switch__monthly}>Monthly</span>
          <span className={styles.switch__pill}></span>
          <span className={styles.switch__yearly}>Yearly</span>
          <span className={styles.button__pill}>2 months free</span>
        </label>
    </>
  )
}

export default Switch