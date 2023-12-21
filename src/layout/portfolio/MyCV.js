import { useEffect } from "react";
import "./MyCV.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
import worksFr from "../../asset/data/fr/work-exp.json";
import worksEn from "../../asset/data/work-exp.json";
import { useTranslation } from "react-i18next";

const MyCV = () => {
  const { t, i18n } = useTranslation();
  const languages = {
    en: worksEn,
    fr: worksFr,
  };
  const localeData = languages[i18n.language];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Aux>
      <section className="resumeArea pageSection scrollToPage" id="resume">
        <div className="customContainer">
          <div className="resumeContent contentWidth">
            <div className="sectionHeader">
              <h4 className="subtitle scrollAnimation" data-aos="fade-up">
                <DynamicIcon
                  iconName={"BusinessCenter"}
                  fontSizeValue={"medium"}
                  marginValue="5px"
                />{" "}
                {t("work-exp:expHeaderName")}
              </h4>
              <h1 className="scrollAnimation" data-aos="fade-up">
                {t("work-exp:expTitle1")} <span>{t("work-exp:expTitle2")}</span>
              </h1>
            </div>

            <div className="resumeTimeline">
              {localeData.datas?.map((item, index) => {
                return (
                  <div
                    key={item.projects}
                    className="item scrollAnimation"
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  >
                    <span className="date">{item.period}</span>
                    <h2>{item.jobTitle}</h2>
                    <p>{item.projects}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Aux>
  );
};

export default MyCV;
