import Aux from "./Aux";
import "./IconStatic.css";

const IconStatic = ({ iconName, iconAlt }) => {
  const images = require.context("../asset/icon/", true);
  const fullIcon = images(`./${iconName}`);
  return (
    <Aux>
      <img className="iconStatic" src={fullIcon} alt={iconAlt} />
    </Aux>
  );
};

export default IconStatic;
