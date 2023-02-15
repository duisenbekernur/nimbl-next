import Image from 'next/image'
import styles from './../VideoPlayer.module.scss'
import screenfull from 'screenfull'

import stopIcon from '@/assets/icons/stop.svg'
import channelIcon from '@/assets/avatar3.png'

import {FC, useRef} from 'react'
import ControlsBottom from './ControlsBottom'

type VideoPlayerControlsType = {
    handleNextVideo: () => void
    currentMinutes: number
    currentSeconds: number
    durationMinutes: number
    durationSeconds: number
    muted: boolean
    stop: boolean
    progress: string
    volumeProgress: string
    togglePlay: () => void
    setMuted: (x: boolean) => void
    setProgress: (x: string) => void
    setVolumeProgress: (x: string) => void
    setStop: (x: boolean) => void
    isControllersVisible: boolean
    handleFullScreen: () => void
    setIsFullScreen: (x: boolean) => void
    videoRef: React.RefObject<HTMLVideoElement>
    playerRef: React.RefObject<HTMLDivElement>
}

const VideoPlayerControls: FC<VideoPlayerControlsType> = ({
    handleNextVideo,
    currentMinutes,
    currentSeconds,
    durationMinutes,
    durationSeconds,
    muted,
    stop,
    progress,
    volumeProgress,
    togglePlay,
    setMuted,
    setProgress,
    setVolumeProgress,
    setStop,
    isControllersVisible,
    handleFullScreen,
    videoRef,
    playerRef,
    setIsFullScreen,
}) => {
    const handleKeyDown = (e: any) => {
        if (e.key === '27') {
            //@ts-ignore
            screenfull.toggle(playerRef.current)
            setIsFullScreen(false)
        }
    }

    return (
        <div onKeyDown={handleKeyDown}>
            <div
                className={styles.player_top_container}
                style={{
                    opacity: isControllersVisible ? '1' : '0',
                }}>
                <div
                    className={styles.player_top}
                    style={{
                        opacity: isControllersVisible ? '1' : '0',
                    }}>
                    {/* <div className={styles.player_top_title}>
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
                    </div> */}
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
                handleFullScreen={handleFullScreen}
                currentMinutes={currentMinutes}
                currentSeconds={currentSeconds}
                durationMinutes={durationMinutes}
                durationSeconds={durationSeconds}
                muted={muted}
                setMuted={setMuted}
                stop={stop}
                togglePlay={togglePlay}
                setProgress={setProgress}
                setVolumeProgress={setVolumeProgress}
                setStop={setStop}
                isControllersVisible={isControllersVisible}
                videoRef={videoRef}
                playerRef={playerRef}
                progress={progress}
                volumeProgress={volumeProgress}
                handleNextVideo={handleNextVideo}
            />

            {stop && (
                <div className={styles.pause_center}>
                    <Image width={30} height={30} src={stopIcon} alt="pause" onClick={togglePlay} />
                </div>
            )}
        </div>
    )
}

export default VideoPlayerControls
