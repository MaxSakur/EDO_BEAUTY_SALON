import React, { ReactElement, useLayoutEffect, useRef, useState } from "react";
import Box from "../../components/workingHours";
import backToMainBG from "./../../assets/images/bg/1.jpg";
import barberBG from "./../../assets/images/bg/barber-min.jpg";
import cosmetologBG from "./../../assets/images/bg/cosmetholog-min.jpg";
import manicureBG from "./../../assets/images/bg/manicure-min.jpg";
import barberList from "./../../static_data/barber.json";
import maniPediCure from "./../../static_data/maniPediCure.json";
import cosmethology from "./../../static_data/cosmethology.json";
import { useTranslation } from "react-i18next";
import { FaHome } from "react-icons/fa";
import { GiBarefoot, GiHand } from "react-icons/gi";
import { BiFace } from "react-icons/bi";
import { BsScissors } from "react-icons/bs";
import styles from "./Services.module.css";
import { useNavigate } from "react-router-dom";
import Column from "../../components/column";

type Service = {
  name: string;
  price: number;
};

export default function Services() {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLInputElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const navigate = useNavigate();
  const [servicesData, setServicesData] = useState<Service[]>(barberList);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, [targetRef]);

  return (
    <div
      className={styles.container}
      // style={{ width: dimensions.height }}
      ref={targetRef}
    >
      <Column>
        <Box
          size={dimensions.height / 2}
          isTemplate={true}
          bg={backToMainBG}
          label={t("main.title")}
          text={t("shop.label")}
          icon={<FaHome />}
          onClick={() => navigate("/")}
        />
        <Box
          size={dimensions.height / 2}
          isTemplate={true}
          bg={barberBG}
          label={t("barber.title")}
          text={t("barber.label")}
          icon={<BsScissors />}
          onClick={() => setServicesData(barberList)}
        />
      </Column>

      <div className={styles.centerColumn}>
        {servicesData.map((el, index): ReactElement => {
          return (
            <li key={index}>
              <p className={styles.name}>{el.name}</p>
              <p className={styles.price}>{el.price}</p>
            </li>
          );
        })}
      </div>

      <Column>
        <Box
          size={dimensions.height / 2}
          isTemplate={true}
          bg={manicureBG}
          label={t("maniPediCure.title")}
          text={t("maniPediCure.label")}
          icon={
            <div>
              <GiBarefoot />
              <GiHand />
            </div>
          }
          onClick={() => setServicesData(maniPediCure)}
        />
        <Box
          size={dimensions.height / 2}
          isTemplate={true}
          bg={cosmetologBG}
          label={t("cosmetic.title")}
          text={t("cosmetic.label")}
          icon={<BiFace />}
          onClick={() => setServicesData(cosmethology)}
        />
      </Column>
    </div>
  );
}
