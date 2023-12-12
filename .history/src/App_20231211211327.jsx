import { MainContainer } from "./MainContainer";
import { NavScroller } from "./NavScroller";
import { Navbar } from "./Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <NavScroller></NavScroller>
      <MainContainer></MainContainer>
    </>
  );
}

export default App;
