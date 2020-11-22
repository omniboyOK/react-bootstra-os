import React from "react";
import { Provider } from "react-redux";
//import logo from './logo.svg';
import store from "./store/index";
import "./App.css";
import Desktop from "./App/Desktop/desktop";
import './tailwind.output.css';
import WindowManager from "./App/Layout/WindowManager/manager";
import Window from "./App/Layout/Window/window";

function App() {
  /* const [windows, setWindows] = useContext([]); */

  return (
    <Provider store={store}>
      <div
        className="App"
        style={{ height: "100vh", overflow: "hidden"}}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <Window></Window>
        {/* <WindowManager></WindowManager> */}
        <Desktop></Desktop>
      </div>
    </Provider>
  );
}

export default App;
