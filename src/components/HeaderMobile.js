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
        <ul className={classes.navigation}>
          <li className={classes.listed}>
            <a className={classes.link} href="">
              About
            </a>
          </li>
          <li className={classes.listed}>
            <a className={classes.link} href="">
              What I Do
            </a>
          </li>
          <li className={classes.listed}>
            <a className={classes.link} href="">
              Projects
            </a>
          </li>
          <li className={classes.listed}>
            <a className={classes.link} href="">
              Contact
            </a>
          </li>
        </ul>
        <div className={classes.action}>
          <a href="/files/Marco_Giuliotti-CV_eng.pdf" download>
            <button className={classes.cvBtn}>CV</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
