import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// const options = {
//   debug: true,
//   lng: "en",
//   fallbackLng: "en",
//   ns: [
//     "about-me",
//     "contact",
//     "game-success",
//     "game",
//     "intro",
//     "introduction",
//     "leftside",
//     "project",
//     "rightside",
//     "skills",
//     "work-exp",
//     "work-service",
//   ],
//   defaultLng: "fr",
//   defaultNs: "about-me",
//   keySeparator: false, // Use '.' as a separator in keys
//   interpolation: {
//     escapeValue: false, // React handles escaping
//   },
//   backend: {
//     loadPath: "./locale/{{lng}}/{{ns}}.json",
//     savePath: "./locale/{{lng}}/{{ns}}.json",
//   },
// };

// i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(options);
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["fr", "en"],
    detection: {
      order: [
        "path",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      caches: ["cookie"],
      lookupFromPathIndex: 0,
    },
    ns: [
      "about-me",
      "contact",
      "game-success",
      "game",
      "intro",
      "introduction",
      "leftside",
      "project",
      "rightside",
      "skills",
      "work-exp",
      "work-service",
    ],
    Backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json",
      savePath: "./locales/{{lng}}/{{ns}}.json",
    },
  });
i18n.changeLanguage("fr");
export default i18n;
