import "./LeftSide.css";
import logo from "../../asset/image/logo.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Aux from "../../component/Aux";
import data from "../../asset/data/leftside.json";

const LeftSideHome = () => {
  const images = require.context("../../asset/image/");
  const getImage = (imageName) => {
    return images(`./${imageName}`);
  };

  return (
    <Aux>
      <div className="leftSidebar">
        <div className="leftSidebarHeader d-flex align-items-center justify-content-between">
          <img src={logo} alt="Logo" className="logoHeader" />
          <span className="designation">{data.jobTitle}</span>
        </div>
        <div className="d-flex justify-content-center">
          <img className="myPhoto" src={getImage("Portrait.png")} alt="Me" />
        </div>
        <h2 className="email">{data.email}</h2>
        <h2 className="address">{data.address}</h2>
        <p className="copyright">&copy; {data.rights}</p>
        <ul className="socialMediaProfile d-flex align-items-center flex-wrap justify-content-center">
          <li>
            <a href={data.twitter}>
              <TwitterIcon />
            </a>
          </li>
          {/* <li>
            <a href={data.github}>
              <InstagramIcon />
            </a>
          </li> */}
          <li>
            <a href={data.github}>
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href={data.linkedIn}>
              <LinkedInIcon />
            </a>
          </li>
        </ul>
        <a href="#contact" className="themeBtn">
          <EmailIcon /> {data.sendMe}
        </a>
      </div>
    </Aux>
  );
};
export default LeftSideHome;
