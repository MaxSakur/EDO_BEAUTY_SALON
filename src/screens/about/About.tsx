import React, { useLayoutEffect, useRef, useState, ReactElement, MouseEventHandler, } from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import Box from "../../components/box";
import { images } from "./../../assets/images";
import interierBG from "./../../assets/images/bg/3.jpg";
import { FaSearchLocation, FaCamera } from "react-icons/fa";
import { BsScissors } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Contacts from "../../components/contacts";
import SliderModal from "../../components/sliderModal";
import Brand from "./parts/brand/Brand";


export default function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const targetRef = useRef<HTMLInputElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [sliderModalShown, setSliderModalShown] = useState<boolean>(false);

  const data = [
    { isTemplate: true, text: "services.title", label: 'services.label', bg: images.bg.serviceBG, icon: <BsScissors />, onclick: () => navigate("../services"), content: null },
    { isTemplate: false, text: "", label: '', content: <Brand /> },
    { isTemplate: true, text: "location.title", label: 'location.label', bg: images.bg.locationBG, icon: <FaSearchLocation />, externalLink: ("info.googleMapPath"), content: null },
    { isTemplate: false, text: "", label: '', color: '#000', content: <Contacts /> },
    { isTemplate: true, text: "interier.title", label: 'interier.label', bg: interierBG, icon: <FaCamera />, onclick: () => setSliderModalShown(true), content: null },
    { isTemplate: false, text: "", label: '', color: '#000', content: <Contacts /> },
  ]

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
      <div className={styles.boxContainer} >
        {data.map((el, index) => {
          return (
            <Box
              key={index}
              size={dimensions.height / 2}
              isTemplate={el.isTemplate}
              text={t(el.text)}
              label={t(el.label)}
              color={el.color}
              bg={el.bg}
              icon={el.icon as ReactElement}
              onClick={el.onclick as MouseEventHandler<HTMLDivElement>}
              content={el.content as ReactElement}
              externalLink={el.externalLink}
            />
          )
        })}
      </div>


      <SliderModal
        isShown={sliderModalShown}
        onExit={() => setSliderModalShown(false)}
      />
    </div>
  );
}
