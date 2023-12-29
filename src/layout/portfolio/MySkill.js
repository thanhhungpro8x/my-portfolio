import { useEffect } from "react";
import "./MySkill.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
import IconStatic from "../../component/IconStatic";
import skills from "../../asset/data/en/skills.json";
import { useTranslation } from "react-i18next";
import React from "react";

const MySkill = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Aux>
      <section className="mySkillsArea pageSection" id="skills">
        <div className="customContainer">
          <div className="mySkillsContent contentWidth">
            <div className="sectionHeader">
              <h4 className="subtitle scrollAnimation" data-aos="fade-up">
                <DynamicIcon
                  iconName={"DownhillSkiing"}
                  fontSizeValue={"medium"}
                  marginValue="5px"
                />{" "}
                {t("skills:skillsHeaderName")}
              </h4>
              <h1 className="scrollAnimation" data-aos="fade-up">
                {t("skills:skillsTitle1")}{" "}
                <span>{t("skills:skillsTitle2")}</span>
              </h1>
            </div>

            <div className="row skills text-center">
              {skills.datas?.map((item, index) => {
                return (
                  <div
                    key={item.skillName}
                    className="col-md-3 scrollAnimation"
                    data-aos={item.aos}
                  >
                    <div className="skill">
                      <div className="mySkillInner">
                        <IconStatic
                          iconName={item.skillIconName}
                          iconAlt={item.skillName}
                        />
                        <h1 className="percent">{item.skillLevel}</h1>
                      </div>
                      <p className="name">{item.skillName}</p>
                    </div>
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

export default MySkill;
