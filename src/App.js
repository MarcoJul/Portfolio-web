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
        <h1>Lorem Ipsum</h1>
        <p>Front-end Developer</p>
      </div>
    </Fragment>
  );
}

export default App;
