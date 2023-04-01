import React, { useState } from "react";
import styles from "@/styles/Home.module.scss";
import { navItems } from "@/utils/NavItems";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleMouseEnter = (e) => {
    setShow(true);
    console.log("the target element is=====", e.target.children[1]);
  };
  const handleMouseLeave = (e) => {
    setShow(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img
          src="https://assets-global.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg"
          alt="bonsai-logo"
        />
      </div>
      <div className={styles.navbar__items}>
        <ul
          className={styles.navbar__items__list}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {navItems.map((item, index) => (
            <li key={item.id}>
              <a href=""> {item.name}</a>
              <Dropdown show={show} subchildren={item.children} id={item.id} />
            </li>
          ))}
          <li>
            <a href="">Templates</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
        </ul>

        <div className={styles.navbar__buttons}>
          <button>Log in</button>
          <button>Start free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
