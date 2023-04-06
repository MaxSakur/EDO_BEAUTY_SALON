import React from 'react'
import styles from './Brand.module.css'
import { images } from "../../../../assets/images";
import { useTranslation } from 'react-i18next';

const Brand = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={images.logo} alt="logo" />
            <p className={styles.brand}>{t("brand.since")}</p>
        </div >
    )
}

export default Brand