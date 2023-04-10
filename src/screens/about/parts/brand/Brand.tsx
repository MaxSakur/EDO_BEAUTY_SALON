import React from 'react'
import styles from './Brand.module.css'
import { images } from "../../../../assets/images";
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

const Brand = () => {
    const { t } = useTranslation();
    const containerStyles = isMobile ? styles.container_mobile : styles.container
    return (
        <div className={containerStyles}>
            <img className={styles.logo} src={images.logo} alt="logo" />
            <p className={styles.brand}>{t("brand.since")}</p>
        </div >
    )
}

export default Brand