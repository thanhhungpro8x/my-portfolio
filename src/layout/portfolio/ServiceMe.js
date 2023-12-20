import Aux from "../../component/Aux";
import "./ServiceMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import DynamicIcon from "../../component/DynamicIcon";
import services from "../../asset/data/work-service.json";

const ServiceMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Aux>
      <section
        className="myServicesArea pageSection scrollToPage"
        id="services"
      >
        <div className="customContainer">
          <div className="services-content contentWidth">
            <div className="sectionHeader">
              <h4 className="subtitle scrollAnimation" data-aos="fade-up">
                <DynamicIcon
                  iconName={"Architecture"}
                  fontSizeValue={"medium"}
                  marginValue="5px"
                />{" "}
                {services.workServiceHeaderName}
              </h4>
              <h1 className="scrollAnimation" data-aos="fade-up">
                {services.workServiceTitle1}{" "}
                <span>{services.workServiceTitle2}</span>
              </h1>
            </div>

            <div className="myServicesItems">
              {services.datas?.map((item, index) => {
                return (
                  <div
                    className="myServiceItem scrollAnimation"
                    data-aos="fade-up"
                  >
                    <DynamicIcon
                      iconName={item.serviceIconName}
                      fontSizeValue={"medium"}
                      marginValue="0px"
                    />
                    <h2>{item.serviceTitle}</h2>
                    <p>{item.serviceDescription}</p>
                    <span className="projects">{item.serviceProject}</span>
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

export default ServiceMe;
