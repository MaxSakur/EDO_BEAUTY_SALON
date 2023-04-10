import { FC } from "react";
import styles from "./Header.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import LanguageToggle from "../languageToggle/LanguageToggle";
import { isMobile } from "react-device-detect";

const facebookLink = 'https://www.facebook.com/edo.kiev'
const instagramLink = 'https://www.instagram.com/salon_edo'

export const HoveredIcon = ({
  icon,
  link,
}: {
  icon: JSX.Element;
  link?: string;
}): JSX.Element => {
  const containerStyles = isMobile ? styles.hoveredIcon_mobile : styles.hoveredIcon
  return (
    <a className={containerStyles} href={link} target="_blank" rel="noreferrer">
      <div className={styles.icon}>{icon}</div>
    </a>
  );
};

export const Header: FC = () => {
  const containerStyles = isMobile ? styles.container_fw_mobile : styles.container_fw
  return (
    <div className={containerStyles}>
      <div className={styles.social}>
        <HoveredIcon link={facebookLink} icon={<FaFacebookF size={30} />} />
        <HoveredIcon link={instagramLink} icon={<FaInstagram size={30} />} />
      </div>
      <div className={styles.language}>
        <LanguageToggle />
      </div>
    </div>
  );
};
