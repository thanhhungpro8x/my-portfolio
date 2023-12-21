import "./LeftSide.css";
import logo from "../../asset/image/logo.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Aux from "../../component/Aux";
// import data from "../../asset/data/leftside.json";
import { useTranslation } from "react-i18next";
import IconStatic from "../../component/IconStatic";

const LeftSideHome = () => {
  const { t, i18n } = useTranslation();
  const images = require.context("../../asset/image/");
  const getImage = (imageName) => {
    return images(`./${imageName}`);
  };

  const handleChangeLang = (langCode) => {
    console.log(langCode);
    i18n.changeLanguage(langCode);
  };

  return (
    <Aux>
      <div className="leftSidebar">
        <div className="languageContainer d-flex align-items-center justify-content-left">
          <a href="#french" onClick={() => handleChangeLang("fr")} alt="French">
            <IconStatic iconName={"france.png"} iconAlt={"French"} />
          </a>
          <a
            href="#english"
            onClick={() => handleChangeLang("en")}
            alt="English"
          >
            <IconStatic iconName={"united-kingdom.png"} iconAlt={"English"} />
          </a>
        </div>
        <div className="leftSidebarHeader d-flex align-items-center justify-content-between">
          <img src={logo} alt="Logo" className="logoHeader" />
          <span className="designation">{t("leftside:jobTitle")}</span>
        </div>
        <div className="d-flex justify-content-center">
          <img className="myPhoto" src={getImage("Portrait.png")} alt="Me" />
        </div>
        <h2 className="email">{t("leftside:email")}</h2>
        <h2 className="address">{t("leftside:address")}</h2>
        <p className="copyright">&copy; {t("leftside:rights")}</p>
        <ul className="socialMediaProfile d-flex align-items-center flex-wrap justify-content-center">
          <li>
            <a href={t("leftside:twitter")}>
              <TwitterIcon />
            </a>
          </li>
          {/* <li>
            <a href={data.github}>
              <InstagramIcon />
            </a>
          </li> */}
          <li>
            <a href={t("leftside:github")}>
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href={t("leftside:linkedIn")}>
              <LinkedInIcon />
            </a>
          </li>
        </ul>

        <a href="#contact" className="themeBtn">
          <EmailIcon /> {t("leftside:sendMe")}
        </a>
      </div>
    </Aux>
  );
};
export default LeftSideHome;
