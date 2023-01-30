import React, { useRef } from 'react'
import styles from './Launchpad.module.css'
import Rankings from '../../components/Rankings/index'
import LaunchpadCard from '../../components/Launchpad/LaunchpadCard/index'
import LaunchpadNav from '../../components/Launchpad/LaunchpadNav/index'
import Image from 'next/image'
// Importing swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'

import icons from '../../components/Launchpad/LaunchpadNav/icons'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'

const Launchpad = () => {
    const swiperRef = useRef<SwiperCore>();  
    const sliderSettings = {
        440: {
          slidesPerView: 1,
          spaceBetween: -250,
        },
        680: {
          slidesPerView: 2,
          spaceBetween: -250,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: -250,
        },
    };

    return (
        <div className={`${styles.launchpad}`}>
            <Rankings />
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
                        <IoIosArrowBack onClick={() => swiperRef.current?.slidePrev()} style = {{cursor: "pointer", marginRight: "5px"}}/>
                        <IoIosArrowForward onClick={() => swiperRef.current?.slideNext()} style = {{cursor: "pointer"}}/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
            <div className={`${styles.launchpad_cards}`}>
                <Swiper
                    slidesPerView={3}
                    breakpoints={sliderSettings}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                >
                    {[1, 1, 1, 1, 1, 1, 1].map(() => {
                        return (
                            <>
                                <SwiperSlide>
                                    <LaunchpadCard />
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Launchpad
