import Image from 'next/image'
import styles from './VideoCard.module.scss'
import previewImg from '../../assets/video/preview.svg'
import eyeImg from '../../assets/icons/eye.svg'
import clockImg from '../../assets/icons/clock.svg'
import channelImg from '../../assets/icons/channel-logo.svg'
import { FC, HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'
import { videoCardType } from '@/types'
import { clear, time } from 'console'

const VideoCard: FC<videoCardType> = ({
    // id,
    title,
    channel,
    price,
    avatar,
    poster,
}) => {
    const [isShow, setIsShow] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const attemptPlay = () => {
        setTimeout(()=> {
            try {
                videoRef &&
                videoRef.current!.play()
            } catch (error) {
                console.log(error);
            }
        }, 1500)
    }
    useEffect(() => {
        attemptPlay();
    })
    return (
        <div
            className={styles.card}
            onMouseEnter={() => setIsShow(true)}
            onMouseOut={() => setIsShow(false)}
        >
            <div className={styles.card__preview}>
                {!isShow ? (
                    <Image
                        src={poster}
                        width={300}
                        height={100}
                        alt="preview"
                    />
                ) : (
                    <video
                        ref = {videoRef}
                        src="./alb_numbers001_1080p_24fps.mp4"
                    ></video>
                )}
                <div className={styles.card__preview__bottom}>
                    <div className={styles.card__preview__bottom_title}>
                        <Image src={channelImg} alt="logo" />
                        <p>{channel}</p>
                    </div>

                    <div className={styles.card__preview__bottom_info}>
                        <h5>Floor Price:</h5>
                        <span>{price} NMBL</span>
                    </div>
                </div>
            </div>

            <div className={styles.card__info}>
                <h3>
                    {title.length > 40 ? `${title.substring(0, 40)}...` : title}
                </h3>

                <div className={styles.card__info_bottom}>
                    <div className={styles.views}>
                        <Image src={eyeImg} alt="views" />
                        <p>100 345</p>
                    </div>
                    <div className={styles.date}>
                        <Image src={clockImg} alt="date" />
                        <p>2 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
