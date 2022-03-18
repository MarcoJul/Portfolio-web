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
    <div className={classes.content}>
      {isDesktop && <Header />}
      {isMobile && <HeaderMobile />}
      <div className={classes.logo}>
        <h1>Marco Giuliotti</h1>
        <p>Front-end Developer</p>
      </div>
    </div>
  );
}

export default App;
