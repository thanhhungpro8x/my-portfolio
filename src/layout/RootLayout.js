import { useState } from "react";
import MainPortfolioContent from "./portfolio/MainPortfolioContent";
import MyChallenge from "./game/MyChallenge";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RootLayout = () => {
  const [isWinner, setIsWinner] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return isWinner ? (
    <MainPortfolioContent data-aos="fade-up" />
  ) : (
    <MyChallenge setIsWinner={setIsWinner} />
  );
};

export default RootLayout;
