import React from "react";
import { Link } from "react-router-dom";
import blogBg from "../assets/blogBg.jpg";
import blogPic from "../assets/blogPic.jpg";

function BlogCard() {
  return (
    <Link to="/blog_details" className="blog__container__wrapper__card">
      <img
        src={blogPic}
        alt="blogPic"
        className="blog__container__wrapper__card__img"
      />
      <div className="blog__container__wrapper__card__content">
        <div className="blog__container__wrapper__card__content__heading">
          Blog Name Here
        </div>
        <div className="blog__container__wrapper__card__content__para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  return (
    <>
      <div className="blog__container">
        <img src={blogBg} alt="blogBg" className="blog__container__img" />
        <div className="blog__container__overlay">
          <div className="blog__container__overlay__headings">BLOGS</div>
        </div>
      </div>
      <div className="blog__container__wrapper">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="blog__container__view__all">
        <button className="trending__job__container__view__all">
          <div className="trending__job__container__view__all__heading">
            View All
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
        </button>
      </div>
    </>
  );
}
