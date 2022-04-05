import React from "react";
import blogPic from "../assets/blogPic.jpg";
import blogBg from "../assets/blogBg.jpg";
import userPic from "../assets/userPic.png";

export default function BlogDetails() {
  return (
    <>
      <div className="blog__details__container">
        <div className="blog__details__container__content">
          <div className="blog__details__container__content__header">
            <div className="blog__details__container__content__header__img__wrapper">
              <img
                src={userPic}
                alt="userPic"
                className="blog__details__container__content__header__wrapper__img"
              />
            </div>
            <div className="log__details__container__content__header__heading">
              Posted by <span>John Snowri</span>
            </div>
          </div>
          <div className="blog__details__container__content__heading">
            Blog Title Here <span>3 Hours Ago</span>
          </div>
          <div className="blog__details__container__content__para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            magni quae ex eum temporibus alias officia beatae odio modi eligendi
            consectetur molestiae labore eveniet deleniti harum, voluptates iure
            cumque exercitationem earum debitis saepe fugiat? Nulla, saepe sit
            voluptatem aperiam cupiditate minus. Repellendus iusto quis
            veritatis natus rerum quibusdam, eos assumenda sequi voluptate
            doloribus rem aliquam explicabo possimus ex tempora <br />{" "}
            laudantium sint aut itaque eveniet ut facere vero labore voluptatem!
            Ipsam esse rerum aperiam asperiores culpa, reiciendis fuga
            perspiciatis praesentium voluptas, quasi recusandae consectetur
            veniam quisquam! Inventore blanditiis veritatis delectus sint animi
            voluptatem minus rerum quae quisquam exercitationem, ad quibusdam
            facere harum itaque quam distinctio at nisi non ab explicabo
            mollitia molestias! Ipsum distinctio quis possimus temporibus a iure
            similique ab. aliquam explicabo possimus ex tempora <br />{" "}
            laudantium sint aut itaque eveniet ut facere vero labore voluptatem!
            Ipsam esse rerum aperiam asperiores culpa, reiciendis fuga
            perspiciatis praesentium voluptas, quasi recusandae consectetur
            veniam quisquam! Inventore blanditiis veritatis delectus sint animi
            voluptatem minus rerum quae quisquam exercitationem, ad quibusdam
            facere harum itaque quam distinctio at nisi non ab explicabo
            mollitia molestias! Ipsum distinctio quis possimus temporibus a iure
            similique ab.
          </div>
        </div>
        <div className="blog__details__container__content__img__wrapper">
          <img
            src={blogPic}
            alt="blogPic"
            className="blog__details__container__content__img"
          />
        </div>
      </div>
      <div className="blog__further__details__wrapper">
        <div className="blog__details__container__content__para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          magni quae ex eum temporibus alias officia beatae odio modi eligendi
          consectetur molestiae labore eveniet deleniti harum, voluptates iure
          cumque exercitationem earum debitis saepe fugiat? Nulla, saepe sit
          voluptatem aperiam cupiditate minus. Repellendus iusto quis veritatis
          natus rerum quibusdam, eos assumenda s laudantium sint aut itaque
          eveniet ut facere vero labore voluptatem! Ipsam esse rerum aperiam
          asperiores culpa, reiciendis fuga perspiciatis praesentium voluptas,
          quasi recusandae consectetur veniam quisquam! Inventore blanditiis
          veritatis delectus sint animi voluptatem minus rerum quae quisquam
          exercitationem, ad quibusdam facere harum itaque quam distinctio at
          nisi non ab explicabo mollitia molestias! Ipsum distinctio quis
          possimus temporibus a iure similique ab. aliquam explicabo possimus ex
          tempora laudantium sint aut itaque eveniet ut facere vero labore
          voluptatem! Ipsam esse rerum aperiam asperiores culpa,
        </div>
        <div className="blog__further__details__wrapper__img__container">
          <img
            src={blogBg}
            alt="blogBg"
            className="blog__further__details__wrapper__img"
          />
        </div>
        <div className="blog__details__container__content__para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          magni quae ex eum temporibus alias officia beatae odio modi eligendi
          consectetur molestiae labore eveniet deleniti harum, voluptates iure
          cumque exercitationem earum debitis saepe fugiat? Nulla, saepe sit
          voluptatem aperiam cupiditate minus. Repellendus iusto quis veritatis
          natus rerum quibusdam, eos assumenda s laudantium sint aut itaque
          eveniet ut facere vero labore voluptatem! Ipsam esse rerum aperiam
          asperiores culpa, reiciendis fuga perspiciatis praesentium voluptas,
          quasi recusandae consectetur veniam quisquam! Inventore blanditiis
          veritatis delectus sint animi voluptatem minus rerum quae quisquam
          exercitationem, ad quibusdam facere harum itaque quam distinctio at
          nisi non ab explicabo mollitia molestias! Ipsum distinctio quis
          possimus temporibus a iure similique ab. aliquam explicabo possimus ex
          tempora laudantium sint aut itaque eveniet ut facere vero labore
          voluptatem! Ipsam esse rerum aperiam asperiores culpa,
        </div>
      </div>
    </>
  );
}
