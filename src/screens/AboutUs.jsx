import React, { useState } from "react";
import aboutUsBg from "../assets/aboutUsBg.jpg";
import AigronRecruitmentBg from "../assets/AigronRecruitmentBg.jpg";
import workAcress from "../assets/workAcress.png";
import drivestoExcelPic from "../assets/drivestoExcelPic.png";
import TestimonialSection from "../components/TestimonialSection";
import partnerAward from "../assets/partnerAward.png";
import ProjectNav from "../components/ProjectNav";
import projectSvg from "../assets/projectSvg.png";
import projectPic1 from "../assets/projectPic1.png";
import projectPic2 from "../assets/projectPic2.png";

function IndustryPartnerCard() {
  return (
    <div className="we__partner__container__content__card">
      <div className="we__partner__container__content__card__img__wrapper">
        <img
          src={partnerAward}
          alt="partnerAward"
          className="we__partner__container__content__card__img"
        />
        <div className="we__partner__container__content__card__img__overlay">
          2018 Certified Agency
        </div>
      </div>
      <div className="we__partner__container__content__card__title">
        One of 50 Google-certified agencies
      </div>
    </div>
  );
}

function DriveExcelCard() {
  return (
    <div className="drive__us__to__excel__container__content__right__content__card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="78.039"
        height="62.626"
        viewBox="0 0 78.039 62.626"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_7136"
              data-name="Rectangle 7136"
              width="78.039"
              height="62.626"
              fill="#fcfcfc"
            />
          </clipPath>
        </defs>
        <g id="Group_11522" data-name="Group 11522" transform="translate(0)">
          <g
            id="Group_10461"
            data-name="Group 10461"
            transform="translate(0)"
            clip-path="url(#clip-path)"
          >
            <path
              id="Path_8514"
              data-name="Path 8514"
              d="M21.385,84.266c-1.661-1.721-3.049-3.4-4.685-4.789a5.563,5.563,0,0,1-2.171-5.4c.129-.928-.009-1.89.031-2.834a1.54,1.54,0,0,0-1.2-1.68,6.34,6.34,0,0,0-.621,1.583c-.1.935-.009,1.889-.028,2.834a11.361,11.361,0,0,1-.177,1.25c-1.923-1.92-3.684-3.7-5.476-5.453-.514-.5-1.113-1.449-1.879-.627-.707.759.259,1.271.732,1.775s.983.98,1.721,1.711c-1.056.207-1.879.347-2.692.535-.585.136-1.548-.134-1.466.9s.988.665,1.589.668A27.152,27.152,0,0,0,8.21,74.6a2.554,2.554,0,0,1,2.24.829c1.32,1.291,2.723,2.5,4.091,3.739l-.259.449a8.925,8.925,0,0,1-.937.105c-1.121.012-2.242-.01-3.363.008-.544.009-1.218-.09-1.246.748-.03.922.717.824,1.277.834,1.786.031,3.573,0,5.359.023a1.668,1.668,0,0,1,1.066.273c1.237,1.256,2.412,2.574,3.636,3.9-.19.044-.508.125-.831.189a22.344,22.344,0,0,1-8.981-.211C5.713,84.53,2.3,82.071,1.009,77.3a21.993,21.993,0,0,1-.7-10.05A7.12,7.12,0,0,0,.4,66.519c.178-2,.184-2.082,2.155-2.139a62.084,62.084,0,0,1,7.752.031c4.146.4,7.655,2.088,9.746,5.959a17.88,17.88,0,0,1,1.82,8.424c.023,1.468-.093,2.939-.17,4.407a5.952,5.952,0,0,1-.322,1.065"
              transform="translate(0 -50.76)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8515"
              data-name="Path 8515"
              d="M139.658,153.213c1.969,1.226,3.887,2.545,5.92,3.652a10.164,10.164,0,0,1,4.081,4.743,13.224,13.224,0,0,1,.747,2.054c.256.821-.092,1.157-.937,1.152-2.2-.011-4.408.027-6.613.029q-9.5.008-19,0c-.28,0-.56,0-.839-.024-.722-.062-.951-.389-.724-1.127a12.61,12.61,0,0,1,6.665-7.919c1.288-.647,2.4-1.632,3.638-2.4a1.425,1.425,0,0,1,1.148-.133,6.024,6.024,0,0,0,5.441-.1,2.31,2.31,0,0,1,.4-.141.783.783,0,0,1,.2,0Z"
              transform="translate(-96.518 -120.837)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8516"
              data-name="Path 8516"
              d="M282.616,96.782c.035-1.752.308-3.253,2.1-4.056a4.359,4.359,0,0,1,3.253-.053,12.814,12.814,0,0,0,3.83.882,14.416,14.416,0,0,0,4.242-.916c1.5-.5,3.487-.353,4.3.933a5.759,5.759,0,0,1,.878,3.413,18.4,18.4,0,0,1-3.577,9.129,2.982,2.982,0,0,1-3.336,1.243,16.551,16.551,0,0,0-4.977.084,2.6,2.6,0,0,1-2.541-.79,16.37,16.37,0,0,1-3.355-6.437c-.314-1.133-.548-2.288-.819-3.433"
              transform="translate(-223.203 -72.954)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8517"
              data-name="Path 8517"
              d="M146.563,87.029c.938-.068,1.733-.065,2.506-.193a25.145,25.145,0,0,0,9.361-3.458,1.633,1.633,0,0,1,1.356.232c.786.5,1.423,1.249,2.229,1.7a3.771,3.771,0,0,0,1.969.425c.809-.045,1.065.275.94.951-.241,1.3-.478,2.585-1.918,3.266-.489.231-.753.951-1.1,1.461a39.688,39.688,0,0,1-2.89,4.192,4.348,4.348,0,0,1-6.94-.036,52.852,52.852,0,0,1-3.174-4.742,4.293,4.293,0,0,0-1.2-1.095,2.437,2.437,0,0,1-1.141-2.7"
              transform="translate(-115.672 -65.789)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8518"
              data-name="Path 8518"
              d="M166.105,48.023c0,.21.01.421,0,.63-.056,1-.521,1.3-1.35.706a10.953,10.953,0,0,1-2.308-2.108c-.709-.913-1.241-.689-2-.144a20.287,20.287,0,0,1-9.548,3.685c-1.313.156-1.656-.116-1.572-1.4.286-4.39,2.207-7.881,6.712-9.4a6.389,6.389,0,0,1,5.673,1.084c1.054.7,2.33,1.066,3.029,2.277a9.7,9.7,0,0,1,1.369,4.665"
              transform="translate(-117.921 -31.368)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8519"
              data-name="Path 8519"
              d="M80.8,14.092c-2.029-1-1.845-.925-.679-2.591a25.982,25.982,0,0,1,9.859-8.551A54.189,54.189,0,0,1,96.342.658c2.613-.9,5.321-.608,8.007-.624a22.571,22.571,0,0,1,8.224,1.808,26.043,26.043,0,0,1,12.441,9.833,57.209,57.209,0,0,1,2.839,4.986c.289.529.179.881-.558.772a2.47,2.47,0,0,1-2.039-1.5A25.661,25.661,0,0,0,112.985,4.1,24.4,24.4,0,0,0,98.638,2.168,25.106,25.106,0,0,0,80.8,14.092"
              transform="translate(-62.591 0)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8520"
              data-name="Path 8520"
              d="M140.926,239.541c0-1.714-.012-3.429.006-5.143.014-1.335.3-1.6,1.605-1.6.77,0,1.541.032,2.308-.009a1.175,1.175,0,0,1,1.394,1.307q.034,5.51,0,11.02a1.2,1.2,0,0,1-1.449,1.352c-.766-.052-1.539,0-2.308-.011-1.224-.012-1.534-.305-1.549-1.563-.021-1.784-.005-3.568,0-5.352"
              transform="translate(-111.294 -183.848)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8521"
              data-name="Path 8521"
              d="M213.068,239.6c0-1.854.024-3.709-.012-5.562-.016-.843.3-1.228,1.155-1.2.979.032,1.959,0,2.938.019a.961.961,0,0,1,1.08,1.1q-.02,5.719,0,11.439a.974.974,0,0,1-1.1,1.091c-.979.015-1.959-.01-2.938.011-.789.017-1.138-.316-1.126-1.126.028-1.924.009-3.848.008-5.772"
              transform="translate(-168.265 -183.888)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8522"
              data-name="Path 8522"
              d="M243.976,245.258c0-1.4-.013-2.8,0-4.2.011-1.063.363-1.376,1.5-1.4,1.529-.033,1.872.152,1.888,1.3q.062,4.41,0,8.82c-.013,1.057-.437,1.3-1.836,1.26-1.147-.033-1.543-.365-1.554-1.365-.016-1.47,0-2.94-.006-4.41"
              transform="translate(-192.681 -189.272)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8523"
              data-name="Path 8523"
              d="M121.672,245.414c0,1.4.018,2.794-.006,4.191-.02,1.16-.371,1.442-1.677,1.437s-1.671-.3-1.675-1.436q-.015-4.244,0-8.487c0-1.188.309-1.447,1.632-1.455,1.442-.009,1.709.2,1.728,1.454.022,1.432.005,2.864.005,4.3Z"
              transform="translate(-93.434 -189.28)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8524"
              data-name="Path 8524"
              d="M260.042,185.774a25.028,25.028,0,0,0,6.517-6.817c.833-1.321,1.536-2.726,2.253-4.116.475-.92,1.162-.224,1.745-.3.035.373.216.812.083,1.11a28.526,28.526,0,0,1-7.463,10.208c-1.48,1.271-1.467,1.287-3.136-.082"
              transform="translate(-205.374 -137.704)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8525"
              data-name="Path 8525"
              d="M79.744,188.381a3.576,3.576,0,0,1-.992.628,1.591,1.591,0,0,1-1.21-.1,26.428,26.428,0,0,1-7.533-9.485c-.044-.095-.081-.193-.127-.287-.235-.477-.973-.973-.188-1.474.69-.44,1.655.069,2.1.825a36.574,36.574,0,0,0,2.978,4.757c1.487,1.813,3.259,3.393,4.973,5.141"
              transform="translate(-54.763 -140.181)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8526"
              data-name="Path 8526"
              d="M323.322,64.755c-.263-2.409,1.576-4.086,3.962-4.353.74-.083,1.2.184,1.274,1.006.152,1.8.121,3.557-1.659,4.624a7.374,7.374,0,0,1-2.228.84,1.034,1.034,0,0,1-1.345-1.069c-.022-.348,0-.7,0-1.048"
              transform="translate(-255.331 -47.693)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8527"
              data-name="Path 8527"
              d="M174.7,260.982c.977,0,1.955.028,2.93-.01.672-.026.9.291.8.887-.094.574.338,1.484-.762,1.5q-3.086.047-6.174-.011c-1.1-.021-.656-.93-.757-1.5-.111-.629.186-.881.822-.863,1.045.03,2.093.008,3.139.008v-.01"
              transform="translate(-134.824 -206.108)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8528"
              data-name="Path 8528"
              d="M263.828,262.025l.923-.983c.328.393.917.789.913,1.178s-.589.792-.92,1.187l-.916-1.382"
              transform="translate(-208.364 -206.164)"
              fill="#fcfcfc"
            />
            <path
              id="Path_8529"
              data-name="Path 8529"
              d="M108.093,262.085l-.771,1.378c-.312-.4-.838-.78-.87-1.2-.026-.35.527-.743.824-1.117l.817.938"
              transform="translate(-84.072 -206.247)"
              fill="#fcfcfc"
            />
          </g>
        </g>
      </svg>
      <div className="drive__us__to__excel__container__content__right__content__card__heading">
        Transparency
      </div>
      <div className="drive__us__to__excel__container__content__right__content__card__para">
        We’re changing the way you travel in Pakistan. While short-term rentals
        are on a rise in the country, they are often. Our properties come with
        on-site concierge and consistent amenities – allowing you to en. We’re
        changing the way you travel in Pakistan. While short-term rentals are on
        a rise in the country, they are often.{" "}
      </div>
    </div>
  );
}

