import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { EN_TRANSLATION_KEYS } from "../translations/en";
import { UA_TRANSLATION_KEYS } from "../translations/ua";

// export type Languages = "ua" | "en";

export const lngs = {
  en: { nativeName: "Eng" },
  ua: { nativeName: "Укр" },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    defaultValue: "ua",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: EN_TRANSLATION_KEYS,
      },
      ua: {
        translation: UA_TRANSLATION_KEYS,
      },
    },
  });

export default i18n;
