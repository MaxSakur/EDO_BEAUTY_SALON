import { FC, ReactElement } from "react";
import i18next from "i18next";
import styles from "./MainContainer.module.css";

interface Props {
  children: ReactElement | ReactElement[];
}

export const MainContainer: FC<Props> = ({ children }) => {
  const lang = i18next.language
  const mainFont = lang === 'ua' ? 'Caveat' : ''
  return <div className={styles.container} style={{ fontFamily: mainFont }}>{children}</div>;
};
