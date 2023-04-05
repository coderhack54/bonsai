import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import { navItems } from "@/utils/NavItems";
const Dropdown = ({ subchildren }) => {
  return (
    <section className={`${styles.navbar__list__item__content}`}>
      <div className={styles.navbar__list__item__content__wrapper}>
        {subchildren.map((item, index) => (
          <ul key={index}>
            <li>
              <h4>{item.title}</h4>
            </li>
            {item.headings &&
              item?.headings.map((heading) => (
                <li>
                  <a>{heading}</a>
                </li>
              ))}
            {item.content && (
              <li>
                <img src={item.content.image} className={styles.dropdownimg} />
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
