import React, { useState } from "react";
import moreJobBg from "../assets/moreJobBg.jpg";
import contactPic from "../assets/contactPic.jpg";
import moreJobPic from "../assets/moreJobPic.png";

function AboutJobNav({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "more__about_job__btn more__about_job__btn__select"
          : "more__about_job__btn"
      }
    >
      <div
        className={
          select === title
            ? "more__about_job__btn__circle more__about_job__btn__circle__select"
            : "more__about_job__btn__circle"
        }
      ></div>
      {title}
    </button>
  );
}
export default function MoreAboutJob() {
  const [select, setSelect] = useState("Requirement");
  return (
    <>
      <div className="more__about_job__container">
        <img
          src={moreJobBg}
          alt="moreJobBg"
          className="more__about_job__container__img"
        />
      </div>
      <div className="more__about_job__container__content">
        <div className="more__about_job__container__content__heading">
          More about the Job
        </div>
        <div className="more__about_job__container__content__nav__wrappper">
          <AboutJobNav
            title="Description"
            select={select}
            setSelect={setSelect}
          />
          <div className="more__about_job__container__content__nav__divider"></div>
          <AboutJobNav
            title="Requirement"
            select={select}
            setSelect={setSelect}
          />
          <div className="more__about_job__container__content__nav__divider"></div>
          <AboutJobNav
            title="About company"
            select={select}
            setSelect={setSelect}
          />
        </div>
        {select === "Description" ? (
          <>
            <div className="more__about_job__container__content__wrapper">
              <div className="more__about_job__container__content__left">
                <img
                  src={moreJobPic}
                  alt="moreJobPic"
                  className="more__about_job__container__content__left__img"
                />
              </div>
              <div className="more__about_job__container__content__right">
                <div className="more__about_job__container__content__right__card">
                  <img
                    src={contactPic}
                    alt="contactPic"
                    className="more__about_job__container__content__right__card__pic"
                  />
                  <div className="more__about_job__container__content__right__card__overlay">
                    <div className="more__about_job__container__content__right__card__overlay__heading">
                      Recruitment
                    </div>
                    <div className="more__about_job__container__content__right__card__overlay__para">
                      Location: Rotterdam
                    </div>
                    <div className="more__about_job__container__content__right__card__overlay__para">
                      region This leading machine builder is responsible for
                      designing, developing, building and installing
                      high-quality machines all over the world. With their
                      expertise in the food industry, they are able to respond
                      seamlessly to the needs of their customers. Within this
                      young progressive company there
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {select === "Requirement" ? (
          <>
            <div className="more__about_job__container__content__wrapper">
              <div className="more__about_job__container__content__left">
                <img
                  src={moreJobPic}
                  alt="moreJobPic"
                  className="more__about_job__container__content__left__img"
                />
              </div>
              <div className="more__about_job__container__content__right">
                <div className="more__about_job__container__content__right__card">
                  <img
                    src={contactPic}
                    alt="contactPic"
                    className="more__about_job__container__content__right__card__pic"
                  />
                  <div className="more__about_job__container__content__right__card__overlay">
                    <div className="more__about_job__container__content__right__card__overlay__heading">
                      Recruitment
                    </div>
                    <div className="more__about_job__container__content__right__card__overlay__para">
                      Location: Rotterdam
                    </div>
                    <div className="more__about_job__container__content__right__card__overlay__para">
                      region This leading machine builder is responsible for
                      designing, developing, building and installing
                      high-quality machines all over the world. With their
                      expertise in the food industry, they are able to respond
                      seamlessly to the needs of their customers. Within this
                      young progressive company there is an open culture and a
                      lot of investment in the employees. You can find their
                      products with their global customers where they design and
                      commission not only machines but entire production lines.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {select === "About company" ? (
          <>
            <div className="more__about_job__container__content__wrapper">
              <div className="more__about_job__container__content__left">
                <img
                  src={moreJobPic}
                  alt="moreJobPic"
                  className="more__about_job__container__content__left__img"
                />
              </div>
              <div className="more__about_job__container__content__right">
                <div className="more__about_job__container__content__right__card">
                  <img
                    src={contactPic}
                    alt="contactPic"
                    className="more__about_job__container__content__right__card__pic"
                  />
                  <div className="more__about_job__container__content__right__card__overlay">
                    <div className="more__about_job__container__content__right__card__overlay__heading">
                      Recruitment
                    </div>
                    <div className="more__about_job__container__content__right__card__overlay__para">
                      Location: Rotterdam
                    </div>
                    <div className="more__about_job__container__content__right__card__overlay__para">
                      region This leading machine builder is responsible for
                      designing, developing, building and installing
                      high-quality machines all over the world. With their
                      expertise in the food industry, they are able to respond
                      seamlessly to the needs of their customers. Within this
                      young progressive company there is an open culture and a
                      lot of investment in the employees. You can find their
                      products with their global customers where they design and
                      commission not only machines but entire production lines.
                      Our client has a proven track record of services when you
                      look at the quality of their way of producing, handling
                      systems and strategy of how they are operated.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
