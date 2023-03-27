import React, { MouseEventHandler, ReactElement } from "react";
import styles from "./Box.module.css";
import { DefaultTFuncReturn } from "i18next";

const WorkingHours = ({
  bg,
  size,
  isDoubled = false,
  onClick,
  label,
  text,
  icon,
  isTemplate = false,
  externalLink,
  children,
}: {
  bg?: string;
  size: number;
  isDoubled?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  label?: string | DefaultTFuncReturn;
  text?: string | DefaultTFuncReturn;
  icon?: ReactElement;
  isTemplate?: boolean;
  externalLink?: string | DefaultTFuncReturn;
  children?: ReactElement;
}) => {
  const boxSizeStyles = {
    height: `${size}px`,
    width: `${isDoubled ? size * 2 : size}px`,
  };

  return isTemplate ? (
    <div className={styles.block} style={boxSizeStyles} onClick={onClick}>
      <div className={styles.bg} style={{ backgroundImage: `url(${bg})` }} />
      <div className={styles.overlay} />
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        <div className={styles.label}>{label}</div>
        <div className={styles.text}>{text}</div>
        {externalLink && (
          <a
            className={styles.externalLink}
            rel="noreferrer"
            target="_blank"
            href={externalLink}
          >
            {}
          </a>
        )}
      </div>
    </div>
  ) : (
    <div className={styles.block_empty} style={boxSizeStyles}>
      {children}
    </div>
  );
};

export default WorkingHours;
