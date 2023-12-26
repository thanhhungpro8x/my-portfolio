import "./GameIntro.css";
import Aux from "../../component/Aux";
import IconStatic from "../../component/IconStatic";
// import game from "../../asset/data/intro.json";
import { useTranslation } from "react-i18next";
import React from "react";

const GameIntro = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLang = (langCode) => {
    console.log(langCode);
    i18n.changeLanguage(langCode);
  };

  return (
    <Aux>
      <div className="section" data-aos="fade-up" id="gameIntro">
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
        <h1>{t("intro:introName")}</h1>
        <div className="moveIcon">
          <a href="#gameArea">
            <IconStatic iconName="godown.png" iconAlt={t("intro:moveToGame")} />
          </a>
        </div>
      </div>
    </Aux>
  );
};
export default GameIntro;
