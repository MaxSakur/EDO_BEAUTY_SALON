import React from 'react'
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next'
import styles from './Location.module.css'

const Location = () => {
    const { t } = useTranslation();
    const containerStyles = isMobile ? styles.container_mobile : styles.container
    return (
        <div className={containerStyles}>

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