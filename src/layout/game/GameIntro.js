import Aux from "../../component/Aux";
import IconStatic from "../../component/IconStatic";
import game from "../../asset/data/intro.json";

const GameIntro = () => {
  return (
    <Aux>
      <div className="section" data-aos="fade-up" id="gameIntro">
        <h1>{game.intro_name}</h1>
        <div className="moveIcon">
          <a href="#gameArea">
            <IconStatic iconName="godown.png" iconAlt={"Move to game"} />
          </a>
        </div>
      </div>
    </Aux>
  );
};
export default GameIntro;
