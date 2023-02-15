import Image from 'next/image'
import styles from './../VideoPlayer.module.scss'
import screenfull from 'screenfull'

import stopIcon from '@/assets/icons/stop.svg'
import channelIcon from '@/assets/avatar3.png'
import viewIcon from '@/assets/icons/eye.svg'
import likeIcon from '@/assets/icons/like-solid.svg'

import {FC, useRef} from 'react'
import ControlsBottom from './ControlsBottom'

type VideoPlayerControlsType = {
    currentMinutes: number
    currentSeconds: number
    durationMinutes: number
    durationSeconds: number
    muted: boolean
    stop: boolean
    progress: string
    volumeProgress: string
    setMuted: (x: boolean) => void
    setProgress: (x: string) => void
    setVolumeProgress: (x: string) => void
    setStop: (x: boolean) => void
    isControllersVisible: boolean
    videoRef: React.RefObject<HTMLVideoElement>
}

const VideoPlayerControls: FC<VideoPlayerControlsType> = ({
    currentMinutes,
    currentSeconds,
    durationMinutes,
    durationSeconds,
    muted,
    stop,
    progress,
    volumeProgress,
    setMuted,
    setProgress,
    setVolumeProgress,
    setStop,
    isControllersVisible,
    videoRef,
}) => {
    return (
        <>
            <div
                className={styles.player_top_container}
                style={{
                    opacity: isControllersVisible ? '1' : '0',
                }}>
                <div className={styles.player_top_opacity}></div>
                <div
                    className={styles.player_top}
                    style={{
                        opacity: isControllersVisible ? '1' : '0',
                    }}>
                    <div className={styles.player_top_title}>
                        <h3>IGNORE THE FUD Binance CZ | AAVE Freezes Lending Markets | Polygon Solana NFT</h3>
                        <div>
                            <span>
                                <Image src={viewIcon} alt="view" />
                                100 345
                            </span>
                            <span>
                                <Image src={likeIcon} alt="like" />5 324
                            </span>
                        </div>
                    </div>
                    <div className={styles.player_top_channel}>
                        <div className={styles.player_top_channel_content}>
                            <h4>Helen_NFT</h4>
                            <p>245,511 members</p>
                        </div>
                        <Image src={channelIcon} alt="channel logo" />
                    </div>
                </div>
            </div>

            <ControlsBottom
                currentMinutes={currentMinutes}
                currentSeconds={currentSeconds}
                durationMinutes={durationMinutes}
                durationSeconds={durationSeconds}
                muted={muted}
                setMuted={setMuted}
                stop={stop}
                setProgress={setProgress}
                setVolumeProgress={setVolumeProgress}
                setStop={setStop}
                isControllersVisible={isControllersVisible}
                videoRef={videoRef}
                progress={progress}
                volumeProgress={volumeProgress}
            />

            {stop && (
                <div className={styles.pause_center}>
                    <Image width={30} height={30} src={stopIcon} alt="pause" />
                </div>
            )}
        </>
    )
}

export default VideoPlayerControls
