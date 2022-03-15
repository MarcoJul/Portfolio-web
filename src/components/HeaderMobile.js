import { useState } from "react";

import classes from "./HeaderMobile.module.css";

const HeaderMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openMenuHandler = () => {
    console.log(menuIsOpen);
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <header className={classes.header}>
      <div className={classes.hamburger} onClick={openMenuHandler}>
        <div
          className={`${classes.bar1} ${menuIsOpen ? classes.click : ""}`}
        ></div>
        <div
          className={`${classes.bar2} ${menuIsOpen ? classes.click : ""}`}
        ></div>
        <div
          className={`${classes.bar3} ${menuIsOpen ? classes.click : ""}`}
        ></div>
      </div>
      <div className={`${classes.menu} ${menuIsOpen ? classes.click : ""}`}>
        <ul className={classes.link}>
          <li className={classes.listed}>
            <a href="">About</a>
          </li>
          <li className={classes.listed}>
            <a href="">What I Do</a>
          </li>
          <li className={classes.listed}>
            <a href="">Projects</a>
          </li>
          <li className={classes.listed}>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderMobile;
