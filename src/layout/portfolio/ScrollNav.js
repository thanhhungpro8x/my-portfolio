import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
import "./ScrollNav.css";

const ScrollNav = () => {
  return (
    <Aux>
      <ul className="menu d-flex">
        <li>
          <a className="scrollTo" href="#home">
            <span>Greeting</span>{" "}
            <DynamicIcon
              iconName={"SentimentSatisfiedAlt"}
              fontSizeValue={"medium"}
              marginValue={"5px"}
            />
          </a>
        </li>
        <li>
          <a className="scrollTo" href="#about">
            <span>About</span>{" "}
            <DynamicIcon
              iconName={"PermIdentity"}
              fontSizeValue={"medium"}
              marginValue="5px"
            />
          </a>
        </li>
        <li>
          <a className="scrollTo" href="#resume">
            <span>Resume</span>{" "}
            <DynamicIcon
              iconName={"BusinessCenter"}
              fontSizeValue={"medium"}
              marginValue="5px"
            />
          </a>
        </li>
        <li>
          <a className="scrollTo" href="#services">
            <span>Services</span>{" "}
            <DynamicIcon
              iconName={"Architecture"}
              fontSizeValue={"medium"}
              marginValue="5px"
            />
          </a>
        </li>
        <li>
          <a className="scrollTo" href="#skills">
            <span>Skills</span>{" "}
            <DynamicIcon
              iconName={"DownhillSkiing"}
              fontSizeValue={"medium"}
              marginValue="5px"
            />
          </a>
        </li>
        <li>
          <a className="scrollTo" href="#portfolio">
            <span>Project</span>{" "}
            <DynamicIcon
              iconName={"Apps"}
              fontSizeValue={"medium"}
              marginValue={"5px"}
            />
          </a>
        </li>
        <li>
          <a className="scrollTo" href="#verified">
            <span>Verified</span>{" "}
            <DynamicIcon
              iconName={"Verified"}
              fontSizeValue={"medium"}
              marginValue="5px"
            />
          </a>
        </li>
        <li>
          <a className="scrollTo" href="#contact">
            <span>Contact</span>{" "}
            <DynamicIcon
              iconName={"Call"}
              fontSizeValue={"medium"}
              marginValue="5px"
            />
          </a>
        </li>
      </ul>
    </Aux>
  );
};

export default ScrollNav;
