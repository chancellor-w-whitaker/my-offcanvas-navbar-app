import { useEffect } from "react";

import { MainContainer } from "./MainContainer";
import { NavScroller } from "./NavScroller";
import { Navbar } from "./Navbar";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-body-tertiary");
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
