import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locates/en.json";
import es from "../locates/es.json";

export const languageResources = {
  en: { translation: en },
  es: { translation: es },
};

const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: savedLanguage,
  fallbackLng: "en",
  resources: languageResources,
});

export default i18next;
