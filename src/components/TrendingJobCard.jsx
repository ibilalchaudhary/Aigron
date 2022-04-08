import React from "react";
import { Link } from "react-router-dom";

export default function TrendingJobCard({ img, title, span, imgHover }) {
  return (
    <Link
      to="/search_job"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="trending__job__container__content__card"
    >
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
    </Link>
  );
}
