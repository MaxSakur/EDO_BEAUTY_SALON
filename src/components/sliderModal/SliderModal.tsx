import React, { memo, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import styles from "./SliderModal.module.css";
import { interierImages } from "../../assets/images/interier";
import { IoIosClose } from "react-icons/io";

type SliderModalType = {
  isShown: boolean;
  onExit: () => void;
};

const SliderModal = (props: SliderModalType): null | JSX.Element => {
  const [servicesData, setServicesData] = useState();

  const { isShown, onExit } = props;
  // console.log("isShown2", interierImages);
  //   console.log("isShown", Array.from(interierImages));
  return isShown ? (
    <>
      <AwesomeSlider
        bullets={false}
        animation="cubeAnimation"
        className={styles.container}
        fillParent={true}
      >
        {interierImages.map((el: string): JSX.Element => {
          return <div data-src={el} />;
        })}
      </AwesomeSlider>
      <div className={styles.closeButton} onClick={onExit}>
        <IoIosClose fill="#fff" size={40} />
      </div>
    </>
  ) : null;
};

export default memo(SliderModal);
