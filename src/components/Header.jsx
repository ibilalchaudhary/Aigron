import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setIsHeaderOpen(true);
    } else {
      setIsHeaderOpen(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        setIsHeaderOpen(true);
      } else {
        setIsHeaderOpen(false);
      }
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link
          to="/"
          onClick={() => {
            document.getElementById("home").checked = true;
          }}
        >
          <img src={logo} className="brand__logo" />
        </Link>
        <button
          className="header__mobile__btn"
          onClick={() => {
            isHeaderOpen ? setIsHeaderOpen(false) : setIsHeaderOpen(true);
          }}
        >
          {isHeaderOpen ? (
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
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
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
              class="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        {isHeaderOpen ? (
          <div className="nav">
            <div className="nav__link">
              <input
                type="radio"
                id="home"
                className="nav__link__input"
                name="nav__link__input"
                onClick={() => {
                  navigate("/aigron_projects");
                }}
              />
              <div className="nav__link__content">Aigron Projects</div>
            </div>
            <div className="nav__link">
              <input
                type="radio"
                id="about"
                className="nav__link__input"
                name="nav__link__input"
                onClick={() => {
                  navigate("/about_us");
                }}
              />
              <div className="nav__link__content">About Us</div>
            </div>
            <div className="nav__link">
              <input
                type="radio"
                id="about"
                className="nav__link__input"
                name="nav__link__input"
                onClick={() => {
                  navigate("/contact");
                }}
              />
              <div className="nav__link__content">Contact</div>
            </div>
            <div className="nav__link">
              <input
                type="radio"
                id="about"
                className="nav__link__input"
                name="nav__link__input"
                onClick={() => {
                  navigate("/blog");
                }}
              />
              <div className="nav__link__content">Blogs</div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
