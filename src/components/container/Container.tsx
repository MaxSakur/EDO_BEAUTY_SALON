import React, { CSSProperties, MouseEventHandler, ReactElement } from 'react';
import { isMobile, isBrowser, useMobileOrientation } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { AboutBoxList } from '../../screens/about/About';
import { classNames } from '../../utils';
import Box from '../box';
import styles from './Container.module.css';


const Container = ({ data, customStyles, mobileStyles }: { data: AboutBoxList[], customStyles?: string | CSSProperties, mobileStyles?: string | CSSProperties }) => {
    // const { isLandscape } = useMobileOrientation()
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.container, customStyles && customStyles, isMobile && mobileStyles)}>
            {data.map((el, index) => {
                return (
                    <Box
                        key={index}
                        isTemplate={el.isTemplate}
                        text={t(el.text)}
                        label={t(el.label)}
                        color={el.color}
                        bg={el.bg}
                        icon={el.icon as ReactElement}
                        onClick={el.onclick as MouseEventHandler<HTMLDivElement>}
                        content={el.content as ReactElement}
                        externalLink={el.externalLink}
                    />
                )
            })}
        </div>
    )
}

export default Container