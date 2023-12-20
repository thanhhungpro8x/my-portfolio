import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";

const GameNav = () => {
  return (
    <Aux>
      <ul className="menu d-flex">
        <li>
          <a className="scrollTo" href="#gameIntro">
            <span>Intro</span>{" "}
            <DynamicIcon
              iconName={"ArrowUpward"}
              fontSizeValue={"medium"}
              marginValue={"5px"}
            />
          </a>
        </li>
        {/* <li>{countDownValue}</li> */}
        <li>
          <a className="scrollTo" href="#gameArea">
            <span>Game</span>{" "}
            <DynamicIcon
              iconName={"ArrowDownward"}
              fontSizeValue={"medium"}
              marginValue={"5px"}
            />
          </a>
        </li>
      </ul>
    </Aux>
  );
};

export default GameNav;
