import barberList from "./../../static_data/barber.json";
import maniPediCure from "./../../static_data/maniPediCure.json";
import cosmethology from "./../../static_data/cosmethology.json";
import styles from './Services.module.css'
import { useTranslation } from "react-i18next";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import i18next from "i18next";

export type Service = {
    name_ua: string;
    name_en: string;
    price: number;
};

type ServicePriceTypes = {
    data: Service[]
}

const linkData = [
    { name: 'barber.title', data: barberList },
    { name: 'maniPediCure.title', data: maniPediCure },
    { name: 'cosmetic.title', data: cosmethology },
]


export const PriceHeader = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.priceHeader}>
            <div className={styles.title}>
                <p>{t('services.title')}</p>
            </div>
        </div>
    )
}

export const ServicePrice = ({ data }: ServicePriceTypes) => {
    const { t } = useTranslation();
    const lang = i18next.language
    return (
        <div className={styles.prices}>
            <PriceHeader />
            <ul className={styles.price_list}>
                {data.map((el, index): ReactElement => {
                    return (
                        <li key={index} className={styles.price}>
                            <p className={styles.name}>{lang === 'ua' ? el.name_ua : el.name_en}</p>
                            <p className={styles.value}>{el.price}{' '}{t('currency')}</p>
                        </li>
                    );
                })}
            </ul>

        </div>
    )
}

export const ServiceLinks = ({ onChange }: { onChange: Dispatch<SetStateAction<Service[]>> }): ReactElement => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const { t } = useTranslation();


    const isActive = (value: number) => value === activeIndex ? styles.link_active : styles.link

    const handleChange = (data: Service[], index: number,) => {
        onChange(data);
        setActiveIndex(index)
    }

    return (
        <div className={styles.links}>
            {linkData.map((el, index): ReactElement => {
                return (
                    <div key={index} className={isActive(index)} onClick={() => handleChange(el.data as Service[], index)}>
                        <p className={styles.link_text}>{t(el.name)}</p>
                    </div>
                );
            })}
        </div>
    )
}