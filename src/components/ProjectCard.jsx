import React from "react";
import projectSvg from "../assets/projectSvg.png";
import projectPic1 from "../assets/projectPic1.png";
import projectPic2 from "../assets/projectPic2.png";

export default function ProjectCard() {
  return (
    <div className="projects__container__content__projects__wrapper">
      <div className="projects__container__content__projects__wrapper__card">
        <div className="projects__container__content__projects__wrapper__card__header">
          <div className="projects__container__content__projects__wrapper__card__heading">
            Project
            <span>Name here</span>
          </div>
          <img
            src={projectSvg}
            alt="projectSvg"
            className="projects__container__content__projects__wrapper__card__svg"
          />
        </div>
        <div className="projects__container__content__projects__wrapper__card__para">
          We’re changing the way you travel in Pakistan. While short-term
          rentals are on a rise in the country, they are often. Our properties
          come with on-site concierge and consistent amenities – allowing you to
          en.
        </div>
      </div>
      <div className="projects__container__content__projects__wrapper__img__card">
        <img
          src={projectPic1}
          alt="projectPic"
          className="projects__container__content__projects__wrapper__img"
        />
      </div>
      <div className="projects__container__content__projects__wrapper__img__card">
        <img
          src={projectPic2}
          alt="projectPic"
          className="projects__container__content__projects__wrapper__img"
        />
      </div>
    </div>
  );
}
