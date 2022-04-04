import React, { useState } from "react";
import aboutUsBg from "../assets/aboutUsBg.jpg";
import AigronRecruitmentBg from "../assets/AigronRecruitmentBg.jpg";
import tengibleBg from "../assets/tengibleBg.png";
import workAcress from "../assets/workAcress.png";
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
import cartSvg from "../assets/workAcossSvgs/cartSvg.svg";
import lifeSvg from "../assets/workAcossSvgs/lifeSvg.svg";
import arSvg from "../assets/workAcossSvgs/arSvg.svg";
import utilSvg from "../assets/workAcossSvgs/utilSvg.svg";
import markSvg from "../assets/workAcossSvgs/markSvg.svg";
import enterSvg from "../assets/workAcossSvgs/enterSvg.svg";
import businessMeetSvg from "../assets/businessMeetSvg.svg";
import TestimonialSection from "../components/TestimonialSection";

function BusinessMeetsCard() {
  return (
    <div className="business__meet__container__content__card">
      <div className="business__meet__container__content__card__img">
        <svg
          id="Group_11553"
          data-name="Group 11553"
          xmlns="http://www.w3.org/2000/svg"
          width="101.051"
          height="100.88"
          viewBox="0 0 101.051 100.88"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_9"
                data-name="Rectangle 9"
                width="101.051"
                height="100.88"
                fill="#6ba53a"
              />
            </clipPath>
          </defs>
          <g id="Group_7" data-name="Group 7" clip-path="url(#clip-path)">
            <path
              id="Path_3"
              data-name="Path 3"
              d="M60.927,49.321c2.442-.976,4.625-1.776,6.728-2.75a2.126,2.126,0,0,0,.86-1.6c.169-4.306.139-4.307,4.522-4.305,3.045,0,6.091-.016,9.136.006,2.072.015,2.663.616,2.727,2.654.092,2.937.092,2.936,2.877,3.98a2.76,2.76,0,0,1,.5.206c2.494,1.547,4.806,2.3,6.862-.8.627-.947,1.863-.656,2.695.162q4.277,4.209,8.509,8.464c1.112,1.124.826,2.2-.206,3.279-2.2,2.295-2.174,2.316-.9,5.133a4.8,4.8,0,0,1,.421.986c.523,2.668,1.769,4.177,4.832,3.63,1.4-.249,2.141.8,2.139,2.248-.005,3.822.019,7.643-.01,11.465-.014,1.819-.67,2.609-2.529,2.406-2.449-.268-3.841.5-4.185,2.989a2.334,2.334,0,0,1-.4.99c-1.65,2.319-1.686,4.3.88,6.09,1.1.771.916,2.018-.032,2.973q-4.162,4.2-8.371,8.35c-1.192,1.179-2.292.89-3.422-.191-2.249-2.152-2.272-2.128-5.121-.846a3.562,3.562,0,0,1-.655.286c-2.744.6-4.625,1.74-3.958,5.114.229,1.162-.785,1.947-2.069,1.952-4,.014-8,.021-12,0a1.984,1.984,0,0,1-2.15-2.459c.337-2.48-.484-3.88-3.044-4.289a6.457,6.457,0,0,1-2.6-1.155c-1.379-.983-2.241-.54-3.291.583-2.3,2.458-2.8,2.4-5.17.027-2.322-2.323-4.658-4.631-6.973-6.961-1.535-1.545-1.519-2.337.02-3.906A12.643,12.643,0,0,1,48.68,92.9a1.475,1.475,0,0,0,.391-2.147,41.64,41.64,0,0,1-2.077-4.942,1.629,1.629,0,0,0-1.789-1.292c-4.373-.073-4.373-.109-4.372-4.552,0-2.986-.01-5.972.008-8.957.013-2.083.588-2.653,2.647-2.706a7.063,7.063,0,0,1,1.253.005c1.366.213,2-.348,2.391-1.69a27.333,27.333,0,0,1,1.965-4.6A1.485,1.485,0,0,0,48.769,60c-3.091-3.236-3.07-3.255.1-6.417,2.029-2.025,4.05-4.057,6.086-6.074,1.8-1.786,2.5-1.785,4.3.006.591.587,1.136,1.221,1.673,1.8M44.934,72.1v8.5c.733,0,1.322,0,1.911,0,2.671.019,2.7.135,3.536,2.775a39.967,39.967,0,0,0,2.24,5.64c1.737,3.517,1.8,3.484-.913,6.444-.15.164-.229.392-.171.289l5.924,6.078c.381-.471.832-1.024,1.279-1.581,1.18-1.471,2.39-1.434,4.061-.565a54.289,54.289,0,0,0,7.576,3.093c1.469.5,2.245,1.216,2.142,2.8-.053.816-.009,1.639-.009,2.538h8.434c0-.745,0-1.332,0-1.918.019-2.7.107-2.713,2.763-3.522a36.233,36.233,0,0,0,5.331-2.046c3.9-1.9,3.869-1.956,7.037.929.076.069.215.069-.142-.035l6.2-5.97c-.556-.472-1.2-1-1.828-1.555a2.385,2.385,0,0,1-.492-3.191c1.273-2.744,2.393-5.563,3.479-8.388a2.327,2.327,0,0,1,2.337-1.808c.981.005,1.961,0,2.929,0V72.245c-.749,0-1.388,0-2.027,0-2.51-.022-2.658-.226-3.427-2.69a31.54,31.54,0,0,0-2.141-5.487c-2.256-4.222-2.318-3.454.945-6.9.072-.076.076-.216.1-.3l-6.14-6.11a8.427,8.427,0,0,1-1,1.648c-1.8,1.865-2.05,1.754-4.307.65a54.087,54.087,0,0,0-7.26-2.946c-1.611-.515-2.513-1.219-2.362-2.985.064-.755.011-1.52.011-2.37H72.589c-.031.679-.071,1.206-.077,1.734-.032,2.892-.088,2.859-2.79,3.684a36.344,36.344,0,0,0-5.487,2.135c-3.665,1.811-3.633,1.871-6.745-.939A4.686,4.686,0,0,0,56.63,51c-.776.9-1.576,1.951-2.5,2.876-.955.958-2.03,1.8-3.107,2.734.761.8,1.157,1.239,1.57,1.655,1.9,1.915,1.878,2.113.616,4.455a20.143,20.143,0,0,0-2.2,4.874c-.746,3.3-1.91,5.72-6.078,4.5"
              transform="translate(-26.2 -26.089)"
              fill="#6ba53a"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M3.919,49.365c.134,10.853,3,19.792,8.628,27.867.774,1.111,1.407,1.532,2.876,1.032a8.088,8.088,0,0,1,9.624,3.915A8.194,8.194,0,0,1,23.281,92.3a8.376,8.376,0,0,1-10.43.472,8.084,8.084,0,0,1-2.633-9.9,2.282,2.282,0,0,0-.365-2.7C-12.51,50.076,5.269,6.528,42.276.661A51.209,51.209,0,0,1,59.549.809,4.134,4.134,0,0,1,61.8,2a1.959,1.959,0,0,1-.062,1.934,3.048,3.048,0,0,1-2.154.8c-2.734-.163-5.454-.71-8.185-.754A46.536,46.536,0,0,0,4.438,43.6c-.344,2.234-.411,4.511-.519,5.761m13.938,41.05a4.356,4.356,0,0,0,4.268-4.373A4.45,4.45,0,0,0,17.7,81.791,4.4,4.4,0,0,0,13.451,86.2a4.312,4.312,0,0,0,4.406,4.218"
              transform="translate(0 0)"
              fill="#6ba53a"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M120.339,112.2c-2.8-.3-5.591-.55-8.367-.9-2.442-.311-3.342-1.144-3.044-2.615.27-1.333,1.292-1.68,3.736-1.274a45.711,45.711,0,0,0,29.5-4.747,46.353,46.353,0,0,0,16.464-67.523c-.89-1.28-1.558-1.982-3.406-1.346a7.957,7.957,0,0,1-9.4-4.045,8.178,8.178,0,0,1,1.888-10.092A8.361,8.361,0,0,1,158,19.2a8.034,8.034,0,0,1,2.787,9.71,2.7,2.7,0,0,0,.442,3.165c22.141,29.941,4.235,73.578-32.512,79.239-2.764.426-5.566.6-8.373.893M153.188,21.6a4.363,4.363,0,0,0-4.4,4.24,4.446,4.446,0,0,0,4.289,4.384,4.4,4.4,0,0,0,4.382-4.273,4.307,4.307,0,0,0-4.271-4.351"
              transform="translate(-69.861 -11.324)"
              fill="#6ba53a"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M86.751,264.586c-.532-.709-1.362-1.357-1.524-2.143a1.677,1.677,0,0,1,1.743-2c1.22-.062,2.173.664,2,1.907-.107.788-.911,1.481-1.4,2.217l-.821.017"
              transform="translate(-54.663 -167.118)"
              fill="#6ba53a"
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M188.676,9.073c.514.718,1.31,1.378,1.475,2.169a1.659,1.659,0,0,1-1.75,1.984,1.732,1.732,0,0,1-2-1.938c.1-.784.949-1.472,1.462-2.2l.816-.012"
              transform="translate(-119.596 -5.822)"
              fill="#6ba53a"
            />
            <path
              id="Path_8"
              data-name="Path 8"
              d="M95.6,111.393a16.271,16.271,0,1,1,16.3,16.262,16.219,16.219,0,0,1-16.3-16.262m28.581-.064a12.31,12.31,0,1,0-12.185,12.38,12.272,12.272,0,0,0,12.185-12.38"
              transform="translate(-61.343 -61.066)"
              fill="#4e5f60"
            />
          </g>
        </svg>
      </div>
      <div className="business__meet__container__content__card__content">
        <div className="business__meet__container__content__card__content__heading">
          Machine
          <span>Learning</span>
        </div>
        <div className="business__meet__container__content__card__content__para">
          We transform bold business ideas into exceptional digital products.
          Searching for a partner that will take the process of software
          development off your hands? You’ve come to the right place.
        </div>
      </div>
    </div>
  );
}

