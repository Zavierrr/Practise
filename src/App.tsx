import React, { useState } from "react";
import Middle from "./components/Middle";
import Left from "./components/Left";
import Right from "./components/Right";
import "./App.css";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};

export default App;
