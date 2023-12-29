import Aux from "../../component/Aux";
import "./MyChallenge.css";
import { useState, useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GameNav from "./GameNav";
import dataHard from "../../asset/data/en/game.json";
import dataEasy from "../../asset//data/en/game-easy.json";
import GameScreen from "./GameScreen";
import GameIntro from "./GameIntro";
import "./ChallengeResponsive.css";
import { useNavigate } from "react-router-dom";
import { IS_PLAYED } from "../../constant";
import React from "react";
import { GameModeContext } from "../../context/GameModeContext";
import { shuffleCard } from "../../util/GameUtil";

const MyChallenge = ({ isPlay }) => {
  const [gameModeEasy, setGameModeEasy] = useState(true);
  const [cardItems, setCardItems] = useState(dataEasy);
  const [isWinner, setIsWinner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "😉 DOAN - Game Challenge";
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (isPlay) {
      navigate("/profile#home", { replace: true });
    }
  }, [isPlay, navigate]);

  useEffect(() => {
    if (isWinner) {
      localStorage.setItem(IS_PLAYED, isWinner);
      navigate("/profile#home", { replace: true });
    }
  }, [isWinner, navigate]);

  useEffect(() => {
    const gameData = gameModeEasy ? dataEasy : dataHard;
    setCardItems(shuffleCard(gameData));
  }, [gameModeEasy]);

  const handleChangeGameMode = () => {
    setGameModeEasy(!gameModeEasy);
  };

  return (
    <Aux>
      <GameModeContext.Provider value={gameModeEasy}>
        <div className="fixedBackground">
          <div className="overlay"></div>
        </div>
        <div className="gameContainer ">
          <GameIntro />
          <GameScreen
            handleChangeGameMode={handleChangeGameMode}
            cardItems={cardItems}
            setCardItems={setCardItems}
            setIsWinner={setIsWinner}
          />
          <GameNav />
        </div>
      </GameModeContext.Provider>
    </Aux>
  );
};

export default MyChallenge;
