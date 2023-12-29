import { useTranslation } from "react-i18next";
import "./GameConfirmation.css";
import Aux from "./Aux";
import { useContext } from "react";
import { GameModeContext } from "../context/GameModeContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const GameConfirmation = ({ handlePlay, handleChangeGameMode }) => {
  const { t } = useTranslation();
  const gameMode = useContext(GameModeContext);

  return (
    <Aux>
      <div className="sectionOvelay">
        <h3>{t("intro:gameQuestion")}</h3>
        <FormControlLabel
          className="gameSwitchMode"
          control={
            <Switch
              checked={!gameMode}
              onChange={handleChangeGameMode}
              name="gameMode"
            />
          }
          label={gameMode ? t("intro:gameEasyMode") : t("intro:gameHardMode")}
        />
        <button className="playButton" onClick={handlePlay}>
          {t("intro:playGameButton")}
        </button>
      </div>
    </Aux>
  );
};

export default GameConfirmation;
