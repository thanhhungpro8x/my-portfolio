import Aux from "../../component/Aux";
import CardGame from "../../component/CardGame";
import SoundPlay from "../../component/SoundPlay";
import { useEffect, useState, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../../component/Popup";
import success from "../../asset/data/en/game-success.json";
import successFr from "../../asset/data/fr/game-success.json";
import { useTranslation } from "react-i18next";
import "./GameScreen.css";
import React from "react";
import GameConfirmation from "../../component/GameConfirmation";
import DynamicIcon from "../../component/DynamicIcon";
import { useNavigate } from "react-router-dom";

const initPlayState = {
  isCountDownPlay: false,
  isCorrectPlay: false,
  isIncorrectPlay: false,
  isWinningPlay: false,
};

const GameScreen = memo(
  ({ cardItems, setCardItems, setIsWinner, handleChangeGameMode }) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [matchedItems, setMatchedItems] = useState([]);
    const [cardNotMatches, setCardNotMatches] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [countdown, setCountdown] = useState(-1);
    const [coundDownSoundName, setCoundDownSoundName] = useState(
      t("intro:gameCountDownFile")
    );
    const [playState, setPlayState] = useState({ ...initPlayState });

    const languages = {
      en: success,
      fr: successFr,
    };

    const [modalState, setModalState] = useState(languages[i18n.language]);

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
      setModalState(languages[i18n.language]);
      setCoundDownSoundName(t("intro:gameCountDownFile"));
      setPlayState({ ...initPlayState });
    }, [i18n.language]);

    useEffect(() => {
      let timer;

      if (countdown > 0) {
        timer = setInterval(
          () => setCountdown((prevCountdown) => prevCountdown - 1),
          1000
        );
      }

      if (countdown === 0) {
        const updatedItems = cardItems.map((item) => ({
          ...item,
          open: false,
          isWait: false,
        }));
        setCardItems(updatedItems);
      }

      return () => clearInterval(timer);
    }, [countdown]);

    const checkForMatch = () => {
      const [card1, card2] = flippedCards;

      if (card1.id === card2.id) {
        return;
      }

      const isCorrect = card1.name === card2.name;
      const updatedPlayState = isCorrect
        ? { ...initPlayState, isCorrectPlay: true }
        : { ...initPlayState, isIncorrectPlay: true };

      setPlayState(updatedPlayState);

      if (isCorrect) {
        setMatchedItems([...matchedItems, card1, card2]);
        setCardNotMatches([]);
      } else {
        setCardNotMatches([card1, card2]);
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
          ...initPlayState,
          isWinningPlay: true,
        });
        setModalState({ ...modalState, modalIsOpen: true });
      }
    }, [cardItems.length, matchedItems.length]);

    const handleFlipCard = (card) => {
      setFlippedCards([...flippedCards, card]);
      setPlayState({ ...initPlayState });
    };

    const handlePlay = () => {
      const updateItems = cardItems.map((item) => {
        return { ...item, open: true, isWait: false };
      });
      setCardItems(updateItems);
      setCountdown(10);
      setPlayState((prevPlayState) => ({
        ...prevPlayState,
        isCountDownPlay: true,
      }));
    };

    const handleCloseModal = () => {
      setModalState({ ...modalState, modalIsOpen: false });
    };

    const handleOkModal = () => {
      handleCloseModal();
      setIsWinner(true);
    };

    const handleSkipGame = () => {
      setPlayState({ ...initPlayState });
      navigate("profile", { replace: true });
    };

    return (
      <Aux>
        <div className="section" data-aos="zoom-in" id="gameArea">
          {countdown === -1 ? (
            <GameConfirmation
              handlePlay={handlePlay}
              handleChangeGameMode={handleChangeGameMode}
            />
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
          <div className="skipGame" onClick={() => handleSkipGame()}>
            <span>{t("intro:skipGameButton")}</span>
            <DynamicIcon iconName={"ArrowForward"} iconstyle={"large"} />
          </div>
        </div>
        <Popup
          modalState={modalState}
          closeModal={handleCloseModal}
          handleOkModal={handleOkModal}
        />
        <SoundPlay
          isPlay={playState.isCountDownPlay}
          soundFileName={coundDownSoundName}
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
  }
);

export default GameScreen;
