
import React from "react";
import "./App.css";
import SearchEngine from "./component/SearchEngine.js";

export default function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <SearchEngine />
        <small>
          <a
            href="https://github.com/Nezhlya/react-app"
            target="_black"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Nezhlya Emin
        </small>
      </header>
    </div>
  );
}
