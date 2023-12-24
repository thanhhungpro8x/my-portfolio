import Aux from "../../component/Aux";
import CardGame from "../../component/CardGame";
import SoundPlay from "../../component/SoundPlay";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../../component/Popup";
import success from "../../asset/data/game-success.json";
import successFr from "../../asset//data/fr/game-success.json";
import { useTranslation } from "react-i18next";
import "./GameScreen.css";

const GameScreen = ({ cardItems, setCardItems, setIsWinner }) => {
  const { t, i18n } = useTranslation();
  const [matchedItems, setMatchedItems] = useState([]);
  const [cardNotMatches, setCardNotMatches] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [countdown, setCountdown] = useState(-1);
  const [playState, setPlayState] = useState({
    isCountDownPlay: false,
    isIncorrectPlay: false,
    isCorrectPlay: false,
    isWinningPlay: false,
  });

  const languages = {
    en: success,
    fr: successFr,
  };

  const [modalState, setModalState] = useState(languages[i18n.language]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const timer =
      countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    if (countdown === 0) {
      const updateItems = cardItems.map((item) => {
        return { ...item, open: false, isWait: false };
      });
      setCardItems(updateItems);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const checkForMatch = () => {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];

    if (card1.id === card2.id) {
      return;
    }
    if (card1.name === card2.name) {
      setPlayState({
        isCountDownPlay: false,
        isCorrectPlay: true,
        isIncorrectPlay: false,
        isWinningPlay: false,
      });
      setMatchedItems([...matchedItems, card1, card2]);
      setCardNotMatches([]);
    } else {
      setCardNotMatches([card1, card2]);
      setPlayState({
        isCountDownPlay: false,
        isCorrectPlay: false,
        isIncorrectPlay: true,
        isWinningPlay: false,
      });
    }
  };

  useEffect(() => {
    if (flippedCards && flippedCards.length === 2) {
      checkForMatch();
      setFlippedCards([]);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (cardItems.length === matchedItems.length) {
      setPlayState({
        isCountDownPlay: false,
        isCorrectPlay: false,
        isIncorrectPlay: false,
        isWinningPlay: true,
      });
      setModalState({ ...modalState, modalIsOpen: true });
    }
  }, [cardItems, matchedItems]);

  const handleFlipCard = (card) => {
    setFlippedCards([...flippedCards, card]);
    setPlayState({
      isCountDownPlay: false,
      isCorrectPlay: false,
      isIncorrectPlay: false,
      isWinningPlay: false,
    });
  };

  const handlePlay = () => {
    const updateItems = cardItems.map((item) => {
      return { ...item, open: true, isWait: false };
    });
    setCardItems(updateItems);
    setCountdown(10);
    setPlayState({ ...playState, isCountDownPlay: true });
  };

  const handleCloseModal = () => {
    setModalState({ ...modalState, modalIsOpen: false });
  };

  const handleOkModal = () => {
    handleCloseModal();
    setIsWinner(true);
  };

  return (
    <Aux>
      <div className="section" data-aos="zoom-in" id="gameArea">
        {countdown === -1 ? (
          <div className="sectionOvelay">
            <h3>{t("intro:gameQuestion")}</h3>
            <button className="playButton" onClick={handlePlay}>
              {t("intro:playGameButton")}
            </button>
          </div>
        ) : (
          ""
        )}
        <div
          className="gameArea row justify-content-center"
          data-aos="flip-down"
        >
          <h3 className="justify-content-center">
            {countdown && countdown > 0 ? (
              <Aux>{t("intro:gameInstruction", { countdown })}</Aux>
            ) : (
              ""
            )}
          </h3>

          {cardItems.map((item, index) => {
            return (
              <CardGame
                key={item.id}
                item={item}
                handleFlipCard={handleFlipCard}
                cardNotMatches={cardNotMatches}
                matchedItems={matchedItems}
              />
            );
          })}
        </div>
      </div>
      <Popup
        modalState={modalState}
        closeModal={handleCloseModal}
        handleOkModal={handleOkModal}
      />
      <SoundPlay
        isPlay={playState.isCountDownPlay}
        soundFileName="mixkit-countdown.wav"
      />
      <SoundPlay
        soundFileName="mixkit-click-error.wav"
        isPlay={playState.isIncorrectPlay}
      />
      <SoundPlay
        soundFileName="mixkit-correct-answer.wav"
        isPlay={playState.isCorrectPlay}
      />
      <SoundPlay
        soundFileName="mixkit-cheering.wav"
        isPlay={playState.isWinningPlay}
      />
    </Aux>
  );
};

export default GameScreen;
