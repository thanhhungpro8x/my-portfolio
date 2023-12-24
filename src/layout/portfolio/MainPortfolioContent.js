import "./MainPortfolioContent.css";
import AboutMe from "./AboutMe";
import LeftSideHome from "./LeftSide";
import IntroduceMe from "./IntroduceMe";
import MyCV from "./MyCV";
import ServiceMe from "./ServiceMe";
import MySkill from "./MySkill";
import MyProject from "./MyProject";
import ContactMe from "./ContactMe";
import "./PortfolioResponsive.css";
import RightSideHome from "./RightSide";
import ScrollNav from "./ScrollNav";
import { useEffect } from "react";
import React from "react";

const MainPortfolioContent = () => {
  useEffect(() => {
    document.title = "😉 DOAN - Portfolio";
    document
      .getElementById("leftSidebar")
      .scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <main className="doanPortfolioMain">
      <div id="smoothWrapper">
        <div id="smoothContent">
          <LeftSideHome />
          <RightSideHome />
          <IntroduceMe />
          <AboutMe />
          <MyCV />
          <ServiceMe />
          <MySkill />
          <MyProject />
          <ContactMe />
          <ScrollNav />
        </div>
      </div>
    </main>
  );
};

export default MainPortfolioContent;
