import React, { ReactElement } from "react";
import styles from "./BodyContainer.module.css";

const BodyContainer = ({ children }: { children: ReactElement }) => {
  return <div className={styles.container}>{children}</div>;
};

export default BodyContainer;
