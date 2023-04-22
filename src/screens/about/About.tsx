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
import { Helmet } from "react-helmet";
import ShadowSeoBlock from "../../components/shadowSeoBlock";

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
      <Helmet>
        <title>EDO - Main Page</title>
        <meta name="description" content="EDO TEST" />
        {/* <!-- Primary Meta Tags --> */}
        <title>EDO Beauty Salon</title>
        <meta name="title" content="EDO Beauty Salon" />
        <meta name="description" content="Beauty salon in a center on Kyiv, with a more then fifteen years history and a tons of happy clients. We will be " />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="EDO Beauty Salon" />
        <meta property="og:description" content="Beauty salon in a center on Kyiv, with a more then fifteen years history and a tons of happy clients. We will be " />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="EDO Beauty Salon" />
        <meta property="twitter:description" content="Beauty salon in a center on Kyiv, with a more then fifteen years history and a tons of happy clients. We will be " />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Helmet>
      <ShadowSeoBlock h1={''} />
      <Container data={data} customStyles={styles.boxContainer} mobileStyles={styles.boxContainer_mobile} />
      <SliderModal
        isShown={sliderModalShown}
        onExit={() => setSliderModalShown(false)}
      />
    </div>
  );
}
