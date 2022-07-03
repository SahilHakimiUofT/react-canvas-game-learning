import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/game">Breakout Game</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
