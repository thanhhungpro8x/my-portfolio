import Aux from "../../component/Aux";
import IconStatic from "../../component/IconStatic";
// import game from "../../asset/data/intro.json";
import { useTranslation } from "react-i18next";
import React from "react";

const GameIntro = () => {
  const { t } = useTranslation();
  return (
    <Aux>
      <div className="section" data-aos="fade-up" id="gameIntro">
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
