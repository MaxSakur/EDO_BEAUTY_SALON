import React, { ReactElement } from "react";
import styles from "./Column.module.css";

const Column = ({ children }: { children: ReactElement[] }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Column;
