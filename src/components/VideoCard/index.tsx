import Image from 'next/image'
import styles from './VideoCard.module.scss'
import eyeImg from '../../assets/icons/eye.svg'
import clockImg from '../../assets/icons/clock.svg'
import {FC} from 'react'
import {videoCardType} from '@/types'

const VideoCard: FC<videoCardType> = ({
    // id,
    title,
    channel,
    price,
    avatar,
    poster,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_preview}>
                <div className={styles.img_wrap}>
                    <Image src={poster} fill alt="preview" />
                </div>
            </div>

            <div className={styles.card_header}>
                <div className={styles.channel_title}>
                    <Image src={avatar} width={30} height={30} alt="logo" />
                    <p>{channel}</p>
                </div>

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
