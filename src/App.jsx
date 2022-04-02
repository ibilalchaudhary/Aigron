import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Onboarding from "./screens/Onboarding";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
