import React from "react";
import { Link } from "react-router-dom";
import expertiseBg from "../assets/expertiseBg.jpg";
import ProjectCard from "../components/ProjectCard";
import ToolsCard from "../components/ToolsCard";
import qoutePic from "../assets/qoutePic.jpg";
import contactPic from "../assets/contactPic.jpg";

export default function Expertise() {
  return (
    <>
      <div className="expertise__container">
        <img
          src={expertiseBg}
          alt="expertiseBg"
          className="expertise__container__img"
        />
        <div className="expertise__container__overlay">
          <div className="expertise__container__overlay__content">
            <div className="expertise__container__overlay__content__heading">
              Web Development
            </div>
            <div className="expertise__container__overlay__content__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been th
            </div>
          </div>
        </div>
      </div>

      <div className="projects__container">
        <div className="projects__container__content">
          <div className="projects__container__sub__heading">Projects</div>
          <div className="projects__container__heading">
            We are changing the world <br /> – the tech way
          </div>
          <ProjectCard />
          <div
            style={{ marginBottom: 30 }}
            className="trending__job__container__view__all__footer"
          >
            <Link
              to="/portfolio"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="trending__job__container__view__all"
            >
              <div className="trending__job__container__view__all__heading">
                Load More
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.243"
                height="13.501"
                viewBox="0 0 20.243 13.501"
              >
                <path
                  id="Icon_ionic-ios-arrow-round-forward"
                  data-name="Icon ionic-ios-arrow-round-forward"
                  d="M20.784,11.51a.919.919,0,0,0-.007,1.294l4.275,4.282H8.782a.914.914,0,0,0,0,1.828H25.045L20.77,23.2a.925.925,0,0,0,.007,1.294.91.91,0,0,0,1.287-.007l5.794-5.836h0a1.026,1.026,0,0,0,.19-.288.872.872,0,0,0,.07-.352.916.916,0,0,0-.26-.64l-5.794-5.836A.9.9,0,0,0,20.784,11.51Z"
                  transform="translate(-7.875 -11.252)"
                  fill="#04133b"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="expertise__content__wrapper">
        <div className="portfolio__details__container__tools__heading">
          Tool we use
        </div>
        <div className="portfolio__details__container__tools__wrapper">
          <ToolsCard />
          <ToolsCard />
          <ToolsCard />
          <ToolsCard />
          <ToolsCard />
          <ToolsCard />
        </div>
      </div>
      <div className="get__quote__container">
        <div className="get__quote__container__left">
          <img
            src={qoutePic}
            alt="qoutePic"
            className="get__quote__container__left__img"
          />
          <div className="get__quote__container__left__overlay">
            "We make sure that you get the best <br /> services in competitive
            budget"
          </div>
        </div>
        <div className="get__quote__container__right">
          <img
            src={contactPic}
            alt="contactPic"
            className="get__quote__container__right__img"
          />
          <div className="get__quote__container__right__overlay">
            <div className="get__quote__container__right__overlay__left">
              <div className="get__quote__container__right__overlay__left__heading">
                Get a Free Qoute
              </div>
              <input
                placeholder="Project Name"
                type="text"
                className="contact__inputs"
              />
              <input
                placeholder="Domains"
                type="text"
                className="contact__inputs"
              />
              <input
                placeholder="Phone"
                type="tel"
                className="contact__inputs"
              />
              <input
                placeholder="Email"
                type="email"
                className="contact__inputs"
              />
              <textarea
                placeholder="Project Details"
                cols={6}
                rows={6}
                type="text"
                className="contact__inputs"
              />
              <div className="contact__btn__container">
                <button className="contact__btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
