import { useState } from "react";

import { MainContainer } from "./MainContainer";
import { NavScroller } from "./NavScroller";
import reactLogo from "./assets/react.svg";
import { Navbar } from "./Navbar";
import "./App.css";

import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <NavScroller></NavScroller>
      <MainContainer></MainContainer>
    </>
  );
}

export default App;
