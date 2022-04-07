import React, { useState } from "react";
import searchJob from "../assets/searchJob.jpg";
import JobCard from "../components/JobCard";

function FilterBtn({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "search__result__container__select__box___btn search__result__container__select__box___btn__select"
          : "search__result__container__select__box___btn"
      }
    >
      {title}
    </button>
  );
}

function RangeInput() {
  const [value, onChange] = useState(1);
  return (
    <div className="search__result__container__vacancies-filter-panel-input-range">
      <input
        type="range"
        className="search__result__container__vacancies-filter-panel-input-range-input"
        min="1"
        max="30"
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
      />
      <div className="search__result__container__vacancies-filter-panel-input-range-buble">
        {value} km
      </div>
    </div>
  );
}

export default function SearchJob() {
  const [isDistance, setIsDistance] = useState(false);
  const [select, setSelect] = useState("Specialisms");

  const DistanceEntry = [
    {
      title: "140 km",
    },
    {
      title: "200 km",
    },
    {
      title: "280 km",
    },
  ];
  return (
    <>
      <div className="search__job__container">
        <img
          src={searchJob}
          alt="searchJob"
          className="search__job__container__img"
        />
        <div className="search__job__container__overlay">
          <div className="search__job__container__content">
            <div className="search__job__container__content__search__wrapper">
              <input
                type="text"
                placeholder="Enter job here"
                className="search__job__container__content__search__input"
              />
              <input
                type="text"
                placeholder="Zip code or place"
                className="search__job__container__content__search__input"
              />
              <button
                onClick={() => {
                  isDistance ? setIsDistance(false) : setIsDistance(true);
                }}
                className="search__job__container__content__search__select"
              >
                20 km
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                {isDistance ? (
                  <div className="search__job__container__content__search__select__entry__wrapper">
                    {DistanceEntry.map((item) => (
                      <button
                        onClick={() => {
                          setIsDistance(false);
                        }}
                        className="search__job__container__content__search__select__entry"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                ) : null}
              </button>
              <button className="search__job__container__content__btn">
                <svg
                  id="Search"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                >
                  <rect
                    id="Rectangle_693"
                    data-name="Rectangle 693"
                    width="27"
                    height="27"
                    fill="none"
                  />
                  <path
                    id="Path_208"
                    data-name="Path 208"
                    d="M26.9,24.531l-5.583-5.583a11.584,11.584,0,0,0,2.369-7.106A11.77,11.77,0,0,0,11.843,0,11.77,11.77,0,0,0,0,11.843,11.77,11.77,0,0,0,11.843,23.686a11.584,11.584,0,0,0,7.106-2.369L24.531,26.9ZM3.384,11.843a8.377,8.377,0,0,1,8.459-8.459A8.377,8.377,0,0,1,20.3,11.843,8.377,8.377,0,0,1,11.843,20.3,8.377,8.377,0,0,1,3.384,11.843Z"
                    fill="#fbfbfb"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="search__job__container__searches__content">
        <form className="search__result__container__vacancies-filter-panel">
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-heading">
              Filter
            </div>
            <button
              type="reset"
              className="search__result__container__vacancies-filter-panel-heading-row-btn"
            >
              Remove all
            </button>
          </div>
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-sub-heading">
              Distance
            </div>
          </div>
          <div className="search__result__container__vacancies-filter-panel-row">
            <input
              type="text"
              placeholder="Zip code or place"
              className="search__result__container__vacancies-filter-panel-input"
            />
          </div>
          <div className="search__result__container__vacancies-filter-panel-row">
            <RangeInput />
          </div>
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-info">
              Max 30 Kilometres
            </div>
          </div>
          <div className="search__result__container__select__box">
            <FilterBtn
              title="Specialisms"
              select={select}
              setSelect={setSelect}
            />
            <FilterBtn
              title="Education"
              select={select}
              setSelect={setSelect}
            />
            <FilterBtn
              title="Training direction"
              select={select}
              setSelect={setSelect}
            />
            <FilterBtn
              title="Education"
              select={select}
              setSelect={setSelect}
            />
          </div>
          <div className="search__result__container__vacancies-filter-panel-catagory">
            <div className="search__result__container__vacancies-filter-panel-catagory-container">
              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-6"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-6">
                (Field) Service Engineers
              </label>
              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-7"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-7">
                (Field) Service Engineers
              </label>
              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-8"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-8">
                (Field) Service Engineers
              </label>

              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-10"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-10">
                (Field) Service Engineers
              </label>
            </div>
          </div>
        </form>
        <div className="search__job__container__searches__content__right">
          <div className="search__job__container__searches__content__right__top">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <div className="search__job__container__searches__content__right__bottom">
            <button className="search__job__container__searches__content__right__btn">
              Load More
            </button>
          </div>
        </div>
      </div>
      <div className="search__job__section">
        <div className="search__job__section__content">
          <div className="search__job__section__content__heading">
            Lorem Ipsum is simply dummy text
          </div>
          <div className="search__job__section__content__para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially.
          </div>
          <button className="aigron__project__main__container__content__btn">
            View More
          </button>
        </div>
      </div>
    </>
  );
}
