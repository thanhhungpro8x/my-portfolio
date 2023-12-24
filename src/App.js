import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aux from "./component/Aux";
import RootLayout from "./layout/RootLayout";
import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import MyChallenge from "./layout/game/MyChallenge";
import MainPortfolioContent from "./layout/portfolio/MainPortfolioContent";
import { IS_PLAYED } from "./constant";

function App() {
  const [isPlay] = useState(localStorage.getItem(IS_PLAYED));

  useEffect(() => {
    document.title = "Thanh Hung DOAN - Site";
  }, []);

  const appRouterConfig = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: [<MyChallenge isPlay={isPlay} />],
        },
        {
          path: "/profile",
          element: <MainPortfolioContent />,
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
