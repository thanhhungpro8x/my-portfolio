import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aux from "./component/Aux";
import RootLayout from "./layout/RootLayout";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = "Thanh Hung DOAN - Site";
    // console.log(i18n.t("intro_name"));
  }, []);
  return (
    <Suspense fallback="...loading">
      <Aux>
        <RootLayout />
      </Aux>
    </Suspense>
  );
}

export default App;
