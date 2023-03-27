import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Comments.module.css";
import { useTranslation } from "react-i18next";

const Comments = ({ width }: { width: number }) => {
  const { t } = useTranslation();
  return (
    <>
      <p className={styles.carouser_header}>{t("comments.title")}</p>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        interval={5000}
        width={width}
      >
        <div className={styles.slide}>
          <p>
            Широкий спектр услуг, качественный сервис, вежливый и
            высококвалифицированный персонал - это всё визитная карточка салона
            "ЦИРЮЛЬНЯ ЭДО". Сама была не один раз, всем РЕКОМЕНДУЮ!
          </p>
        </div>
        <div className={styles.slide}>
          <p>
            Хожу в салон уже 4-ый год, всем очень довольна: профессионализм
            мастеров, радушная атмосфера, наличие парковки и бара, всегда
            приветливые администраторы! Девочки, спасибо! Цена полностью
            соответствует качеству!
          </p>
        </div>
        <div className={styles.slide}>
          <p>
            Хожу в салон уже 4-ый год, всем очень довольна: профессионализм
            мастеров, радушная атмосфера, наличие парковки и бара, всегда
            приветливые администраторы! Девочки, спасибо! Цена полностью
            соответствует качеству!
          </p>
        </div>
      </Carousel>
    </>
  );
};

export default Comments;
