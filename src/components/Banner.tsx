import React, { useState } from 'react'
import styles from "@/styles/Banner.module.scss";
import Switch from './Switch';
const Banner = () => {
    const [switchState,setSwitchState]=useState();
  return (
    <section className={styles.banner}>
        <div>
        
        </div>
        <div className={styles.banner__item}>
            <div className={styles.banner__heading}>
                <h1>Pick the best plan for your business</h1> 
            </div>
            <div className={styles.banner__switch}>
                <Switch setSwitchState={setSwitchState}/>
            </div>
            <div className={styles.banner__cards}>
                
            </div>
        </div>
        <div>   
 
        </div>

    </section>
  )
}

export default Banner