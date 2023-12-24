import "./RightSide.css";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import data from "../../asset/data/rightside.json";
import { useTranslation } from "react-i18next";

const RightSideHome = () => {
  const { t } = useTranslation();
  const addActive = () => {
    document.querySelector(".responsiveSidebarMenu").classList.add("active");
  };
  const removeActive = () => {
    document.querySelector(".responsiveSidebarMenu").classList.remove("active");
  };
  return (
    <Aux>
      <div>
        <span className="iconMenuRight" onClick={addActive}>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
        <div className="responsiveSidebarMenu">
          <div className="overlay" onClick={removeActive}></div>
          <div className="sidebarMenuInner">
            <div className="menuWrap">
              <p>{t("rightside:menu")}</p>
              <ul className="menu d-flex">
                <li>
                  <a className="scrollTo" href="#home" onClick={removeActive}>
                    <DynamicIcon
                      iconName={"SentimentSatisfiedAlt"}
                      fontSizeValue={"medium"}
                      marginValue={"5px"}
                    />{" "}
                    <span> {t("rightside:introductionMenu")}</span>
                  </a>
                </li>
                <li>
                  <a className="scrollTo" href="#about" onClick={removeActive}>
                    <DynamicIcon
                      iconName={"PermIdentity"}
                      fontSizeValue={"medium"}
                      marginValue="5px"
                    />{" "}
                    <span>{t("rightside:aboutMenu")}</span>
                  </a>
                </li>
                <li>
                  <a className="scrollTo" href="#resume" onClick={removeActive}>
                    <DynamicIcon
                      iconName={"BusinessCenter"}
                      fontSizeValue={"medium"}
                      marginValue="5px"
                    />{" "}
                    <span>{t("rightside:resumeMenu")}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="scrollTo"
                    href="#services"
                    onClick={removeActive}
                  >
                    <DynamicIcon
                      iconName={"Architecture"}
                      fontSizeValue={"medium"}
                      marginValue="5px"
                    />{" "}
                    <span>{t("rightside:servicesMenu")}</span>
                  </a>
                </li>
                <li>
                  <a className="scrollTo" href="#skills" onClick={removeActive}>
                    <DynamicIcon
                      iconName={"DownhillSkiing"}
                      fontSizeValue={"medium"}
                      marginValue="5px"
                    />{" "}
                    <span>{t("rightside:skillsMenu")}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="scrollTo"
                    href="#portfolio"
                    onClick={removeActive}
                  >
                    <DynamicIcon
                      iconName={"Apps"}
                      fontSizeValue={"medium"}
                      marginValue={"5px"}
                    />
                    <span>{t("rightside:projectsMenu")}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="scrollTo"
                    href="#verified"
                    onClick={removeActive}
                  >
                    <DynamicIcon
                      iconName={"Verified"}
                      fontSizeValue={"medium"}
                      marginValue="5px"
                    />{" "}
                    <span>{t("rightside:verifiedMenu")}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="scrollTo"
                    href="#contact"
                    onClick={removeActive}
                  >
                    <DynamicIcon
                      iconName={"Call"}
                      fontSizeValue={"medium"}
                      marginValue="5px"
                    />{" "}
                    <span>{t("rightside:contactMenu")}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="scrollTo"
                    href={t("rightside:linkCv")}
                    target="_blank"
                    rel="noreferrer"
                    onClick={removeActive}
                  >
                    <DynamicIcon
                      iconName={"DownloadForOffline"}
                      fontSizeValue={"medium"}
                      marginValue="5px"
                    />{" "}
                    <span>{t("rightside:myCv")}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="sidebarSocial">
              <p>{t("rightside:social")}</p>
              <ul className="social-links d-flex align-items-center">
                <li>
                  <a href={t("rightside:twitter")}>
                    <TwitterIcon />
                  </a>
                </li>
                {/* <li>
                  <a href={data.github}>
                    <InstagramIcon />
                  </a>
                </li> */}
                <li>
                  <a href={t("rightside:github")}>
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href={t("rightside:linkedIn")}>
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default RightSideHome;