function WeAcrossCard({ svg, title }) {
  return (
    <div className="work__across__container__content__card">
      <img
        src={svg}
        alt="workAcrossSvg"
        className="work__across__container__content__card__img"
      />
      <div className="work__across__container__content__card__heading">
        {title}
      </div>
    </div>
  );
}

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

export default function AboutUs() {
  return (
    <>
      <div className="aigron__project__main__container">
        <img
          src={aboutUsBg}
          alt="aboutUsBg"
          className="aigron__project__main__container__img"
        />
        <div className="aigron__project__main__container__overlay">
          <div className="aigron__project__main__container__content">
            <div className="aigron__project__main__container__content__heading">
              We are <span style={{ color: "#000" }}>Talented.</span> We are{" "}
              <span>Experienced. </span>
              We are <span style={{ color: "#000" }}>Bold.</span> <br />
              We are <span> Aigron!</span>
            </div>
            <div className="aigron__project__main__container__content__para">
              Get a behind-the-scenes glimpse of your new favourite software
              development company
            </div>
            <button className="aigron__project__main__container__content__btn">
              View More
            </button>
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
      <div className="more__than__software__house__container">
        <div className="more__than__software__house__container__content">
          <div className="more__than__software__house__container__left">
            <div className="more__than__software__house__container__left__heading">
              <span>More</span> than just a <br /> <span>software house</span>
            </div>
          </div>

          <div className="more__than__software__house__container__right">
            Aigron is a place where over 200 passionate professionals align your
            business goals with the latest tech solutions. We are young, daring,
            and we want to change the world. How? By pairing up our most
            brilliant talents with our most demanding clients. Meet the team
            behind the most customer-oriented software company you’ve ever
            worked with – and get on board!
          </div>
        </div>
      </div>
    </>
  );
}
