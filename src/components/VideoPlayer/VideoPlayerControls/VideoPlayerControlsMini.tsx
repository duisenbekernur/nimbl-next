import React, {FC} from 'react'

import pauseIcon from '@/assets/svg_icons/pause.svg'
import fullIcon from '@/assets/svg_icons/fullscreen.svg'
import playIcon from '@/assets/svg_icons/play.svg'
import endIcon from '@/assets/svg_icons/end.svg'
import volumeIcon from '@/assets/svg_icons/high_volume.svg'
import muteIcon from '@/assets/svg_icons/low_volume.svg'

import styles from '../VideoPlayer.module.scss'
import Image from 'next/image'

type VideoPlayerControlsMiniProps = {
    stop: boolean
    muted: boolean
    setMuted: (x: boolean) => void
    handleNextVideo: () => void
    togglePlay: () => void
    handleFullScreen: () => void
}

const VideoPlayerControlsMini: FC<VideoPlayerControlsMiniProps> = ({
    stop,
    handleFullScreen,
    togglePlay,
    handleNextVideo,
    setMuted,
    muted,
}) => {
    return (
        <div className={styles.player_mini}>
            <div className={styles.player_mini_left}>
                <Image src={stop ? playIcon : pauseIcon} alt="pause" onClick={togglePlay} />
                <Image src={endIcon} alt="pause" onClick={handleNextVideo} />
            </div>

            <div className={styles.player_mini_right}>
                <Image src={muted ? muteIcon : volumeIcon} alt="pause" onClick={() => setMuted(!muted)} />
                <Image src={fullIcon} alt="pause" onClick={handleFullScreen} />
            </div>
        </div>
    )
}

export default VideoPlayerControlsMini
