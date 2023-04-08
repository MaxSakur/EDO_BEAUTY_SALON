import { FC } from "react";
import styles from "./Header.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import LanguageToggle from "../languageToggle/LanguageToggle";

const facebookLink = 'https://www.facebook.com/edo.kiev'
const instagramLink = 'https://www.instagram.com/salon_edo'

export const HoveredIcon = ({
  icon,
  label,
  link,
}: {
  icon: JSX.Element;
  label: string;
  link?: string;
}): JSX.Element => {
  return (
    <a className={styles.hoveredIcon} href={link} target="_blank" rel="noreferrer">
      <div className={styles.icon}>{icon}</div>
    </a>
  );
};

export const Header: FC = () => {
  return (
    <div className={styles.container_fw}>
      <div className={styles.social}>
        <HoveredIcon label="" link={facebookLink} icon={<FaFacebookF size={30} />} />
        <HoveredIcon label="" link={instagramLink} icon={<FaInstagram size={30} />} />
      </div>
      <div className={styles.language}>
        <LanguageToggle />
      </div>
    </div>
  );
};
