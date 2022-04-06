import React from "react";
import contactBg from "../assets/contactBg.jpg";
import qoutePic from "../assets/qoutePic.jpg";
import contactPic from "../assets/contactPic.jpg";

export default function Contact() {
  return (
    <>
      <div className="blog__container">
        <img src={contactBg} alt="contactBg" className="blog__container__img" />
        <div className="blog__container__overlay">
          <div className="blog__container__overlay__headings">Contact Us</div>
        </div>
      </div>
      <div className="contact__container__content">
        <div className="contact__container__content__left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212644.8169178187!2d72.94602471059605!3d33.61632322087408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1649233800651!5m2!1sen!2s"
            className="contact__container__content__map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact__container__content__right">
          <img
            src={contactPic}
            alt="contactPic"
            className="get__quote__container__right__img"
          />
          <div className="contact__container__content__right__overlay">
            <div className="contact__container__content__right__overlay__left">
              <div className="get__quote__container__right__overlay__left__heading">
                Feel Free to Communicate
              </div>
              <input
                placeholder="Project Name"
                type="text"
                className="contact__inputs"
              />
              <input
                placeholder="Domains"
                type="text"
                className="contact__inputs"
              />
              <input
                placeholder="Phone"
                type="tel"
                className="contact__inputs"
              />
              <input
                placeholder="Email"
                type="email"
                className="contact__inputs"
              />
              <textarea
                placeholder="Project Details"
                cols={6}
                rows={6}
                type="text"
                className="contact__inputs"
              />
              <div className="contact__btn__container">
                <button className="contact__btn">Submit</button>
              </div>
            </div>
            <div className="contact__container__content__right__overlay__right">
              " We make sure that you get the best services in competitive
              budget"
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
