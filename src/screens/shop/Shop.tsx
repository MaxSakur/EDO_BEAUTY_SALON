import React, { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from "./Shop.module.css";
import Box from "../../components/box";
import locationBG from "./../../assets/images/bg/6.jpg";
import { FaSearchLocation } from "react-icons/fa";

export default function Shop() {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLInputElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, [targetRef]);

  return (
    <div className={styles.container} ref={targetRef}>
      <Box
        size={1}
        isTemplate={true}
        bg={locationBG}
        label={t("main.title")}
        icon={<FaSearchLocation />}
        onClick={() => navigate("/")}
      />
    </div>
  );
}
