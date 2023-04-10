import { FC } from "react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

export const Footer: FC = () => {
  const { t } = useTranslation();
  const containerStyles = isMobile ? styles.container_fw_mobile : styles.container_fw
  return (
    <div className={containerStyles}>
      <div className={styles.email_container}>
        <a className={styles.email} href={`mailto: ${t("footer.email")}`}>{t("footer.email")}</a>
      </div>
      <div className={styles.copyright_container}>
        <p className={styles.copyright}>{t("footer.copyright")}</p>
      </div>
    </div>
  );
};
