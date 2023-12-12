import { MainContainer } from "./MainContainer";
import { NavScroller } from "./NavScroller";
import { Navbar } from "./Navbar";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-body-tertiary")
  // }, [])
  

  return (
    <>
      <Navbar></Navbar>
      <NavScroller></NavScroller>
      <MainContainer></MainContainer>
    </>
  );
}

export default App;
