import React from "react";
import { Provider } from "react-redux";
//import logo from './logo.svg';
import store from "./store/index";
import "./App.css";
import Desktop from "./App/Desktop/desktop";
import './tailwind.output.css';

function App() {
  /* const [windows, setWindows] = useContext([]); */

  return (
    <Provider store={store}>
      <div
        className="App"
        style={{ height: "100vh" }}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <Desktop></Desktop>
      </div>
    </Provider>
  );
}

export default App;
