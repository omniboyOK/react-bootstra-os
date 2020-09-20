import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Desktop from './App/Desktop/desktop';
import Toolbar from './App/Desktop/Toolbar/toolbar';

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <Desktop toolbar={Toolbar}></Desktop>
    </div>
  );
}

export default App;
