import React, { useState } from "react";
import styles from "@/styles/Banner.module.scss";
import Switch from "./Switch";
import PlanCard from "./PlanCard";
import { valueplans, popularplans } from "@/utils/Plans";
import PlanCardWrapper from "./PlanCardWrapper";
const Banner = () => {
  const [switchState, setSwitchState] = useState();
  return (
    <section className={styles.banner}>
      <div></div>
      <div className={styles.banner__item}>
        <div className={styles.banner__heading}>
          <h1>Pick the best plan for your business</h1>
        </div>
        <div className={styles.banner__switch}>
          <Switch setSwitchState={setSwitchState} />
        </div>
        <div className={styles.banner__cards}>
          {switchState
            ? valueplans.plans.map((item, index) => {
             return index===1 ? (<PlanCardWrapper title={valueplans.title}><PlanCard key={index} {...item} /></PlanCardWrapper>):(<PlanCard key={index} {...item} />)
                
            })
            : popularplans.plans.map((item, index) => {
                return index===1 ? (<PlanCardWrapper title={popularplans.title}><PlanCard key={index} {...item} /></PlanCardWrapper>):(<PlanCard key={index} {...item} />)
               })}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Banner;
