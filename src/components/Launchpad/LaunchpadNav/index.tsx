import React from 'react'
import Image from 'next/image';
import styles from './LaunchpadNav.module.css';
import icons from './icons'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'

const LaunchpadNav = (slideNext:any, slidePrev:any) => {
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
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.pagination} ${styles.first}`}>
                    <h1 className={`${styles.numbers}`}>
                        <span className={`${styles.number} ${styles.first}`}>
                            01
                        </span>
                        /
                        <span className={`${styles.number} ${styles.second}`}>
                            20
                        </span>
                    </h1>
                </div>
                <div className={`${styles.pagination} ${styles.second}`}>
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            size: '30px',
                            className: `${styles.arrows}`,
                        }}
                    >
                        <IoIosArrowBack style = {{cursor: "pointer", marginRight: "5px"}}/>
                        <IoIosArrowForward  style = {{cursor: "pointer"}}/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default LaunchpadNav


