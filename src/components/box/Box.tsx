import React, { MouseEventHandler, ReactElement, CSSProperties } from "react";
import styles from "./Box.module.css";
import { DefaultTFuncReturn } from "i18next";
import { isMobile } from "react-device-detect";


type BoxTypes = {
  bg?: string,
  color?: CSSProperties['color'],
  onClick?: MouseEventHandler<HTMLDivElement>;
  label?: string | DefaultTFuncReturn;
  text?: string | DefaultTFuncReturn;
  icon?: ReactElement;
  isTemplate?: boolean;
  externalLink?: string;
  content?: ReactElement;
}

const WorkingHours = ({
  bg,
  color,
  onClick,
  label,
  text,
  icon,
  isTemplate = false,
  externalLink,
  content,
}: BoxTypes) => {
  const boxStyles = { backgroundColor: color }
  const blockStyles = isMobile ? styles.block_mobile : styles.block
  return isTemplate ? (
    <div className={blockStyles} onClick={onClick} style={boxStyles}>
      <div className={styles.bg} style={{ backgroundImage: `url(${bg})` }} />
      <div className={styles.overlay} />
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        <div className={styles.text}>{text}</div>
        <div className={styles.label}>{label}</div>
        {externalLink && (
          <a
            className={styles.externalLink}
            rel="noreferrer"
            target="_blank"
            href={externalLink}
          >
            { }
          </a>
        )}
      </div>
    </div>
  ) : (
    <div className={styles.block_custom} style={boxStyles}>
      {content}
    </div >
  );
};

export default WorkingHours;
