import { useEffect } from "react";

import { MainContainer } from "./components/MainContainer";
import { NavScroller } from "./components/NavScroller";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import "./App.css";

const App = () => {
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
      <MainContainer>
        <Dashboard></Dashboard>
      </MainContainer>
    </>
  );
};

export default App;
