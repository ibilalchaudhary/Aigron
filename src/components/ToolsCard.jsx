import React from "react";
import clientLogo from "../assets/clientLogo.svg";

export default function ToolsCard() {
  return (
    <div className="portfolio__details__container__tools__card">
      <img
        src={clientLogo}
        alt="ToolsImg"
        className="portfolio__details__container__tools__card__img"
      />
    </div>
  );
}
