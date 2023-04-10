import React, { useState } from "react";
import i18next from "i18next";
import styles from "./LanguageToggle.module.css";
import { lngs } from "../../utils/i18next";
import { isMobile } from "react-device-detect";

const LanguageToggle = () => {
  const [currentLang, changeCurrentLanguage] = useState(i18next.language);
  const [langList] = useState(Object.keys(lngs));
  const containerStyles = isMobile ? styles.container_mobile : styles.container
  const handleChangeLanguage = (el: string) => {
    i18next.changeLanguage(el);
    changeCurrentLanguage(el);
  };

  return (
    <div className={containerStyles}>
      {langList.map((el) => (
        <p
          key={el}
          onClick={() => handleChangeLanguage(el)}
          className={el !== currentLang ? styles.lang : styles.lang_active}
        >
          {el}
        </p>
      ))}
    </div>
  );
};

export default LanguageToggle;
