import Image from 'next/image'
import styles from './VideoCard.module.scss'

import previewImg from '../../assets/video/preview.svg'
import eyeImg from '../../assets/icons/eye.svg'
import clockImg from '../../assets/icons/clock.svg'
import channelImg from '../../assets/icons/channel-logo.svg'

const VideoCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__preview}>
                <Image src={previewImg} alt="preview" />
                <div className={styles.card__preview__bottom}>
                    <div className={styles.card__preview__bottom_title}>
                        <Image src={channelImg} alt="logo" />
                        <p>@BlueWard2</p>
                    </div>

                    <div className={styles.card__preview__bottom_info}>
                        <h5>Floor Price:</h5>
                        <span>140 NMBL</span>
                    </div>
                </div>
            </div>

            <div className={styles.card__info}>
                <h3>
                    Gary Vee Explains How He Made $90 Million on NFTs & Why
                    They...
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
