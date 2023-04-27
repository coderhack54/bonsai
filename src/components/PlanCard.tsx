import React from "react";
import styles from "@/styles/Banner.module.scss";
import { AiOutlineCheck } from "react-icons/ai";

const PlanCard = (props:any) => {
  const {name,pricepermonth,curr_unit,link,slug,benefits}=props
  return (
    <div className={styles.plancard}>
    <div className={styles.plancard__wrapper}>
    
      <h3>{name}</h3>
      <div className={styles.plancard__price}>
        <span>{curr_unit}</span>
        <span>{pricepermonth}</span>
        <span>/month</span>
      </div>
      <button>Start for free</button>
      <p className={styles.plancard__desc}>
        {slug.map((item,index)=>(
<span>{item} </span>
        ))}
      </p>
      <div className={styles.plancard__divideline}></div>
      <ul className={styles.plancard__list}>
        {benefits.map((item,index)=>(
        <li> <span><AiOutlineCheck/></span> <span>{item}</span></li>
        ))}
      </ul>
    <button>Start for free</button>
    </div>
    </div>
  );
};

export default PlanCard;
