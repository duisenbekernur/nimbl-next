import React from 'react'
import styles from './LaunchpadCard.module.scss'
import Image from 'next/image'
import card_play from '../../assets/play_button.svg'
import border_bottom from '../../assets/launchpad_corner_bottom.svg'
import border_top from '../../assets/launchpad_corner_top.svg'
import Sprite from '../Sprite/index'

const LaunchpadCard = () => {
    return <div className={`${styles.launchpad_card}`}>
        <div className={`${styles.card_video}`}>
            <Image className={`${styles.img}`} src={card_play} alt=""/>
        </div>
        <div className={`${styles.card_body}`}>
            <div className={`${styles.card_title}`}><h1>@BlueWard2</h1></div>
            <div className={`${styles.card_stat}`}>
                <div>
                    <div>
                        <Sprite id="community"/>
                    </div>
                </div>
                <div></div>
            </div>
            <div className={`${styles.card_text}`}></div>
            <div className={`${styles.card_info}`}></div>
        </div>
    </div>
}

export default LaunchpadCard
