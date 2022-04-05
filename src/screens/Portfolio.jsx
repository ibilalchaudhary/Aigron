import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNav from "../components/ProjectNav";
import ProjectPic2 from "../assets/projectPic2.png";
import { Link } from "react-router-dom";

function PortfolioCard() {
  return (
    <Link to="/portfolio-details" className="portfolio__container__card">
      <img
        src={ProjectPic2}
        alt="ProjectPic"
        className="portfolio__container__card__img"
      />
    </Link>
  );
}

export default function Portfolio() {
  const [select, setSelect] = useState("All");
  return (
    <div className="portfolio__container">
      <div className="portfolio__container__btn__wrapper">
        <ProjectNav title="All" select={select} setSelect={setSelect} />
        <ProjectNav title="UI/UX" select={select} setSelect={setSelect} />
        <ProjectNav title="Web" select={select} setSelect={setSelect} />
        <ProjectNav title="Mobile" select={select} setSelect={setSelect} />
        <ProjectNav title="Graphic " select={select} setSelect={setSelect} />
      </div>
      <div className="portfolio__container__card__wrapper">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  );
}
