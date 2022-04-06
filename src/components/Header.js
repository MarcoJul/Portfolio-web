import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.menu}>
        <ul className={classes.navigation}>
          <li>
            <a className={classes.link} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={classes.link} href="#do">
              What I Do
            </a>
          </li>
          <li>
            <a className={classes.link} href="#project">
              Projects
            </a>
          </li>
          <li>
            <a className={classes.link} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className={classes.action}>
          <a href="/files/Marco_Giuliotti-CV_eng.pdf" download>
            <button className={classes.cvBtn}>CV</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
