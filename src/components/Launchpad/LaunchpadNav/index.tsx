import React from 'react'
import Image from 'next/image';
import styles from './LaunchpadNav.module.css';
import icons from './icons'
import Slidernav from '../../../components/Slidernav/index';

const LaunchpadNav = () => {
    return (
        <div className={`${styles.launchpad_navigation}`}>
            <div className={`${styles.navigation_buttons}`}>
                {icons.map((icon) => (
                    <>
                        <div className={`${styles.button}`}>
                            <Image
                                alt=""
                                src={icon.img}
                                className={`${styles.button_img}`}
                            />
                            <h1 className={`${styles.button_title}`}>
                                {icon.text}
                            </h1>
                        </div>
                    </>
                ))}
            </div>
            <Slidernav/>
        </div>
    )
}

export default LaunchpadNav
