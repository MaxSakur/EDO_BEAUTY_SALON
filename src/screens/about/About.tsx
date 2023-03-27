import React, { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import Box from "../../components/workingHours";
import { images } from "./../../assets/images";
import interierBG from "./../../assets/images/bg/3.jpg";
import { FaSearchLocation, FaShoppingBag, FaCamera } from "react-icons/fa";
import { BsScissors } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Contacts from "../../components/contacts";
import SliderModal from "../../components/sliderModal";

export default function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const targetRef = useRef<HTMLInputElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [sliderModalShown, setSliderModalShown] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, [targetRef]);

  return (
    <div className={styles.aboutLayout} ref={targetRef}>
      <div className={styles.row}>
        <Box
          size={dimensions.height / 2}
          isTemplate={true}
          bg={images.bg.locationBG}
          label={t("location.title")}
          text={t("location.label")}
          icon={<FaSearchLocation />}
          externalLink={t("info.googleMapPath")}
        />

        <Box size={dimensions.height / 2}>
          <img className={styles.logo} src={images.logo} alt="logo" />
        </Box>

        <Box
          size={dimensions.height / 2}
          isTemplate={true}
          bg={images.bg.shopBG}
          label={t("shop.title")}
          text={t("shop.label")}
          icon={<FaShoppingBag />}
          onClick={() => navigate("../shop")}
        />

        <Box
          size={dimensions.height / 2}
          isTemplate={true}
          bg={interierBG}
          label={t("interier.title")}
          text={t("shop.label")}
          icon={<FaCamera />}
          onClick={() => setSliderModalShown(true)}
        />

        <Box size={dimensions.height / 2}>
          <Contacts />
        </Box>

        <Box
          size={dimensions.height / 2}
          isTemplate={true}
          bg={images.bg.serviceBG}
          label={t("services.title")}
          text={t("services.label")}
          icon={<BsScissors />}
          onClick={() => navigate("../services")}
        />
      </div>

      <SliderModal
        isShown={sliderModalShown}
        onExit={() => setSliderModalShown(false)}
      />
    </div>
  );
}
