import { useEffect } from "react";
import Aux from "../../component/Aux";
import "./AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicIcon from "../../component/DynamicIcon";
// import data from "../../asset/data/about-me.json";
import { useTranslation } from "react-i18next";
import React from "react";

const AboutMe = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Aux>
      <section className="aboutMeArea" id="about">
        <div className="customContainer">
          <div className="aboutMeContent contentWidth">
            <div className="sectionHeader">
              <h4 className="subtitle scrollAnimation" data-aos="fade-up">
                <DynamicIcon
                  iconName={"PermIdentity"}
                  fontSizeValue={"medium"}
                  marginValue="5px"
                />{" "}
                {t("about-me:aboutMeHeaderName")}
              </h4>
              <h1 className="scrollAnimation" data-aos="fade-up">
                {t("about-me:aboutMeTitle")}
                <br />
                <span>{t("about-me:aboutMeSubTitle")}</span>
              </h1>
            </div>
            <p className="scrollAnimation" data-aos="fade-up">
              {t("about-me:aboutMeDescription")}
            </p>
          </div>
        </div>
      </section>
    </Aux>
  );
};

export default AboutMe;
