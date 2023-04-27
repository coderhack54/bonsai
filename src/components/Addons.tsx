import React from 'react'
import styles from "@/styles/Addons.module.scss";

const Addons = () => {
  return (
    <div className={styles.addons}>
        <h3>Take it to the <span>next level with add-ons</span></h3>
        <div className={styles.addons__cards__row}>
            <div className={styles.addon__card}>
                <div>
                <h6>Collaborators</h6>
                <p>Invite other users to specific projects for limited access and functionality.</p>
                </div>
                <div className={styles.addon__card__price}>
                    <span>Free</span>
                </div>
            </div>
            <div className={styles.addon__card}>
                <div>
                <h6>Collaborators</h6>
                <p>Invite other users to specific projects for limited access and functionality.</p>
                </div>
                <div className={styles.addon__card__price}>
                    <span>Free</span>
                </div>
            </div>
            <div className={styles.addon__card}>
                <div>
                <h6>Collaborators</h6>
                <p>Invite other users to specific projects for limited access and functionality.</p>
                </div>
                <div className={styles.addon__card__price}>
                    <span>Free</span>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Addons