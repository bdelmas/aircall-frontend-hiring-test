import React from "react";
import { Route, Routes } from "react-router";

import { Calls } from "../pages/calls/calls";
import { SignIn } from "../pages/sign-in/sign-in";
import MainProtected from "../ui/templates/main-protected";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainProtected />}>
          <Route path="calls" element={<Calls />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
