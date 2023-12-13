import { useEffect } from "react";

import { MainContainer } from "./components/wrapper/MainContainer";
import { FactbookTable } from "./components/other/FactbookTable";
import { NavScroller } from "./components/wrapper/NavScroller";
import { Navbar } from "./components/wrapper/Navbar";
import "./App.css";

const App = ({ children }) => {
  useEffect(() => {
    document.body.classList.add("bg-body-tertiary");

    return () => {
      document.body.classList.remove("bg-body-tertiary");
    };
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <NavScroller></NavScroller>
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default App;
