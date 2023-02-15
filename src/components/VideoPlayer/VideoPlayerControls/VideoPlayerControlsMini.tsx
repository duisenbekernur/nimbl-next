import React, {FC} from 'react'

import pauseIcon from '@/assets/svg_icons/pause.svg'
import fullIcon from '@/assets/svg_icons/fullscreen.svg'
import playIcon from '@/assets/svg_icons/play.svg'

import styles from '../VideoPlayer.module.scss'
import Image from 'next/image'

type VideoPlayerControlsMiniProps = {
    stop: boolean
}

const VideoPlayerControlsMini: FC<VideoPlayerControlsMiniProps> = ({stop}) => {
    return (
        <div className={styles.player_mini}>
            <div className={styles.player_mini_left}>
                <Image src={pauseIcon} alt="pause" />
                <Image src={playIcon} alt="pause" />
            </div>

            <div className={styles.player_mini_right}>
                <Image src={fullIcon} alt="pause" />
            </div>
        </div>
    )
}

export default VideoPlayerControlsMini
