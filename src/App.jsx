import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AigronRecruitment from "./screens/AigronRecruitment";
import Onboarding from "./screens/Onboarding";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AigronProjects from "./screens/AigronProjects";
import AboutUs from "./screens/AboutUs";
import Blog from "./screens/Blog";

function App() {
  const [isWellcome, setIsWellcome] = useState(false);
  return (
    <>
      {isWellcome ? null : <Header />}

      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Onboarding setIsWellcome={setIsWellcome} />}
          />
          <Route path="/aigron_recruitment" element={<AigronRecruitment />} />
          <Route path="/aigron_projects" element={<AigronProjects />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      {isWellcome ? null : <Footer />}
    </>
  );
}

export default App;
