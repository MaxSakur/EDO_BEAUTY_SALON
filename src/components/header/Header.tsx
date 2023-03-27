import { FC } from "react";
import styles from "./Header.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import LanguageToggle from "../languageToggle/LanguageToggle";

export const HoveredIcon = ({
  icon,
  label,
}: {
  icon: JSX.Element;
  label: string;
}): JSX.Element => {
  return (
    <div className={styles.hoveredIcon}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export const Header: FC = () => {
  return (
    <div className={styles.container_fw}>
      <div className={styles.social}>
        <HoveredIcon label="" icon={<FaFacebookF size={30} />} />
        <HoveredIcon label="" icon={<FaInstagram size={30} />} />
      </div>
      <div className={styles.language}>
        <LanguageToggle />
      </div>
    </div>
  );
};
