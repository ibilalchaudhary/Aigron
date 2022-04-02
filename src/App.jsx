import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AigronRecruitment from "./screens/AigronRecruitment";
import Onboarding from "./screens/Onboarding";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/aigron_recruitment" element={<AigronRecruitment />} />
      </Routes>
    </div>
  );
}

export default App;
