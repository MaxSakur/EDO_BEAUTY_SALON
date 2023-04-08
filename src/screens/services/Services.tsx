import React, { useState, ReactElement, MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Services.module.css";
import Box from "../../components/box";
import backToMainBG from "./../../assets/images/bg/1.jpg";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import barberList from "./../../static_data/barber.json";
import { Service, ServiceLinks, ServicePrice } from "./serviceUtils";


export default function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [servicesData, setServicesData] = useState<Service[]>(barberList);

  const data = [
    { isTemplate: true, text: "main.title", label: 'main.label', bg: backToMainBG, icon: <FaHome />, onclick: () => navigate("../"), content: null },
    { isTemplate: false, text: "", label: '', bg: '', content: < ServicePrice data={servicesData} /> },
    { isTemplate: false, text: "location.title", label: 'location.label', color: '#000', content: <ServiceLinks onChange={setServicesData} /> }
  ]

  return (
    <div className={styles.serviceLayout}>
      <div className={styles.boxContainer} >
        {data.map((el, index) => {
          return (
            <Box
              key={index}
              isTemplate={el.isTemplate}
              text={t(el.text)}
              label={t(el.label)}
              bg={el.bg}
              color={el.color}
              icon={el.icon as ReactElement}
              onClick={el.onclick as MouseEventHandler<HTMLDivElement>}
              content={el.content as ReactElement}
            />
          )
        })}
      </div>

    </div>
  );
}