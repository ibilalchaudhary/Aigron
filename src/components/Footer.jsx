import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import footerBg from "../assets/footerBg.jpg";

export default function Footer() {
  return (
    <>
      <div className="footer__line"></div>
      <div className="footer__main__container">
        <img
          src={footerBg}
          alt="footerBg"
          className="footer__main__container__img"
        />
        <div className="footer__main__container__content__wrapper">
          <div className="footer__main__container__content">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="footer__main__container__entry__wrapper__left"
            >
              <img src={logo} alt="logo" className="footer__logo" />
              <div className="footer__main__container__entry__wrapper__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate magni ratione eaque numquam illum provident,
                perspiciatis doloribus impedit error fugiat, rerum sapiente.
              </div>
            </Link>
            <div className="footer__main__container__entry__wrapper">
              <div className="footer__main__container__entry__wrapper__heading">
                Contact
              </div>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                Address here
              </Link>
              <Link
                to="/admissions"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                contact@Aigron.com
              </Link>
              <Link
                to="/admissions"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                0554 6768865
              </Link>
            </div>
            <div className="footer__main__container__entry__wrapper">
              <div className="footer__main__container__entry__wrapper__heading">
                Socials
              </div>
              <Link
                to="/faq"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                FAQ
              </Link>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                Facebook
              </Link>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                Twitter
              </Link>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                Instagram
              </Link>
            </div>
            <div className="footer__main__container__entry__wrapper">
              <div className="footer__main__container__entry__wrapper__heading">
                Pages
              </div>
              <Link
                to="/faq"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                About Us
              </Link>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                Projects
              </Link>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="footer__main__container__entry__wrapper__entry"
              >
                Services
              </Link>
            </div>
            <div className="footer__main__container__entry__wrapper">
              <div className="footer__main__container__entry__wrapper__heading">
                Subscribe to Newsletter
              </div>
              <div className="footer__main__container__entry__input__wrapper">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="footer__main__container__entry__input"
                />
                <button className="footer__main__container__entry__input__btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
