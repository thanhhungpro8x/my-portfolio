import "./MyProject.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
import { useEffect } from "react";
import projects from "../../asset/data/project.json";

const MyProject = () => {
  const images = require.context("../../asset/project/");

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
                {projects.projectHeaderName}
              </h4>
              <h1 className="scrollAnimation">
                {projects.projectTitle1} <span>{projects.projectTitle2}</span>
              </h1>
            </div>

            <div className="row portfolioItems">
              {projects.datas?.map((item, index) => {
                return (
                  <div
                    className="col-md-12 scrollAnimation"
                    data-aos={item.aos}
                  >
                    <div className="portfolioItem portfolioFull">
                      <div className="portfolioItemInner">
                        {item.images?.map((image) => {
                          return (
                            <a
                              href={getImage(image.name)}
                              data-lightbox={item.albumName}
                            >
                              <img
                                src={getImage(image.name)}
                                alt={item.albumName}
                              />
                            </a>
                          );
                        })}

                        <ul className="portfolioCategories">
                          {item.techStack?.map((tech) => {
                            return (
                              <li>
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
