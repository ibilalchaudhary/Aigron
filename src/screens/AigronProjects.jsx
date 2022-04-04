import React, { useState } from "react";
import aigronProjectBg from "../assets/aigronProjectBg.jpg";
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

export default function AigronProjects() {
  return (
    <>
      <div className="aigron__project__main__container">
        <img
          src={aigronProjectBg}
          alt="aigronProjectBg"
          className="aigron__project__main__container__img"
        />
        <div className="aigron__project__main__container__overlay">
          <div className="aigron__project__main__container__content">
            <div className="aigron__project__main__container__content__heading">
              Full-Service <span>Software Development</span>{" "}
              <span style={{ color: "#000" }}>Company</span>
            </div>
            <div className="aigron__project__main__container__content__para">
              Build world-class digital products with a team of design, <br />
              development and strategy experts. All in one place.
            </div>
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
      <div className="clients__container">
        <div className="clients__container__left">
          <div className="clients__container__left__images__wrapper">
            <ClientCardLogo />
            <ClientCardLogo />
            <ClientCardLogo />
            <ClientCardLogo />
            <ClientCardLogo />
            <ClientCardLogo />
          </div>
        </div>
        <div className="clients__container__right">
          <div className="clients__container__right__para">
            We transform bold business ideas into exceptional digital products.
            Searching for a partner that will take the process of software
            development off your hands? You’ve come to the right place. We
            ideate, design, and develop data-driven digital products made to
            answer business challenges. We offer 360° services to smoothly guide
            you on your way to creating a seamless digital masterpiece.
          </div>
        </div>
      </div>
      <div className="what__we__do__container">
        <div className="what__we__do__container__content">
          <div className="what__we__do__container__content__heading">
            <span>See</span> what we can do <span> for you</span>
          </div>
          <WhatWeDoCard
            img={ideationSvg}
            imgHover={ideationSvgHover}
            title="Ideation"
            span="& Strategy"
          />
          <WhatWeDoCard
            img={productSvg}
            imgHover={productSvgHover}
            title="Product"
            span="Design"
          />
          <WhatWeDoCard
            img={webSvg}
            imgHover={webSvgHover}
            title="Web"
            span="& Mobile"
          />

          <WhatWeDoCard
            img={artificialSvg}
            imgHover={artificialSvgHover}
            title="Artificial"
            span="Intelligence"
          />
          <WhatWeDoCard
            img={cloudSvg}
            imgHover={cloudSvgHover}
            title="Cloud"
            span="Services"
          />
          <WhatWeDoCard
            img={machineSvg}
            imgHover={machineSvgHover}
            title="Machine"
            span="Learning"
          />
          <WhatWeDoCard
            img={softwareSvg}
            imgHover={softwareSvgHover}
            title="Software"
            span="Development"
          />
        </div>
      </div>
      <div className="tangible__result__container">
        <img
          src={tengibleBg}
          alt="tengibleBg"
          className="tangible__result__container__img"
        />
        <div className="tangible__result__container__overlay">
          <div className="tangible__result__container__overlay__content">
            <div className="tangible__result__container__overlay__content__heading">
              Tangible Results, <br />
              <span>Right on Schedule</span>
            </div>
            <div className="tangible__result__container__overlay__content__wrapper">
              <div className="tangible__result__container__overlay__content__card">
                <div className="tangible__result__container__overlay__content__card__heading__wrapper">
                  <div className="tangible__result__container__overlay__content__card__heading">
                    2 Days
                  </div>
                  <div className="tangible__result__container__overlay__content__card__para">
                    for an estimate
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="71.236"
                  height="78.001"
                  viewBox="0 0 71.236 78.001"
                >
                  <g
                    id="Group_57"
                    data-name="Group 57"
                    transform="translate(585.177 -63.363)"
                  >
                    <path
                      id="Path_41"
                      data-name="Path 41"
                      d="M-514.452,71.28c-.02-4.678-2.727-7.362-7.4-7.379-8.079-.032-16.159.01-24.238-.032a3.988,3.988,0,0,0-3.142,1.3,87.132,87.132,0,0,1-8.093,8.024c-5.222,4.151-8.046,9.081-6.722,15.889.015.076-.008.159,0,.238.184,1.342-.381,1.776-1.733,1.749-3.88-.077-7.76-.068-11.643-.01-4.342.065-7.236,2.83-7.258,7.112q-.091,17.822,0,35.646a6.611,6.611,0,0,0,6.864,6.964q12,.169,24-.006a6.363,6.363,0,0,0,6.663-6.57c.054-1.634.611-1.93,2.079-1.917,7.522.063,15.05.04,22.574.024,5.332-.011,8.042-2.716,8.052-8.036q.022-13.071,0-26.141C-514.44,89.183-514.412,80.231-514.452,71.28Zm-34.295-1.095c.462,8.929-.081,9.748-8.8,8.831.954-1.6,6.717-7.422,8.8-8.832Zm-1.735,63.635a3.371,3.371,0,0,1-3.671,3.721q-11.639.081-23.28.005a3.549,3.549,0,0,1-3.887-3.834c-.055-8.474.014-16.945-.056-25.417-.012-1.536.718-1.61,1.886-1.6,4.513.039,9.026.016,13.539.016,4.592,0,9.185.048,13.776-.03,1.347-.023,1.745.367,1.736,1.722C-550.494,116.876-550.443,125.349-550.482,133.821Zm-4.546-30.521h-11.154c-4.43,0-8.861-.051-13.29.029-1.414.026-2.058-.315-1.892-1.838.119-1.095-.088-2.228.053-3.317.262-2.019,1.309-3.408,3.527-3.414,7.911-.024,15.822-.04,23.733.006,2.352.013,3.5,1.321,3.583,3.761.164,4.773.164,4.773-4.56,4.773Zm37.229-4.924q0,12.949,0,25.894c0,3.494-1.22,4.724-4.685,4.73-7.284.013-14.571-.066-21.852.048-2.077.033-2.833-.391-2.8-2.683.149-9.025.07-18.054.056-27.081-.009-5.522-2.469-7.986-7.942-8.019-5.764-.036-5.656-.039-5.8-5.811-.057-2.2.577-2.914,2.747-2.714a36.04,36.04,0,0,0,5.933-.006c4.262-.315,6.774-3.03,6.855-7.284.042-2.137.071-4.278-.01-6.413-.048-1.267.238-1.814,1.671-1.8,7.284.069,14.568,0,21.855.048,2.706.017,3.963,1.483,3.969,4.481q.028,13.306.008,26.61Z"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_42"
                      data-name="Path 42"
                      d="M-487.367,108.01c-.069-1.418.073-2.36,1.33-2.512,1.3-.157,1.826.624,2.054,1.786.353,1.8,1.48,2.652,3.265,2.148,1.6-.453,1.918-1.786,1.553-3.244a2.459,2.459,0,0,0-2.548-1.761,5.544,5.544,0,0,1-5.513-4.376c-.767-2.915.12-4.978,2.968-6.822a2.206,2.206,0,0,0,1.037-2.163c.021-1.063.484-1.93,1.619-1.993a1.721,1.721,0,0,1,1.875,1.979c-.08,1.368.635,1.909,1.632,2.548a5.349,5.349,0,0,1,2.555,4.336c.065,1.047-.165,1.948-1.345,2.171s-1.778-.487-2.032-1.516c-.211-.853-.324-1.744-1.188-2.217a2.7,2.7,0,0,0-2.727-.016A2.3,2.3,0,0,0-483.96,98.8a2.3,2.3,0,0,0,1.717,2.06c.755.219,1.571.222,2.326.446a5.606,5.606,0,0,1,4.277,4.591,5.437,5.437,0,0,1-2.428,5.99,2.874,2.874,0,0,0-1.672,2.766,1.686,1.686,0,0,1-.508,1.311,1.686,1.686,0,0,1-1.326.47,1.577,1.577,0,0,1-1.19-.507,1.577,1.577,0,0,1-.41-1.227c.143-1.554-.734-2.18-1.87-2.9A4.683,4.683,0,0,1-487.367,108.01Z"
                      transform="translate(-50.943 -13.206)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_43"
                      data-name="Path 43"
                      d="M-485.1,157.409c2.3,0,4.591.012,6.886,0,1.222-.009,2.355.286,2.405,1.678s-.984,1.815-2.261,1.809q-7.124-.025-14.248,0c-1.273.005-2.3-.392-2.276-1.791.026-1.428,1.148-1.7,2.37-1.7C-489.848,157.419-487.473,157.409-485.1,157.409Z"
                      transform="translate(-47.221 -49.007)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_44"
                      data-name="Path 44"
                      d="M-485.228,178.974c-2.366,0-4.732.01-7.1,0-1.22-.006-2.3-.381-2.268-1.8.033-1.292,1.041-1.58,2.194-1.575q7.216.03,14.432,0c1.15,0,2.149.324,2.169,1.613.019,1.261-.965,1.733-2.095,1.75C-480.338,179-482.783,178.973-485.228,178.974Z"
                      transform="translate(-47.221 -58.54)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_45"
                      data-name="Path 45"
                      d="M-530.729,188.444c0-1.344-.051-2.691.017-4.031a1.591,1.591,0,0,1,.492-1.184,1.591,1.591,0,0,1,1.205-.437,1.536,1.536,0,0,1,1.211.415,1.536,1.536,0,0,1,.476,1.188c.06,2.844.076,5.691.013,8.535a1.6,1.6,0,0,1-1.809,1.747,1.723,1.723,0,0,1-1.628-1.962c-.009-1.423,0-2.847,0-4.27Z"
                      transform="translate(-28.274 -62.305)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_46"
                      data-name="Path 46"
                      d="M-527.419,166.53c-.173.874-.612,1.619-1.652,1.568a1.611,1.611,0,0,1-1.265-.555,1.611,1.611,0,0,1-.37-1.331,1.5,1.5,0,0,1,.535-1.15,1.5,1.5,0,0,1,1.223-.332C-527.948,164.8-527.44,165.455-527.419,166.53Z"
                      transform="translate(-28.288 -52.835)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_47"
                      data-name="Path 47"
                      d="M-545.385,166.389c-.137.938-.619,1.684-1.593,1.694a1.654,1.654,0,0,1-1.65-1.87,1.484,1.484,0,0,1,.484-1.16,1.484,1.484,0,0,1,1.2-.373C-545.939,164.73-545.469,165.407-545.385,166.389Z"
                      transform="translate(-18.91 -52.813)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_48"
                      data-name="Path 48"
                      d="M-563.421,184.454c-.109.989-.664,1.644-1.645,1.605a1.6,1.6,0,0,1-1.274-.515,1.6,1.6,0,0,1-.406-1.313,1.535,1.535,0,0,1,.549-1.134,1.535,1.535,0,0,1,1.213-.341A1.589,1.589,0,0,1-563.421,184.454Z"
                      transform="translate(-9.409 -62.282)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_49"
                      data-name="Path 49"
                      d="M-563.419,202.458c-.224.857-.583,1.693-1.634,1.646a1.636,1.636,0,0,1-1.272-.533,1.636,1.636,0,0,1-.413-1.315,1.5,1.5,0,0,1,.521-1.149,1.5,1.5,0,0,1,1.213-.346A1.564,1.564,0,0,1-563.419,202.458Z"
                      transform="translate(-9.415 -71.715)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_50"
                      data-name="Path 50"
                      d="M-565.094,164.715c.921.177,1.675.567,1.661,1.627a1.568,1.568,0,0,1-1.731,1.748,1.638,1.638,0,0,1-1.558-1.739C-566.764,165.323-566.046,164.86-565.094,164.715Z"
                      transform="translate(-9.43 -52.839)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_51"
                      data-name="Path 51"
                      d="M-545.443,184.507c-.2.9-.584,1.682-1.666,1.6a1.579,1.579,0,0,1-1.168-.509,1.578,1.578,0,0,1-.412-1.205,1.5,1.5,0,0,1,.465-1.183,1.5,1.5,0,0,1,1.205-.4,1.529,1.529,0,0,1,1.178.488A1.529,1.529,0,0,1-545.443,184.507Z"
                      transform="translate(-18.876 -62.313)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                    <path
                      id="Path_52"
                      data-name="Path 52"
                      d="M-546.876,204.144a1.61,1.61,0,0,1-1.782-1.629,1.451,1.451,0,0,1,.3-1.216,1.45,1.45,0,0,1,1.135-.529,1.453,1.453,0,0,1,1.22.3,1.453,1.453,0,0,1,.532,1.137A1.669,1.669,0,0,1-546.876,204.144Z"
                      transform="translate(-18.879 -71.712)"
                      fill="#04133b"
                      stroke="#ebeff0"
                      stroke-width="1"
                    />
                  </g>
                </svg>
              </div>
              <div
                style={{ backgroundColor: "#6BA53A" }}
                className="tangible__result__container__overlay__content__card tangible__result__container__overlay__content__card__secondary"
              >
                <div className="tangible__result__container__overlay__content__card__heading__wrapper">
                  <div className="tangible__result__container__overlay__content__card__heading ">
                    2 Weeks
                  </div>
                  <div className="tangible__result__container__overlay__content__card__para">
                    for the prototype
                  </div>
                </div>
                <svg
                  id="design_1_"
                  data-name="design (1)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="70.573"
                  height="64.336"
                  viewBox="0 0 70.573 64.336"
                >
                  <path
                    id="Path_173"
                    data-name="Path 173"
                    d="M108.248,68.971a3.317,3.317,0,1,0-3.211-4.137H79.528v-.595A1.833,1.833,0,0,0,77.7,62.408h-2.83a1.833,1.833,0,0,0-1.831,1.831v.595H47.524a3.317,3.317,0,1,0,0,1.641H66.416a30.38,30.38,0,0,0-20.484,27.9h-.606a1.833,1.833,0,0,0-1.831,1.831v2.83a1.833,1.833,0,0,0,1.831,1.831h2.83a1.833,1.833,0,0,0,1.831-1.831v-2.83a1.833,1.833,0,0,0-1.831-1.831h-.581A28.721,28.721,0,0,1,73.035,66.656v.412A1.833,1.833,0,0,0,74.866,68.9H77.7a1.833,1.833,0,0,0,1.831-1.831v-.412a28.721,28.721,0,0,1,25.461,27.717H104.4a1.833,1.833,0,0,0-1.831,1.831v2.83a1.833,1.833,0,0,0,1.831,1.831h2.83a1.833,1.833,0,0,0,1.831-1.831V96.2a1.833,1.833,0,0,0-1.831-1.831h-.606a30.38,30.38,0,0,0-20.484-27.9h18.893a3.32,3.32,0,0,0,3.21,2.5Zm-59.9,27.235v2.83a.19.19,0,0,1-.191.19h-2.83a.191.191,0,0,1-.191-.19v-2.83a.191.191,0,0,1,.191-.19h2.83a.191.191,0,0,1,.191.19Zm59.082,0v2.83a.19.19,0,0,1-.191.19H104.4a.191.191,0,0,1-.191-.19v-2.83a.191.191,0,0,1,.191-.19h2.83a.191.191,0,0,1,.194.19Zm.821-32.227a1.675,1.675,0,1,1-1.675,1.675A1.675,1.675,0,0,1,108.248,63.979ZM44.315,67.33a1.675,1.675,0,1,1,1.675-1.675,1.675,1.675,0,0,1-1.675,1.675Zm33.572-.26a.191.191,0,0,1-.19.19h-2.83a.191.191,0,0,1-.19-.19v-2.83a.191.191,0,0,1,.19-.191H77.7a.191.191,0,0,1,.19.191Z"
                    transform="translate(-40.994 -62.337)"
                    fill="#fff"
                  />
                  <path
                    id="Path_174"
                    data-name="Path 174"
                    d="M163.843,149.778l-3.795-1.045a16.831,16.831,0,0,0-1.7-3.962l1.92-3.337a1.576,1.576,0,0,0-.277-1.917l-2.9-2.807a1.712,1.712,0,0,0-1.984-.268l-3.449,1.858a18.087,18.087,0,0,0-2.913-1.284v-7.189a3.892,3.892,0,0,0-.383-1.675l-3.3-6.858a2.5,2.5,0,0,0-4.467,0l-3.3,6.858a3.891,3.891,0,0,0-.383,1.675v7.189a18.053,18.053,0,0,0-2.914,1.285l-3.45-1.858a1.712,1.712,0,0,0-1.982.268l-2.9,2.807a1.577,1.577,0,0,0-.277,1.919l1.92,3.336a16.837,16.837,0,0,0-1.7,3.962l-3.795,1.045a1.623,1.623,0,0,0-1.207,1.547v3.97a1.623,1.623,0,0,0,1.207,1.546l3.795,1.045a16.83,16.83,0,0,0,1.7,3.962l-1.92,3.337a1.577,1.577,0,0,0,.277,1.917l2.9,2.807a1.711,1.711,0,0,0,1.983.268l3.449-1.857a18.061,18.061,0,0,0,4.1,1.641l1.081,3.671a1.662,1.662,0,0,0,1.6,1.168h4.1a1.662,1.662,0,0,0,1.6-1.168l1.081-3.671a18.054,18.054,0,0,0,4.1-1.641l3.449,1.858a1.711,1.711,0,0,0,1.983-.268l2.9-2.807a1.577,1.577,0,0,0,.277-1.918l-1.92-3.337a16.84,16.84,0,0,0,1.7-3.962l3.795-1.045a1.623,1.623,0,0,0,1.207-1.546v-3.97a1.623,1.623,0,0,0-1.206-1.548Zm-21.01-14.454a.808.808,0,0,0-.821.794v24.867a7.94,7.94,0,0,1-6.63-4.913,7.523,7.523,0,0,1,1.539-7.941v7.748a.821.821,0,0,0,1.641,0V132.991a5.106,5.106,0,0,0,3.829-.626.878.878,0,0,1,.912.016,5.107,5.107,0,0,0,3.8.612v26.714a.762.762,0,0,0,.012.112,8.1,8.1,0,0,1-3.464,1.171V136.117a.808.808,0,0,0-.821-.79Zm5.915,12.8a7.527,7.527,0,0,1,0,10.361Zm-6.658-26.163a.834.834,0,0,1,1.491,0l1.514,3.15a4.493,4.493,0,0,1-2.26.612,4.431,4.431,0,0,1-2.26-.612Zm-3.3,6.858,1.086-2.259a6.186,6.186,0,0,0,5.912,0l1.086,2.259a2.335,2.335,0,0,1,.23,1.006v1.513a3.441,3.441,0,0,1-2.925-.3,2.573,2.573,0,0,0-2.672-.011,3.4,3.4,0,0,1-1.794.506,3.464,3.464,0,0,1-1.15-.2v-1.512a2.336,2.336,0,0,1,.225-1Zm24.618,26.473a.02.02,0,0,1-.016.02l-4.246,1.17a.806.806,0,0,0-.572.574,15.282,15.282,0,0,1-1.871,4.367.771.771,0,0,0-.015.8l2.148,3.732a.022.022,0,0,1,0,.025l-2.9,2.807a.023.023,0,0,1-.025,0l-3.859-2.079a.844.844,0,0,0-.825.015,16.382,16.382,0,0,1-4.515,1.809.81.81,0,0,0-.594.554l-1.21,4.108a.021.021,0,0,1-.021.015h-4.1a.02.02,0,0,1-.021-.015l-1.209-4.108a.809.809,0,0,0-.594-.554,16.392,16.392,0,0,1-4.515-1.809.844.844,0,0,0-.825-.015l-3.858,2.078a.023.023,0,0,1-.025,0l-2.9-2.808a.022.022,0,0,1,0-.024l2.149-3.733a.771.771,0,0,0-.015-.8,15.272,15.272,0,0,1-1.871-4.367.807.807,0,0,0-.572-.574l-4.246-1.17a.02.02,0,0,1-.015-.02v-3.97a.02.02,0,0,1,.016-.02l4.246-1.169a.806.806,0,0,0,.572-.574,15.285,15.285,0,0,1,1.871-4.368.771.771,0,0,0,.015-.8l-2.148-3.732a.022.022,0,0,1,0-.025l2.9-2.807a.024.024,0,0,1,.025,0l3.859,2.079a.845.845,0,0,0,.825-.015,16.349,16.349,0,0,1,2.478-1.185v7.265a9.111,9.111,0,0,0-2.782,11.315,9.716,9.716,0,0,0,10.8,5.1,9.379,9.379,0,0,0,7.512-9.081,9.133,9.133,0,0,0-3.707-7.342V138.7a16.351,16.351,0,0,1,2.477,1.185.845.845,0,0,0,.825.015l3.858-2.078a.023.023,0,0,1,.026,0l2.9,2.807a.022.022,0,0,1,0,.024l-2.149,3.733a.771.771,0,0,0,.015.8,15.276,15.276,0,0,1,1.871,4.368.807.807,0,0,0,.572.574l4.246,1.17a.02.02,0,0,1,.015.02Z"
                    transform="translate(-107.546 -110.466)"
                    fill="#fff"
                  />
                  <g
                    id="Group_27"
                    data-name="Group 27"
                    transform="translate(0.217 8.796)"
                  >
                    <path
                      id="Path_176"
                      data-name="Path 176"
                      d="M44.922,132.475a.821.821,0,0,1-.821-.821.985.985,0,0,0-.983-.984.821.821,0,0,1,0-1.641.985.985,0,0,0,.983-.983.821.821,0,0,1,1.641,0,.985.985,0,0,0,.984.984.821.821,0,1,1,0,1.641.985.985,0,0,0-.984.984A.821.821,0,0,1,44.922,132.475Z"
                      transform="translate(-42.297 -127.225)"
                      fill="#fff"
                    />
                    <path
                      id="Path_177"
                      data-name="Path 177"
                      d="M332.148,160.361a.821.821,0,0,1-.821-.821.985.985,0,0,0-.984-.984.821.821,0,1,1,0-1.641.985.985,0,0,0,.984-.984.821.821,0,1,1,1.641,0,.985.985,0,0,0,.984.984.821.821,0,0,1,0,1.641.985.985,0,0,0-.984.983A.821.821,0,0,1,332.148,160.361Z"
                      transform="translate(-282.387 -150.535)"
                      fill="#fff"
                    />
                    <path
                      id="Path_178"
                      data-name="Path 178"
                      d="M88.395,411.249a.817.817,0,0,1-.58-.237l-1.8-1.8a.82.82,0,0,1,0-1.161l1.8-1.8a.82.82,0,0,1,1.161,0l1.8,1.8a.82.82,0,0,1,0,1.161l-1.8,1.8A.817.817,0,0,1,88.395,411.249Zm-.644-2.625.644.644.644-.644-.644-.643Z"
                      transform="translate(-78.636 -360.251)"
                      fill="#fff"
                    />
                    <path
                      id="Path_179"
                      data-name="Path 179"
                      d="M419.211,331.741a.818.818,0,0,1-.58-.237l-1.8-1.8a.82.82,0,0,1,0-1.161l1.8-1.8a.82.82,0,0,1,1.161,0l1.8,1.8a.82.82,0,0,1,0,1.161l-1.8,1.8a.818.818,0,0,1-.58.237Zm-.644-2.625.644.644.644-.644-.644-.644Z"
                      transform="translate(-355.163 -293.791)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
              <div
                style={{ backgroundColor: "#04133B" }}
                className="tangible__result__container__overlay__content__card tangible__result__container__overlay__content__card__secondary"
              >
                <div className="tangible__result__container__overlay__content__card__heading__wrapper">
                  <div className="tangible__result__container__overlay__content__card__heading">
                    3 Months
                  </div>
                  <div className="tangible__result__container__overlay__content__card__para">
                    for the MVP
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83.573"
                  height="83.608"
                  viewBox="0 0 83.573 83.608"
                >
                  <g
                    id="Group_56"
                    data-name="Group 56"
                    transform="translate(332.278 -232.345)"
                  >
                    <path
                      id="Path_23"
                      data-name="Path 23"
                      d="M-256.4,312.818c-2.163.408-3.042-.4-2.739-2.326.208-1.32-.9-1.23-1.571-1.663a1.145,1.145,0,0,0-1.777.314c-1.2,1.606-2.353,1.3-3.52-.069-.569-.669-1.211-1.281-1.846-1.892-2.08-2-2.14-2.04-.322-4.3.709-.88-.028-1.386-.2-2.038a1.189,1.189,0,0,0-1.273-1.039c-2.619-.1-2.617-.16-2.623-2.692,0-.82-.01-1.641-.016-2.461-.022-2.909-.028-2.969,2.855-3.25,1.11-.108.881-1.029,1.287-1.556.465-.607.326-1.079-.175-1.654-1.713-1.965-1.685-1.985.209-3.874.536-.534,1.054-1.087,1.587-1.625,2.021-2.039,2.061-2.088,4.271-.342.852.673,1.377.047,2.05-.152.745-.219,1.2-.573,1.06-1.464-.3-1.915.6-2.743,2.471-2.472.614.089,1.722-.581,1.708.74-.007.73.707,2.046-1.079,1.921-.657-.046-.424.634-.509,1.025-.589,2.7-4.583,4.39-6.888,2.777-1.139-.8-1.408.15-1.96.6-.585.477-1.042.825-.35,1.789,1.56,2.175-.112,6.328-2.735,6.767-1.366.228-1.131.953-1.177,1.819-.05.934.051,1.409,1.218,1.584,2.434.365,4.289,4.7,2.8,6.648-.854,1.112-.19,1.468.365,2.1.637.727,1.087,1.03,2.088.243,1.791-1.408,6.07.414,6.607,2.713.178.761.141,1.3,1.23,1.453.911.128.441,1.284.389,1.919C-255.072,313.567-256.146,312.5-256.4,312.818Z"
                      transform="translate(-36.893 -28.122)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_24"
                      data-name="Path 24"
                      d="M-202.244,295.7a17.243,17.243,0,0,1-15.989,17.236c-.717.059-1.442.291-1.359-.867.058-.807-.3-1.562,1.164-1.746,7.422-.936,12.057-5.4,13.349-12.565,1.331-7.389-4.172-15.152-11.659-16.445a7.069,7.069,0,0,0-1.673-.261c-1.505.114-1.127-.923-1.177-1.746-.081-1.339.878-.967,1.545-.9A17.4,17.4,0,0,1-202.244,295.7Z"
                      transform="translate(-69.586 -28.206)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_25"
                      data-name="Path 25"
                      d="M-231.828,318.055c-.691,0-1.44.228-1.436-.923,0-.618-.734-.55-1.162-.762A4.285,4.285,0,0,1-237,313.3c-.1-.566-.713-1.543.234-1.734.73-.147,1.922-.774,2.288.955s3.5,2.3,4.694.98a1.756,1.756,0,0,0,.521-1.906,2.251,2.251,0,0,0-1.995-1.516c-.693-.041-1.4.017-2.079-.085a4.316,4.316,0,0,1-3.754-3.713,4.44,4.44,0,0,1,2.41-4.9c.676-.35,1.5-.417,1.564-1.548.035-.592,2.474-.509,2.489.1.025,1.01.712,1.031,1.3,1.308a4.044,4.044,0,0,1,2.555,3.066c.081.569.775,1.632-.474,1.812-.8.116-1.751.451-2.05-1.086-.329-1.7-3.508-2.209-4.725-.92a1.9,1.9,0,0,0-.51,1.836,1.9,1.9,0,0,0,1.338,1.356,8.222,8.222,0,0,0,2.057.2,4.591,4.591,0,0,1,4.422,3.466,4.738,4.738,0,0,1-2.559,5.377c-.6.291-1.3.3-1.346,1.284C-230.648,318.392-231.445,317.881-231.828,318.055Z"
                      transform="translate(-58.613 -41.311)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_26"
                      data-name="Path 26"
                      d="M-253.408,262.917a1.907,1.907,0,0,1,1.253,1.878c.1,1-1.043,1.268-1.675,1.333-1.012.1-1.434-1.054-1.468-1.756C-255.349,263.284-253.957,263.582-253.408,262.917Z"
                      transform="translate(-47.435 -18.657)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_27"
                      data-name="Path 27"
                      d="M-257.225,389.331c-1.33.332-1.311-.559-1.442-1.491-.209-1.493,1.019-1.272,1.7-1.366,1.353-.187.868,1.046,1.03,1.716C-255.673,389.269-256.325,389.47-257.225,389.331Z"
                      transform="translate(-45.331 -95.305)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_28"
                      data-name="Path 28"
                      d="M-238.32,260.293c-.072,1.328-1.215,1.144-1.925,1.2-1.215.1-1.07-1.253-1.079-1.782-.023-1.313,1.425-1.079,2.145-1.139C-238.314,258.5-238.543,259.655-238.32,260.293Z"
                      transform="translate(-56.105 -15.96)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_29"
                      data-name="Path 29"
                      d="M-281.629,295.233c-.62.639-.355,1.874-1.317,1.951-.721.058-1.97-.2-2.012-.966-.038-.735.263-2.04,1.3-2.174C-283,293.957-282.226,294.591-281.629,295.233Z"
                      transform="translate(-29.032 -37.964)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_30"
                      data-name="Path 30"
                      d="M-264.174,272.833c-.511.656-1.183,1.518-1.822,1.442-.7-.085-1.7-.922-1.532-1.765a1.98,1.98,0,0,1,1.879-1.484C-264.923,271.112-264.569,272.112-264.174,272.833Z"
                      transform="translate(-39.836 -23.683)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_31"
                      data-name="Path 31"
                      d="M-279.315,283.61c1.353-.46,1.047-2.721,2.868-1.656.783.458,1.478.938.537,2.134C-277.4,285.984-277.9,283.833-279.315,283.61Z"
                      transform="translate(-32.535 -30.293)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_32"
                      data-name="Path 32"
                      d="M-286.132,309.656c-.362.424.283,1.8-1.159,1.467-.727-.167-1.946.02-1.524-1.442.2-.7-.08-1.884,1.262-1.487C-286.937,308.374-285.7,308.169-286.132,309.656Z"
                      transform="translate(-26.588 -46.699)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_33"
                      data-name="Path 33"
                      d="M-279.405,352.155a2.565,2.565,0,0,1-1.832,1.4c-1.035-.05-1.4-1.328-1.449-2.106-.047-.825,1.2-1.094,1.851-1.126C-279.89,350.278-280.019,351.53-279.405,352.155Z"
                      transform="translate(-30.442 -72.889)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_34"
                      data-name="Path 34"
                      d="M-262.525,372.025c.563.751,1.536,1.38,1.426,2.277-.1.777-1.264,1.211-1.924,1.136a1.773,1.773,0,0,1-1.262-1.8C-264.186,372.933-263.286,372.479-262.525,372.025Z"
                      transform="translate(-41.854 -86.352)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_35"
                      data-name="Path 35"
                      d="M-289.63,324.36c-.045-.85-.164-1.484,1.081-1.449s1.568.409,1.623,1.6c.061,1.333-.747,1.1-1.54,1.225C-289.824,325.954-289.654,325.083-289.63,324.36Z"
                      transform="translate(-26.119 -55.879)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_36"
                      data-name="Path 36"
                      d="M-287.853,338.451c-.065-1.371.949-1.147,1.544-1.275,1.468-.314,1.155,1.019,1.3,1.711.281,1.3-1.079,1.106-1.624,1.206C-288.093,340.364-287.173,338.735-287.853,338.451Z"
                      transform="translate(-27.236 -64.701)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_37"
                      data-name="Path 37"
                      d="M-270.951,363.839c-.6.569-1.275,1.644-1.746,1.561a2.132,2.132,0,0,1-1.7-1.94,1.825,1.825,0,0,1,1.768-1.353C-271.9,362.2-271.434,363.086-270.951,363.839Z"
                      transform="translate(-35.585 -80.194)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_38"
                      data-name="Path 38"
                      d="M-220.037,278.165a25.341,25.341,0,0,0-25.1-20.943c-1.153,0-1.155.531-1.148,1.373s0,1.438,1.168,1.346a16.183,16.183,0,0,1,5.057.564c8.8,2.125,14.615,7.541,16.961,16.237,2.33,8.638.014,16.2-6.444,22.429A13.736,13.736,0,0,0-234,307.094a31.821,31.821,0,0,0-.156,4.913c.009.906-.133,1.354-1.218,1.346-6.379-.049-12.759-.02-19.138-.032-.448,0-1.079.242-1.15-.576-.125-1.437-1.232-.746-1.893-.78-1.017-.052-.693.816-.7,1.392-.018.949,0,1.894,0,2.841h.048c0,1.01-.038,2.023.006,3.031a11.939,11.939,0,0,0,8.916,10.946,21.866,21.866,0,0,0,6.025.336A11.568,11.568,0,0,0-231.745,319.9c.266-3.326.142-6.687.122-10.032a10.975,10.975,0,0,1,3.606-8.423C-221.258,295.093-218.548,287.3-220.037,278.165Zm-33.7,45.968h17.591c-3.252,5.167-14.152,5.268-17.591,0Zm15.818-2.825c-5.238,0-10.476-.067-15.709.055-1.462.034-1.807-.542-1.974-1.768-.482-3.5-.421-3.611,2.992-3.62,2.587-.007,5.174,0,7.761,0,3.028,0,6.059.058,9.085-.028,1.21-.035,1.618.245,1.608,1.537-.033,3.836.03,3.828-3.763,3.825Z"
                      transform="translate(-45.571 -15.123)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_39"
                      data-name="Path 39"
                      d="M-314.513,399.331c-.853-.114-2.044.423-2.483-.3-.426-.7-.181-1.822-.2-2.759-.02-.884,0-1.769,0-2.653,0-1.516-.038-3.033.011-4.547.043-1.3-.562-1.825-1.817-1.812-2.337.024-4.674.035-7.01-.005-1.411-.024-1.873.665-1.85,1.985.045,2.589-.106,5.187.054,7.766.114,1.82-.3,2.719-2.287,2.346a1.256,1.256,0,0,0-1.547.781,1.438,1.438,0,0,0,.324,1.56c2.524,2.905,5.02,5.834,7.518,8.76.736.862,1.56,1.163,2.391.216,2.66-3.036,5.318-6.077,7.888-9.188C-312.726,400.506-313.271,399.5-314.513,399.331Zm-7.329,7.819c-.422.5-.748.767-1.3.081-1.372-1.7-2.811-3.354-4.352-5.178,1.932.063,2.391-.865,2.33-2.47-.1-2.83.005-5.667-.045-8.5-.016-.887.23-1.157,1.146-1.207,4.221-.228,4.219-.263,4.213,3.974,0,1.952.068,3.909-.024,5.856-.076,1.587.524,2.391,2.432,2.327-1.623,1.886-3.016,3.5-4.4,5.119Z"
                      transform="translate(0 -95.799)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                    <path
                      id="Path_40"
                      data-name="Path 40"
                      d="M-145.236,242.392c-2.493-2.926-4.963-5.871-7.471-8.784-.639-.742-1.525-1.131-2.287-.273-2.72,3.063-5.412,6.154-8.019,9.313-.786.953-.2,1.974,1.042,2.123,2.657.324,2.655.324,2.65,3.088q0,1.325,0,2.65h.014c0,1.451.073,2.908-.02,4.353-.1,1.539.655,2.007,2.035,1.99q3.312-.042,6.624.005c1.41.02,2.066-.538,2.026-2.029-.072-2.649.09-5.307-.062-7.949-.1-1.727.412-2.405,2.149-2.114a1.366,1.366,0,0,0,1.638-.634A1.51,1.51,0,0,0-145.236,242.392Zm-6.116,2.018c.1,2.768-.027,5.544.047,8.314.029,1.1-.177,1.518-1.412,1.522-3.961.014-3.961.076-3.954-3.892,0-1.89-.035-3.781.022-5.669.047-1.543-.136-2.82-2.492-2.551,1.684-1.948,3.141-3.579,4.529-5.266.552-.671.873-.432,1.3.079,1.366,1.637,2.748,3.26,4.365,5.176C-150.984,241.943-151.405,242.846-151.351,244.41Z"
                      transform="translate(-104.473)"
                      fill="#e4e9eb"
                      stroke="#04133b"
                      stroke-width="1"
                    />
                  </g>
                </svg>
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
          <div className="work__across__container__left__img__wrapper__overlay">
            <div className="work__across__container__left__img__wrapper__overlay__heading">
              We Work Across <br /> Many Industries – <span> Find Yours!</span>
            </div>
          </div>
        </div>
        <div className="work__across__container__content">
          <WeAcrossCard title="E-Commerce Apps" svg={cartSvg} />
          <WeAcrossCard title="LifeStyle" svg={lifeSvg} />
          <WeAcrossCard title="AR Apps" svg={arSvg} />
          <WeAcrossCard title="Utility Apps" svg={utilSvg} />
          <WeAcrossCard title="Enterprise Apps" svg={enterSvg} />
          <WeAcrossCard title="Social Networking" svg={markSvg} />
        </div>
      </div>
    </>
  );
}
