import { FC, ReactElement } from "react";
import styles from "./MainContainer.module.css";
import { isMobile } from "react-device-detect";

interface Props {
  children: ReactElement | ReactElement[];
}

export const MainContainer: FC<Props> = ({ children }) => {
  const containerStyles = isMobile ? styles.container_mobile : styles.container
  return <div className={containerStyles}>{children}</div>;
};
