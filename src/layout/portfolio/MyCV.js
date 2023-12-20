import { useEffect } from "react";
import "./MyCV.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
import works from "../../asset/data/work-exp.json";

const MyCV = () => {
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
                {works.expHeaderName}
              </h4>
              <h1 className="scrollAnimation" data-aos="fade-up">
                {works.expTitle1} <span>{works.expTitle2}</span>
              </h1>
            </div>

            <div className="resumeTimeline">
              {works.datas?.map((item, index) => {
                return (
                  <div
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
