import React from "react";

export default function WhatWeDoCard({ img, title, span, imgHover }) {
  return (
    <div className="what__we__do__container__content__card">
      <img
        src={img}
        alt="what__we__do"
        className="what__we__do__container__content__card__img"
      />
      <img
        src={imgHover}
        alt="what__we__do"
        className="what__we__do__container__content__card__img__hover"
      />
      <div className="what__we__do__container__content__card__heading">
        {title} <span>{span}</span>
      </div>
    </div>
  );
}
