<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React from 'react';
import styles from './Launchpad.module.css';
import Image from 'next/image';
import live from '../../assets/launchpad_live.svg';
import committed from '../../assets/launchpad_committed.svg';
import mints from '../../assets/launchpad_mints.svg';
import Rankings from '../../components/Rankings/index';
import LaunchpadCard from '../../components/LaunchpadCard/index';
import Slider from '../../components/Slider/index';
import Swiper from 'swiper';
import 'swiper/css/bundle';
>>>>>>> parent of 1985c49 (k)

import icons from '../../components/Launchpad/LaunchpadNav/icons'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'

const Launchpad = () => {
<<<<<<< HEAD
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

=======
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
>>>>>>> parent of 1985c49 (k)
    return (
        <div className={`${styles.launchpad}`}>
            <Rankings />
            <div className={`${styles.launchpad_navigation}`}>
<<<<<<< HEAD
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
=======
                <div className={`${styles.navigation_buttons}`}>
                    <div className={`${styles.button}`}>
                        <Image
                            alt=""
                            src={live}
                            className={`${styles.button_img}`}
                        />
                        <h1 className={`${styles.button_title}`}>Live mints</h1>
                    </div>
                    <div className={`${styles.button}`}>
                        <Image
                            alt=""
                            src={committed}
                            className={`${styles.button_img}`}
                        />
                        <h1 className={`${styles.button_title}`}>
                            Finished mints
                        </h1>
                    </div>
                    <div className={`${styles.button}`}>
                        <Image
                            alt=""
                            src={mints}
                            className={`${styles.button_img}`}
                        />
                        <h1 className={`${styles.button_title}`}>
                            Upcoming mints
                        </h1>
                    </div>
                </div>
                <div className={`${styles.navigation_pagination}`}>
                    <Slider />
                </div>
            </div>
            <div className={`${styles.launchpad_cards}`}>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><LaunchpadCard/></div>
                        <div className="swiper-slide"><LaunchpadCard/></div>
                        <div className="swiper-slide"><LaunchpadCard/></div>
                        <div className="swiper-slide"><LaunchpadCard/></div>
                    </div>
                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                </div>
>>>>>>> parent of 1985c49 (k)
            </div>
=======
import React from 'react';
import styles from './Launchpad.module.css';

const Launchpad = () => {
  return (
    <div className={`${styles.launchpad}`}>
        <div className={`${styles.launchpad_navigation}`}>
            
        </div>
        <div className={`${styles.launchpad_cards}`}>

>>>>>>> parent of e9f0e55 (almost there)
=======
import React from 'react';
import styles from './Launchpad.module.css';
import Image from 'next/image'
import live from '../../assets/launchpad_live.svg';
import committed from '../../assets/launchpad_committed.svg';
import mints from '../../assets/launchpad_mints.svg';
import Rankings from '../../components/Rankings/index';
import LaunchpadCard from  '../../components/LaunchpadCard/index';

const Launchpad = () => {
  return (
    <div className={`${styles.launchpad}`}>
        <Rankings/>
        <div className={`${styles.launchpad_navigation}`}>
            <div className={`${styles.navigation_buttons}`}>
                <div className={`${styles.button}`}>
                    <Image alt="" src={live} className={`${styles.button_img}`}/>
                    <h1 className={`${styles.button_title}`}>Live mints</h1>
                </div>
                <div className={`${styles.button}`}>
                    <Image alt="" src={committed} className={`${styles.button_img}`}/>
                    <h1 className={`${styles.button_title}`}>Finished mints</h1>
                </div>
                <div className={`${styles.button}`}>
                    <Image alt="" src={mints} className={`${styles.button_img}`}/>
                    <h1 className={`${styles.button_title}`}>Upcoming mints</h1>
                </div>
            </div>
>>>>>>> parent of 7bf1f44 (launchpad navigation in process)
        </div>
        <div className={`${styles.launchpad_cards}`}>
            <LaunchpadCard/>
            <LaunchpadCard/>
            <LaunchpadCard/>
            <LaunchpadCard/>
        </div>
    </div>
  );
}

export default Launchpad;