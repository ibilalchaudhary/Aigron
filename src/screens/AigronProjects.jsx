import React, { useState } from "react";
import aigronProjectBg from "../assets/aigronProjectBg.jpg";
import AigronRecruitmentBg from "../assets/AigronRecruitmentBg.jpg";
import clientLogo from "../assets/clientLogo.svg";
import WhatWeDoCard from "../components/WhatWeDoCard";
import artificialSvg from "../assets/WhatWeDoSvgs/artificialSvg.svg";
import artificialSvgHover from "../assets/WhatWeDoSvgs/artificialSvgHover.svg";
import cloudSvg from "../assets/WhatWeDoSvgs/cloudSvg.svg";
import cloudSvgHover from "../assets/WhatWeDoSvgs/cloudSvgHover.svg";
import ideationSvg from "../assets/WhatWeDoSvgs/ideationSvg.svg";
import ideationSvgHover from "../assets/WhatWeDoSvgs/ideationSvgHover.svg";
import machineSvg from "../assets/WhatWeDoSvgs/machineSvg.svg";
import machineSvgHover from "../assets/WhatWeDoSvgs/machineSvgHover.svg";
import productSvg from "../assets/WhatWeDoSvgs/productSvg.svg";
import productSvgHover from "../assets/WhatWeDoSvgs/productSvgHover.svg";
import softwareSvg from "../assets/WhatWeDoSvgs/softwareSvg.svg";
import softwareSvgHover from "../assets/WhatWeDoSvgs/softwareSvgHover.svg";
import webSvg from "../assets/WhatWeDoSvgs/webSvg.svg";
import webSvgHover from "../assets/WhatWeDoSvgs/webSvgHover.svg";

function ClientCardLogo() {
  return (
    <div className="clients__container__left__images__card">
      <img
        src={clientLogo}
        alt="clientLogo"
        className="clients__container__left__images__card__img"
      />
    </div>
  );
}

export default function AigronProjects() {
  return (
    <>
      <div className="aigron__project__main__container">
        <img
          src={aigronProjectBg}
          alt="aigronProjectBg"
          className="aigron__project__main__container__img"
        />
        <div className="aigron__project__main__container__overlay">
          <div className="aigron__project__main__container__content">
            <div className="aigron__project__main__container__content__heading">
              Full-Service <span>Software Development</span>{" "}
              <span style={{ color: "#000" }}>Company</span>
            </div>
            <div className="aigron__project__main__container__content__para">
              Build world-class digital products with a team of design, <br />
              development and strategy experts. All in one place.
            </div>
          </div>
        </div>
      </div>
      <div className="share__idea__container">
        <img
          src={AigronRecruitmentBg}
          alt="AigronRecruitmentBg"
          className="share__idea__container__img"
        />
        <div className="share__idea__container__overlay">
          You share your idea. <span>We get it done.</span>
        </div>
      </div>
      <div className="clients__container">
        <div className="clients__container__left">
          <div className="clients__container__left__images__wrapper">
            <ClientCardLogo />
            <ClientCardLogo />
            <ClientCardLogo />
            <ClientCardLogo />
            <ClientCardLogo />
            <ClientCardLogo />
          </div>
        </div>
        <div className="clients__container__right">
          <div className="clients__container__right__para">
            We transform bold business ideas into exceptional digital products.
            Searching for a partner that will take the process of software
            development off your hands? You’ve come to the right place. We
            ideate, design, and develop data-driven digital products made to
            answer business challenges. We offer 360° services to smoothly guide
            you on your way to creating a seamless digital masterpiece.
          </div>
        </div>
      </div>
      <div className="what__we__do__container">
        <div className="what__we__do__container__content">
          <div className="what__we__do__container__content__heading">
            <span>See</span> what we can do <span> for you</span>
          </div>
          <WhatWeDoCard
            img={ideationSvg}
            imgHover={ideationSvgHover}
            title="Ideation"
            span="& Strategy"
          />
          <WhatWeDoCard
            img={productSvg}
            imgHover={productSvgHover}
            title="Product"
            span="Design"
          />
          <WhatWeDoCard
            img={webSvg}
            imgHover={webSvgHover}
            title="Web"
            span="& Mobile"
          />

          <WhatWeDoCard
            img={artificialSvg}
            imgHover={artificialSvgHover}
            title="Artificial"
            span="Intelligence"
          />
          <WhatWeDoCard
            img={cloudSvg}
            imgHover={cloudSvgHover}
            title="Cloud"
            span="Services"
          />
          <WhatWeDoCard
            img={machineSvg}
            imgHover={machineSvgHover}
            title="Machine"
            span="Learning"
          />
          <WhatWeDoCard
            img={softwareSvg}
            imgHover={softwareSvgHover}
            title="Software"
            span="Development"
          />
        </div>
      </div>
    </>
  );
}
