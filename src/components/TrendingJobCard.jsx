import React from "react";

export default function TrendingJobCard({ img, title, span, imgHover }) {
  return (
    <div className="trending__job__container__content__card">
      <img
        src={img}
        alt="trendingJobPic"
        className="trending__job__container__content__card__img"
      />
      <img
        src={imgHover}
        alt="trendingJobPic"
        className="trending__job__container__content__card__img__hover"
      />
      <div className="trending__job__container__content__card__title">
        {title} <span>{span}</span>
      </div>
    </div>
  );
}
