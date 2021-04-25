import React from "react";
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Main from "./components/Main";
import Header from "./components/Header"



function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
        </Wrapper>
    </div>
  );
}

export default App;
