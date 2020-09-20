import React, { useContext } from "react";
//import logo from './logo.svg';
import "./App.css";
import Desktop from "./App/Desktop/desktop";

function App() {
  /* const [windows, setWindows] = useContext([]); */
  
  return (
    <div className="App" style={{ height: "100vh" }} onContextMenu={(e) => {e.preventDefault()}}>
      <Desktop></Desktop>
    </div>
  );
}

export default App;
