import { Fragment } from "react";
import classes from "./App.module.css";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <div className={classes.logo}>
        <h1>Marco Giuliotti</h1>
        <p>Front-end Developer</p>
      </div>
    </Fragment>
  );
}

export default App;
