import React from "react";
import { Route, Routes } from "react-router";

import { Home } from "./home/home";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
