import Aux from "../../component/Aux";
import "./MyChallenge.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GameNav from "./GameNav";
import data from "../../asset/data/game.json";

import GameScreen from "./GameScreen";
import GameIntro from "./GameIntro";
import Popup from "../../component/Popup";

const MyChallenge = ({ setIsWinner }) => {
  // const [matchedItems, setMatchedItems] = useState([]);
  // const [cardNotMatches, setCardNotMatches] = useState([]);
  // const [flippedCards, setFlippedCards] = useState([]);
  // const [countdown, setCountdown] = useState(-1);
  const [cardItems, setCardItems] = useState(data);
  const [modalState, setModalState] = useState({
    modalIsOpen: false,
    title: "Bravo!!!",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // const handleCloseModal = () => {
  //   setModalState({ ...modalState, modalIsOpen: false });
  // };

  // useEffect(() => {
  //   const timer =
  //     countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
  //   if (countdown === 0) {
  //     const updateItems = cardItems.map((item) => {
  //       return { ...item, open: false, isWait: false };
  //     });
  //     setCardItems(updateItems);
  //   }

  //   return () => clearInterval(timer);
  // }, [countdown]);

  // const checkForMatch = () => {
  //   const card1 = flippedCards[0];
  //   const card2 = flippedCards[1];

  //   if (card1.id === card2.id) {
  //     return;
  //   }
  //   if (card1.name === card2.name) {
  //     // console.log("MATCHED: ");
  //     setMatchedItems([...matchedItems, card1, card2]);
  //     setCardNotMatches([]);
  //   } else {
  //     // console.log("NOT MATCHED: ");
  //     setCardNotMatches([card1, card2]);
  //   }
  // };

  // useEffect(() => {
  //   if (flippedCards && flippedCards.length === 2) {
  //     checkForMatch();
  //     setFlippedCards([]);
  //   }
  // }, [flippedCards]);

  // useEffect(() => {
  //   if (data.length === matchedItems.length) {
  //     setIsWinner(true);
  //   }
  // }, [data, matchedItems]);

  // const handleFlipCard = (card) => {
  //   setFlippedCards([...flippedCards, card]);
  // };

  // const handlePlay = () => {
  //   const updateItems = cardItems.map((item) => {
  //     return { ...item, open: true, isWait: false };
  //   });
  //   setCardItems(updateItems);
  //   setCountdown(10);
  // };

  return (
    <Aux>
      <div className="fixedBackground">
        <div className="overlay"></div>
      </div>
      <div className="gameContainer ">
        {/* <div className="section" data-aos="fade-up" id="gameIntro">
          <h1>
            "Curious to experience a personal touch? Before you explore my
            portfolio, why not engage in a memory game crafted by yours truly?
            Click the link below for a unique and personalized challenge, giving
            you a glimpse into the creativity that fuels my work. Ready to play
            and discover the story behind the skills? "
          </h1>
          <div className="moveIcon">
            <a href="#gameArea">
              <IconStatic iconName="godown.png" iconAlt={"Move to game"} />
            </a>
          </div>
        </div> */}
        <GameIntro />
        <GameScreen
          cardItems={cardItems}
          setCardItems={setCardItems}
          setIsWinner={setIsWinner}
        />

        {/* <div className="section" data-aos="zoom-in" id="gameArea">
          {countdown === -1 ? (
            <div className="sectionOvelay">
              <button className="playButton" onClick={handlePlay}>
                Play
              </button>
            </div>
          ) : (
            ""
          )}
          <div
            className="gameArea row justify-content-center"
            data-aos="flip-down"
            // data-aos-offset="200"
            // data-aos-delay="50"
            // data-aos-duration="1000"
          >
            <h3 className="justify-content-center">
              {countdown && countdown > 0 ? (
                <Aux>
                  `You have {countdown} seconds to memory the card!`
                  <SoundPlay soundFileName="mixkit-countdown.wav" />
                </Aux>
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
        </div> */}
        <GameNav />
      </div>
      {/* <Popup modalState={modalState} handleCloseModal={handleCloseModal} /> */}
    </Aux>
  );
};

export default MyChallenge;

// const data = [
//   {
//     id: 1,
//     open: true,
//     isWait: true,
//     name: "SpringBoot",
//   },
//   {
//     id: 2,
//     open: true,
//     isWait: true,
//     name: "JAVA EE",
//   },
//   {
//     id: 3,
//     open: true,
//     isWait: true,
//     name: "Javascript",
//   },
//   {
//     id: 4,
//     open: true,
//     isWait: true,
//     name: "ReactJS",
//   },
//   {
//     id: 5,
//     open: true,
//     isWait: true,
//     name: "MySQL",
//   },
//   {
//     id: 6,
//     open: true,
//     isWait: true,
//     name: "SpringFramework",
//   },
//   {
//     id: 7,
//     open: true,
//     isWait: true,
//     name: "SpringBoot",
//   },
//   {
//     id: 8,
//     open: true,
//     isWait: true,
//     name: "MySQL",
//   },
//   {
//     id: 9,
//     open: true,
//     isWait: true,
//     name: "ReactJS",
//   },
//   {
//     id: 10,
//     open: true,
//     isWait: true,
//     name: "Javascript",
//   },
//   {
//     id: 11,
//     open: true,
//     isWait: true,
//     name: "JAVA EE",
//   },
//   {
//     id: 12,
//     open: true,
//     isWait: true,
//     name: "SpringFramework",
//   },
//   {
//     id: 13,
//     open: true,
//     isWait: true,
//     name: "Oracle PL/SQL",
//   },
//   {
//     id: 14,
//     open: true,
//     isWait: true,
//     name: "Spring Cloud",
//   },
//   {
//     id: 15,
//     open: true,
//     isWait: true,
//     name: "JIRA",
//   },
//   {
//     id: 16,
//     open: true,
//     isWait: true,
//     name: "Docker",
//   },
//   {
//     id: 17,
//     open: true,
//     isWait: true,
//     name: "Kubernetes",
//   },
//   {
//     id: 18,
//     open: true,
//     isWait: true,
//     name: "Spring Cloud",
//   },
//   {
//     id: 19,
//     open: true,
//     isWait: true,
//     name: "Oracle PL/SQL",
//   },
//   {
//     id: 20,
//     open: true,
//     isWait: true,
//     name: "Docker",
//   },
//   {
//     id: 21,
//     open: true,
//     isWait: true,
//     name: "JIRA",
//   },
//   {
//     id: 22,
//     open: true,
//     isWait: true,
//     name: "Kubernetes",
//   },
// ];
