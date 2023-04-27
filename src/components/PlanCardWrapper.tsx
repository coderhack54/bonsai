import React from 'react'
import styles from "@/styles/Banner.module.scss";

const PlanCardWrapper = ({title,children}) => {
  return (
    <div className={styles.tagwrapper}>
        <h4>{title}</h4>
        {children}
    </div>
  )
}

export default PlanCardWrapper