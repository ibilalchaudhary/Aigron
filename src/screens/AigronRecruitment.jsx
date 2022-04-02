import React, { useState } from "react";
import Header from "../components/Header";

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
      <Header />
      <div className="aigron__recuitment__main__container">
        <div className="aigron__recuitment__main__container__content">
          <div className="aigron__recuitment__main__container__content__heading">
            Get the <span>Best Job You Deserve!</span>
          </div>

          <button
            onClick={() => {
              setIsSearch(true);
            }}
            className="aigron__recuitment__main__container__content__input__wrapper"
          >
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
          </button>
          {isSearch ? (
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
          ) : null}
        </div>
      </div>
    </>
  );
}
