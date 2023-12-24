import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aux from "./component/Aux";
import RootLayout from "./layout/RootLayout";
import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import React from "react";
import MyChallenge from "./layout/game/MyChallenge";
import MainPortfolioContent from "./layout/portfolio/MainPortfolioContent";
import { IS_PLAYED } from "./constant";
import { v4 as uuid } from "uuid";

function App() {
  const [isPlay] = useState(localStorage.getItem(IS_PLAYED));

  useEffect(() => {
    document.title = "Thanh Hung DOAN - Site";
  }, []);

  const appRouterConfig = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout key={uuid()} />,
      children: [
        {
          path: "",
          element: [<MyChallenge isPlay={isPlay} key={uuid()} />],
        },
        {
          path: "/profile",
          element: <MainPortfolioContent key={uuid()} />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback="...loading">
      <Aux>
        <RouterProvider router={appRouterConfig} />
      </Aux>
    </Suspense>
  );
}

export default App;
