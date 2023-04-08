import React from "react";
import { FaTelegram, FaViber } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import styles from "./Contacts.module.css";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>

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
