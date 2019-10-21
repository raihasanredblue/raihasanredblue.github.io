import React from "react";
import logo from "./logo.svg";
import "./App.css";
import red from "./red.json";
import blue from "./blue.json";
import { Story } from "./Story";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {red.table.map(story => (
            <div>{Story({ ...story })}</div>
          ))}
        </p>
        <br />
        <p>
          {blue.table.map(story => (
            <div>{Story({ ...story })}</div>
          ))}
        </p>
      </header>
    </div>
  );
}

export default App;
