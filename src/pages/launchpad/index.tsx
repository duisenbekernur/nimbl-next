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

const Launchpad = () => {
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
    return (
        <div className={`${styles.launchpad}`}>
            <Rankings />
            <div className={`${styles.launchpad_navigation}`}>
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
            </div>
        </div>
    )
}

export default Launchpad
