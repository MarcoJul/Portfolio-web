import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.menu}>
        <ul className={classes.navigation}>
          <li className={classes.link}>About</li>
          <li className={classes.link}>What I do</li>
          <li className={classes.link}>Projects</li>
          <li className={classes.link}>Contact</li>
        </ul>
        <div className={classes.action}>
          <button className={classes.cvBtn}>CV</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
