import React from "react";
import { Route, Routes } from "react-router";

import MainProtected from "../ui/templates/main-protected";
import { Calls } from "../pages/calls/calls";
import { SignIn } from "../pages/sign-in/sign-in";
import { Call } from "../pages/call/call";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainProtected />}>
          <Route path="calls" element={<Calls />} />
          <Route path="calls/:id" element={<Call />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
