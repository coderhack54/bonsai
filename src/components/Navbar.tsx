import React, { useState,useEffect } from "react";
import styles from "@/styles/Home.module.scss";
import { navItems } from "@/utils/NavItems";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [dropdownStates, setDropdownStates] = useState(
    new Array(navItems.length).fill(false)
  );
  const [active,setActive]=useState(false);
  const handleMouseEnter = (index) => {
    setDropdownStates((prevIndex) => {
      const newStates = [...prevIndex];
      newStates[index] = true;
      return newStates;
    });
  };
  const handleMouseLeave = (index) => {
    setDropdownStates((prevIndex) => {
      const newStates = [...prevIndex];
      newStates[index] = false;
      return newStates;
    });
  };
  const toggleNavbar=()=>{
    setActive(prevState=>!prevState);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img
          src="https://assets-global.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg"
          alt="bonsai-logo"
        />
      </div>
      <div className={`${styles.navbar__items} ${active ? styles.active:''}`}>
        <ul className={styles.navbar__items__list}>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              id={item.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <a
                href=""
                className={dropdownStates[index] ? `${styles.changeColor}` : ""}
              >
                {" "}
                {item.name}
              </a>
              {dropdownStates[index] && (
                <Dropdown subchildren={item.children} />
              )}
            </li>
          ))}
          <li
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <a
              href=""
              className={dropdownStates[3] ? `${styles.changeColor}` : ""}
            >
              Templates
            </a>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
            <a
              href=""
              className={dropdownStates[4] ? `${styles.changeColor}` : ""}
            >
              Pricing
            </a>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={() => handleMouseLeave(5)}
          >
            <a
              href=""
              className={dropdownStates[5] ? `${styles.changeColor}` : ""}
            >
              Reviews
            </a>
          </li>
        </ul>

        <div className={styles.navbar__buttons}>
          <button role="button">Log in</button>
          <button role="button">Start free</button>
        </div>
      </div>
      <span className={styles.mobileicon} onClick={toggleNavbar} role="button">
        <img
          src="https://assets-global.website-files.com/635ac9564cc3682ce1536786/6363a910018ea661db9d2000_Group%2012489.svg"
          loading="lazy"
          alt=""
        />
      </span>
    </nav>
  );
};

export default Navbar;
