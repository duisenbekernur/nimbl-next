import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import React, {useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import styles from '@/styles/Home.module.scss'

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
    const [ref] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
            '(min-width: 400px)': {
                slides: {perView: 2, spacing: 5},
            },
            '(min-width: 1000px)': {
                slides: {perView: 4, spacing: 15},
            },
        },
        slides: {perView: 1},
    })

    return (
        <div ref={ref} className="keen-slider">
            {[...imageArray, ...imageArray].map(([img, title]) => (
                <div className="keen-slider__slide number-slide1">
                    <RecomendationDropdown img={img} title={title} />
                </div>
            ))}
        </div>
    )
}

export default CategoriesSwiper