export default function AboutUs() {
  const [select, setSelect] = useState("All");
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
      <div className="drive__us__to__excel__container">
        <div className="drive__us__to__excel__container__wrapper">
          <div className="drive__us__to__excel__container__heading">
            We believe in what we do and that drives us to excel
          </div>
          <div className="drive__us__to__excel__container__content">
            <img
              src={drivestoExcelPic}
              alt="drivestoExcelPic"
              className="drive__us__to__excel__container__content__img"
            />
            <div className="drive__us__to__excel__container__content__right">
              <div className="drive__us__to__excel__container__content__right__content">
                <DriveExcelCard />
                <DriveExcelCard />
                <DriveExcelCard />
                <DriveExcelCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work__across__container">
        <div className="work__across__container__left">
          <div className="work__across__container__left__img__wrapper">
            <img
              src={workAcress}
              alt="workAcress"
              className="work__across__container__left__img"
            />
          </div>
          <div className="we__partner__container__left__img__wrapper__overlay">
            <div className="work__across__container__left__img__wrapper__overlay__heading">
              <span> We partner</span> up with the <br />
              <span> Industry Leaders</span>
            </div>
            <div className="we__partner__container__left__img__wrapper__overlay__para">
              We transform bold business ideas into exceptional digital
              products. Searching for a partner that will take the process of
              software development off your hands? You’ve come to the right
              place. We ideate, design, and develop data-driven digital products
              made to answer business challenges. We offer 360° services to
              smoothly guide you on your way to creating a seamless digital
              masterpiece.
            </div>
          </div>
        </div>
        <div className="we__partner__container__content">
          <IndustryPartnerCard />
          <IndustryPartnerCard />
          <IndustryPartnerCard />
        </div>
      </div>
      <TestimonialSection />
      <div className="projects__container">
        <div className="projects__container__content">
          <div className="projects__container__sub__heading">Projects</div>
          <div className="projects__container__heading">
            We are changing the world <br /> – the tech way
          </div>
          <div className="projects__container__content__btn__wrapper">
            <ProjectNav title="All" select={select} setSelect={setSelect} />
            <ProjectNav title="UI/UX" select={select} setSelect={setSelect} />
            <ProjectNav title="Web" select={select} setSelect={setSelect} />
            <ProjectNav title="Mobile" select={select} setSelect={setSelect} />
            <ProjectNav
              title="Graphic "
              select={select}
              setSelect={setSelect}
            />
          </div>
          <div className="projects__container__content__projects__wrapper">
            <div className="projects__container__content__projects__wrapper__card">
              <div className="projects__container__content__projects__wrapper__card__header">
                <div className="projects__container__content__projects__wrapper__card__heading">
                  Project
                  <span>Name here</span>
                </div>
                <img
                  src={projectSvg}
                  alt="projectSvg"
                  className="projects__container__content__projects__wrapper__card__svg"
                />
              </div>
              <div className="projects__container__content__projects__wrapper__card__para">
                We’re changing the way you travel in Pakistan. While short-term
                rentals are on a rise in the country, they are often. Our
                properties come with on-site concierge and consistent amenities
                – allowing you to en.
              </div>
            </div>
            <div className="projects__container__content__projects__wrapper__img__card">
              <img
                src={projectPic1}
                alt="projectPic"
                className="projects__container__content__projects__wrapper__img"
              />
            </div>
            <div className="projects__container__content__projects__wrapper__img__card">
              <img
                src={projectPic2}
                alt="projectPic"
                className="projects__container__content__projects__wrapper__img"
              />
            </div>
          </div>
          <div
            style={{ marginBottom: 30 }}
            className="trending__job__container__view__all__footer"
          >
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
        </div>
      </div>
    </>
  );
}
