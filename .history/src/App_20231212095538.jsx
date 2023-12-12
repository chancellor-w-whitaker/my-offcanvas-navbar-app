import { useEffect } from "react";

import { MainContainer } from "./components/MainContainer";
import { NavScroller } from "./components/NavScroller";
import { Navbar } from "./components/Navbar";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-body-secondary");

    return () => {
      document.body.classList.remove("bg-body-secondary");
    };
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <NavScroller></NavScroller>
      <MainContainer>Chance</MainContainer>
    </>
  );
};

export default App;
