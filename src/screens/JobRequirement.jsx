import React, { useState } from "react";
import JobRequirementPic from "../assets/JobRequirementPic.jpg";
import adviserPic from "../assets/adviserPic.png";

function ApplyLinks({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "apply__now__container__content__btn apply__now__container__content__btn__select"
          : "apply__now__container__content__btn"
      }
    >
      <div
        className={
          select === title
            ? "apply__now__container__content__btn__circle apply__now__container__content__btn__circle__selected"
            : "apply__now__container__content__btn__circle"
        }
      ></div>
      {title}
    </button>
  );
}

export default function JobRequirement() {
  const [select, setSelect] = useState("Your resume");
  return (
    <>
      <div className="job__requirment__container">
        <img
          src={JobRequirementPic}
          alt="JobRequirementPic"
          className="job__requirment__container__img"
        />
        <div className="job__requirment__container__overlay">
          <div className="job__requirment__container__content">
            <div className="job__requirment__container__content__left">
              <div className="job__requirment__container__content__left__heading">
                Junior System Engineer Werktuigbouwkunde
              </div>
              <div className="job__requirment__container__content__left__btn__wrapper">
                <button className="job__requirment__container__content__left__btn">
                  <svg
                    id="Group_976"
                    data-name="Group 976"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.978"
                    height="22.708"
                    viewBox="0 0 16.978 22.708"
                  >
                    <path
                      id="Path_1187"
                      data-name="Path 1187"
                      d="M841.492,50.845a6.426,6.426,0,0,0-.032,3.028,1.8,1.8,0,0,1-.628,1.625,2.928,2.928,0,0,0-.915,1.6,1.922,1.922,0,0,1-1.5,1.547,3.537,3.537,0,0,0-1.56.869,1.689,1.689,0,0,1-2.032.311,2.3,2.3,0,0,0-2.179,0,1.684,1.684,0,0,1-2.087-.365,2.7,2.7,0,0,0-1.352-.754,2.144,2.144,0,0,1-1.726-1.822,2.044,2.044,0,0,0-.678-1.207,2.342,2.342,0,0,1-.72-2.5,3.619,3.619,0,0,0,0-1.708,2.141,2.141,0,0,1,.673-2.348,2.744,2.744,0,0,0,.8-1.5,2.01,2.01,0,0,1,1.563-1.582,2.865,2.865,0,0,0,1.639-.984,1.7,1.7,0,0,1,1.857-.545,3.684,3.684,0,0,0,2.229,0,1.744,1.744,0,0,1,1.916.59,2.6,2.6,0,0,0,1.5.911,2.069,2.069,0,0,1,1.667,1.674,3.015,3.015,0,0,0,.939,1.6A1.774,1.774,0,0,1,841.492,50.845ZM837.85,52.27a4.242,4.242,0,0,0-4.075-4.279,4.4,4.4,0,0,0-4.2,4.2,4.275,4.275,0,0,0,4.117,4.249A4.062,4.062,0,0,0,837.85,52.27Z"
                      transform="translate(-825.251 -44.427)"
                      fill="#04133b"
                    />
                    <path
                      id="Path_1188"
                      data-name="Path 1188"
                      d="M878.469,141.933a3.43,3.43,0,0,0,3.784-.73,6.448,6.448,0,0,1,1.928-.82c.275-.1.341.184.417.366.577,1.4,1.16,2.8,1.711,4.217.269.689-.141,1.183-.888,1.129-.026,0-.051-.013-.077-.017a3.046,3.046,0,0,0-3.232,1.14c-.843,1.087-1.292.933-1.817-.367-.578-1.431-1.17-2.856-1.753-4.284A.694.694,0,0,1,878.469,141.933Z"
                      transform="translate(-869.414 -125.232)"
                      fill="#04133b"
                    />
                    <path
                      id="Path_1189"
                      data-name="Path 1189"
                      d="M829.427,142.244c-.663,1.617-1.243,3.036-1.826,4.454a12.139,12.139,0,0,1-.5,1.151.623.623,0,0,1-1.088.2,2.478,2.478,0,0,1-.5-.5c-.738-1.186-1.855-1.272-3.079-1.126-1.008.12-1.353-.367-.966-1.305.519-1.257,1.053-2.509,1.536-3.779.2-.513.346-.675.944-.427a11.149,11.149,0,0,1,2.33,1.235A3.187,3.187,0,0,0,829.427,142.244Z"
                      transform="translate(-821.317 -125.599)"
                      fill="#04133b"
                    />
                  </svg>
                  MBO/ HBO
                </button>
                <button className="job__requirment__container__content__left__btn">
                  <svg
                    id="pin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.869"
                    height="23.078"
                    viewBox="0 0 15.869 23.078"
                  >
                    <path
                      id="Path_1190"
                      data-name="Path 1190"
                      d="M94.734,3.951A7.831,7.831,0,0,0,88.08,0c-.118,0-.237,0-.355,0a7.832,7.832,0,0,0-6.655,3.95,8.034,8.034,0,0,0-.1,7.938l5.723,10.475.008.014a1.391,1.391,0,0,0,2.413,0l.008-.014L94.839,11.89a8.034,8.034,0,0,0-.1-7.938ZM87.9,10.457a3.245,3.245,0,1,1,3.245-3.245A3.249,3.249,0,0,1,87.9,10.457Z"
                      transform="translate(-79.968 0)"
                      fill="#04133b"
                    />
                  </svg>
                  Location
                </button>
              </div>
              <div className="job__requirment__container__content__left__para">
                Geplaatst op 27 november 2020 - Sluit op 27 december 2020
              </div>
            </div>
            <div className="job__requirment__container__content__right">
              <div className="job__requirment__container__content__right__heading">
                Job Requirement
              </div>
              <div className="job__requirment__container__content__right__para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                nostrum quaerat iure obcaecati dolore et ad doloribus, deleniti
                ut dolorem minima eveniet, eligendi distinctio? Nobis fugiat in
                nam illo natus praesentium numquam? Vel voluptatibus facere
                eligendi expedita nesciunt, corrupti enim ex dicta ducimus quod
                libero quibusdam? Esse tempora dolorem modi odio quos voluptates
                vero labore est nisi, velit quidem dolores eveniet asperiores,
                voluptatibus ad blanditiis commodi provident soluta voluptatem
                molestias, natus itaque? Velit ipsam suscipit, ipsa
                necessitatibus illum soluta quis, atque aliquid nostrum omnis
                numquam laudantium? Minima autem maiores nemo sequi culpa.
                Itaque, alias pariatur officiis in nesciunt omnis porro fugiat
                ad temporibus architecto quibusdam explicabo obcaecati
                repellendus. Recusandae, alias minima aut ratione tempora
                placeat doloribus perferendis earum sint temporibus sed
                voluptates suscipit itaque fuga sit culpa beatae numquam
                pariatur?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="more__about__company">
        <div className="more__about__company__content">
          <div className="more__about__company__content__left">
            <div className="more__about__company__content__left__heading">
              More about the company
            </div>
            <div className="more__about__company__content__left__para">
              Location: Rotterdam
            </div>
            <div className="more__about__company__content__left__para">
              region This leading machine builder is responsible for designing,
              developing, building and installing high-quality machines all over
              the world. With their expertise in the food industry, they are
              able to respond seamlessly to the needs of their customers. Within
              this young progressive company there is an open culture and a lot
              of investment in the employees. You can find their products with
              their global customers where they design and commission not only
              machines but entire production lines. Our client has a proven
              track record of services when you look at the quality of their way
              of producing, handling systems and strategy of how they are
              operated.
            </div>
            <div
              style={{ marginTop: 40 }}
              className="more__about__company__content__left__heading"
            >
              Job Description
            </div>

            <div className="more__about__company__content__left__li">
              A completed HBO or WO degree in Mechanical Engineering or related
            </div>
            <div className="more__about__company__content__left__li">
              You have (internship) experience in a similar position to System
              Engineer
            </div>
            <div className="more__about__company__content__left__li">
              You have experience in the mechanical engineering industry
              preferably as a System Engineer
            </div>
            <div className="more__about__company__content__left__li">
              You have knowledge of hydraulics and pneumatics, drives and
              control technology
            </div>
            <div className="more__about__company__content__left__li">
              You can engineer with Inventor
            </div>
            <div className="more__about__company__content__left__li">
              You are creative in solving problems with a strong sense of safety
              and quality
            </div>
            <div className="more__about__company__content__left__li">
              You are stress-resistant, proactive and you work in a
              customer-oriented way
            </div>
          </div>
          <div className="more__about__company__content__right">
            <div className="more__about__company__content__right__card">
              <div className="more__about__company__content__right__card__header">
                <div className="more__about__company__content__right__card__heading">
                  Advisor Mechanical Engineers
                </div>
                <img
                  src={adviserPic}
                  alt="adviserPic"
                  className="more__about__company__content__right__card__img"
                />
              </div>

              <a
                href="#"
                className="more__about__company__content__right__card__para"
              >
                <svg
                  id="envelope"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.416"
                  height="18.312"
                  viewBox="0 0 24.416 18.312"
                >
                  <g
                    id="Group_989"
                    data-name="Group 989"
                    transform="translate(0 0)"
                  >
                    <g id="Group_988" data-name="Group 988">
                      <path
                        id="Path_1194"
                        data-name="Path 1194"
                        d="M7.094,65.486c3.351,2.838,9.231,7.831,10.959,9.387a1.021,1.021,0,0,0,1.477,0c1.73-1.558,7.61-6.551,10.961-9.389a.508.508,0,0,0,.072-.7,2.02,2.02,0,0,0-1.6-.784H8.619a2.02,2.02,0,0,0-1.6.784A.508.508,0,0,0,7.094,65.486Z"
                        transform="translate(-6.584 -64)"
                        fill="#ee7a27"
                      />
                      <path
                        id="Path_1195"
                        data-name="Path 1195"
                        d="M24.121,126.459a.506.506,0,0,0-.542.074c-3.716,3.15-8.459,7.188-9.951,8.533a2.06,2.06,0,0,1-2.839,0C9.2,133.631,3.871,129.1.837,126.532A.509.509,0,0,0,0,126.92v12.792a2.037,2.037,0,0,0,2.035,2.035H22.381a2.037,2.037,0,0,0,2.035-2.035V126.92A.508.508,0,0,0,24.121,126.459Z"
                        transform="translate(0 -123.435)"
                        fill="#ee7a27"
                      />
                    </g>
                  </g>
                </svg>
                abcd@gmail.com
              </a>
              <a
                href="#"
                className="more__about__company__content__right__card__para"
              >
                <svg
                  id="phone-call"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.442"
                  height="24.494"
                  viewBox="0 0 24.442 24.494"
                >
                  <g
                    id="Group_987"
                    data-name="Group 987"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Path_1193"
                      data-name="Path 1193"
                      d="M24.341,17.976l-3.418-3.418a2.274,2.274,0,0,0-3.784.855,2.326,2.326,0,0,1-2.686,1.465c-2.442-.61-5.738-3.784-6.348-6.348A2.213,2.213,0,0,1,9.569,7.844a2.274,2.274,0,0,0,.855-3.784L7.006.641a2.438,2.438,0,0,0-3.3,0L1.39,2.96C-.93,5.4,1.634,11.872,7.372,17.61s12.208,8.424,14.649,5.982l2.32-2.32A2.438,2.438,0,0,0,24.341,17.976Z"
                      transform="translate(-0.539 0)"
                      fill="#0672a0"
                    />
                  </g>
                </svg>
                3454564564554
              </a>
              <a
                href="#"
                className="more__about__company__content__right__card__para"
              >
                <svg
                  id="whatsapp"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.886"
                  height="24.886"
                  viewBox="0 0 24.886 24.886"
                >
                  <path
                    id="Path_1514"
                    data-name="Path 1514"
                    d="M12.446,0H12.44A12.435,12.435,0,0,0,2.369,19.736L.818,24.358,5.6,22.83A12.441,12.441,0,1,0,12.446,0Z"
                    fill="#4caf50"
                  />
                  <path
                    id="Path_1515"
                    data-name="Path 1515"
                    d="M121.737,128.968a3.511,3.511,0,0,1-2.442,1.756c-.65.138-1.5.249-4.358-.936-3.657-1.515-6.011-5.231-6.195-5.472a7.107,7.107,0,0,1-1.478-3.753,3.972,3.972,0,0,1,1.272-3.028,1.808,1.808,0,0,1,1.272-.446c.154,0,.292.008.417.014.366.016.549.037.79.614.3.723,1.031,2.509,1.118,2.692a.741.741,0,0,1,.053.673,2.15,2.15,0,0,1-.4.571c-.184.212-.358.373-.541.6-.168.2-.358.409-.146.775a11.044,11.044,0,0,0,2.019,2.509,9.148,9.148,0,0,0,2.918,1.8.787.787,0,0,0,.877-.138,15.054,15.054,0,0,0,.972-1.288.694.694,0,0,1,.893-.271c.336.117,2.114,1,2.479,1.177s.607.271.7.425A3.1,3.1,0,0,1,121.737,128.968Z"
                    transform="translate(-102.05 -111.397)"
                    fill="#fafafa"
                  />
                </svg>
                WhatsApp
              </a>
              <a
                href="#"
                className="more__about__company__content__right__card__para"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.886"
                  height="22.886"
                  viewBox="0 0 22.886 22.886"
                >
                  <path
                    id="linkedin"
                    d="M20.816,0H2.07A2.07,2.07,0,0,0,0,2.07V20.815a2.07,2.07,0,0,0,2.07,2.07H20.815a2.07,2.07,0,0,0,2.07-2.07V2.07A2.07,2.07,0,0,0,20.816,0ZM7.082,19.761a.6.6,0,0,1-.6.6H3.915a.6.6,0,0,1-.6-.6V9.011a.6.6,0,0,1,.6-.6H6.479a.6.6,0,0,1,.6.6ZM5.2,7.395A2.436,2.436,0,1,1,7.633,4.959,2.436,2.436,0,0,1,5.2,7.395ZM20.484,19.81a.554.554,0,0,1-.554.554H17.178a.554.554,0,0,1-.554-.554V14.767c0-.752.221-3.3-1.966-3.3-1.7,0-2.04,1.741-2.109,2.523V19.81a.554.554,0,0,1-.554.554H9.334a.554.554,0,0,1-.554-.554V8.962a.554.554,0,0,1,.554-.554H12a.554.554,0,0,1,.554.554V9.9A3.778,3.778,0,0,1,16.1,8.228c4.407,0,4.381,4.117,4.381,6.379v5.2Z"
                    fill="#019ad3"
                  />
                </svg>
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="apply__now__container">
        <div className="apply__now__container__content">
          <div className="apply__now__container__content__left">
            <form action="" className="apply__now__container__content__form">
              {select === "Your resume" ? (
                <>
                  <input
                    type="text"
                    placeholder="Important"
                    className="apply__now__container__content__from__input"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="apply__now__container__content__from__input"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="apply__now__container__content__from__input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="apply__now__container__content__from__input"
                  />
                  <textarea
                    type="text"
                    cols={10}
                    rows={6}
                    placeholder="Message"
                    className="apply__now__container__content__from__input"
                  />
                  <button className="apply__now__container__content__from__cv__btn">
                    Upload Your CV
                  </button>
                  <button
                    onClick={() => {
                      setSelect("Your ambitions");
                    }}
                    className="apply__now__container__content__from__btn"
                  >
                    Submit
                  </button>
                </>
              ) : null}
              {select === "Your ambitions" ? (
                <>
                  <input
                    type="text"
                    placeholder="Important"
                    className="apply__now__container__content__from__input"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="apply__now__container__content__from__input"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="apply__now__container__content__from__input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="apply__now__container__content__from__input"
                  />
                  <button
                    onClick={() => {
                      setSelect("Your selection of conversations");
                    }}
                    className="apply__now__container__content__from__btn"
                  >
                    Submit
                  </button>
                </>
              ) : null}
              {select === "Your selection of conversations" ? (
                <>
                  <input
                    type="text"
                    placeholder="Surname"
                    className="apply__now__container__content__from__input"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="apply__now__container__content__from__input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="apply__now__container__content__from__input"
                  />
                  <textarea
                    type="text"
                    cols={10}
                    rows={6}
                    placeholder="Message"
                    className="apply__now__container__content__from__input"
                  />
                  <button
                    onClick={() => {
                      setSelect("Your job choice");
                    }}
                    className="apply__now__container__content__from__btn"
                  >
                    Submit
                  </button>
                </>
              ) : null}
              {select === "Your job choice" ? (
                <>
                  <input
                    type="text"
                    placeholder="Important"
                    className="apply__now__container__content__from__input"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="apply__now__container__content__from__input"
                  />

                  <textarea
                    type="text"
                    cols={10}
                    rows={6}
                    placeholder="Message"
                    className="apply__now__container__content__from__input"
                  />

                  <button className="apply__now__container__content__from__btn">
                    Submit
                  </button>
                </>
              ) : null}
            </form>
          </div>
          <div className="apply__now__container__content__right">
            <div className="apply__now__container__content__right__sub__heading">
              Apply now
            </div>

            <div className="apply__now__container__content__right__heading">
              Junior System Engineer Mechanical Engineering
            </div>
            <ApplyLinks
              title="Your resume"
              select={select}
              setSelect={setSelect}
            />
            <ApplyLinks
              title="Your ambitions"
              select={select}
              setSelect={setSelect}
            />
            <ApplyLinks
              title="Your selection of conversations"
              select={select}
              setSelect={setSelect}
            />
            <ApplyLinks
              title="Your job choice"
              select={select}
              setSelect={setSelect}
            />
          </div>
        </div>
      </div>
    </>
  );
}
