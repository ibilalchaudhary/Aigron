import React, { useState } from "react";
import TrendingJobCard from "../components/TrendingJobCard";
import softwareSvg from "../assets/trendingJobSvgs/softwareSvg.svg";
import softwareSvgHover from "../assets/trendingJobSvgs/softwareSvgHover.svg";
import machineSvg from "../assets/trendingJobSvgs/machineSvg.svg";
import machineSvgHover from "../assets/trendingJobSvgs/machineSvgHover.svg";
import eComSvg from "../assets/trendingJobSvgs/eComSvg.svg";
import eComSvgHover from "../assets/trendingJobSvgs/eComSvgHover.svg";
import UiSvg from "../assets/trendingJobSvgs/UiSvg.svg";
import UiSvgHover from "../assets/trendingJobSvgs/UiSvgHover.svg";
import { Link } from "react-router-dom";
import dataAnalysicsBg from "../assets/dataAnalysicsBg.jpg";
import globalLeaderPic from "../assets/globalLeaderPic.jpg";
import dataScienceBg from "../assets/dataScienceBg.jpg";

export default function AigronRecruitment() {
  const [isSearch, setIsSearch] = useState(false);
  const recentSearches = [
    {
      title: "Full-Service Software Development Company",
    },
    {
      title: "Full-Stack Development",
    },
    {
      title: "Software Development Company",
    },
  ];
  return (
    <>
      <div className="aigron__recuitment__main__container">
        <div className="aigron__recuitment__main__container__content">
          <div className="aigron__recuitment__main__container__content__heading">
            Get the <span>Best Job You Deserve!</span>
          </div>

          <div className="aigron__recuitment__main__container__content__input__wrapper">
            <input
              type="text"
              placeholder="It is upto you to choose from 234344 Jobs"
              className="aigron__recuitment__main__container__content__input"
            />
            <button className="aigron__recuitment__main__container__content__input__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.621"
                height="30.621"
                viewBox="0 0 30.621 30.621"
              >
                <g
                  id="Icon_feather-search"
                  data-name="Icon feather-search"
                  transform="translate(-3 -3)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M28.5,16.5a12,12,0,1,1-12-12A12,12,0,0,1,28.5,16.5Z"
                    fill="none"
                    stroke="#04133b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M31.5,31.5l-6.525-6.525"
                    fill="none"
                    stroke="#04133b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </button>
          </div>
          {/* {isSearch ? (
            <div className="aigron__recuitment__main__container__content__input__model">
              {recentSearches.map((item) => (
                <button
                  onClick={() => {
                    setIsSearch(false);
                  }}
                  className="aigron__recuitment__main__container__content__input__model__entry"
                >
                  {item.title}
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="980.000000pt"
                    height="884.000000pt"
                    viewBox="0 0 980.000000 884.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,884.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M5025 8829 c-374 -21 -867 -137 -1275 -301 -290 -117 -536 -248 -815
-433 -886 -590 -1523 -1468 -1813 -2500 -25 -87 -112 -461 -112 -479 0 -2
-204 -6 -452 -8 -428 -3 -455 -4 -493 -23 -22 -11 -46 -32 -54 -47 -15 -26
-13 -29 64 -130 207 -270 772 -967 1003 -1237 116 -134 150 -161 209 -161 46
1 105 34 153 86 147 158 1070 1353 1082 1401 8 31 -12 64 -52 87 -33 20 -53
21 -385 24 -198 1 -366 7 -387 13 -56 15 -57 35 -8 226 236 929 807 1727 1615
2258 377 248 733 403 1175 514 306 77 520 101 900 101 377 0 599 -24 891 -96
1116 -274 2042 -1021 2540 -2049 192 -396 305 -787 359 -1235 18 -155 24 -549
10 -716 -57 -696 -295 -1355 -682 -1896 -594 -830 -1482 -1392 -2470 -1563
-238 -41 -349 -49 -628 -49 -349 0 -593 29 -927 109 -575 138 -1135 428 -1593
825 -272 236 -321 266 -429 258 -36 -3 -81 -13 -100 -23 -56 -28 -132 -106
-157 -160 -32 -67 -33 -170 -3 -232 37 -77 265 -300 474 -464 585 -461 1350
-781 2135 -893 154 -23 539 -39 745 -31 357 12 565 40 871 115 1673 412 2937
1715 3298 3400 46 219 63 341 76 545 29 483 -1 927 -86 1299 -308 1346 -1159
2423 -2389 3026 -380 186 -689 294 -1049 365 -353 69 -827 98 -1241 74z"
                      />
                      <path
                        d="M5265 7286 c-55 -26 -137 -105 -157 -151 -10 -24 -14 -291 -16 -1352
-2 -753 1 -1361 6 -1413 8 -79 14 -96 39 -128 43 -53 95 -92 139 -104 26 -7
444 -12 1267 -15 l1227 -5 51 41 c105 84 145 165 137 280 -8 112 -67 201 -168
253 -44 22 -52 23 -445 30 -220 3 -682 7 -1027 7 l-628 1 -1 678 c-1 895 -14
1676 -28 1724 -16 49 -115 141 -177 162 -71 24 -159 21 -219 -8z"
                      />
                    </g>
                  </svg>
                </button>
              ))}
            </div>
          ) : null} */}
        </div>
      </div>
      <div className="trending__job__container">
        <div className="trending__job__container__heading">
          Trending <span>Jobs</span>
        </div>
        <div className="trending__job__container__content">
          <TrendingJobCard
            title="Software"
            span="Development"
            img={softwareSvg}
            imgHover={softwareSvgHover}
          />
          <TrendingJobCard
            title="Machine"
            span="Learning"
            img={machineSvg}
            imgHover={machineSvgHover}
          />
          <TrendingJobCard
            title="E-Commerce"
            span="Website"
            img={eComSvg}
            imgHover={eComSvgHover}
          />
          <TrendingJobCard
            title="Ui/Ux"
            span="Designing"
            img={UiSvg}
            imgHover={UiSvgHover}
          />
        </div>
        <div className="trending__job__container__view__all__footer">
          <Link to="/" className="trending__job__container__view__all">
            View All{" "}
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
      <div className="data__analytics__container">
        <img
          src={dataAnalysicsBg}
          alt="dataAnalysicsBg"
          className="data__analytics__container__img"
        />
        <div className="data__analytics__container__content">
          <div className="data__analytics__container__content__heading">
            DATA & ANALYTICS <br />
            <span>
              RECRUITMENT <br /> SOLUTIONS!
            </span>
          </div>
        </div>
      </div>
      <div className="global__leader__container">
        <div className="global__leader__container__content">
          <div className="global__leader__container__content__heading">
            THE GLOBAL LEADER IN
            <br />
            <span>
              RECRUITMENT <br /> SOLUTIONS!
            </span>
          </div>
          <div className="global__leader__container__content__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque,
            ducimus a expedita magni, pariatur, dolorum praesentium aliquid unde
            explicabo sapiente? Expedita a quas ad ipsa fugiat sunt harum ea
            facilis vero alias doloribus iure, delectus ut quae rerum enim
            laborum sapiente ipsum quia saepe odio assumenda illum nisi!
            Possimus?
          </div>
        </div>
        <img
          src={globalLeaderPic}
          alt="globalLeaderPic"
          className="global__leader__container__img"
        />
      </div>
      <div className="employee__candidate__container">
        <div className="employee__candidate__container__content__wrapper">
          <div className="employee__candidate__container__content">
            <div className="employee__candidate__container__content__card">
              <div className="employee__candidate__container__content__card__heading">
                Employee
              </div>
              <div className="employee__candidate__container__content__card__para">
                Are you looking for new professionals?
              </div>
              <button className="employee__candidate__container__content__card__btn">
                View More
              </button>
            </div>
          </div>
          <div className="employee__candidate__container__content">
            <div className="employee__candidate__container__content__card employee__candidate__container__content__card__candidate">
              <div className="employee__candidate__container__content__card__heading employee__candidate__container__content__card___heading__candidate">
                Candidate
              </div>
              <div className="employee__candidate__container__content__card__para employee__candidate__container__content__card___heading__candidate">
                Are you looking for a new job?
              </div>
              <button className="employee__candidate__container__content__card__btn__candidate">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="data__science__container">
        <img
          src={dataScienceBg}
          alt="dataScienceBg"
          className="data__science__container__img"
        />
        <div className="data__science__container__overlay">
          <div className="data__science__container__overlay__content">
            <div className="data__science__container__overlay__content__heading">
              Data Science <br /> <span>Staffing and Recruitment</span>
            </div>
            <div className="data__science__container__overlay__content__para">
              Hire expert data scientist, engineers, and analysts.
            </div>
            <button className="data__science__container__overlay__content__btn">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
