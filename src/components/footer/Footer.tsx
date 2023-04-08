import { FC } from "react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

export const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container_fw}>
      <div>
        <a className={styles.email} href={`mailto: ${t("footer.email")}`}>{t("footer.email")}</a>
      </div>
      <div>
        <p className={styles.copyright}>{t("footer.copyright")}</p>
      </div>
    </div>
  );
};
