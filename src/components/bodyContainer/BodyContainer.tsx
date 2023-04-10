import React, { ReactElement } from "react";
import { isMobile } from "react-device-detect";
import styles from "./BodyContainer.module.css";

const BodyContainer = ({ children }: { children: ReactElement }) => {
  const containerStyles = isMobile ? styles.container_mobile : styles.container
  return <div className={containerStyles}>{children}</div>;
};

export default BodyContainer;
