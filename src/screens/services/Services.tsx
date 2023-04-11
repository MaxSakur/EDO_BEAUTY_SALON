import React, { useState, } from "react";
import Container from "../../components/container";
import backToMainBG from "./../../assets/images/bg/1.jpg";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import barberList from "./../../static_data/barber.json";
import { Service, ServiceLinks, ServicePrice } from "./serviceUtils";
import styles from "./Services.module.css";
import { isMobile } from "react-device-detect";


export default function Services() {
  const navigate = useNavigate();
  const [servicesData, setServicesData] = useState<Service[]>(barberList);

  const data = [
    { isTemplate: true, text: "main.title", label: 'main.label', bg: backToMainBG, icon: <FaHome />, onclick: () => navigate("../"), content: null },
    { isTemplate: false, text: "", label: '', bg: '', content: < ServicePrice data={servicesData} /> },
    { isTemplate: false, text: "location.title", label: 'location.label', color: '#000', content: <ServiceLinks onChange={setServicesData} /> }
  ]

  return (
    <div className={isMobile ? styles.serviceLayout_mobile : styles.serviceLayout}>
      <Container data={data} customStyles={styles.boxContainer} mobileStyles={styles.boxContainer_mobile} />
    </div>
  );
}