import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.menu}>
        <ul className={classes.navigation}>
          <li>
            <a className={classes.link} href="">
              About
            </a>
          </li>
          <li>
            <a className={classes.link} href="">
              What I Do
            </a>
          </li>
          <li>
            <a className={classes.link} href="">
              Projects
            </a>
          </li>
          <li>
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
      </nav>
    </header>
  );
};

export default Header;
