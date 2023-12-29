import { useEffect } from "react";
import "./IntroduceMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
// import data from "../../asset/data/introduction.json";
import { useTranslation } from "react-i18next";
import React from "react";

const IntroduceMe = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Aux>
      <section className="introduceSection" id="home">
        <div className="customContainer">
          <div className="introduceContent contentWidth">
            <div className="sectionHeader">
              <h4
                className="subtitle scrollAnimation"
                data-animation="fade_from_bottom"
                data-aos="fade-up"
              >
                <DynamicIcon
                  iconName={"SentimentSatisfiedAlt"}
                  fontSizeValue={"medium"}
                  marginValue="5px"
                />
                {t("introduction:introHeaderName")}
              </h4>
              <h2 className="scrollAnimation" data-aos="fade-up">
                {t("introduction:introTitle1")}{" "}
                <span>{t("introduction:introTitleName")}</span>
                {t("introduction:introTitle2")}
              </h2>
            </div>
            <p className="scrollAnimation" data-aos="fade-up">
              {t("introduction:introDescription")}
            </p>

            <div className="facts d-flex">
              <div className="left scrollAnimation" data-aos="fade-right">
                <h1>{t("introduction:introExpNum")}</h1>
                <p> {t("introduction:introExpMsg")}</p>
              </div>
              <div className="right scrollAnimation" data-aos="fade-left">
                <h1>{t("introduction:introProjectNum")}</h1>
                <p>{t("introduction:introProjectMsg")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Aux>
  );
};

export default IntroduceMe;
