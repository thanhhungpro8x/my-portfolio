import "./MyProject.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
import { useEffect } from "react";
import projectsFr from "../../asset/data/fr/project.json";
import projectsEn from "../../asset/data/en/project.json";
import { useTranslation } from "react-i18next";
import React from "react";

const MyProject = () => {
  const { t, i18n } = useTranslation();
  const images = require.context("../../asset/project/");
  const languages = {
    en: projectsEn,
    fr: projectsFr,
  };

  const localeData = languages[i18n.language];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
  }, []);

  const getImage = (imageName) => {
    return images(`./${imageName}`);
  };

  return (
    <Aux>
      <section
        tabIndex={5}
        className="portfolioArea pageSection scrollToPage"
        id="portfolio"
      >
        <div className="customContainer">
          <div className="portfolioContent contentWidth">
            <div className="sectionHeader">
              <h4 className="subtitle scrollAnimation" data-aos="fade-up">
                <DynamicIcon
                  iconName={"Apps"}
                  fontSizeValue={"medium"}
                  marginValue={"5px"}
                />{" "}
                {t("project:projectHeaderName")}
              </h4>
              <h1 className="scrollAnimation">
                {t("project:projectTitle1")}{" "}
                <span>{t("project:projectTitle2")}</span>
              </h1>
            </div>

            <div className="row portfolioItems">
              {localeData.datas?.map((item, index) => {
                return (
                  <div
                    key={item.projectName + index}
                    className="col-md-12 scrollAnimation"
                    data-aos={item.aos}
                  >
                    <div className="portfolioItem portfolioFull">
                      <div className="portfolioItemInner">
                        {item.images?.map((image, index) => {
                          return (
                            <a
                              key={image.name + index}
                              href={getImage(image.name)}
                              data-lightbox={item.albumName}
                            >
                              <img
                                key={image.albumName + index}
                                src={getImage(image.name)}
                                alt={item.albumName}
                              />
                            </a>
                          );
                        })}

                        <ul className="portfolioCategories">
                          {item.techStack?.map((tech, index) => {
                            return (
                              <li key={tech.name + index}>
                                <a href={tech.link}>{tech.name}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <h2>
                        <a href={item.projectSite}>{item.projectName}</a>
                      </h2>
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

export default MyProject;
