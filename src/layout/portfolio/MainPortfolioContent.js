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
import { useEffect, useState } from "react";
import React from "react";

const MainPortfolioContent = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    document.title = "😉 DOAN - Portfolio";
    // document.getElementById("home").scrollIntoView({ behavior: "smooth" });

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // console.log("Width: ", screenSize.width, "Height: ", screenSize.height);
    if (screenSize.width <= 1220) {
      document
        .getElementById("leftSidebar")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }
  }, [screenSize]);

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
