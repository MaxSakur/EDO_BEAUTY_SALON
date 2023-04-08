import React from 'react'
import { useTranslation } from 'react-i18next'
import { GrLocation } from "react-icons/gr";
import styles from './Location.module.css'

const Location = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>

            <div className={styles.address}>
                <p>{t('location.address')}</p>
            </div>

            <div className={styles.hours}>
                <p>{t('location.workHours')}</p>
            </div>
        </div>
    )
}

export default Location