import React, { useState } from "react";
import testimonialBg from "../assets/testimonialBg.jpg";
import clientPic from "../assets/clientPic.png";

function TestimonialBtn({ selected, setSelected, id }) {
  return (
    <div className="testimonial__container__content__btn__wrapper">
      <button
        onClick={() => {
          setSelected(id);
        }}
        id={id}
        className="testimonial__container__content__btn"
      >
        <img
          src={clientPic}
          alt="clientPic"
          className="testimonial__container__content__btn__img"
        />
      </button>
    </div>
  );
}

export default function TestimonialSection() {
  const [selected, setSelected] = useState("1");
  return (
    <>
      <div className="testimonial__container">
        <div className="testimonial__container__colored">Testimonial</div>
        <div className="testimonial__container__heading">
          What Our Customer Say
        </div>
        <div className="testimonial__container__para">
          We’re changing the way you travel in Pakistan. While short-term
          rentals are on a rise in the country, they are often. Our properties
          come with on-site concierge and consistent amenities – allowing you to
          enj
        </div>
      </div>
      <div className="testimonial__container__content">
        <img
          src={testimonialBg}
          alt="testimonialBg"
          className="testimonial__container__img"
        />
        <div className="testimonial__container__content__overlay">
          <div className="testimonial__container__content__overlay__content">
            <TestimonialBtn
              selected={selected}
              setSelected={setSelected}
              id="1"
            />
            <TestimonialBtn
              selected={selected}
              setSelected={setSelected}
              id="2"
            />
            <TestimonialBtn
              selected={selected}
              setSelected={setSelected}
              id="3"
            />
            <TestimonialBtn
              selected={selected}
              setSelected={setSelected}
              id="4"
            />
            <TestimonialBtn
              selected={selected}
              setSelected={setSelected}
              id="5"
            />
            <TestimonialBtn
              selected={selected}
              setSelected={setSelected}
              id="6"
            />
          </div>
          {selected === "1" ? (
            <>
              <div className="testimonial__container__content__para">
                We’re changing the way you travel in Pakistan. While short-term
                rentals are on a rise in the country, they are often. <br /> Our
                properties come with on-site
              </div>
              <div className="testimonial__container__colored">Fahad Ayyaz</div>
              <div className="testimonial__container__content__para__bold">
                Customer
              </div>
            </>
          ) : null}
          {selected === "2" ? (
            <>
              <div className="testimonial__container__content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                cumque doloribus harum sunt nesciunt nostrum sed ex, nihil illum
                necessitatibus minus velit, neque, numquam facilis ipsam error
                sint perferendis veritatis magni et autem. Quod iusto veritatis
                nobis incidunt necessitatibus a?
              </div>
              <div className="testimonial__container__colored">John Doe</div>
              <div className="testimonial__container__content__para__bold">
                Customer
              </div>
            </>
          ) : null}
          {selected === "3" ? (
            <>
              <div className="testimonial__container__content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                corporis cumque voluptatibus maxime quo possimus numquam enim
                ipsa reprehenderit cum soluta deleniti reiciendis officia
                sapiente quidem. Alias adipisci unde corporis?
              </div>
              <div className="testimonial__container__colored">
                Elina Spahli
              </div>
              <div className="testimonial__container__content__para__bold">
                Customer
              </div>
            </>
          ) : null}
          {selected === "4" ? (
            <>
              <div className="testimonial__container__content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                minus earum distinctio eos temporibus commodi eaque placeat,
                debitis dolor tenetur laboriosam magnam consequatur quibusdam
                esse ullam soluta velit! Corrupti placeat magnam,
              </div>
              <div className="testimonial__container__colored">Devid Visa</div>
              <div className="testimonial__container__content__para__bold">
                Client
              </div>
            </>
          ) : null}
          {selected === "5" ? (
            <>
              <div className="testimonial__container__content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                aperiam aliquid eius dignissimos pariatur mollitia recusandae in
                et velit a, deleniti cumque magnam nesciunt? Maiores, obcaecati?
                Velit sint dolor at labore magni ab dolore autem maiores, veniam
                dolorum tenetur minima!
              </div>
              <div className="testimonial__container__colored">
                Whole Micheal
              </div>
              <div className="testimonial__container__content__para__bold">
                Customer
              </div>
            </>
          ) : null}
          {selected === "6" ? (
            <>
              <div className="testimonial__container__content__para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                nemo nihil odit autem eligendi doloremque, neque dolores ipsum
                iusto, incidunt quidem illo nam qui facere praesentium sed atque
                voluptatum perferendis.
              </div>
              <div className="testimonial__container__colored">John Doe</div>
              <div className="testimonial__container__content__para__bold">
                Client
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
