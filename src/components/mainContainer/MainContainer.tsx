import { FC, ReactElement } from "react";
import styles from "./MainContainer.module.css";

interface Props {
  children: ReactElement | ReactElement[];
}

export const MainContainer: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
