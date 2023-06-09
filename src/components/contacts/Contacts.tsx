import React from "react";
import { FaTelegram, FaViber } from "react-icons/fa";
import styles from "./Contacts.module.css";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

const Contacts = () => {
  const { t } = useTranslation();
  const containerStyles = isMobile ? styles.container_mobile : styles.container
  return (
    <div className={containerStyles}>

      <div className={styles.phones_container}>

        <div className={styles.phones}>
          <a href="tel:contacts.phoneMain">
            <p className={styles.phone}>{t("contacts.phone1")}</p>
          </a>
          <a href="tel:contacts.phoneAlternate">
            <p className={styles.phone}>{t("contacts.phone2")}</p>
          </a>
          <a href="tel:contacts.phoneAlternate">
            <p className={styles.phone}>{t("contacts.phone3")}</p>
          </a>
        </div>

        <div className={styles.contact_icons}>
          <a href="https://t.me/+380672337966" target="_blank" rel="noreferrer">
            <FaTelegram color={"#0088cc"} />
          </a>
          <a
            href="viber://chat?number=0672337966"
            target="_blank"
            rel="noreferrer"
          >
            <FaViber color={"#7360F2"} />
          </a>
        </div>
      </div>


    </div>
  );
};

export default Contacts;
