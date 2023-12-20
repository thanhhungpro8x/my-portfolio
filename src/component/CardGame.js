import Aux from "./Aux";
import "./CardGame.css";
import { useState, useEffect } from "react";
import IconStatic from "./IconStatic";

const CardGame = (props) => {
  const { item, handleFlipCard, cardNotMatches, matchedItems } = props;
  const [myState, setMyState] = useState(item);

  useEffect(() => {
    // AOS.init({ duration: 1000 });
    // const handleScroll = () => {
    //   setHasScrolled(true);
    // };
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (item && item.id === myState.id) {
      setMyState({ ...item });
    }
  }, [item]);

  useEffect(() => {
    setTimeout(() => {
      if (cardNotMatches && cardNotMatches.length === 2) {
        if (cardNotMatches.includes(myState)) {
          console.log(myState, " here are cards not matched", cardNotMatches);
          setMyState({ ...myState, open: false });
        }
      }
    }, 1000);
  }, [cardNotMatches, myState]);

  const flipCard = () => {
    if ((matchedItems && matchedItems.includes(myState)) || myState.open) {
      return;
    }
    myState.open = !myState.open;
    handleFlipCard(myState);
  };

  return (
    <Aux>
      {!myState.isWait ? (
        <div
          className={`col-md-2 mb-4 cardGameContainer ${
            myState.open ? "flipped" : ""
          }`}
          onClick={flipCard}
        >
          <div className="cardGame">
            <div className="frontCard">
              <h4>?</h4>
            </div>
            <div className="backCard justify-content-center">
              <IconStatic iconName={item.icon} iconAlt={item.icon} />
              <h5>{item.name}</h5>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Aux>
  );
};

export default CardGame;
