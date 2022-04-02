import React, { useEffect } from "react";
import recruitmentPic from "../assets/recruitmentPic.png";
import projectPic from "../assets/projectPic.png";
import onboardingLogo from "../assets/onboardingLogo.png";
import { Link } from "react-router-dom";

export default function Onboarding({ setIsWellcome }) {
  useEffect(() => {
    setIsWellcome(true);

    return () => {
      setIsWellcome(false);
    };
  }, []);

  return (
    <div className="onboarding__container">
      <div className="onboarding__container__logo">
        <img
          src={onboardingLogo}
          alt="onboardingLogo"
          className="onboarding__container__logo__img"
        />
      </div>
      <Link
        to="/aigron_recruitment"
        className="onboarding__container__recruitment"
      >
        <img
          src={recruitmentPic}
          alt="recruitmentPic"
          className="onboarding__container__recruitment__img"
        />
        <div className="onboarding__container__recruitment__heading">
          Aigron <span>Recruitment</span>
        </div>
      </Link>
      <Link to="/" className="onboarding__container__projects">
        <img
          src={projectPic}
          alt="projectPic"
          className="onboarding__container__projects__img"
        />
        <div className="onboarding__container__projects__heading">
          Aigron <span>Projects</span>
        </div>
      </Link>
    </div>
  );
}
