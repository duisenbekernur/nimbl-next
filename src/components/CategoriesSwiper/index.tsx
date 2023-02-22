import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from '@/styles/Home.module.scss'
import "swiper/css";

import img1 from '@/assets/dropdown/cryptonews.png'
import img2 from '@/assets/dropdown/eth.png'
import img3 from '@/assets/dropdown/p2e.png'
import img4 from '@/assets/dropdown/trending.png'
import RecomendationDropdown from '../RecomendationDropdown'

const imageArray = [
    [img1, 'Crypto News'],
    [img2, 'ETH NFTs'],
    [img3, 'Play2Earn'],
    [img4, 'Trending Videos'],
]

const CategoriesSwiper = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            centeredSlides={false}
            className={['mySwiper', styles.dropdowns].join(' ')}>
            {[...imageArray, ...imageArray].map(([img, title]) => (
                <SwiperSlide>
                    <RecomendationDropdown img={img} title={title} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CategoriesSwiper
