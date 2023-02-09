import Image from 'next/image'
import styles from './VideoCard.module.scss'
import eyeImg from '../../assets/icons/eye.svg'
import clockImg from '../../assets/icons/clock.svg'
import {FC, useState} from 'react'
import {videoCardType} from '@/types'
import Link from 'next/link'
import useSound from 'use-sound'

const VideoCard: FC<videoCardType> = ({
    // id,
    title,
    channel,
    price,
    avatar,
    poster,
}) => {
    const [isShow, setIsShow] = useState(false)
    const [videoSound, setVideoSound] = useState(false)
    const soundUrl = '/sounds/ui-click.mp3'

    const [play, {stop}] = useSound(soundUrl, {volume: 5})

    return (
        <div className={styles.card}>
            <div className={styles.card_preview}>
                <div className={styles.img_wrap}>
                    <Image src={poster} fill alt="preview" />
                </div>
            </div>

            <div className={styles.card_header}>
                <Link href="/channel/1" className={styles.channel_title} title="Go to the channel">
                    <Image src={avatar} width={30} height={30} alt="logo" />
                    <p>{channel}</p>
                </Link>

                <div className={styles.channel_price}>
                    <span>Floor Price:</span>
                    <span>{price} NMBL</span>
                </div>
            </div>

            <div className={styles.card_info}>
                <p className={styles.video_title}>{title}</p>

                <div className={styles.video_details}>
                    <div className={styles.details_item}>
                        <Image src={eyeImg} alt="views" />
                        <p>100 345</p>
                    </div>
                    <div className={styles.details_item}>
                        <Image src={clockImg} alt="date" />
                        <p>2 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
