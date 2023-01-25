import React from 'react'
import styles from './Launchpad.module.css'
import Rankings from '../../components/Rankings/index'
import LaunchpadCard from '../../components/Launchpad/LaunchpadCard/index'
import LaunchpadNav from '../../components/Launchpad/LaunchpadNav/index'
// Importing swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const Launchpad = () => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
                return '<span className="'+ className +'"></span>'
            }
        }
    }
    return (
        <div className={`${styles.launchpad}`}>
            <Rankings />
            <LaunchpadNav />
            <div className={`${styles.launchpad_cards}`}>
                <Swiper
                    scrollbar={{draggable: false}}
                    className={`${styles.swiper}`}
                    slidesPerView={3}
                    spaceBetween={-160}
                    style={{ position: 'relative' }}
                >
                    {[1, 1, 1, 1, 1, 1, 1, 1].map(() => {
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
