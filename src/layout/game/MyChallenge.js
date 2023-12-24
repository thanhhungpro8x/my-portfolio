import Aux from "../../component/Aux";
import "./MyChallenge.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GameNav from "./GameNav";
import data from "../../asset/data/game.json";
import GameScreen from "./GameScreen";
import GameIntro from "./GameIntro";
import "./ChallengeResponsive.css";

const MyChallenge = ({ setIsWinner }) => {
  const [cardItems, setCardItems] = useState(data);

  useEffect(() => {
    document.title = "😉 DOAN - Game Challenge";
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Aux>
      <div className="fixedBackground">
        <div className="overlay"></div>
      </div>
      <div className="gameContainer ">
        <GameIntro />
        <GameScreen
          cardItems={cardItems}
          setCardItems={setCardItems}
          setIsWinner={setIsWinner}
        />
        <GameNav />
      </div>
    </Aux>
  );
};

export default MyChallenge;
