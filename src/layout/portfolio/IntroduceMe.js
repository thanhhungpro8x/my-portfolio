import { useEffect } from "react";
import "./IntroduceMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
import data from "../../asset/data/introduction.json";

const IntroduceMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Aux>
      <section className="introduceSection scrollToPage" id="home">
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
                {data.introHeaderName}
              </h4>
              <h1 className="scrollAnimation" data-aos="fade-up">
                {data.introTitle1} <span>{data.introTitleName}</span>
                {data.introTitle2}
              </h1>
            </div>
            <p className="scrollAnimation" data-aos="fade-up">
              {data.introDescription}
            </p>

            <div className="facts d-flex">
              <div className="left scrollAnimation" data-aos="fade-right">
                <h1>{data.introExpNum}</h1>
                <p>{data.introExpMsg}</p>
              </div>
              <div className="right scrollAnimation" data-aos="fade-left">
                <h1>{data.introProjectNum}</h1>
                <p>{data.introProjectMsg}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Aux>
  );
};

export default IntroduceMe;
