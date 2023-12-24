import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return <Outlet />;
};

export default RootLayout;
