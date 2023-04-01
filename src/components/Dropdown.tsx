import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import { navItems } from "@/utils/NavItems";
const Dropdown = ({ show, subchildren, id }) => {
  return (
    <section className={` ${styles.navbar__list__item__content}`}>
      <div className={styles.navbar__list__item__content__wrapper}>
        {subchildren.map((item, index) => (
          <ul key={index} id={id}>
            <li>
              <h2>{item.title}</h2>
            </li>
            {item.headings &&
              item?.headings.map((heading) => (
                <li>
                  <a>{heading}</a>
                </li>
              ))}
            {item.content && (
              <li>
                <img src={item.content.image} />
                <p>{item.desc}</p>
                <a href="">Learn more</a>
              </li>
            )}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Dropdown;
