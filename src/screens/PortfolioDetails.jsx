import React from "react";
import ProjectCard from "../components/ProjectCard";
import ToolsCard from "../components/ToolsCard";

export default function PortfolioDetails() {
  return (
    <div className="portfolio__details__container">
      <ProjectCard />
      <div className="portfolio__details__container__heading">Details</div>
      <div className="portfolio__details__container__para">
        Region This leading machine builder is responsible for designing,
        developing, building and installing high-quality machines all over the
        world. With their expertise in the food industry, they are able to
        respond seamlessly to the needs of their customers. Within this young
        progressive company there is an open culture and a lot of investment in
        the employees. You can find their products with their global customers
        where they design and commission not only machines but entire production
        lines. Our client has a proven track record of services when you look at
        the quality of their way of producing, handling systems and strategy of
        how they are operated
      </div>

      <div className="portfolio__details__container__tools__heading">
        Tool Used
      </div>
      <div className="portfolio__details__container__tools__wrapper">
        <ToolsCard />
        <ToolsCard />
        <ToolsCard />
        <ToolsCard />
        <ToolsCard />
        <ToolsCard />
      </div>
    </div>
  );
}
