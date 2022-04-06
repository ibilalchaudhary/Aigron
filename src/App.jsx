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
import BlogDetails from "./screens/BlogDetails";
import Portfolio from "./screens/Portfolio";
import PortfolioDetails from "./screens/PortfolioDetails";
import Expertise from "./screens/Expertise";
import Contact from "./screens/Contact";
import HowWeWork from "./screens/HowWeWork";
import JobRequirement from "./screens/JobRequirement";

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
          <Route path="/blog_details" element={<BlogDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how_we_work" element={<HowWeWork />} />
          <Route path="/job-requirement" element={<JobRequirement />} />
        </Routes>
      </div>
      {isWellcome ? null : <Footer />}
    </>
  );
}

export default App;
