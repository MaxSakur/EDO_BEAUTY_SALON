import React, { useState, ReactElement, JSXElementConstructor } from "react";
import { images } from "./../../assets/images";
import { FaSearchLocation, FaCamera } from "react-icons/fa";
import { BsScissors } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Contacts from "../../components/contacts";
import SliderModal from "../../components/sliderModal";
import Brand from "./parts/brand/Brand";
import Location from "../../components/location";
import Container from "../../components/container";
import styles from "./About.module.css";
import { isMobile } from "react-device-detect";


export type AboutBoxList = {
  isTemplate: boolean,
  text: string,
  label: string,
  bg?: string,
  icon?: ReactElement<any, string | JSXElementConstructor<any>>,
  onclick?: () => void,
  color?: string,
  externalLink?: string,
  content?: any

}

export default function About() {
  const navigate = useNavigate();
  const [sliderModalShown, setSliderModalShown] = useState<boolean>(false);

  const data: AboutBoxList[] = [
    { isTemplate: true, text: "services.title", label: 'services.label', bg: images.bg.serviceBG, icon: <BsScissors />, onclick: () => navigate("../services"), content: null },
    { isTemplate: false, text: "", label: '', content: <Brand /> },
    { isTemplate: true, text: "location.title", label: 'location.label', bg: images.bg.locationBG, icon: <FaSearchLocation />, externalLink: "https://www.google.com/maps?saddr=My+Location&daddr=50.425399,30.522494", content: null },
    { isTemplate: false, text: "", label: '', color: '#000', content: <Contacts /> },
    { isTemplate: true, text: "interier.title", label: 'interier.label', bg: images.bg.shopBG, icon: <FaCamera />, onclick: () => setSliderModalShown(true), content: null },
    { isTemplate: false, text: "", label: '', color: '#000', content: <Location /> },
  ]

  return (
    <div className={isMobile ? styles.aboutLayout_mobile : styles.aboutLayout}>
      <Container data={data} customStyles={styles.boxContainer} mobileStyles={styles.boxContainer_mobile} />
      <SliderModal
        isShown={sliderModalShown}
        onExit={() => setSliderModalShown(false)}
      />
    </div>
  );
}
