import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import classes from "./App.module.css";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";

function App() {
  const isDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <Fragment>
      {isDesktop && <Header />}
      {isMobile && <HeaderMobile />}
      <div className={classes.logo}>
        <div className={classes.textBox}>
          <h1>Lorem Ipsum</h1>
          <p>Front-end Developer</p>
        </div>
        <div className={classes.cta}>
          <a href="mailto:marco.giuliotti@gmail.com" className={classes.mail}>
            Get in touch
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
